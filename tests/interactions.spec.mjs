import { expect, test } from "@playwright/test";
import { archive, openNotebookPage, plates, starterArchive } from "./notebook-pages.mjs";

const mobile = { width: 320, height: 700 };
const experiment = plates.find(({ name }) => name === "experiment");

test("archive search filters the catalog", async ({ page }) => {
  await openNotebookPage(page, archive, mobile);
  await page.getByRole("searchbox", { name: "Filter notebook entries" }).fill("LN-0001");

  await expect(page.locator("[data-catalog-row]:visible")).toHaveCount(1);
  await expect(page.locator("[data-catalog-row]:visible")).toContainText("LN–0001");
  await expect(page.locator(".empty-search")).toBeHidden();
});

for (const definition of [archive, starterArchive]) {
  test(`${definition.name} mobile focus follows visual reading order`, async ({ page }) => {
    await openNotebookPage(page, definition, mobile);
    const positions = await page.locator("main a[href], main input, main button").evaluateAll((elements) =>
      elements
        .filter((element) => !element.disabled && element.getClientRects().length)
        .map((element) => ({
          label: element.getAttribute("aria-label") || element.textContent.trim(),
          top: element.getBoundingClientRect().top,
        })),
    );

    for (let index = 1; index < positions.length; index += 1) {
      expect(
        positions[index].top,
        `${positions[index].label} must not focus above ${positions[index - 1].label}`,
      ).toBeGreaterThanOrEqual(positions[index - 1].top - 1);
    }
  });
}

test("every reading lens exposes only its declared layers", async ({ page }) => {
  await openNotebookPage(page, experiment, mobile);

  for (const name of ["Bench record", "Synthesis", "Visual plate"]) {
    await page.getByRole("button", { name }).click();
    const state = await page.evaluate(() => {
      const active = document.querySelector('.lens-button[aria-pressed="true"]')?.dataset.layerFilter;
      const layers = [...document.querySelectorAll("[data-record-layer]")].map((element) => ({
        declared: element.dataset.recordLayer.split(/\s+/),
        hidden: element.hidden,
      }));
      return {
        active,
        allMatchingVisible: layers.filter(({ declared }) => declared.includes(active)).every(({ hidden }) => !hidden),
        allOthersHidden: layers.filter(({ declared }) => !declared.includes(active)).every(({ hidden }) => hidden),
      };
    });
    expect(state.active).toBe(name === "Bench record" ? "bench" : name === "Synthesis" ? "synthesis" : "plate");
    expect(state.allMatchingVisible).toBe(true);
    expect(state.allOthersHidden).toBe(true);
  }

  await page.getByRole("button", { name: "All layers" }).click();
  await expect(page.locator("[data-record-layer][hidden]")).toHaveCount(0);
});

test("mobile evidence jump lands on the bench record", async ({ page }) => {
  await openNotebookPage(page, experiment, mobile);
  await page.getByRole("link", { name: "Jump to first observation" }).click();
  await expect(page).toHaveURL(/#bench$/);
  await expect.poll(
    () => page.locator("#bench").evaluate((element) => element.getBoundingClientRect().top),
  ).toBeLessThan(100);
  const benchTop = await page.locator("#bench").evaluate((element) => element.getBoundingClientRect().top);
  expect(benchTop).toBeGreaterThanOrEqual(0);
});

test("wide evidence table is keyboard-focusable and scrollable", async ({ page }) => {
  await openNotebookPage(page, experiment, mobile);
  const region = page.getByRole("region", { name: "Artifact table; scroll horizontally on narrow screens" });
  await region.focus();
  await expect(region).toBeFocused();
  await region.press("ArrowRight");
  await expect.poll(() => region.evaluate((element) => element.scrollLeft)).toBeGreaterThan(0);
});

test("published pages request local resources only", async ({ page }) => {
  const requests = [];
  page.on("request", (request) => requests.push(new URL(request.url())));
  await openNotebookPage(page, experiment, mobile);
  expect(requests.length).toBeGreaterThan(0);
  expect(requests.every((url) => url.origin === "http://127.0.0.1:4173")).toBe(true);
});

test("record remains complete when JavaScript is disabled", async ({ browser }) => {
  const context = await browser.newContext({
    baseURL: "http://127.0.0.1:4173",
    javaScriptEnabled: false,
    viewport: mobile,
  });
  const page = await context.newPage();
  await page.goto(experiment.path);

  expect(await page.locator("[data-record-layer]").count()).toBeGreaterThanOrEqual(8);
  await expect(page.locator("[data-record-layer][hidden]")).toHaveCount(0);
  await expect(page.getByRole("link", { name: "Jump to first observation" })).toBeVisible();
  await context.close();
});
