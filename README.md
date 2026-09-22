# Detours Website

Marketing site for **Detours** — fleet operations software for growing Ontario aggregate and dump fleets (SRV Freight Inc.).

| | |
|---|---|
| **Live** | https://detours-app.com |
| **Product app** | https://app.detours-app.com |
| **Repo** | `~/dev/detours-website` |
| **Deploy** | Every push to `main` → Vercel production (no staging) |

Agent / architecture source of truth: [`AGENTS.md`](./AGENTS.md) · [`docs/claude-reference.md`](./docs/claude-reference.md)

---

## 2026 stack

This site is built on the **2026 default marketing-site stack**. Framework choices are intentional — gaps are configuration and homepage JS budget, not the platform.

| Layer | What we use | Why it fits 2026 |
|-------|-------------|------------------|
| **Framework** | [Next.js](https://nextjs.org) **16.2** App Router | RSC by default, Metadata API, static prerender on Vercel |
| **UI runtime** | [React](https://react.dev) **19.2** + TypeScript (strict) | Concurrent UI, server/client split without a second framework |
| **CSS** | [Tailwind CSS](https://tailwindcss.com) **v4** (`@theme`, `@layer`) | Utility-first; all custom rules must live in `@layer base` / `@layer components` |
| **Host / CDN** | [Vercel](https://vercel.com) | Edge HIT caching, HSTS, automatic `main` deploys |
| **Fonts** | `next/font` — Big Shoulders, Archivo, JetBrains Mono | Self-hosted with metric-matched fallbacks (CLS hygiene) |
| **Icons** | [Lucide React](https://lucide.dev) | Tree-shakeable; listed in `optimizePackageImports` |
| **Homepage motion** | [GSAP](https://gsap.com) ScrollTrigger + [Lenis](https://lenis.darkroom.engineering) | Scroll-driven story; skipped under `prefers-reduced-motion` for Lenis/GSAP |
| **3D (homepage only)** | [Three.js](https://threejs.org) + [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) + Drei | Fixed WebGL canvas; not on marketing subpages |
| **Analytics / CWV** | Vercel Analytics + Speed Insights + `WebVitalsReporter` | Field LCP / INP / CLS — judge over 24–48h, not instantly after deploy |
| **SEO** | Metadata API, `sitemap.ts`, `robots.ts`, OG image route, JSON-LD | Per-route `canonical` + `og:url` (never pin every page to `/`) |
| **Legal** | Privacy, Cookie Notice, Terms, Account Agreement, Driver Disclosure | Cookie Notice at `/cookies` (linked from Privacy + footer) |
| **Contact** | Server Action + Nodemailer (Gmail SMTP) | Honeypot + IP rate limit; Turnstile optional if spam rises |
| **QA** | [Playwright](https://playwright.dev) CI + [Storybook](https://storybook.js.org) 10 | Encodes AGENTS regression gates; Storybook for stable UI only |
| **Email (future)** | Prefer Resend / Postmark when convenient | Gmail SMTP is fine until volume or ops pain says otherwise |

### Explicit non-goals

- **Not** Astro, WordPress, or a CMS — until someone besides the founder edits copy weekly  
- **Not** Turborepo — single marketing repo  
- **Not** collapsing the homepage into one `"use client"` file — that already caused a production outage  

---

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Command | Purpose |
|---------|---------|
| `npm run build` | Production build — TypeScript gate; must pass before push |
| `npm run start` | Serve the production build locally |
| `npm run test:e2e` | Build + Playwright (SSR story copy, mobile click-strip, 390px overflow, skip link, 44×44 toggle) |
| `npm run test:e2e:ui` | Playwright UI mode |
| `npm run storybook` | Isolate Navbar, Footer, GlassCard, FeatureCard, StaggerHeading against live tokens |
| `npm run build-storybook` | Static Storybook build |

Do **not** block on `npm run lint` — ESLint hangs in this repo.

---

## Homepage architecture

The homepage is a **server + client split** for SEO and Core Web Vitals.

| Piece | Role |
|-------|------|
| `app/page.tsx` | Server entry — `#home-story` wrapper |
| `StorySections.tsx` | **Server** — all story acts and copy (must appear in SSR HTML) |
| `HomeEnhancer.tsx` | **Client** — WebGL canvas, Lenis, GSAP ScrollTrigger |
| `Stagger.tsx` | Server-safe heading masks (`data-stagger` / `data-reveal`) |
| `SceneCanvas.tsx` | R3F canvas; camera driven by `scrollBus.p` |

**Story acts:** Hero → Dispatch → Live Tracking → POD/Invoice → AI Agents → Finale.

### Load-bearing rules

- Use `svh` (not `dvh`) for viewport heights  
- Never re-add `app/loading.tsx` with a tall placeholder  
- Never override `--font-*` in `globals.css` with plain system stacks  
- Every custom CSS rule belongs in an `@layer` (unlayered CSS beats all Tailwind utilities)  
- Interactive controls ≥ 44×44; skip link is first focusable in `<body>`  
- `StaggerHeading` must emit real spaces between word/line spans so `textContent` stays readable  

Full incident timeline and verification notes: `docs/claude-reference.md`.

---

## Site map (marketing)

| Route | Purpose |
|-------|---------|
| `/` | Cinematic homepage story |
| `/fleet-owners` | Owner-focused pitch |
| `/features` | Product capabilities |
| `/screens` | Driver ↔ owner flow |
| `/ai-automation` | AI POD / invoice / maintenance |
| `/pricing` | Plans |
| `/about` | Company |
| `/contact` | Demo / lead form |
| `/privacy`, `/cookies`, `/terms`, … | Legal |

---

## Design tokens

Brand system lives in `app/globals.css` `@theme`: orange accent (`#ff6a00` / ink `#d35400`), warm paper background (`#fcfbf9`), glass surfaces, display / body / mono font roles. Prefer tokens over new hard-coded hex when the value already exists.

---

## Quality bar (2026)

Target field metrics (Speed Insights): **LCP ≤ 2.5s**, **INP ≤ 200ms**, **CLS ≤ 0.1**.

Before push on homepage / CSS / nav work:

```bash
npm run build && npm run test:e2e
```

After push to `main`, confirm the live HTML contains a string unique to your change (not a guessed build hash).

---

## Deploy

1. Merge to `main`  
2. Vercel builds in ~1–2 minutes  
3. Hard-refresh https://detours-app.com  
4. Confirm story copy renders (not the “We hit a bump” error page)  

Risky or multi-step work: use a branch and PR; `main` is production.
