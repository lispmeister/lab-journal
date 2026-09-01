export const archive = {
  name: "archive",
  path: "/lab-journal/index.html",
  kind: "archive",
};

export const starterArchive = {
  name: "clean starter archive",
  path: "/starter-kit/lab-journal/index.html",
  kind: "starter-archive",
};

export const plates = [
  { name: "template", path: "/lab-journal/PLATE-TEMPLATE.html", kind: "plate" },
  { name: "live", path: "/lab-journal/journal-2026-08-29-beautify-all-the-journals.html", kind: "plate" },
  { name: "experiment", path: "/lab-journal/examples/2026-08-30-reply-before-close.html", kind: "plate" },
  { name: "correction", path: "/lab-journal/examples/2026-09-04-timeout-was-witness.html", kind: "plate" },
];

export const notebookPages = [archive, ...plates];

export const portraitViewports = [320, 360, 375, 390, 430].map((width) => ({
  name: `${width}x700`,
  width,
  height: 700,
}));

export const landscapeViewports = [
  { name: "667x375", width: 667, height: 375 },
  { name: "844x390", width: 844, height: 390 },
];

export const desktopViewport = { name: "1440x900", width: 1440, height: 900 };

export async function openNotebookPage(page, definition, viewport) {
  await page.setViewportSize(viewport);
  const response = await page.goto(definition.path);
  if (!response?.ok()) throw new Error(`${definition.path} returned ${response?.status() ?? "no response"}`);
  await page.locator("main").waitFor();
}
