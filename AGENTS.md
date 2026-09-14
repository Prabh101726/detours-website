# Detours Website — Agent Guide (Claude Code + Cursor)

Marketing site for Detours (fleet ops SaaS by SRV Freight Inc.).
**Stack:** Next.js 16 · React 19 · Tailwind v4 · Vercel.
**Live:** https://detours-app.com — Vercel auto-deploys every push to `main`. There is no staging: `main` = production.

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

## BEFORE any major change

1. **Read `docs/claude-reference.md` first.** It is the source of truth for homepage architecture, CLS rules, fonts, the 3D scene, and past incidents. Do not rediscover what it already documents.
2. Know the load-bearing constraints (details + why in the reference doc):
   - Homepage is a **server + client split**: `StorySections.tsx` (server, all copy) + `HomeEnhancer.tsx` (client, canvas/scroll JS). Never collapse it into one `"use client"` file.
   - Any `getSnapshot` passed to `useSyncExternalStore` must return a **referentially stable** value (object snapshots must be cached). A fresh object per call = infinite re-render = "We hit a bump" error page after hydration (Jul 3 incident, `41b6391`).
   - Tailwind v4 cascade: **every custom rule in `globals.css` must live in an `@layer`.** Unlayered CSS beats *all* layered CSS regardless of specificity or source order, so an unlayered rule silently outranks Tailwind utilities. Two ways this has bitten: an unlayered `* { margin:0 }` kills every utility site-wide, and an unlayered `.mobile-menu { display:grid }` overrode `md:hidden` and left an invisible clickable strip in production (Aug 15, `3a7f412`). Resets → `@layer base`, component classes → `@layer components`.
   - CLS: use `svh` not `dvh` for viewport heights; never re-add `app/loading.tsx`; never override `--font-*` variables in `globals.css`.
   - a11y floor — do not regress: interactive controls ≥ 44×44 (`Navbar` toggle is `h-11 w-11`), the skip link stays the first focusable element in `<body>` with `focus:z-[60]` so the `z-50` sticky navbar can't cover it, and `StaggerHeading` emits a space between line spans so `textContent` doesn't glue words together.
   - Do not restore deleted files (`Truck.tsx`, `HomeExperience.tsx`, `app/loading.tsx`, old hero components) — see the "Deleted / obsolete" table in the reference doc.
3. **Working on `main` means shipping.** For anything risky or multi-step, branch first and merge only after the checks below pass.

## AFTER any change — verify before push

Run these; all must pass (evidence, not assumption):

```bash
npm run build   # must pass — this is the TS gate; no font-override warnings
                # do NOT block on eslint — it hangs in this repo

# Preferred: Playwright encodes the SSR / click-strip / overflow / a11y gates
npm run test:e2e

# Manual SSR check (if not using Playwright):
npm run start -- -p 3456
curl -s http://localhost:3456/ | grep -c "OPERATING"   # ≥1 → story copy is server-rendered
curl -s http://localhost:3456/ | grep "Loading"        # must NOT match inside <main>
```

**curl can only prove single words.** `StaggerHeading` renders every word in its own mask span, so *no* multi-word heading string is ever contiguous in the HTML — `grep "OPERATING SYSTEM"` and `grep "SYSTEM FOR"` return 0 on a perfectly healthy page. Use single words for the SSR gate, and check heading text in the DOM, never with curl:

```js
document.querySelector("h1").textContent  // "THE OPERATING SYSTEM FOR AGGREGATE FLEETS"
```

If the change touches the homepage, client components, hooks, fonts, or global CSS, also verify **hydration in a real browser** (SSR HTML can be perfect while the client crashes):

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new \
  --window-size=1440,900 --screenshot=/tmp/home.png http://localhost:3456/
# Inspect the PNG: real homepage = pass; "We hit a bump" = error boundary = STOP, do not push.
```

Caveats: headless single-shot screenshots freeze mid-animation and render WebGL canvases empty — that's normal; judge structure/copy, not the 3D scene. A **full-page** screenshot also renders the story sections blank, because the sticky scroll layout doesn't composite off-screen; that is a capture artifact, not a bug. Confirm with per-section computed styles or scrolled viewport captures before reporting missing content. For layout changes, also check a 390 px-wide capture for horizontal overflow (`doc.scrollWidth === 390`).

**If you touched `Navbar.tsx` or `.mobile-menu`, run the click-strip regression guard** at 390 / 768 / 1440 / 1920 — a collapsed menu that keeps any height becomes an invisible full-width tap target under the header:

```js
const m = document.getElementById("mobile-menu");
getComputedStyle(m).pointerEvents            // "none"
m.getBoundingClientRect().height             // 0
document.elementFromPoint(innerWidth / 2, 85).tagName   // "SECTION", never "A"
```

A `0fr` grid row still floors at the child's min-content height, and `min-height:0` does not discount padding or border — keep the grid child padding/border-free and put spacing on an inner wrapper.

## AFTER push — confirm the deploy

1. Vercel builds `main` in ~1–2 min. **Detect the deploy by grepping the live HTML for a string unique to your change**, not by a build hash — it is a direct answer and cannot silently pass:

   ```bash
   curl -s https://detours-app.com/ | grep -c "Skip to content"   # your new string
   ```

   A hash poll is easy to get wrong: the path is `/_next/static/css/*.css` (not `chunks/`), and a regex that matches nothing compares `""` to `""` forever and reports "unchanged" on a deploy that already landed (seen Aug 15). If you do poll a hash, assert it is non-empty first. Then hard-refresh https://detours-app.com/ (Cmd+Shift+R).
2. Confirm the homepage story renders, not the error page. If the error page shows a `Ref:` digest, capture it and check the browser console before touching anything else.
3. CLS/Speed Insights is **field data** — it reflects changes over 24–48 h, not instantly. Don't chase the score right after a deploy.

## After the work — keep the docs true

If a change alters homepage architecture, adds a gotcha, or fixes an incident, update `docs/claude-reference.md` (including its commit timeline) in the same commit. Stale docs caused wasted debugging before; the reference doc only helps if it matches `main`.

## Housekeeping

- Repo lives at `~/dev/detours-website` (moved off iCloud Desktop Jul 3 2026 — keep it out of `~/Desktop`/`~/Documents`).
- `.env.local` and `.vercel/` are local-only and gitignored — never commit them.
- Site URL constants come from `NEXT_PUBLIC_SITE_URL` / defaults in `app/layout.tsx`, `sitemap.ts`, `robots.ts` — canonical domain is `detours-app.com` (not detoursfleet.com).
