// app/terms/page.tsx
import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";

export const metadata: Metadata = {
  title: "Terms of Service — Detours Fleet Management",
  description: "Terms governing your use of the Detours fleet management platform.",
};

// Paste Termly-generated Terms of Service HTML here
const termsHtml = `
<p style="color: rgb(89,89,89);">Terms of Service coming soon.</p>
`;

export default function TermsPage() {
  const cleanedHtml = termsHtml
    .replace(/color\s*:\s*rgb\([^)]+\)\s*;?/gi, "")
    .replace(/color\s*:\s*#[0-9a-fA-F]{3,6}\s*;?/gi, "");

  return (
    <>
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
            Last updated: April 22, 2026 &middot; Governing law: Ontario, Canada
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <GlassCard hover={false} className="p-8">
            <div
              className="terms-body"
              style={{ color: "#f1f5f9" }}
              dangerouslySetInnerHTML={{ __html: cleanedHtml }}
            />
          </GlassCard>
        </AnimatedSection>
      </div>
    </>
  );
}
