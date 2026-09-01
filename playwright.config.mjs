import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  outputDir: "test-results",
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: 0,
  reporter: [
    [process.env.CI ? "line" : "list"],
    ["html", { open: "never", outputFolder: "playwright-report" }],
  ],
  snapshotPathTemplate: "{testDir}/__screenshots__/{testFileBaseName}/{arg}-{projectName}-{platform}{ext}",
  expect: {
    timeout: 5_000,
    toHaveScreenshot: {
      animations: "disabled",
      caret: "hide",
      maxDiffPixelRatio: 0.001,
      scale: "css",
    },
  },
  use: {
    baseURL: "http://127.0.0.1:4173",
    colorScheme: "light",
    locale: "en-US",
    reducedMotion: "reduce",
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
  },
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        deviceScaleFactor: 1,
      },
    },
  ],
  webServer: {
    command: "node scripts/serve-static.mjs --port 4173",
    url: "http://127.0.0.1:4173/lab-journal/index.html",
    reuseExistingServer: !process.env.CI,
    timeout: 10_000,
    stdout: "ignore",
    stderr: "pipe",
  },
});
