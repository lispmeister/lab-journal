import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { plates } from './notebook-pages.mjs';

const pages = [...plates.map(p => p.path),
  '/docs/reviews/cambrian/journal-2026-04-04b.html',
  '/docs/reviews/cambrian/journal-2026-04-01c.html'];

for (const path of pages) {
  test(`${path}: print requests once, explains fallback and restores focus`, async ({ page }) => {
    await page.addInitScript(() => { window.printCalls = 0; window.print = () => window.printCalls++; });
    await page.setViewportSize({ width: 320, height: 700 });
    await page.goto(path);
    const button = page.getByRole('button', { name: 'Print / PDF', exact: true });
    await button.click();
    expect(await page.evaluate(() => window.printCalls)).toBe(1);
    const help = page.getByRole('complementary', { name: 'Print options' });
    await expect(help).toBeVisible();
    await expect(help).toBeFocused();
    await expect(help).toContainText('If no print dialog opens');
    expect(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)).toBeLessThanOrEqual(1);
    await page.emulateMedia({ media: 'print' });
    await expect(help).toBeHidden();
    await page.emulateMedia({ media: 'screen' });
    await help.press('Escape');
    await expect(help).toBeHidden();
    await expect(button).toBeFocused();
    await button.click();
    await help.getByRole('button', { name: 'Close print help' }).click();
    await expect(button).toBeFocused();
    expect(await page.evaluate(() => window.printCalls)).toBe(2);
  });
}

test('missing or rejected native printing retains accessible instructions', async ({ page }) => {
  await page.addInitScript(() => { window.print = () => { throw new Error('Host printing unavailable'); }; });
  await page.goto(pages[0]);
  await page.getByRole('button', { name: 'Print / PDF' }).click();
  await expect(page.getByRole('status')).toContainText('Printing is unavailable here.');
  const scan = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();
  expect(scan.violations).toEqual([]);
});

test('Chromium native print request reaches the print lifecycle', async ({ page, browserName }) => {
  test.skip(browserName !== 'chromium', 'Native headless lifecycle check is Chromium-specific; this does not assert an OS dialog.');
  await page.addInitScript(() => {
    window.beforePrintCount = 0;
    window.addEventListener('beforeprint', () => window.beforePrintCount++);
  });
  await page.goto(pages[0]);
  await page.getByRole('button', { name: 'Print / PDF' }).click();
  expect(await page.evaluate(() => window.beforePrintCount)).toBeGreaterThan(0);
});

test('sample saved-PDF links return actual PDF files', async ({ page, request }) => {
  for (const name of ['journal-2026-04-03d', 'journal-2026-04-04b', 'journal-2026-04-01c']) {
    await page.goto(`/docs/reviews/cambrian/${name}.html`);
    const link = page.getByRole('link', { name: 'Saved PDF · Sep 6 snapshot' });
    const href = await link.getAttribute('href');
    const response = await request.get(new URL(href, page.url()).href);
    expect(response.ok()).toBe(true);
    expect((await response.body()).subarray(0, 5).toString()).toBe('%PDF-');
  }
});
