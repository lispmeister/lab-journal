import { expect, test } from "@playwright/test";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { desktopViewport, openNotebookPage, starterArchive } from "./notebook-pages.mjs";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const starterFileUrl = pathToFileURL(join(projectRoot, "starter-kit", "lab-journal", "index.html")).href;
const mobile = { width: 320, height: 700 };

for (const viewport of [mobile, desktopViewport]) {
  test(`clean starter archive is usable at ${viewport.width}px`, async ({ page }) => {
    await openNotebookPage(page, starterArchive, viewport);
    await expect(page.getByRole("heading", { name: "The record remembers changing minds." })).toBeVisible();
    await expect(page.getByText("No live entries yet")).toBeVisible();
    await expect(page.locator("[data-catalog-row]")).toHaveCount(0);

    const geometry = await page.evaluate(() => ({
      overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      titleSize: Number.parseFloat(getComputedStyle(document.querySelector("h1")).fontSize),
    }));
    expect(geometry.overflow).toBeLessThanOrEqual(1);
    expect(geometry.titleSize).toBeLessThanOrEqual(viewport.width <= 430 ? 26 : 30);
  });
}

test("clean starter opens directly from disk with local assets", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: mobile });
  const page = await context.newPage();
  const requests = [];
  const errors = [];
  page.on("request", (request) => requests.push(new URL(request.url())));
  page.on("pageerror", (error) => errors.push(error.message));

  await page.goto(starterFileUrl);
  await expect(page.locator("main")).toBeVisible();
  await expect(page.getByText("No live entries yet")).toBeVisible();
  expect(errors).toEqual([]);
  expect(requests.length).toBeGreaterThan(1);
  expect(requests.every((url) => url.protocol === "file:")).toBe(true);

  const presentation = await page.evaluate(() => ({
    overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
    bodyFont: getComputedStyle(document.body).fontFamily,
    background: getComputedStyle(document.body).backgroundColor,
  }));
  expect(presentation.overflow).toBeLessThanOrEqual(1);
  expect(presentation.bodyFont).not.toBe("");
  expect(presentation.background).not.toBe("rgba(0, 0, 0, 0)");
  await context.close();
});
