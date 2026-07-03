# AI Automation Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and ship a new glass-style marketing page at `/ai-automation`, then link it from main site navigation.

**Architecture:** Add one new App Router route file that reuses the same Detours marketing UI primitives (`AnimatedSection`, `GlassCard`, Lucide icons, CTA conventions) and local content arrays. Keep implementation focused on presentational content only while explicitly communicating owner-review controls in the copy.

**Tech Stack:** Next.js App Router, TypeScript/TSX, Tailwind utility classes, existing Detours shared UI components.

---

## File Structure

- Create: `app/ai-automation/page.tsx`  
  Responsibility: full AI automation marketing page content + metadata.
- Modify: `components/Navbar.tsx`  
  Responsibility: add top-level nav link to `/ai-automation`.
- Modify: `components/Footer.tsx`  
  Responsibility: add footer navigation link to `/ai-automation`.

---

### Task 1: Build `/ai-automation` page route

**Files:**
- Create: `app/ai-automation/page.tsx`
- Test: `app/ai-automation/page.tsx` (type/lint validation via project lint command)

- [ ] **Step 1: Add initial route file (failing-quality baseline)**

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation — Detours Fleet Management",
  description: "AI-powered POD processing, invoice sorting, and maintenance reporting for fleets.",
};

export default function AiAutomationPage() {
  return <div>AI Automation draft scaffold</div>;
}
```

- [ ] **Step 2: Run lint to capture baseline failure risk**

Run: `npm run lint`  
Expected: command runs successfully, but page is not yet acceptable for spec quality.

- [ ] **Step 3: Replace baseline with full page implementation**

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Bot, FileSearch, FileText, ShieldCheck, Sparkles, Wrench } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";

export const metadata: Metadata = {
  title: "AI Automation — Detours Fleet Management",
  description:
    "Detours AI automation turns driver POD uploads into organized invoices and fleet maintenance reports with owner review controls.",
};

const pillars = [
  {
    icon: <FileSearch className="w-5 h-5" />,
    title: "AI POD Processing",
    description:
      "Drivers upload POD from their phone. AI reads delivery details and structures records for fast owner review.",
    impact: "Faster, cleaner documentation",
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: "AI Invoice Builder + Sorting",
    description:
      "AI turns approved delivery data into invoice drafts and groups them by customer for easier billing cycles.",
    impact: "Shorter time to invoice",
  },
  {
    icon: <Wrench className="w-5 h-5" />,
    title: "AI Maintenance Reports",
    description:
      "AI compiles cross-fleet maintenance patterns so owners can spot issues earlier and plan service confidently.",
    impact: "Better fleet visibility",
  },
];

// ...remaining sections: hero, workflow strip, outcomes, trust controls, CTA...
```

- [ ] **Step 4: Ensure final page includes all approved sections**

```tsx
// Required section headings present in JSX:
// - AI Automation (hero label)
// - Three capability cards (pillars)
// - Workflow / How it flows
// - Business outcomes
// - Trust + owner approval controls
// - Book a Demo CTA
```

- [ ] **Step 5: Run lint to verify page is clean**

Run: `npm run lint`  
Expected: PASS with no new lint errors from `app/ai-automation/page.tsx`.

- [ ] **Step 6: Commit Task 1**

```bash
git add app/ai-automation/page.tsx
git commit -m "feat: add AI automation marketing page"
```

---

### Task 2: Link page in navbar and footer

**Files:**
- Modify: `components/Navbar.tsx`
- Modify: `components/Footer.tsx`
- Test: `components/Navbar.tsx`, `components/Footer.tsx` (lint + render smoke checks)

- [ ] **Step 1: Write expected link additions (pre-change check)**

```tsx
// Navbar links should include:
// { href: "/ai-automation", label: "AI Automation" }
//
// Footer navLinks should include:
// { href: "/ai-automation", label: "AI Automation" }
```

- [ ] **Step 2: Update navbar links array**

```tsx
const links = [
  { href: "/features", label: "Features" },
  { href: "/screens", label: "Screens" },
  { href: "/ai-automation", label: "AI Automation" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];
```

- [ ] **Step 3: Update footer navigation array**

```tsx
const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/screens", label: "Screens" },
  { href: "/ai-automation", label: "AI Automation" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
```

- [ ] **Step 4: Run lint after nav/footer updates**

Run: `npm run lint`  
Expected: PASS with no new lint errors in modified components.

- [ ] **Step 5: Verify route + links manually**

Run: `npm run dev`  
Expected:
- `/ai-automation` renders with glass-style cards and CTA
- Navbar link navigates to `/ai-automation`
- Footer link navigates to `/ai-automation`

- [ ] **Step 6: Commit Task 2**

```bash
git add components/Navbar.tsx components/Footer.tsx
git commit -m "feat: add AI automation navigation links"
```

---

### Task 3: Final validation and handoff

**Files:**
- Validate changed files only:
  - `app/ai-automation/page.tsx`
  - `components/Navbar.tsx`
  - `components/Footer.tsx`

- [ ] **Step 1: Run final quality checks**

Run: `npm run lint`  
Expected: PASS.

- [ ] **Step 2: Inspect final diff for scope control**

Run: `git diff -- app/ai-automation/page.tsx components/Navbar.tsx components/Footer.tsx`  
Expected: only approved page and nav/footer link changes.

- [ ] **Step 3: Optional final commit (if batching is preferred)**

```bash
git add app/ai-automation/page.tsx components/Navbar.tsx components/Footer.tsx
git commit -m "feat: launch AI automation page with glass-style marketing flow"
```
