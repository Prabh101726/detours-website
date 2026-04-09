import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import FeatureCard from "@/components/FeatureCard";

export const metadata: Metadata = {
  title: "Features — Detours Fleet Management",
  description:
    "Dispatch, POD, fuel tracking, driver payroll, HST invoicing, and MTO pre-trip inspections — all in one app.",
};

const features = [
  {
    icon: "📋",
    title: "Dispatch Jobs",
    description:
      "Create and assign jobs to drivers in seconds. Drivers see their assignment instantly on their phone. Track job status from dispatch to delivery in real time — no phone tag, no confusion.",
    benefit: "Zero missed jobs",
  },
  {
    icon: "📦",
    title: "Proof of Delivery (POD)",
    description:
      "Drivers capture delivery photos and customer signatures on their phone. POD is uploaded instantly — accessible to the owner from the dashboard. PDF export ready for any dispute or audit.",
    benefit: "Dispute-proof records",
  },
  {
    icon: "⛽",
    title: "Fuel Tracking",
    description:
      "Log fuel receipts on the road with amount, litres, and location. Track total fuel cost and cost per kilometre across your entire fleet. Identify which trucks are burning the most.",
    benefit: "Cut fuel waste",
  },
  {
    icon: "💰",
    title: "Driver Payroll",
    description:
      "Supports hourly, per-load, and per-tonne pay structures. Settlement calculations are automatic each pay period. Drivers can view their own pay breakdown — fewer disputes, faster close.",
    benefit: "Pay faster, argue less",
  },
  {
    icon: "🧾",
    title: "HST Invoicing",
    description:
      "Generate professional Canadian invoices with your HST number, company branding, and itemised POD line items. One click. PDF ready to email or download. CAD amounts always — never USD.",
    benefit: "Get paid faster",
  },
  {
    icon: "🔍",
    title: "Pre-Trip Inspections",
    description:
      "MTO-compliant pre-trip checklist completed by drivers on their phone before each shift. Records are timestamped and linked to the vehicle. Audit-ready at any time.",
    benefit: "Stay MTO-compliant",
  },
];

export default function FeaturesPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <AnimatedSection className="text-center mb-16">
        <span className="inline-block bg-brand-orange/10 border border-brand-orange/25 text-brand-orange text-xs font-bold px-3 py-1.5 rounded-full mb-5">
          Full feature set
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-text-primary mb-4">
          Everything your fleet needs
        </h1>
        <p className="text-lg text-text-muted max-w-xl mx-auto">
          One app replaces the spreadsheets, WhatsApp chains, and paper logs.
          Built specifically for growing Ontario fleets.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <AnimatedSection key={f.title} delay={i * 0.07}>
            <FeatureCard {...f} />
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
