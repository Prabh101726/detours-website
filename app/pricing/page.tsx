import type { Metadata } from "next";
import Link from "next/link";
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
    <div className="max-w-5xl mx-auto px-6 py-24">
      <AnimatedSection className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-text-primary mb-4">
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
              className={`p-8 h-full flex flex-col ${
                plan.highlight ? "border-brand-orange/40 shadow-[0_0_32px_rgba(255,122,26,0.08)]" : ""
              }`}
            >
              {plan.highlight ? (
                <span className="inline-block bg-brand-orange/15 border border-brand-orange/30 text-brand-orange text-xs font-bold px-3 py-1 rounded-full mb-4 self-start">
                  Recommended
                </span>
              ) : null}
              <h2 className="text-2xl font-black text-text-primary mb-1">{plan.name}</h2>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-black text-brand-orange">{plan.price}</span>
                <span className="text-text-muted text-sm">/ {plan.period}</span>
              </div>
              <p className="text-sm text-text-muted mb-6">{plan.description}</p>
              <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-text-subtle">
                    <span className="text-success font-bold">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={plan.ctaHref}
                className={`text-center font-bold py-3 rounded-xl transition-colors ${
                  plan.highlight
                    ? "bg-brand-orange text-white hover:bg-brand-orange-light"
                    : "bg-white/5 border border-white/10 text-text-primary hover:bg-white/10"
                }`}
              >
                {plan.cta}
              </Link>
            </GlassCard>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="text-center">
        <p className="text-text-muted text-sm">
          Not sure which plan fits?{" "}
          <Link href="/contact" className="text-brand-orange hover:underline font-semibold">
            Book a demo
          </Link>{" "}
          and we&apos;ll walk you through it.
        </p>
      </AnimatedSection>
    </div>
  );
}
