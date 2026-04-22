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
