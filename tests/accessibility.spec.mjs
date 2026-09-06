import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { archive, openNotebookPage, plates, starterArchive } from "./notebook-pages.mjs";

const surfaces = [archive, starterArchive, ...plates,
  { name: "Cambrian campaign", path: "/docs/reviews/cambrian/journal-2026-04-04b.html" },
  { name: "Cambrian diagnosis", path: "/docs/reviews/cambrian/journal-2026-04-01c.html" },
  { name: "Cambrian routine", path: "/docs/reviews/cambrian/journal-2026-04-03d.html" },
];
const viewports = [
  { name: "mobile", width: 320, height: 700 },
  { name: "desktop", width: 1440, height: 900 },
];

function describeViolations(violations) {
  return violations.map(({ id, impact, help, nodes }) => ({
    id,
    impact,
    help,
    targets: nodes.map((node) => node.target.join(" ")),
  }));
}

for (const definition of surfaces) {
  for (const viewport of viewports) {
    test(`${definition.name} has no automated WCAG A/AA violations at ${viewport.name}`, async ({ page }) => {
      await openNotebookPage(page, definition, viewport);
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
        .analyze();
      expect(describeViolations(results.violations)).toEqual([]);
    });
  }
}
