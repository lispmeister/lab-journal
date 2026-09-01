import { readdir, readFile, stat } from "node:fs/promises";
import { basename, dirname, extname, join, normalize, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const liveRoot = join(projectRoot, "lab-journal");
const starterRoot = join(projectRoot, "starter-kit", "lab-journal");
const adapterRoot = join(projectRoot, "starter-kit", "agent-instructions");
const skillRoot = join(projectRoot, "skills", "lab-journal");
const skillAssetRoot = join(skillRoot, "assets", "starter-kit");
const failures = [];

const sharedFiles = [
  "AUTHORING.md",
  "TEMPLATE.md",
  "PLATE-TEMPLATE.html",
  "assets/notebook.css",
  "assets/notebook.js",
  "examples/2026-08-30-reply-before-close.html",
  "examples/2026-08-30-reply-before-close.md",
  "examples/2026-09-04-timeout-was-witness.html",
  "examples/2026-09-04-timeout-was-witness.md",
  "attachments/2026-08-30-stop-ordering.csv",
  "attachments/2026-08-30-stop-trace.txt",
  "attachments/2026-09-04-external-observer.csv",
];

async function exists(path) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

async function walk(directory) {
  const files = [];
  for (const name of await readdir(directory)) {
    if (name === ".DS_Store") continue;
    const path = join(directory, name);
    const info = await stat(path);
    if (info.isDirectory()) files.push(...await walk(path));
    else files.push(path);
  }
  return files;
}

function shown(path) {
  return normalize(relative(projectRoot, path));
}

async function sameFile(left, right, label) {
  if (!(await exists(left)) || !(await exists(right))) {
    failures.push(`${label}: missing ${!(await exists(left)) ? shown(left) : shown(right)}`);
    return;
  }
  const [leftBytes, rightBytes] = await Promise.all([readFile(left), readFile(right)]);
  if (!leftBytes.equals(rightBytes)) failures.push(`${label}: content drift between ${shown(left)} and ${shown(right)}`);
}

for (const relativePath of sharedFiles) {
  await sameFile(
    join(liveRoot, relativePath),
    join(starterRoot, relativePath),
    "starter parity",
  );
}

const starterBundleRoot = join(projectRoot, "starter-kit");
const starterFiles = (await walk(starterBundleRoot)).map((path) => normalize(relative(starterBundleRoot, path))).sort();
const skillFiles = (await walk(skillAssetRoot)).map((path) => normalize(relative(skillAssetRoot, path))).sort();
if (JSON.stringify(starterFiles) !== JSON.stringify(skillFiles)) {
  failures.push("skill assets: file set differs from starter-kit; run npm run sync:distribution");
} else {
  for (const relativePath of starterFiles) {
    await sameFile(
      join(starterBundleRoot, relativePath),
      join(skillAssetRoot, relativePath),
      "skill asset parity",
    );
  }
}

for (const forbidden of ["package.json", "package-lock.json", "playwright.config.mjs", "scripts", "tests", ".github"]) {
  if (await exists(join(starterBundleRoot, forbidden))) {
    failures.push(`starter-kit: authoring infrastructure must not include ${forbidden}`);
  }
}

const portableInstructionPaths = [
  join(starterRoot, "AUTHORING.md"),
  join(adapterRoot, "AGENTS.md"),
  join(adapterRoot, "CLAUDE.md"),
  join(adapterRoot, "GENERIC.md"),
  join(skillRoot, "SKILL.md"),
];
const executableGate = /(?:^|\s)(?:npm|npx|pnpm|yarn)\s+(?:ci|install|test|run)|node\s+scripts\/|playwright\s+(?:test|install)|validate-lab-journal\.mjs|test:browsers:install/im;
for (const path of portableInstructionPaths) {
  const source = await readFile(path, "utf8");
  if (executableGate.test(source)) failures.push(`${shown(path)}: portable instructions contain a maintainer/tooling command`);
}

const liveStarterRecords = (await readdir(starterRoot)).filter((name) => /^journal-.*\.(?:md|html)$/.test(name));
if (liveStarterRecords.length) failures.push(`starter-kit: expected zero live records, found ${liveStarterRecords.join(", ")}`);

const starterIndexMarkdown = await readFile(join(starterRoot, "index.md"), "utf8");
const starterIndexHtml = await readFile(join(starterRoot, "index.html"), "utf8");
if (!/\*\*Total live entries:\*\* 0/.test(starterIndexMarkdown)) failures.push("starter-kit/lab-journal/index.md: live count is not zero");
if (/data-markdown=/i.test(starterIndexHtml)) failures.push("starter-kit/lab-journal/index.html: clean index contains a live catalog row");

function localTarget(raw, source) {
  const value = raw.split("#")[0].split("?")[0];
  if (!value || /^(?:https?:|mailto:|tel:|data:|javascript:)/i.test(value)) return null;
  if (value.startsWith("/")) {
    failures.push(`${shown(source)}: absolute local path is not portable: ${raw}`);
    return null;
  }
  return resolve(dirname(source), decodeURIComponent(value));
}

for (const sourcePath of await walk(starterRoot)) {
  const extension = extname(sourcePath);
  if (extension !== ".md" && extension !== ".html") continue;
  const source = await readFile(sourcePath, "utf8");
  const refs = extension === ".html"
    ? [...source.matchAll(/\b(?:href|src)=["']([^"']+)["']/gi)].map((match) => match[1])
    : [...source.matchAll(/\]\(([^)\s]+)(?:\s+["'][^"']*["'])?\)/g)].map((match) => match[1]);
  for (const ref of refs) {
    const target = localTarget(ref, sourcePath);
    if (target && !(await exists(target))) failures.push(`${shown(sourcePath)}: missing local target ${ref}`);
  }
}

const skillSource = await readFile(join(skillRoot, "SKILL.md"), "utf8");
if (!/^---\n[\s\S]*?\n---\n/.test(skillSource)) failures.push("skills/lab-journal/SKILL.md: missing YAML frontmatter");
if (await exists(join(skillRoot, "scripts"))) failures.push("skills/lab-journal: script-free skill unexpectedly contains scripts/");

if (failures.length) {
  console.error(`Distribution validation failed (${failures.length}):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log(`Distribution validation passed: ${starterFiles.length} static starter files, zero live entries, no authoring toolchain.`);
}
