// Maintainer checks; never shipped as an adopter runtime.
export function withoutFences(source) {
  return source.replace(/^(`{3,}|~{3,})[^\n]*\n[\s\S]*?^\1\s*$/gm, "");
}

export function entryId(source) {
  return source.match(/^\|\s*Entry ID(?:\s*\/\s*date)?\s*\|\s*(LN-\d+)\b/im)?.[1] ?? null;
}

export function identityIssues(source) {
  const section = source.split(/^## Record identity\s*$/im)[1]?.split(/^## /m)[0] ?? "";
  const fields = [...section.matchAll(/^\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|/gm)]
    .map((m) => [m[1].toLowerCase().trim(), m[2].trim()]);
  const required = [
    ["entry ID", /^entry id/], ["date", /^(?:date|entry id \/ date)$/],
    ["opened/closed", /^opened \/ closed$/], ["project/phase", /^project \/ phase$/],
    ["author", /^authors?(?: \/ operator)?$/], ["operator", /^(?:operators?|author \/ operator)$/],
    ["observer", /^(?:independent observer|observer \/ witness)$/],
    ["witness", /^(?:witness|observer \/ witness)$/],
    ["environment/state", /^environment(?: \/ state)?$/],
    ["artifact location", /^(?:artifact location|handling \/ artifact location)$/],
    ["handling", /^(?:sensitivity \/ handling|handling \/ artifact location)$/],
    ["parent/correction", /^parent \/ correction target$/],
  ];
  const issues = required.filter(([,pattern]) => !fields.some(([key,value]) => pattern.test(key) && value))
    .map(([label]) => `missing identity ${label}`);
  if (!/^\|\s*Status\s*\|\s*\S|\*\*Record status:\*\*\s*\S/im.test(source)) issues.push("missing record status");
  if (!/^\|\s*Capture mode\s*\|\s*\S|\*\*Capture note:\*\*\s*\S/im.test(source)) issues.push("missing capture mode");
  if (!/reconstruction sources|capture note[^\n]*(?:sources|gaps)|capture note[\s\S]*?(?:reconstructed|synthesized)/i.test(source)) issues.push("missing reconstruction sources/gaps");
  return issues;
}

export function anchorIds(source, html = false) {
  const text = html ? source.replace(/<!--[\s\S]*?-->/g, "") : withoutFences(source);
  const explicit = [...text.matchAll(/\bid=["']([^"']+)["']/g)].map((m) => m[1]);
  if (html) return explicit;
  const seen = new Map();
  return explicit.concat([...text.matchAll(/^#{1,6}\s+(.+)$/gm)].map((m) => {
    const base = m[1].replace(/<[^>]*>/g, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .toLowerCase().replace(/[^\p{L}\p{N}_\-\s]/gu, "").replace(/\s/g, "-");
    const n = seen.get(base) ?? 0; seen.set(base, n + 1);
    return n ? `${base}-${n}` : base;
  }));
}

export function duplicateValues(values) {
  return [...new Set(values.filter((value,i) => values.indexOf(value) !== i))];
}

export function indexIssues(records, markdown, html) {
  const issues = [];
  const ids = records.map(({source}) => entryId(source));
  for (const id of duplicateValues(ids.filter(Boolean))) issues.push(`duplicate live entry ID ${id}`);
  if (ids.some((id) => !id)) issues.push("live record missing Entry ID");
  const count = records.length;
  const mdCount = Number(markdown.match(/\*\*Total live entries:\*\*\s*(\d+)/)?.[1]);
  const htmlCount = Number(html.match(/<strong>(\d+)<\/strong>\s*<span>Live records<\/span>/)?.[1]);
  if (mdCount !== count || htmlCount !== count) issues.push(`archive counts must equal ${count}`);
  const rows = [...html.matchAll(/<article\b[^>]*data-markdown=["']([^"']+)["'][^>]*>/g)].map((m) => m[1]);
  for (const row of duplicateValues(rows)) issues.push(`duplicate archive row ${row}`);
  for (const row of rows) if (!records.some(({name}) => name === row)) issues.push(`archive row has no live record ${row}`);
  for (const record of records) {
    if (!rows.includes(record.name)) issues.push(`missing archive row ${record.name}`);
    const mdRows = markdown.split("\n").filter((line) => line.startsWith("|") && line.includes(`](${record.name})`));
    if (mdRows.length !== 1 || !mdRows[0].includes(entryId(record.source))) issues.push(`Markdown index row/ID mismatch ${record.name}`);
  }
  return issues;
}
