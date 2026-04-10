// app/about/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Smartphone, ShieldCheck } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";

export const metadata: Metadata = {
  title: "About — Detours Fleet Management",
  description: "Built in Ontario for Ontario trucking fleets.",
};

const iconProps = { className: "w-6 h-6", style: { color: "#ff7a1a" }, "aria-hidden": true as const };

const values = [
  {
    icon: <MapPin {...iconProps} />,
    title: "Ontario-first",
    desc: "CAD pricing, HST built-in, MTO compliance. We speak your language.",
  },
  {
    icon: <Smartphone {...iconProps} />,
    title: "Mobile-first",
    desc: "Designed for drivers on the road, not managers at a desk.",
  },
  {
    icon: <ShieldCheck {...iconProps} />,
    title: "Your data, your fleet",
    desc: "Tenant-isolated data. No other fleet can see yours. Ever.",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-8 lg:px-12 pt-6 pb-28">
      <AnimatedSection className="mb-16">
        <p
          className="font-mono text-xs uppercase tracking-[0.2em] mb-5"
          style={{ color: "#ff7a1a" }}
        >
          Our story
        </p>
        <h1
          className="font-display leading-none mb-6"
          style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)" }}
        >
          Built in Ontario,{" "}
          <span style={{ color: "#ff7a1a" }}>for Ontario.</span>
        </h1>
        <p className="text-lg text-text-muted leading-relaxed max-w-2xl">
          Detours was built by someone who watched Ontario fleet owners manage their entire
          operation through a tangle of WhatsApp groups, Excel sheets, and paper PODs.
          There had to be a better way.
        </p>
      </AnimatedSection>

      <AnimatedSection className="mb-16">
        <GlassCard hover={false} className="p-8">
          <h2 className="font-display text-3xl text-text-primary mb-4">Our mission</h2>
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
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{
                    background: "rgba(255,122,26,0.10)",
                    border: "1px solid rgba(255,122,26,0.18)",
                  }}
                >
                  {v.icon}
                </div>
                <h3 className="font-bold text-text-primary mb-2">{v.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{v.desc}</p>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="text-center">
        <h2
          className="font-display leading-none mb-4"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
        >
          Want to see it in action?
        </h2>
        <p className="text-text-muted mb-8">Book a 20-minute demo — we&apos;ll show you the full flow.</p>
        <Link
          href="/contact"
          className="btn-primary inline-flex items-center justify-center px-8 py-3.5 text-base"
        >
          Book a Demo →
        </Link>
      </AnimatedSection>
    </div>
  );
}
