import { expect, test } from "@playwright/test";
import { archive, desktopViewport, openNotebookPage, plates } from "./notebook-pages.mjs";

const experiment = plates.find(({ name }) => name === "experiment");
const mobile = { width: 320, height: 568 };

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
  await expect(region).toHaveScreenshot("artifact-table-mobile.png");
});

test("plate desktop composition", async ({ page }) => {
  await openNotebookPage(page, experiment, desktopViewport);
  await expect(page).toHaveScreenshot("plate-desktop.png");
});
