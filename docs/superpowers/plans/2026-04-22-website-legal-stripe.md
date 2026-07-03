# Website Legal Pages + Stripe Link Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add 4 legal pages to detours-app.com, link them from the footer, and wire a Stripe payment link on the pricing page.

**Architecture:** Each legal page is a standalone Next.js App Router page following the existing pattern (AnimatedSection header + GlassCard body). Footer gets a 4th column for legal links. Pricing page reads `NEXT_PUBLIC_STRIPE_PRO_LINK` from env and uses it for the Pro CTA.

**Tech Stack:** Next.js App Router, TypeScript, Tailwind CSS, GlassCard + AnimatedSection components, Vercel env vars.

---

## File Map

| Action | File |
|--------|------|
| Create | `app/privacy/page.tsx` |
| Create | `app/terms/page.tsx` |
| Create | `app/account-agreement/page.tsx` |
| Create | `app/driver-disclosure/page.tsx` |
| Modify | `components/Footer.tsx` |
| Modify | `app/pricing/page.tsx` |
| Modify | `.env.local` |

---

### Task 1: Privacy Policy Page

**Files:**
- Create: `app/privacy/page.tsx`

- [ ] **Step 1: Create the page**

```tsx
// app/privacy/page.tsx
import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";

export const metadata: Metadata = {
  title: "Privacy Policy — Detours Fleet Management",
  description: "How Detours collects, uses, and protects your data. PIPEDA compliant.",
};

export default function PrivacyPage() {
  return (
    <div className="relative isolate max-w-3xl mx-auto px-8 lg:px-12 pt-10 pb-28">
      <AnimatedSection instant className="mb-12 pt-1">
        <p
          className="font-mono text-xs uppercase tracking-[0.2em] mb-5"
          style={{ color: "#ff7a1a" }}
        >
          Legal
        </p>
        <h1
          className="font-display leading-[1.08] mb-4"
          style={{ fontSize: "clamp(2.4rem, 5vw, 3.5rem)" }}
        >
          Privacy Policy
        </h1>
        <p className="text-text-muted text-sm">
          Last updated: April 22, 2026 · Governing law: Ontario, Canada (PIPEDA)
        </p>
      </AnimatedSection>

      <AnimatedSection>
        <GlassCard hover={false} className="p-8">
          <div className="prose-legal">
            {/* REPLACE THIS BLOCK with your generated Privacy Policy from GetTerms.io or PrivacyPolicies.com */}
            {/* When generating, use: Country = Canada/Ontario, Data = phone, GPS, POD records, financial data */}
            {/* Third parties: Supabase (Toronto), Twilio (SMS OTP), Vercel (hosting) */}
            {/* GPS retained 90 days, Financial records 7 years (CRA), Session cookies only */}
            <p className="text-text-muted leading-relaxed">
              [Paste your generated Privacy Policy here. Use GetTerms.io or PrivacyPolicies.com.
              See <code>docs/pre-production-legal-privacy.md</code> for exact answers to use in the generator.]
            </p>
          </div>
        </GlassCard>
      </AnimatedSection>
    </div>
  );
}
```

- [ ] **Step 2: Verify the page renders**

Run: `npm run dev` and open `http://localhost:3000/privacy`
Expected: Page loads with dark theme, header visible, placeholder text in the card.

- [ ] **Step 3: Commit**

```bash
git add app/privacy/page.tsx
git commit -m "feat: add Privacy Policy page scaffold at /privacy"
```

---

### Task 2: Terms of Service Page

**Files:**
- Create: `app/terms/page.tsx`

- [ ] **Step 1: Create the page**

```tsx
// app/terms/page.tsx
import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";

export const metadata: Metadata = {
  title: "Terms of Service — Detours Fleet Management",
  description: "Terms governing your use of the Detours fleet management platform.",
};

export default function TermsPage() {
  return (
    <div className="relative isolate max-w-3xl mx-auto px-8 lg:px-12 pt-10 pb-28">
      <AnimatedSection instant className="mb-12 pt-1">
        <p
          className="font-mono text-xs uppercase tracking-[0.2em] mb-5"
          style={{ color: "#ff7a1a" }}
        >
          Legal
        </p>
        <h1
          className="font-display leading-[1.08] mb-4"
          style={{ fontSize: "clamp(2.4rem, 5vw, 3.5rem)" }}
        >
          Terms of Service
        </h1>
        <p className="text-text-muted text-sm">
          Last updated: April 22, 2026 · Governing law: Ontario, Canada
        </p>
      </AnimatedSection>

      <AnimatedSection>
        <GlassCard hover={false} className="p-8">
          <div className="prose-legal">
            {/* REPLACE THIS BLOCK with your generated Terms of Service */}
            {/* Required clauses — verify all are present after generating: */}
            {/* ✓ Not liable for accuracy of driver-entered data (PODs, fuel) */}
            {/* ✓ Subscription terms (fill in once Stripe is live) */}
            {/* ✓ Ontario jurisdiction: "governed by the laws of Ontario, Canada" */}
            {/* ✓ User must not use app for illegal purposes */}
            {/* ✓ You may terminate accounts for abuse */}
            {/* ✓ Data ownership: customer owns data, you process it on their behalf */}
            <p className="text-text-muted leading-relaxed">
              [Paste your generated Terms of Service here. Use GetTerms.io or PrivacyPolicies.com.
              See <code>docs/pre-production-legal-privacy.md</code> Step 2 for the required clause checklist.]
            </p>
          </div>
        </GlassCard>
      </AnimatedSection>
    </div>
  );
}
```

- [ ] **Step 2: Verify the page renders**

Run: open `http://localhost:3000/terms`
Expected: Page loads, placeholder visible.

- [ ] **Step 3: Commit**

```bash
git add app/terms/page.tsx
git commit -m "feat: add Terms of Service page scaffold at /terms"
```

---

### Task 3: Account Agreement Page

**Files:**
- Create: `app/account-agreement/page.tsx`

This page uses the full Account Agreement template from `docs/pre-production-legal-privacy.md` (Step 3). Replace `[Your Company Name]` and `[Your business email]` with real values before going live.

- [ ] **Step 1: Create the page**

```tsx
// app/account-agreement/page.tsx
import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";

export const metadata: Metadata = {
  title: "Account Agreement — Detours Fleet Management",
  description: "The service contract between Detours Fleet Management and your company.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="font-display text-xl text-text-primary mb-3">{title}</h2>
      <div className="text-text-muted leading-relaxed text-sm space-y-2">{children}</div>
    </div>
  );
}

export default function AccountAgreementPage() {
  return (
    <div className="relative isolate max-w-3xl mx-auto px-8 lg:px-12 pt-10 pb-28">
      <AnimatedSection instant className="mb-12 pt-1">
        <p
          className="font-mono text-xs uppercase tracking-[0.2em] mb-5"
          style={{ color: "#ff7a1a" }}
        >
          Legal
        </p>
        <h1
          className="font-display leading-[1.08] mb-4"
          style={{ fontSize: "clamp(2.4rem, 5vw, 3.5rem)" }}
        >
          Account Agreement
        </h1>
        <p className="text-text-muted text-sm">
          Last updated: April 22, 2026 · Governing law: Ontario, Canada
        </p>
      </AnimatedSection>

      <AnimatedSection>
        <GlassCard hover={false} className="p-8">
          <Section title="1. Parties and Services">
            <p>
              This Account Agreement (&quot;Agreement&quot;) is entered into between Detours Fleet Management
              (&quot;Provider&quot;) and the company or individual creating the account (&quot;Customer&quot;).
              The Provider will make the Detours fleet management platform available to the Customer
              during the term of this Agreement.
            </p>
          </Section>

          <Section title="2. Trial and Subscription">
            <p>
              The Customer receives a 14-day free trial with full access. After the trial period,
              continued use requires a paid subscription. The Customer is responsible for providing
              valid payment information before the trial expires. Subscription details, pricing, and
              billing cycles are set out at detours-app.com/pricing.
            </p>
          </Section>

          <Section title="3. Data Ownership and Processing">
            <p>
              The Customer owns all data they enter into Detours (drivers, vehicles, POD records,
              invoices, settlements). The Provider processes this data solely to deliver the contracted
              services. The Provider will not sell, share, or use Customer data for any other purpose.
              Upon account termination, data is available for export for 30 days, then permanently deleted.
            </p>
          </Section>

          <Section title="4. Customer Responsibilities">
            <p>The Customer is responsible for:</p>
            <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
              <li>Ensuring all users of their account (drivers, dispatchers) have consented to data collection</li>
              <li>Keeping login credentials secure</li>
              <li>Providing accurate company and billing information</li>
              <li>Ensuring their use of Detours complies with all applicable Ontario employment and privacy laws</li>
            </ul>
          </Section>

          <Section title="5. Limitation of Liability">
            <p>
              The Provider is not liable for the accuracy of data entered by users (POD records,
              fuel receipts, odometer readings). The Provider&apos;s total liability is limited to fees paid
              in the 3 months prior to any claim. The Provider is not liable for indirect, incidental,
              or consequential damages.
            </p>
          </Section>

          <Section title="6. Governing Law">
            <p>
              This Agreement is governed by the laws of Ontario, Canada. Any disputes will be resolved
              in the courts of Ontario.
            </p>
          </Section>

          <Section title="7. Termination">
            <p>
              Either party may terminate this Agreement with 30 days written notice. The Provider may
              terminate immediately for non-payment or violation of these terms. Upon termination, the
              Customer retains access to their data for 30 days for export.
            </p>
          </Section>

          <div className="mt-8 pt-6 border-t" style={{ borderColor: "rgba(180,200,255,0.06)" }}>
            <p className="text-text-muted text-xs">
              Questions about this Agreement?{" "}
              <a
                href="/contact"
                className="text-brand-orange hover:underline"
              >
                Contact us
              </a>
              {/* TODO before launch: replace /contact with your direct email */}
            </p>
          </div>
        </GlassCard>
      </AnimatedSection>
    </div>
  );
}
```

- [ ] **Step 2: Verify the page renders**

Run: open `http://localhost:3000/account-agreement`
Expected: All 7 sections visible, no JSX errors, dark theme consistent.

- [ ] **Step 3: Commit**

```bash
git add app/account-agreement/page.tsx
git commit -m "feat: add Account Agreement page at /account-agreement"
```

---

### Task 4: Driver Disclosure Statement Page

**Files:**
- Create: `app/driver-disclosure/page.tsx`

This page uses the full Driver Disclosure template from `docs/pre-production-legal-privacy.md` (Step 4). This is the page linked from the DriverWelcomeScreen in the main Detours app. The URL must match exactly: `https://detours-app.com/driver-disclosure`.

- [ ] **Step 1: Create the page**

```tsx
// app/driver-disclosure/page.tsx
import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";

export const metadata: Metadata = {
  title: "Driver Disclosure Statement — Detours Fleet Management",
  description: "What personal data is collected about drivers using the Detours platform, and how it is used.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2
        className="font-mono text-xs uppercase tracking-[0.18em] mb-3"
        style={{ color: "#ff7a1a" }}
      >
        {title}
      </h2>
      <div className="text-text-muted leading-relaxed text-sm space-y-2">{children}</div>
    </div>
  );
}

export default function DriverDisclosurePage() {
  return (
    <div className="relative isolate max-w-3xl mx-auto px-8 lg:px-12 pt-10 pb-28">
      <AnimatedSection instant className="mb-12 pt-1">
        <p
          className="font-mono text-xs uppercase tracking-[0.2em] mb-5"
          style={{ color: "#ff7a1a" }}
        >
          Legal
        </p>
        <h1
          className="font-display leading-[1.08] mb-4"
          style={{ fontSize: "clamp(2.4rem, 5vw, 3.5rem)" }}
        >
          Driver Disclosure Statement
        </h1>
        <p className="text-text-muted text-sm">
          Effective April 22, 2026 · Issued by Detours Fleet Management · PIPEDA compliant
        </p>
      </AnimatedSection>

      <AnimatedSection>
        <GlassCard hover={false} className="p-8">
          <Section title="What data is collected about you">
            <p>
              When you use the Detours platform as a driver or contractor for your company,
              the following personal data is collected:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3 ml-2">
              <li>
                <strong className="text-text-primary">Phone number</strong> — used as your unique
                login identifier and for dispatch communications
              </li>
              <li>
                <strong className="text-text-primary">GPS location</strong> — collected only when
                you enable tracking in the app; used for live fleet visibility by your company owner.
                GPS data is retained for 90 days then deleted.
              </li>
              <li>
                <strong className="text-text-primary">Proof of Delivery (POD) records</strong> —
                delivery addresses, materials, quantities, photos, and your name as the submitting
                driver. Retained for 7 years (CRA compliance).
              </li>
              <li>
                <strong className="text-text-primary">Truck assignment and haul records</strong> —
                truck number, load cycles, timestamps.
              </li>
              <li>
                <strong className="text-text-primary">Fuel expense records</strong> — if you submit
                fuel receipts through the app.
              </li>
              <li>
                <strong className="text-text-primary">Vehicle inspection records</strong> —
                checklists and photos submitted during pre-trip inspections.
              </li>
            </ul>
          </Section>

          <Section title="How your data is used">
            <p>Your data is used exclusively for:</p>
            <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
              <li>Fleet dispatch and job coordination</li>
              <li>Proof of delivery documentation for customers and billing</li>
              <li>Driver payroll and settlement calculations</li>
              <li>Vehicle and compliance record-keeping</li>
              <li>Government-required record retention (CRA 7-year requirement)</li>
            </ul>
          </Section>

          <Section title="Who can see your data">
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                <strong className="text-text-primary">Your company owner</strong> — full access to
                all records under your company account
              </li>
              <li>
                <strong className="text-text-primary">Dispatchers</strong> — operational data only
                (dispatch, PODs, haul records); no access to your payroll figures
              </li>
              <li>
                <strong className="text-text-primary">Detours Fleet Management</strong> — access for
                technical support only; never sold to third parties
              </li>
            </ul>
          </Section>

          <Section title="GPS Tracking">
            <p>
              GPS tracking is always opt-in. You control this in the app under your profile.
              Your company owner may require GPS tracking as a condition of your work arrangement —
              this should be discussed with your employer separately. GPS tracking only runs while
              the app is active and you have enabled it.
            </p>
          </Section>

          <Section title="Your rights">
            <p>Under PIPEDA, you have the right to:</p>
            <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
              <li>Request a copy of your personal data held by Detours</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your account data (subject to CRA retention requirements)</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, contact:{" "}
              <a href="/contact" className="text-brand-orange hover:underline">
                detours-app.com/contact
              </a>
              {/* TODO before launch: replace with your direct business email */}
            </p>
          </Section>

          <Section title="Data storage">
            <p>
              All data is stored in Canada (Supabase — Toronto region) and is not transferred
              outside of Canada except as required by Twilio for SMS verification codes.
            </p>
          </Section>
        </GlassCard>
      </AnimatedSection>
    </div>
  );
}
```

- [ ] **Step 2: Verify the page renders**

Run: open `http://localhost:3000/driver-disclosure`
Expected: All 6 sections visible, GPS/rights/storage sections all present, no JSX errors.

- [ ] **Step 3: Commit**

```bash
git add app/driver-disclosure/page.tsx
git commit -m "feat: add Driver Disclosure Statement page at /driver-disclosure"
```

---

### Task 5: Update Footer with Legal Links

**Files:**
- Modify: `components/Footer.tsx`

The current footer has 3 columns: Brand, Navigation, Legal. The Legal column currently only has copyright + contact. Replace it with a 4-link legal list, and move copyright to the existing bottom bar.

- [ ] **Step 1: Modify Footer.tsx**

Replace the entire file content with:

```tsx
// components/Footer.tsx
import Link from "next/link";
import { MapPin } from "lucide-react";

const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/screens", label: "Screens" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/account-agreement", label: "Account Agreement" },
  { href: "/driver-disclosure", label: "Driver Disclosure" },
];

export default function Footer() {
  return (
    <footer
      aria-label="Site footer"
      className="border-t"
      style={{
        borderColor: "rgba(180,200,255,0.06)",
        background: "rgba(1,1,8,0.7)",
      }}
    >
      <div className="max-w-5xl mx-auto px-8 lg:px-16 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1 — Brand */}
        <div className="md:col-span-1">
          <span
            className="font-display text-2xl tracking-wider"
            style={{ color: "#ff7a1a" }}
          >
            DETOURS
          </span>
          <p className="text-sm text-text-muted mt-2 max-w-xs leading-relaxed">
            Fleet management built for growing Ontario fleets.
          </p>
          <div
            className="inline-flex items-center gap-1.5 mt-4 font-mono text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 rounded-full"
            style={{
              background: "rgba(255,122,26,0.08)",
              border: "1px solid rgba(255,122,26,0.18)",
              color: "#ff7a1a",
            }}
          >
            <MapPin className="w-3 h-3" aria-hidden="true" />
            Built in Ontario
          </div>
        </div>

        {/* Column 2 — Navigation */}
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted mb-4">
            Navigation
          </p>
          <nav aria-label="Footer" className="flex flex-col gap-3">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm nav-link">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Column 3 — Legal */}
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted mb-4">
            Legal
          </p>
          <nav aria-label="Legal" className="flex flex-col gap-3">
            {legalLinks.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm nav-link">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Column 4 — Contact */}
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted mb-4">
            Contact
          </p>
          <Link href="/contact" className="text-sm nav-link">
            Book a demo →
          </Link>
          <p className="text-sm text-text-muted mt-6 leading-relaxed">
            © {new Date().getFullYear()} Detours.
            <br />
            All rights reserved.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="max-w-5xl mx-auto px-8 lg:px-16 border-t pt-6 pb-8 text-center"
        style={{ borderColor: "rgba(180,200,255,0.05)" }}
      >
        <p className="font-mono text-xs text-text-muted">
          Built for Ontario trucking operators — 5 to 50 trucks.
        </p>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Verify footer on any page**

Run: open `http://localhost:3000/` and scroll to bottom.
Expected: 4-column footer — Brand, Navigation, Legal (4 links), Contact. All legal links clickable and route to their pages.

- [ ] **Step 3: Commit**

```bash
git add components/Footer.tsx
git commit -m "feat: add legal links column to footer (privacy, terms, account-agreement, driver-disclosure)"
```

---

### Task 6: Wire Stripe Payment Link on Pricing Page

**Files:**
- Modify: `app/pricing/page.tsx`
- Modify: `.env.local`

The Pro plan CTA currently links to `/contact`. It should link to the Stripe Payment Link URL when `NEXT_PUBLIC_STRIPE_PRO_LINK` is set. Free Trial stays as `/contact` — self-serve onboarding is a separate future feature.

- [ ] **Step 1: Add the env var to `.env.local`**

Open `.env.local` and append:

```
# Stripe — paste your Stripe Payment Link URL here (from Stripe Dashboard → Payment Links)
# Format: https://buy.stripe.com/XXXXX
NEXT_PUBLIC_STRIPE_PRO_LINK=
```

Leave the value blank for now. You will fill it in after creating the Payment Link in Stripe.

- [ ] **Step 2: Update pricing page to use the env var**

Replace the `plans` array and the Link rendering in `app/pricing/page.tsx`. The change is surgical — only the Pro plan CTA href changes, and the Link becomes an `<a>` when it's an external URL:

```tsx
// app/pricing/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";

export const metadata: Metadata = {
  title: "Pricing — Detours Fleet Management",
  description: "Simple, transparent pricing for growing Ontario fleets.",
};

const stripeLink = process.env.NEXT_PUBLIC_STRIPE_PRO_LINK || "";

const plans = [
  {
    name: "Free Trial",
    price: "$0",
    period: "30 days",
    description: "Full access. No credit card required.",
    features: [
      "Unlimited drivers",
      "Dispatch & POD",
      "Fuel tracking",
      "Driver payroll",
      "HST invoicing",
      "Pre-trip inspections",
    ],
    cta: "Start Free Trial",
    ctaHref: "/contact",
    external: false,
    highlight: false,
  },
  {
    name: "Pro",
    price: "Contact us",
    period: "per month",
    description: "For growing Ontario fleets ready to go full-time.",
    features: [
      "Everything in Free Trial",
      "Unlimited trucks",
      "PDF exports (POD + Invoice)",
      "Priority support",
      "Ontario compliance updates",
    ],
    cta: stripeLink ? "Subscribe Now" : "Book a Demo",
    ctaHref: stripeLink || "/contact",
    external: !!stripeLink,
    highlight: true,
  },
];

export default function PricingPage() {
  return (
    <div className="relative isolate max-w-4xl mx-auto px-8 lg:px-12 pt-10 pb-28">
      <AnimatedSection instant className="text-center mb-16 pt-1">
        <p
          className="font-mono text-xs uppercase tracking-[0.2em] mb-5"
          style={{ color: "#ff7a1a" }}
        >
          Pricing
        </p>
        <h1
          className="font-display leading-[1.08] mb-6"
          style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)" }}
        >
          Simple pricing
        </h1>
        <p className="text-lg text-text-muted max-w-lg mx-auto">
          Start free. Upgrade when you&apos;re ready. No contracts, no surprises.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {plans.map((plan, i) => (
          <AnimatedSection key={plan.name} delay={i * 0.1}>
            <GlassCard
              className={`p-8 h-full flex flex-col relative overflow-hidden ${
                plan.highlight ? "border-[rgba(255,122,26,0.28)] shadow-[0_0_48px_rgba(255,122,26,0.08),0_0_96px_rgba(100,149,237,0.04)]" : ""
              }`}
            >
              {plan.highlight && (
                <>
                  <div className="absolute inset-0 pointer-events-none star-field opacity-30" />
                  <div
                    className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(255,122,26,0.10) 0%, transparent 70%)",
                    }}
                  />
                </>
              )}

              <div className="relative">
                {plan.highlight ? (
                  <span className="inline-block bg-brand-orange/15 border border-brand-orange/30 text-brand-orange text-xs font-bold px-3 py-1 rounded-full mb-4 self-start">
                    Recommended
                  </span>
                ) : null}
                <h2 className="font-display text-4xl text-text-primary mb-1">{plan.name}</h2>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="font-display text-5xl" style={{ color: "#ff7a1a" }}>{plan.price}</span>
                  <span className="text-text-muted text-sm">/ {plan.period}</span>
                </div>
                <p className="text-sm text-text-muted mb-6">{plan.description}</p>
                <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-text-subtle">
                      <CheckCircle className="w-4 h-4 flex-shrink-0 text-success" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
                {plan.external ? (
                  <a
                    href={plan.ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center font-bold py-3 rounded-xl transition-all duration-200 btn-primary"
                  >
                    {plan.cta}
                  </a>
                ) : (
                  <Link
                    href={plan.ctaHref}
                    className={`text-center font-bold py-3 rounded-xl transition-all duration-200 cursor-pointer ${
                      plan.highlight
                        ? "btn-primary"
                        : "bg-white/5 border border-white/10 text-text-primary hover:bg-white/10 hover:border-white/20"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                )}
              </div>
            </GlassCard>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="text-center">
        <p className="text-text-muted text-sm">
          Not sure which plan fits?{" "}
          <Link href="/contact" className="text-brand-orange hover:underline font-semibold cursor-pointer">
            Book a demo
          </Link>{" "}
          and we&apos;ll walk you through it.
        </p>
      </AnimatedSection>
    </div>
  );
}
```

- [ ] **Step 3: Verify pricing page (without Stripe link)**

Run: open `http://localhost:3000/pricing`
Expected: Pro CTA says "Book a Demo" and links to `/contact` (env var is empty). Free Trial links to `/contact`. No TypeScript errors.

- [ ] **Step 4: Test with Stripe link set**

In `.env.local`, temporarily set:
```
NEXT_PUBLIC_STRIPE_PRO_LINK=https://buy.stripe.com/test_placeholder
```
Restart dev server. Open `http://localhost:3000/pricing`.
Expected: Pro CTA now says "Subscribe Now" and clicking opens a new tab. Revert the value back to empty after testing.

- [ ] **Step 5: Run build check**

```bash
npm run build
```
Expected: Zero TypeScript errors, zero build errors.

- [ ] **Step 6: Commit**

```bash
git add app/pricing/page.tsx .env.local
git commit -m "feat: wire NEXT_PUBLIC_STRIPE_PRO_LINK on pricing page Pro CTA"
```

---

## After This Plan — Next Steps

1. **Generate and paste your legal content:**
   - Privacy Policy: use GetTerms.io with answers from `docs/pre-production-legal-privacy.md` Step 1
   - Terms of Service: same tool, Step 2 checklist
   - Paste into `app/privacy/page.tsx` and `app/terms/page.tsx` replacing the placeholder `<p>` blocks

2. **Create Stripe Payment Link:**
   - Stripe Dashboard → Payment Links → Create
   - Set price and trial period
   - Paste the URL into Vercel env (`NEXT_PUBLIC_STRIPE_PRO_LINK`) and into `.env.local`
   - Push to Vercel: `vercel env add NEXT_PUBLIC_STRIPE_PRO_LINK production`

3. **Deploy:**
   ```bash
   git push origin main
   ```
   Vercel auto-deploys on push.

4. **Verify live URLs** (these are already hardcoded in the Detours app):
   - `https://detours-app.com/driver-disclosure` — linked from DriverWelcomeScreen
   - `https://detours-app.com/account-agreement` — linked from OwnerOnboardingScreen
   - `https://detours-app.com/privacy` — linked from LoginScreen footer
   - `https://detours-app.com/terms` — linked from LoginScreen footer
