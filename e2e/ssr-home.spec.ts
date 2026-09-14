import { test, expect } from "@playwright/test";

/**
 * Encodes AGENTS.md SSR gate:
 * - story copy is server-rendered (single word "OPERATING" present)
 * - <main> must not contain a bare "Loading" placeholder
 */
test.describe("homepage SSR", () => {
  test("story copy is in the HTML response", async ({ request }) => {
    const res = await request.get("/");
    expect(res.ok()).toBeTruthy();
    const html = await res.text();

    expect(html).toMatch(/OPERATING/);

    const mainMatch = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i);
    expect(mainMatch).not.toBeNull();
    const mainHtml = mainMatch![1];
    // Must not match a loading placeholder inside <main> (error/hydration bailout)
    expect(mainHtml).not.toMatch(/>\s*Loading\s*</);
  });

  test("h1 textContent is the full hero headline", async ({ page }) => {
    await page.goto("/");
    const h1 = page.locator("h1").first();
    await expect(h1).toBeVisible();
    const text = (await h1.textContent())?.replace(/\s+/g, " ").trim() ?? "";
    expect(text.toUpperCase()).toContain("OPERATING");
    expect(text.toUpperCase()).toContain("AGGREGATE");
  });
});
