import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { extname, resolve, sep } from "node:path";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const portIndex = process.argv.indexOf("--port");
const port = Number(portIndex >= 0 ? process.argv[portIndex + 1] : 4173);
const host = "127.0.0.1";

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error(`Invalid test-server port: ${port}`);
}

const contentTypes = new Map([
  [".css", "text/css; charset=utf-8"],
  [".csv", "text/csv; charset=utf-8"],
  [".html", "text/html; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".md", "text/markdown; charset=utf-8"],
  [".mjs", "text/javascript; charset=utf-8"],
  [".png", "image/png"],
  [".svg", "image/svg+xml"],
  [".txt", "text/plain; charset=utf-8"],
]);

function send(response, status, body) {
  response.writeHead(status, {
    "cache-control": "no-store",
    "content-type": "text/plain; charset=utf-8",
  });
  response.end(body);
}

const server = createServer(async (request, response) => {
  try {
    const url = new URL(request.url ?? "/", `http://${host}:${port}`);
    let pathname = decodeURIComponent(url.pathname);
    if (pathname === "/") pathname = "/lab-journal/index.html";

    let target = resolve(projectRoot, `.${pathname}`);
    if (target !== projectRoot && !target.startsWith(`${projectRoot}${sep}`)) {
      send(response, 403, "Forbidden\n");
      return;
    }

    let info = await stat(target);
    if (info.isDirectory()) {
      target = resolve(target, "index.html");
      info = await stat(target);
    }
    if (!info.isFile()) {
      send(response, 404, "Not found\n");
      return;
    }

    response.writeHead(200, {
      "cache-control": "no-store",
      "content-length": info.size,
      "content-type": contentTypes.get(extname(target).toLowerCase()) ?? "application/octet-stream",
    });
    if (request.method === "HEAD") response.end();
    else createReadStream(target).pipe(response);
  } catch (error) {
    const code = error?.code === "ENOENT" ? 404 : 500;
    send(response, code, code === 404 ? "Not found\n" : "Server error\n");
  }
});

server.listen(port, host, () => {
  console.log(`Lab journal test server: http://${host}:${port}`);
});

for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => server.close(() => process.exit(0)));
}
