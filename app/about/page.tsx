// app/about/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";

export const metadata: Metadata = {
  title: "About — Detours Fleet Management",
  description: "Built in Ontario for Ontario trucking fleets.",
};

const values = [
  { icon: "🍁", title: "Ontario-first", desc: "CAD pricing, HST built-in, MTO compliance. We speak your language." },
  { icon: "📱", title: "Mobile-first", desc: "Designed for drivers on the road, not managers at a desk." },
  { icon: "🔒", title: "Your data, your fleet", desc: "Tenant-isolated data. No other fleet can see yours. Ever." },
];

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <AnimatedSection className="mb-16">
        <span className="inline-block bg-brand-orange/10 border border-brand-orange/25 text-brand-orange text-xs font-bold px-3 py-1.5 rounded-full mb-5">
          Our story
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-text-primary mb-6 leading-tight">
          Built in Ontario,<br />
          <span className="text-brand-orange">for Ontario.</span>
        </h1>
        <p className="text-lg text-text-muted leading-relaxed max-w-2xl">
          Detours was built by someone who watched Ontario fleet owners manage their entire
          operation through a tangle of WhatsApp groups, Excel sheets, and paper PODs.
          There had to be a better way.
        </p>
      </AnimatedSection>

      <AnimatedSection className="mb-16">
        <GlassCard hover={false} className="p-8">
          <h2 className="text-xl font-black text-text-primary mb-4">Our mission</h2>
          <p className="text-text-muted leading-relaxed">
            Give every Ontario trucking operator — whether they run 5 trucks or 50 — the same
            tools that big fleets have, without the enterprise price tag or 6-month onboarding.
            Dispatch, POD, fuel, payroll, and invoicing: everything in one app, on any phone,
            starting today.
          </p>
        </GlassCard>
      </AnimatedSection>

      <AnimatedSection className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {values.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.1}>
              <GlassCard className="p-6 text-center">
                <span className="text-3xl block mb-3">{v.icon}</span>
                <h3 className="font-bold text-text-primary mb-2">{v.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{v.desc}</p>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="text-center">
        <h2 className="text-2xl font-black text-text-primary mb-3">Want to see it in action?</h2>
        <p className="text-text-muted mb-6">Book a 20-minute demo — we&apos;ll show you the full flow.</p>
        <Link
          href="/contact"
          className="inline-block bg-brand-orange text-white font-bold px-8 py-3.5 rounded-xl hover:bg-brand-orange-light transition-colors"
        >
          Book a Demo →
        </Link>
      </AnimatedSection>
    </div>
  );
}
