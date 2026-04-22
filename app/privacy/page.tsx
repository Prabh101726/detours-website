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
