import { test, expect } from "@playwright/test";

test.describe("a11y smoke", () => {
  test("skip link is the first focusable element in body", async ({ page }) => {
    await page.goto("/");

    const first = await page.evaluate(() => {
      const focusable = document.body.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      const el = focusable[0] as HTMLElement | undefined;
      return {
        tag: el?.tagName ?? null,
        href: el instanceof HTMLAnchorElement ? el.getAttribute("href") : null,
        text: el?.textContent?.trim() ?? null,
      };
    });

    expect(first.tag).toBe("A");
    expect(first.href).toBe("#main");
    expect(first.text).toBe("Skip to content");
  });

  test("navbar toggle is at least 44×44 on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    const toggle = page.getByRole("button", { name: "Toggle menu" });
    await expect(toggle).toBeVisible();

    const box = await toggle.boundingBox();
    expect(box).not.toBeNull();
    expect(box!.width).toBeGreaterThanOrEqual(44);
    expect(box!.height).toBeGreaterThanOrEqual(44);
  });
});
