import { expect, test } from "@playwright/test";
import { archive, desktopViewport, openNotebookPage, plates } from "./notebook-pages.mjs";

const experiment = plates.find(({ name }) => name === "experiment");
const mobile = { width: 320, height: 568 };
// Component captures omit fixed page chrome that would cover a stitched region.
const componentCapture = { stylePath: new URL("./component-capture.css", import.meta.url).pathname };

test("archive mobile composition", async ({ page }) => {
  await openNotebookPage(page, archive, mobile);
  await expect(page).toHaveScreenshot("archive-mobile.png");
});

test("plate mobile identity composition", async ({ page }) => {
  await openNotebookPage(page, experiment, mobile);
  await expect(page).toHaveScreenshot("plate-mobile.png");
});

test("mobile artifact table discloses contained scrolling", async ({ page }) => {
  await openNotebookPage(page, experiment, mobile);
  const region = page.getByRole("region", { name: "Artifact table; scroll horizontally on narrow screens" });
  await expect(region).toHaveScreenshot("artifact-table-mobile.png", componentCapture);
});

test("plate desktop composition", async ({ page }) => {
  await openNotebookPage(page, experiment, desktopViewport);
  await expect(page).toHaveScreenshot("plate-desktop.png");
});

test("mobile experiment diagrams retain readable evidence", async ({ page }) => {
  await openNotebookPage(page, experiment, mobile);
  await expect(page.locator("#sketches")).toHaveScreenshot("experiment-diagrams-mobile.png", componentCapture);
});

test("correction diagram presents the changed boundary", async ({ page }) => {
  await openNotebookPage(page, plates.find(({ name }) => name === "correction"), desktopViewport);
  await expect(page.locator("#diff")).toHaveScreenshot("correction-diagram-desktop.png", componentCapture);
});

test("template identity includes full provenance on mobile", async ({ page }) => {
  await openNotebookPage(page, plates.find(({ name }) => name === "template"), mobile);
  await expect(page.locator("#identity")).toHaveScreenshot("template-identity-mobile.png", componentCapture);
});
