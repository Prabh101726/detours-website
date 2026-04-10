import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";

export const metadata: Metadata = {
  title: "Pricing — Detours Fleet Management",
  description: "Simple, transparent pricing for growing Ontario fleets.",
};

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
    cta: "Book a Demo",
    ctaHref: "/contact",
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
              {/* Cosmic glow for highlighted plan */}
              {plan.highlight && (
                <>
                  <div
                    className="absolute inset-0 pointer-events-none star-field opacity-30"
                  />
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
