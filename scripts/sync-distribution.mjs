import { copyFile, cp, mkdir, rm } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { sharedFiles } from "./distribution-files.mjs";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const liveRoot = join(projectRoot, "lab-journal");
const starterRoot = join(projectRoot, "starter-kit", "lab-journal");
const skillAssetRoot = join(projectRoot, "skills", "lab-journal", "assets", "starter-kit");

await copyFile(join(projectRoot, "LICENSE"), join(starterRoot, "LICENSE"));
await copyFile(join(projectRoot, "LICENSE"), join(projectRoot, "skills", "lab-journal", "LICENSE"));

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
