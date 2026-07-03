# Detours Website — Claude Reference

Internal reference for AI assistants working on `detours-website`.  
Stack: **Next.js 16**, **React 19**, **Tailwind 4**, deployed on **Vercel**.

---

## Homepage architecture

The homepage (`/`) is a **server + client split** for SEO and CLS.

| File | Role |
|------|------|
| `app/page.tsx` | Server entry — wraps story in `#home-story` |
| `components/story/StorySections.tsx` | **Server component** — all 6 act sections, copy, links, tickers |
| `components/story/HomeEnhancer.tsx` | **Client component** — WebGL canvas, Lenis, GSAP ScrollTrigger |
| `components/story/Stagger.tsx` | Server-safe heading/reveal markup (`data-stagger`, `data-reveal`) |
| `components/three/SceneCanvas.tsx` | R3F fixed canvas, scroll-driven camera (`scrollBus.p`) |
| `components/three/scrollBus.ts` | Mutable `{ p: 0..1 }` shared by GSAP and R3F |

```tsx
// app/page.tsx pattern — do not collapse back into one "use client" file
<div id="home-story" className="relative">
  <HomeEnhancer />   {/* canvas + scroll JS */}
  <StorySections />  {/* visible SSR HTML */}
</div>
```

**Acts:** Hero → Dispatch → Live Tracking → POD/Invoice → AI Agents → Finale.

---

## CLS rules (critical)

Speed Insights hit **CLS 0.26** after the Jul 3 cinematic rewrite. Fixed in `9813fdc`.

### Do

- Keep story copy in `StorySections.tsx` (server-rendered).
- Use `adjustFontFallback: true` + explicit `fallback` on all `next/font/google` entries in `app/layout.tsx`.
- Use `min-h-svh` (not `dvh`) for viewport-height heroes.
- Preload JetBrains Mono (`preload: true`) — HUD labels and footer use it.
- Let `next/font` own `--font-*` variables — **never** override them in `globals.css` with plain `sans-serif` (see comment at top of `globals.css`).

### Do not

- **Do not re-add `app/loading.tsx`** with a tall placeholder (`minHeight: 60vh`). It caused a sitewide footer jump on hydration.
- **Do not make the whole homepage `"use client"`** — content ended up in `<div hidden id="S:0">` and visible `<main>` showed only "Loading".
- **Do not use `100dvh`** on heroes — mobile toolbar resize shifts the footer (fixed Jun 5 in `d750cf7`).

### Fonts (layout.tsx)

- Display: **Big Shoulders** → `--font-bigshoulders`
- Body: **Archivo** → `--font-archivo`
- Mono/HUD: **JetBrains Mono** → `--font-jetbrains`

### Buttons

- `.btn-primary` uses `#d35400` (not `#ff6a00`) for WCAG contrast on white text.

---

## Mobile headline wrap

Word-mask headings (`StaggerHeading`) need **real text spaces between mask spans**, not `&nbsp;` inside spans:

```tsx
// Stagger.tsx — space BETWEEN inline-block masks so lines wrap on 390px viewports
{wi < words.length - 1 ? " " : null}
```

HUD kickers use `flex-wrap` + normal spaces (not `&nbsp;//&nbsp;`).

Verify: 390px viewport, `doc.scrollWidth === 390`, `overflowing elements: 0`.

---

## Hydration crash — `useSyncExternalStore` snapshot rule (critical)

Jul 3 incident: homepage rendered fine on the server, then crashed to `app/error.tsx`
("We hit a bump") after hydration. Fixed in `41b6391`.

**Cause:** `HomeEnhancer`'s `readClientEnv()` built a **new object on every call**.
`useSyncExternalStore` compares snapshots by reference, so React saw a "changed"
store every render → infinite re-render loop → error boundary.

**Rule:** any `getSnapshot` passed to `useSyncExternalStore` must return a
**referentially stable** value. In `HomeEnhancer.tsx` this is done with a
module-level `clientEnvCache` (computed once, reused) plus a constant
`SERVER_ENV` object for the server snapshot. Do not inline object literals in
`getSnapshot`, and keep primitives (like `useIsClient`'s `() => true`) as-is —
primitives compare by value and are safe.

**Symptom to recognize:** server HTML correct, client shows the error page with a
`Ref: …` digest, no build error. Check the browser console for
"maximum update depth" / getSnapshot warnings.

---

## 3D scene (R3F)

- `SceneCanvas` is `dynamic(..., { ssr: false })`.
- Fixed behind content: `fixed inset-0 z-0 pointer-events-none`.
- Components: `AsphaltPlant`, `RouteLine`, `DustField`, `DataCluster`, `AgentOrbits`.
- Camera keyframes in `SceneCanvas.tsx`; route curve in `routeCurve.ts`.
- **`Truck.tsx` was removed** — do not re-add without wiring into `SceneCanvas`.
- `lowPower` = `window.innerWidth < 768` (checked once on mount) → fewer particles, lower DPR.

### Reduced motion

- `HomeEnhancer`: skips Lenis/GSAP when `prefers-reduced-motion: reduce`.
- CSS: decorative animations gated in `@media (prefers-reduced-motion: no-preference)` in `globals.css`.
- WebGL particle/line animation still runs under reduced motion — known gap if tightening a11y.

---

## Dependencies (homepage only)

```
@react-three/fiber  @react-three/drei  three
gsap  lenis  lucide-react
```

`next.config.ts` → `optimizePackageImports: ["lucide-react", "gsap"]`.

---

## Deleted / obsolete (do not restore without reason)

| Removed | Why |
|---------|-----|
| `app/loading.tsx` | CLS regression |
| `components/story/HomeExperience.tsx` | Split → `StorySections` + `HomeEnhancer` |
| `components/three/Truck.tsx` | Built but never mounted in scene |
| `HeroWidgets`, `HeroCopy`, `Tesseract`, `StatCounter`, `StepNumber` | Old homepage; zero imports |

---

## Other pages

- Inner pages use `AnimatedSection` (IntersectionObserver + CSS `.reveal`) — not GSAP.
- Legal: `privacy`, `terms`, `account-agreement`, `driver-disclosure`.
- Marketing: `features`, `fleet-owners`, `pricing`, `ai-automation`, `screens`, `about`, `contact`.
- Navbar/Footer: light glass theme, brand orange `#ff6a00` (logo/accent; buttons use `#d35400`).

---

## Commit timeline (homepage + CLS)

| Commit | Date | Summary |
|--------|------|---------|
| `41b6391` | Jul 3 | Hydration crash fix: cache `useSyncExternalStore` snapshot |
| `5c6a9a2` | Jul 3 | react-hooks lint cleanup (introduced the `useSyncExternalStore` switch) |
| `c8719a7` | Jul 3 | Cinematic 3D scroll homepage rewrite |
| `c78ce5f` | Jul 3 | Mobile headline wrap fix |
| `9813fdc` | Jul 3 | CLS fix: SSR split, fonts, drop loading, cleanup |
| `d750cf7` | Jun 5 | Prior CLS fix: `svh`, font fallback hygiene |

---

## Verification commands

```bash
npm run build          # must pass; no Big Shoulders font override warning
npm run dev            # local preview

# SSR check (production server)
npm run build && npm run start -- -p 3456
curl -s http://localhost:3456/ | grep -c "OPERATING SYSTEM"  # expect ≥1 in visible HTML
curl -s http://localhost:3456/ | grep "Loading"                # expect no match in <main>
```

---

## Site URL

- Production: `https://detours-app.com` (`NEXT_PUBLIC_SITE_URL`)
- App Store CTA: `https://apps.apple.com/app/id6769499953`

---

*Last updated: Jul 3, 2026 — after `41b6391` hydration-crash fix (verified live).*
