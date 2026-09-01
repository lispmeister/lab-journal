import { expect, test } from "@playwright/test";
import {
  archive,
  desktopViewport,
  landscapeViewports,
  notebookPages,
  openNotebookPage,
  plates,
  portraitViewports,
} from "./notebook-pages.mjs";

async function responsiveMetrics(page) {
  return page.evaluate(() => {
    const visible = (element) => Boolean(element && element.getClientRects().length);
    const rect = (element) => element?.getBoundingClientRect();
    const pixels = (element) => Number(getComputedStyle(element).fontSize.replace("px", ""));
    const visibleHeadings = [...document.querySelectorAll("h2:not(.skip-link)")].filter(visible);
    const controls = [...document.querySelectorAll(
      ".contents a, .jump-evidence, .lens-button, .view-link, [data-catalog-search]",
    )].filter(visible);
    const lensbar = document.querySelector(".lensbar");
    const lensRect = rect(lensbar);
    const lensButtons = [...document.querySelectorAll(".lensbar .lens-button")];
    const scrollRegion = document.querySelector(".scroll-x");
    const firstHeader = scrollRegion?.querySelector("th:first-child");

    return {
      documentOverflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      h1: pixels(document.querySelector("h1")),
      maxH2: Math.max(...visibleHeadings.map(pixels), 0),
      shortControls: controls
        .map((element) => ({ label: element.textContent.trim() || element.getAttribute("aria-label"), height: rect(element).height }))
        .filter(({ height }) => height < 43.5),
      archive: document.querySelector("[data-catalog-search]") ? {
        searchTop: rect(document.querySelector("[data-catalog-search]")).top,
        firstEntryTop: rect(document.querySelector("[data-catalog-row]")).top,
        heroTop: rect(document.querySelector(".archive-hero")).top,
        lensesTop: rect(document.querySelector(".archive-lenses")).top,
        catalogTop: rect(document.querySelector(".catalog")).top,
      } : null,
      jump: document.querySelector(".jump-evidence") ? {
        display: getComputedStyle(document.querySelector(".jump-evidence")).display,
        height: rect(document.querySelector(".jump-evidence")).height,
      } : null,
      lens: lensbar ? {
        clientWidth: lensbar.clientWidth,
        scrollWidth: lensbar.scrollWidth,
        buttonsInside: lensButtons.every((button) => {
          const buttonRect = rect(button);
          return buttonRect.left >= lensRect.left - 0.5 && buttonRect.right <= lensRect.right + 0.5;
        }),
      } : null,
      scrollRegion: scrollRegion ? {
        clientWidth: scrollRegion.clientWidth,
        scrollWidth: scrollRegion.scrollWidth,
        cue: getComputedStyle(scrollRegion, "::before").content,
        role: scrollRegion.getAttribute("role"),
        tabindex: scrollRegion.getAttribute("tabindex"),
        firstColumnPosition: firstHeader ? getComputedStyle(firstHeader).position : null,
      } : null,
    };
  });
}

for (const definition of notebookPages) {
  for (const viewport of portraitViewports) {
    test(`${definition.name} satisfies portrait contract at ${viewport.name}`, async ({ page }) => {
      const pageErrors = [];
      page.on("pageerror", (error) => pageErrors.push(error.message));
      await openNotebookPage(page, definition, viewport);
      const metrics = await responsiveMetrics(page);

      expect(pageErrors).toEqual([]);
      expect(metrics.documentOverflow).toBeLessThanOrEqual(1);
      expect(metrics.h1).toBeLessThanOrEqual(26);
      expect(metrics.maxH2).toBeLessThanOrEqual(18);
      expect(metrics.shortControls).toEqual([]);

      if (definition.kind === "archive") {
        if (viewport.width === 320) {
          expect(metrics.archive.searchTop).toBeLessThan(500);
          expect(metrics.archive.firstEntryTop).toBeLessThan(650);
        }
      } else {
        expect(metrics.jump.display).not.toBe("none");
        expect(metrics.jump.height).toBeGreaterThanOrEqual(44);
        expect(metrics.lens.scrollWidth).toBe(metrics.lens.clientWidth);
        expect(metrics.lens.buttonsInside).toBe(true);
        expect(metrics.scrollRegion.role).toBe("region");
        expect(metrics.scrollRegion.tabindex).toBe("0");
        expect(metrics.scrollRegion.cue).toContain("Swipe horizontally");
        expect(metrics.scrollRegion.firstColumnPosition).toBe("sticky");
      }
    });
  }
}

for (const definition of notebookPages) {
  for (const viewport of landscapeViewports) {
    test(`${definition.name} fits landscape viewport ${viewport.name}`, async ({ page }) => {
      await openNotebookPage(page, definition, viewport);
      const metrics = await responsiveMetrics(page);
      expect(metrics.documentOverflow).toBeLessThanOrEqual(1);
      expect(metrics.h1).toBeLessThanOrEqual(30);
      expect(metrics.maxH2).toBeLessThanOrEqual(21);
    });
  }
}

for (const definition of notebookPages) {
  test(`${definition.name} preserves desktop contract`, async ({ page }) => {
    await openNotebookPage(page, definition, desktopViewport);
    const metrics = await responsiveMetrics(page);
    expect(metrics.documentOverflow).toBeLessThanOrEqual(1);
    expect(metrics.h1).toBeLessThanOrEqual(30);
    expect(metrics.maxH2).toBeLessThanOrEqual(21);

    if (definition.kind === "archive") {
      expect(metrics.archive.heroTop).toBeLessThan(metrics.archive.lensesTop);
      expect(metrics.archive.lensesTop).toBeLessThan(metrics.archive.catalogTop);
    } else {
      expect(metrics.jump.display).toBe("none");
      expect(metrics.lens.scrollWidth).toBe(metrics.lens.clientWidth);
    }
  });
}

test("print restores the complete experiment record", async ({ page }) => {
  await openNotebookPage(page, plates.find(({ name }) => name === "experiment"), desktopViewport);
  await page.getByRole("button", { name: "Bench record" }).click();
  expect(await page.locator("[data-record-layer][hidden]").count()).toBeGreaterThan(0);

  await page.emulateMedia({ media: "print" });
  const printState = await page.evaluate(() => ({
    layersComplete: [...document.querySelectorAll("[data-record-layer]")]
      .every((element) => getComputedStyle(element).display !== "none"),
    lensbarDisplay: getComputedStyle(document.querySelector(".lensbar")).display,
    jumpDisplay: getComputedStyle(document.querySelector(".jump-evidence")).display,
  }));

  expect(printState.layersComplete).toBe(true);
  expect(printState.lensbarDisplay).toBe("none");
  expect(printState.jumpDisplay).toBe("none");
});
