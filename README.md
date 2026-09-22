# Detours Website

Marketing site for [Detours](https://detours-app.com) — fleet ops for growing Ontario aggregate / dump fleets (SRV Freight Inc.).

**Live:** https://detours-app.com  
**Stack:** Next.js 16 · React 19 · Tailwind CSS v4 · Vercel  
**Agents:** see [`AGENTS.md`](./AGENTS.md) and [`docs/claude-reference.md`](./docs/claude-reference.md)

`main` deploys straight to production. There is no staging.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Useful scripts:

| Command | What it does |
|---------|----------------|
| `npm run build` | Production build (TypeScript gate) |
| `npm run test:e2e` | Build + Playwright regressions (SSR, click-strip, overflow, a11y) |
| `npm run storybook` | Component isolation for Navbar, Footer, cards, StaggerHeading |
| `npm run start` | Serve a production build locally |

Do not rely on `npm run lint` — ESLint hangs in this repo.

## Homepage architecture

Do **not** collapse the homepage into one `"use client"` file.

- `components/story/StorySections.tsx` — server-rendered story copy  
- `components/story/HomeEnhancer.tsx` — client canvas / scroll (R3F, GSAP, Lenis)

Details and past incidents: `docs/claude-reference.md`.

## Fonts

Loaded via `next/font` in `app/layout.tsx`:

- **Big Shoulders** — display  
- **Archivo** — body  
- **JetBrains Mono** — HUD / labels  

Do not override `--font-*` variables in `globals.css` (CLS).

## Deploy

Push to `main`. Vercel builds and publishes automatically (~1–2 minutes). Confirm with a unique string in the live HTML, not a guessed build hash.
