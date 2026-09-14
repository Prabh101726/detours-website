import { test, expect } from "@playwright/test";

/**
 * Click-strip regression guard (AGENTS.md / Aug 15):
 * A collapsed #mobile-menu that keeps height becomes an invisible full-width
 * tap target under the header.
 */
const VIEWPORTS = [
  { width: 390, height: 844 },
  { width: 768, height: 1024 },
  { width: 1440, height: 900 },
  { width: 1920, height: 1080 },
] as const;

for (const vp of VIEWPORTS) {
  test(`collapsed mobile menu is inert at ${vp.width}px`, async ({ page }) => {
    await page.setViewportSize(vp);
    await page.goto("/");

    const menu = page.locator("#mobile-menu");
    await expect(menu).toHaveCount(1);

    const state = await menu.evaluate((el) => {
      const style = getComputedStyle(el);
      const rect = el.getBoundingClientRect();
      const midX = window.innerWidth / 2;
      const hit = document.elementFromPoint(midX, 85);
      return {
        pointerEvents: style.pointerEvents,
        height: rect.height,
        hitTag: hit?.tagName ?? null,
      };
    });

    expect(state.pointerEvents).toBe("none");
    expect(state.height).toBe(0);
    expect(state.hitTag).not.toBe("A");
  });
}
