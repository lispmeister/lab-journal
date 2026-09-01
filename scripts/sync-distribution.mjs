import { copyFile, cp, mkdir, rm } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const liveRoot = join(projectRoot, "lab-journal");
const starterRoot = join(projectRoot, "starter-kit", "lab-journal");
const skillAssetRoot = join(projectRoot, "skills", "lab-journal", "assets", "starter-kit");

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

for (const relativePath of sharedFiles) {
  const destination = join(starterRoot, relativePath);
  await mkdir(dirname(destination), { recursive: true });
  await copyFile(join(liveRoot, relativePath), destination);
}

await rm(skillAssetRoot, { recursive: true, force: true });
await mkdir(skillAssetRoot, { recursive: true });
await cp(starterRoot, join(skillAssetRoot, "lab-journal"), { recursive: true });
await cp(
  join(projectRoot, "starter-kit", "agent-instructions"),
  join(skillAssetRoot, "agent-instructions"),
  { recursive: true },
);

console.log(`Synchronized ${sharedFiles.length} shared files and the skill's clean starter assets.`);
