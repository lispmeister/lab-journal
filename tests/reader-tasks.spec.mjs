import { expect, test } from "@playwright/test";
import { readFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";

const experiment = "/lab-journal/examples/2026-08-30-reply-before-close.html";
const correction = "/lab-journal/examples/2026-09-04-timeout-was-witness.html";
const surfaces = [experiment, correction, "/lab-journal/PLATE-TEMPLATE.html"];

for (const path of surfaces) {
  test(`${path}: every contents link works from every lens`, async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(path);
    const hrefs = await page.locator(".contents a").evaluateAll((links) => links.map((a) => a.getAttribute("href")));
    for (const lens of ["bench", "synthesis", "plate"]) {
      for (const href of hrefs) {
        await page.locator(`[data-layer-filter="${lens}"]`).click();
        await page.locator(`.contents a[href="${href}"]`).click();
        const target = page.locator(href);
        await expect(target).toBeVisible();
        await expect(target).toBeFocused();
        await expect.poll(() => target.evaluate((e) => e.getBoundingClientRect().top)).toBeGreaterThanOrEqual(0);
      }
    }
  });
}

test("stable references reveal observations, and correction notices survive every lens", async ({ page }) => {
  await page.goto(experiment);
  for (const lens of ["all", "bench", "synthesis", "plate"]) {
    await page.locator(`[data-layer-filter="${lens}"]`).click();
    await expect(page.getByRole("complementary", { name: "Later correction" })).toBeVisible();
    await expect(page.getByRole("complementary", { name: "Specimen provenance" })).toBeVisible();
  }
  await page.locator('#F-0248-01 a[href="#OBS-0248.01"]').first().click();
  await expect(page.locator('[id="OBS-0248.01"]')).toBeVisible();
  await page.getByRole("complementary", { name: "Later correction" }).getByRole("link").first().click();
  await expect(page.locator("#COR-0249-01")).toBeVisible();
  await page.reload();
  await expect(page.locator("#COR-0249-01")).toBeVisible();
});

test("author and multi-term searches find real records; print restores the archive", async ({ page }) => {
  await page.goto("/lab-journal/index.html");
  const count = await page.locator("[data-catalog-row]").count();
  await page.getByRole("searchbox").fill("Codex");
  await expect(page.locator("[data-catalog-row]:visible")).toHaveCount(count);
  await page.getByRole("searchbox").fill("Codex LN-0001");
  await expect(page.locator("[data-catalog-row]:visible")).toHaveCount(1);
  await expect(page.locator("[data-search-status]")).toHaveText(`1 of ${count} records shown`);
  await page.emulateMedia({ media: "print" });
  await expect(page.locator("[data-catalog-row]:visible")).toHaveCount(count);
  await expect(page.locator(".empty-search")).toBeHidden();
  await page.emulateMedia({ media: "screen" });
  await expect(page.locator("[data-catalog-row]:visible")).toHaveCount(1);
  await page.getByRole("searchbox").fill("missing-query");
  await expect(page.locator(".empty-search")).toBeVisible();
  await page.emulateMedia({ media: "print" });
  await expect(page.locator("[data-catalog-row]:visible")).toHaveCount(count);
  await expect(page.locator(".empty-search")).toBeHidden();
});

test("research lenses lead to live ledgers, not specimens", async ({ page }) => {
  await page.goto("/lab-journal/index.html");
  for (const id of ["people", "systems", "questions", "corrections"]) {
    await page.locator(`.archive-lenses a[href="#${id}"]`).click();
    await expect(page.locator(`#${id}`)).toBeVisible();
  }
  const links = await page.locator(".research-index a").evaluateAll((as) => as.map((a) => a.getAttribute("href")));
  expect(links.every((href) => !href.includes("examples/"))).toBe(true);
});

test("direct-file links and browser history reveal targets", async ({ page }) => {
  await page.goto(pathToFileURL(resolve(`.${experiment}`)).href);
  await page.locator('[data-layer-filter="synthesis"]').click();
  await page.locator('.contents a[href="#bench"]').click();
  await expect(page.locator("#bench")).toBeVisible();
  await page.locator('.contents a[href="#sketches"]').click();
  await page.locator('[data-layer-filter="synthesis"]').click();
  await page.goBack();
  await expect(page.locator("#bench")).toBeVisible();
  await expect(page.locator("#bench")).toBeFocused();
});

for (const path of surfaces) {
  test(`${path}: published fragment links resolve uniquely`, async ({ page }) => {
    await page.goto(path);
    const invalid = await page.evaluate(() => {
      const ids = [...document.querySelectorAll("[id]")].map((e) => e.id);
      return [...document.querySelectorAll('a[href^="#"]')]
        .map((a) => a.getAttribute("href").slice(1)).filter(Boolean)
        .filter((id) => ids.filter((value) => value === decodeURIComponent(id)).length !== 1);
    });
    expect(invalid).toEqual([]);
  });
}

for (const path of [experiment, correction]) {
  test(`${path}: evidence labels remain readable across phone, desktop and print`, async ({ page }) => {
    await page.goto(path);
    for (const width of [320, 390, 430, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      const measurements = await page.evaluate(() => ({
        overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
        labels: [...document.querySelectorAll(".evidence-flow li, .evidence-flow li span, .evidence-flow figcaption")]
          .map((e) => ({ font: parseFloat(getComputedStyle(e).fontSize), width: e.getBoundingClientRect().width })),
      }));
      expect(measurements.overflow).toBeLessThanOrEqual(1);
      expect(measurements.labels.length).toBeGreaterThan(3);
      for (const label of measurements.labels) {
        expect(label.font).toBeGreaterThanOrEqual(13);
        expect(label.width).toBeGreaterThan(40);
      }
    }
    await page.locator('[data-layer-filter="bench"]').click();
    await page.emulateMedia({ media: "print" });
    await expect(page.locator(".evidence-flow").first()).toBeVisible();
    const tables = await page.locator(".matrix-wrap").evaluateAll((es) => es.map((e) => ({
      overflow: getComputedStyle(e).overflowX,
      width: e.clientWidth,
      content: e.scrollWidth,
    })));
    for (const table of tables) {
      expect(table.overflow).toBe("visible");
      expect(table.content).toBeLessThanOrEqual(table.width + 1);
    }
  });
}

test("long identity, raw evidence and artifact paths stay readable on a phone", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 700 });
  await page.goto("/lab-journal/PLATE-TEMPLATE.html");
  await page.evaluate(() => {
    document.querySelector("h1").textContent = "A callback remains pending after the third reconnect under sustained backpressure";
    for (const cell of document.querySelectorAll(".ledger-value")) cell.textContent = "Linux workstation / runtime build 2026.09 / reconstructed from retained evidence with uncertainty about the initial setup";
    document.querySelector(".obs-value.raw").textContent = "request_token=" + "a".repeat(256) + "\ncallback absent from the captured trace";
    const tbody = document.querySelector(".scroll-x tbody");
    const row = tbody.firstElementChild;
    row.cells[2].textContent = "attachments/2026-09-06-" + "long-file-name-".repeat(15) + ".txt";
    for (let i = 0; i < 25; i++) { const copy = row.cloneNode(true); copy.removeAttribute("id"); tbody.append(copy); }
  });
  expect(await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)).toBeLessThanOrEqual(1);
  await page.getByRole("link", { name: "Jump to first observation" }).click();
  await expect(page.locator("#bench")).toBeFocused();
});

test("examples remain complete offline without JavaScript", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 320, height: 700 } });
  const page = await context.newPage();
  const remote = [];
  page.on("request", (r) => { if (!r.url().startsWith("file:")) remote.push(r.url()); });
  for (const path of [experiment, correction]) {
    await page.goto(pathToFileURL(resolve(`.${path}`)).href);
    await expect(page.locator(".evidence-flow").first()).toBeVisible();
    await expect(page.locator("[data-record-layer][hidden]")).toHaveCount(0);
    await expect(page.locator(".lensbar")).toBeHidden();
    await expect(page.getByRole("complementary", { name: "Specimen provenance" })).toBeVisible();
  }
  expect(remote).toEqual([]);
  await context.close();
});

test("aggregate fixtures account for every declared narrative group", async ({ page }) => {
  for (const [kind, path, expected] of [
    ["experiment", experiment, [[3, 0], [10, 10], [30, 30], [30, 30]]],
    ["correction", correction, [[5, 0], [20, 20], [5, 0]]],
  ]) {
    const csv = await readFile(`lab-journal/attachments/2026-09-06-${kind}-aggregate.csv`, "utf8");
    const rows = csv.trim().split("\n").slice(1).map((line) => line.split(","));
    expect(rows.map((r) => [Number(r[2]), Number(r[3])])).toEqual(expected);
    expect(rows.every((r) => r[4] === "synthesized-2026-09-06-from-narrative-not-a-capture")).toBe(true);
    await page.goto(path);
    await expect(page.locator(`a[href="../attachments/2026-09-06-${kind}-aggregate.csv"]`).first()).toBeVisible();
    // The headline must be explained by the groups linked from that page.
    if (kind === "correction") {
      const total = rows.reduce((n, r) => n + Number(r[2]), 0);
      await expect(page.locator(".result").nth(2)).toContainText(String(total));
    } else {
      await expect(page.locator(".result").nth(1)).toContainText(`${rows[2][3]}/${rows[2][2]}`);
    }
  }
});
