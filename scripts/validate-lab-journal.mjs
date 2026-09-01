import { readdir, readFile, stat } from "node:fs/promises";
import { basename, dirname, extname, join, normalize, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const journalRoot = join(projectRoot, "lab-journal");
const failures = [];
const htmlFiles = [];
const markdownFiles = [];

async function walk(directory) {
  for (const name of await readdir(directory)) {
    const path = join(directory, name);
    const info = await stat(path);
    if (info.isDirectory()) await walk(path);
    else if (extname(name) === ".html") htmlFiles.push(path);
    else if (extname(name) === ".md") markdownFiles.push(path);
  }
}

async function exists(path) {
  try { await stat(path); return true; } catch { return false; }
}

function displayPath(path) {
  return normalize(relative(projectRoot, path));
}

function openingTags(html) {
  return [...html.matchAll(/<[a-z][^>]*>/gi)].map((match) => match[0]);
}

function attribute(tag, name) {
  const match = tag.match(new RegExp(`\\s${name}\\s*=\\s*(["'])(.*?)\\1`, "i"));
  return match?.[2] ?? null;
}

function hasClass(tag, name) {
  return (attribute(tag, "class") ?? "").split(/\s+/).includes(name);
}

function localTarget(raw, source) {
  const value = raw.split("#")[0].split("?")[0];
  if (!value || /^(?:https?:|mailto:|tel:|data:|javascript:)/i.test(value)) return null;
  if (value.startsWith("/")) {
    failures.push(`${displayPath(source)}: absolute local path is not portable: ${raw}`);
    return null;
  }
  return normalize(resolve(dirname(source), decodeURIComponent(value)));
}

async function checkLocalRefs(source, refs) {
  for (const ref of refs) {
    const target = localTarget(ref, source);
    if (target && !(await exists(target))) failures.push(`${displayPath(source)}: missing local target ${ref}`);
  }
}

await walk(journalRoot);

for (const htmlFile of htmlFiles) {
  const rel = relative(journalRoot, htmlFile);
  const html = await readFile(htmlFile, "utf8");
  const required = [
    [/^<!doctype html>/i, "HTML doctype"],
    [/<meta\s+name=["']viewport["']/i, "viewport metadata"],
    [/<title>[^<]+<\/title>/i, "document title"],
    [/<main(?:\s|>)/i, "main landmark"],
  ];
  for (const [pattern, label] of required) {
    if (!pattern.test(html)) failures.push(`${displayPath(htmlFile)}: missing ${label}`);
  }

  if (/<(?:script|img|source|video|audio)\b[^>]*\bsrc=["']https?:|<link\b[^>]*\bhref=["']https?:/i.test(html)) {
    failures.push(`${displayPath(htmlFile)}: remote runtime or media dependency violates offline contract`);
  }

  const refs = [...html.matchAll(/\b(?:href|src)=["']([^"']+)["']/gi)].map((match) => match[1]);
  await checkLocalRefs(htmlFile, refs);

  for (const [index, match] of [...html.matchAll(/<svg\b[\s\S]*?<\/svg>/gi)].entries()) {
    if (!/<title(?:\s|>)/i.test(match[0]) || !/<desc(?:\s|>)/i.test(match[0])) {
      failures.push(`${displayPath(htmlFile)}: inline SVG ${index + 1} needs both <title> and <desc>`);
    }
  }

  const isPlate = /^journal-.*\.html$/.test(basename(htmlFile)) || rel.startsWith(`examples${process.platform === "win32" ? "\\" : "/"}`);
  if (isPlate) {
    const sourceMatch = html.match(/class=["'][^"']*source-link[^"']*["'][^>]*href=["']([^"']+\.md)["']/i);
    if (!sourceMatch) {
      failures.push(`${displayPath(htmlFile)}: entry plate has no .source-link to Markdown`);
    } else {
      const expected = htmlFile.replace(/\.html$/, ".md");
      const actual = localTarget(sourceMatch[1], htmlFile);
      if (actual !== expected) failures.push(`${displayPath(htmlFile)}: source link must use the same basename`);
    }
  }

  if (/data-layer-filter=/i.test(html)) {
    for (const layer of ["all", "bench", "synthesis", "plate"]) {
      if (!new RegExp(`data-layer-filter=["']${layer}["']`, "i").test(html)) {
        failures.push(`${displayPath(htmlFile)}: layered plate is missing the ${layer} reading lens`);
      }
    }
    const anatomy = [
      [/Record identity/i, "record identity"],
      [/Artifact manifest/i, "artifact manifest"],
      [/(?:Open question|Question ledger)/i, "question ledger"],
      [/id=["']closure["']/i, "closure"],
      [/data-record-layer=/i, "record-layer annotations"],
    ];
    for (const [pattern, label] of anatomy) {
      if (!pattern.test(html)) failures.push(`${displayPath(htmlFile)}: layered plate is missing ${label}`);
    }

    const tags = openingTags(html);
    const evidenceJump = tags.find((tag) => /^<a\b/i.test(tag) && hasClass(tag, "jump-evidence"));
    if (!evidenceJump) {
      failures.push(`${displayPath(htmlFile)}: layered plate is missing the .jump-evidence link`);
    } else if (attribute(evidenceJump, "href") !== "#bench") {
      failures.push(`${displayPath(htmlFile)}: .jump-evidence must link to #bench`);
    }
    if (!/\bid=["']bench["']/i.test(html)) {
      failures.push(`${displayPath(htmlFile)}: layered plate has no #bench target`);
    }

    const scrollRegions = tags.filter((tag) => hasClass(tag, "scroll-x"));
    if (!scrollRegions.length) {
      failures.push(`${displayPath(htmlFile)}: layered plate has no declared .scroll-x evidence region`);
    }
    for (const [index, tag] of scrollRegions.entries()) {
      const label = attribute(tag, "aria-label");
      if (!hasClass(tag, "matrix-wrap")) {
        failures.push(`${displayPath(htmlFile)}: scroll region ${index + 1} must also use .matrix-wrap`);
      }
      if (attribute(tag, "role") !== "region") {
        failures.push(`${displayPath(htmlFile)}: scroll region ${index + 1} must use role="region"`);
      }
      if (attribute(tag, "tabindex") !== "0") {
        failures.push(`${displayPath(htmlFile)}: scroll region ${index + 1} must use tabindex="0"`);
      }
      if (!label?.trim()) {
        failures.push(`${displayPath(htmlFile)}: scroll region ${index + 1} needs a non-empty aria-label`);
      }
    }
  }
}

for (const markdownFile of markdownFiles) {
  const markdown = await readFile(markdownFile, "utf8");
  const refs = [...markdown.matchAll(/\]\(([^)\s]+)(?:\s+["'][^"']*["'])?\)/g)].map((match) => match[1]);
  await checkLocalRefs(markdownFile, refs);
}

const requiredTemplateSections = [
  "Record identity", "Question and success criterion", "Fast field notes",
  "Bench record", "Hypothesis and measurement ledger", "Thinking sketches",
  "Synthesis", "Decisions and rejected paths", "Artifact manifest",
  "Open-question ledger", "Correction ledger", "Closure",
];
const template = await readFile(join(journalRoot, "TEMPLATE.md"), "utf8");
for (const heading of requiredTemplateSections) {
  if (!new RegExp(`^## ${heading}`, "im").test(template)) failures.push(`lab-journal/TEMPLATE.md: missing ${heading}`);
}

const layeredMarkdown = markdownFiles.filter((path) => {
  const name = basename(path);
  return /^journal-.*\.md$/.test(name) || dirname(path) === join(journalRoot, "examples");
});
for (const markdownFile of layeredMarkdown) {
  const markdown = await readFile(markdownFile, "utf8");
  const anatomy = [
    [/Entry ID/i, "Entry ID"],
    [/(?:Reconstruction|Capture note)/i, "reconstruction disclosure"],
    [/^## Bench record/im, "Bench record"],
    [/^## Artifact manifest/im, "Artifact manifest"],
    [/^## (?:Open questions|Open-question ledger|Question ledger)/im, "question ledger"],
    [/^## (?:Correction ledger|Corrections and later annotations)/im, "correction ledger"],
    [/^## Closure/im, "Closure"],
  ];
  for (const [pattern, label] of anatomy) {
    if (!pattern.test(markdown)) failures.push(`${displayPath(markdownFile)}: canonical record is missing ${label}`);
  }
}

for (const asset of [join(journalRoot, "assets", "notebook.css"), join(journalRoot, "assets", "notebook.js")]) {
  const source = await readFile(asset, "utf8");
  if (/(?:@import\s+|url\(|fetch\s*\()[^\n]*(?:https?:)?\/\//i.test(source)) {
    failures.push(`${displayPath(asset)}: network dependency violates offline contract`);
  }
}

const htmlIndexPath = join(journalRoot, "index.html");
const markdownIndexPath = join(journalRoot, "index.md");
const htmlIndex = await readFile(htmlIndexPath, "utf8");
const markdownIndex = await readFile(markdownIndexPath, "utf8");
const indexedMarkdown = new Set();
for (const row of htmlIndex.matchAll(/<article\s+class=["'][^"']*catalog-row[^"']*["'][^>]*data-markdown=["']([^"']+)["'][^>]*>([\s\S]*?)<\/article>/gi)) {
  const markdown = row[1];
  indexedMarkdown.add(normalize(markdown));
  if (!row[2].includes(`href="${markdown}"`) && !row[2].includes(`href='${markdown}'`)) {
    failures.push(`lab-journal/index.html: catalog row does not link declared Markdown ${markdown}`);
  }
}

const liveMarkdown = markdownFiles.filter((path) => dirname(path) === journalRoot && /^journal-.*\.md$/.test(basename(path)));
for (const markdownFile of liveMarkdown) {
  const name = basename(markdownFile);
  if (!indexedMarkdown.has(name)) failures.push(`lab-journal/index.html: missing catalog row for ${name}`);
  if (!markdownIndex.includes(`(${name})`)) failures.push(`lab-journal/index.md: missing link for ${name}`);
  const plateName = name.replace(/\.md$/, ".html");
  if (await exists(join(journalRoot, plateName))) {
    if (!htmlIndex.includes(`href="${plateName}"`) && !htmlIndex.includes(`href='${plateName}'`)) failures.push(`lab-journal/index.html: missing plate link for ${plateName}`);
    if (!markdownIndex.includes(`(${plateName})`)) failures.push(`lab-journal/index.md: missing plate link for ${plateName}`);
  }
}

if (failures.length) {
  console.error(`Lab journal validation failed (${failures.length}):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log(`Lab journal validation passed: ${liveMarkdown.length} live record, ${htmlFiles.length - 2} entry/example plates, all indexes and offline dependencies intact.`);
}
