import { spawnSync } from "node:child_process";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const image = "mcr.microsoft.com/playwright:v1.62.1-noble";
const uid = typeof process.getuid === "function" ? process.getuid() : 0;
const gid = typeof process.getgid === "function" ? process.getgid() : 0;
const command = [
  "npm ci",
  "npm run test:visual -- --update-snapshots",
  `chown -R ${uid}:${gid} tests/__screenshots__`,
].join(" && ");

const result = spawnSync("docker", [
  "run", "--rm", "--ipc=host",
  "-e", "HOME=/tmp",
  "-v", `${projectRoot}:/work`,
  "-v", "/work/node_modules",
  "-w", "/work",
  image,
  "/bin/bash", "-lc", command,
], { stdio: "inherit" });

if (result.error) throw result.error;
process.exitCode = result.status ?? 1;
