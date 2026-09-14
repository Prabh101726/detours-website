import { test, expect } from "@playwright/test";

const ROUTES = ["/", "/privacy", "/pricing", "/contact"] as const;

for (const route of ROUTES) {
  test(`no horizontal overflow at 390px on ${route}`, async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(route);
    await page.waitForLoadState("domcontentloaded");

    const scrollWidth = await page.evaluate(
      () => document.documentElement.scrollWidth,
    );
    expect(scrollWidth).toBe(390);
  });
}
