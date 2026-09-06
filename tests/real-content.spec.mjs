import { test, expect } from '@playwright/test';
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const samples = [
  ['journal-2026-04-03d', 'd950ed6a7554f8cd62f3795800b36b9b10f143b1d6d62f65a944f4ff59cb6d0e'],
  ['journal-2026-04-04b', 'c389f43890f8b80fef568a4e79dff180da700983d6eac8de922b7388cc087d8e'],
  ['journal-2026-04-01c', '8078ccfc5a781cd13d9181183d742a000e5ffb6afbddb1af05f283d2502e6fea'],
];
for (const [name, hash] of samples) {
  test(`${name}: real source remains readable, contained and complete offline`, async ({ browser }) => {
    const source = await readFile(`docs/reviews/cambrian/${name}.md`, 'utf8');
    expect(createHash('sha256').update(source).digest('hex')).toBe(hash);
    const context = await browser.newContext({ javaScriptEnabled: false });
    const page = await context.newPage();
    const remote = [];
    page.on('request', r => { if (!r.url().startsWith('file:')) remote.push(r.url()); });
    await page.goto(pathToFileURL(resolve(`docs/reviews/cambrian/${name}.html`)).href);
    for (const width of [320, 390, 430, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      expect(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)).toBeLessThanOrEqual(1);
    }
    const originalCode = [...source.matchAll(/```[^\n]*\n([\s\S]*?)```/g)].map(m => m[1].trimEnd());
    expect(await page.locator('pre code').allTextContents()).toEqual(originalCode);
    for (const pre of await page.locator('pre').all()) {
      await pre.focus();
      await expect(pre).toBeFocused();
      await expect(pre).toHaveAttribute('aria-label', /\S/);
    }
    await expect(page.locator('[data-record-layer][hidden]')).toHaveCount(0);
    await page.emulateMedia({ media: 'print' });
    for (const pre of await page.locator('pre').all()) {
      await expect(pre).toHaveCSS('white-space', 'pre-wrap');
      await expect(pre).toHaveCSS('overflow-x', 'visible');
    }
    if (name.endsWith('04b')) {
      const widths = await page.locator('.comparison-matrix th').evaluateAll(es => es.slice(0, 2).map(e => e.getBoundingClientRect().width));
      expect(widths[0]).toBeGreaterThan(widths[1] * 2);
    }
    if (name.endsWith('03d')) {
      await page.emulateMedia({ media: 'screen' });
      await page.setViewportSize({ width: 390, height: 900 });
      expect(await page.evaluate(() => document.documentElement.scrollHeight)).toBeLessThan(2000);
    }
    expect(remote).toEqual([]);
    await context.close();
  });
}
