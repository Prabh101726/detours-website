import type { Metadata } from "next";
import {
  ClipboardList,
  Package,
  Fuel,
  DollarSign,
  FileText,
  ClipboardCheck,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import FeatureCard from "@/components/FeatureCard";

export const metadata: Metadata = {
  title: "Features — Detours Fleet Management",
  description:
    "Dispatch, POD, fuel tracking, driver payroll, HST invoicing, and MTO pre-trip inspections — all in one app.",
};

const iconProps = { className: "w-5 h-5", style: { color: "#ff7a1a" } };

const features = [
  {
    icon: <ClipboardList {...iconProps} />,
    title: "Dispatch Jobs",
    description:
      "Create and assign jobs to drivers in seconds. Drivers see their assignment instantly on their phone. Track job status from dispatch to delivery in real time — no phone tag, no confusion.",
    benefit: "Zero missed jobs",
  },
  {
    icon: <Package {...iconProps} />,
    title: "Proof of Delivery (POD)",
    description:
      "Drivers capture delivery photos and customer signatures on their phone. POD is uploaded instantly — accessible to the owner from the dashboard. PDF export ready for any dispute or audit.",
    benefit: "Dispute-proof records",
  },
  {
    icon: <Fuel {...iconProps} />,
    title: "Fuel Tracking",
    description:
      "Log fuel receipts on the road with amount, litres, and location. Track total fuel cost and cost per kilometre across your entire fleet. Identify which trucks are burning the most.",
    benefit: "Cut fuel waste",
  },
  {
    icon: <DollarSign {...iconProps} />,
    title: "Driver Payroll",
    description:
      "Supports hourly, per-load, and per-tonne pay structures. Settlement calculations are automatic each pay period. Drivers can view their own pay breakdown — fewer disputes, faster close.",
    benefit: "Pay faster, argue less",
  },
  {
    icon: <FileText {...iconProps} />,
    title: "HST Invoicing",
    description:
      "Generate professional Canadian invoices with your HST number, company branding, and itemised POD line items. One click. PDF ready to email or download. CAD amounts always — never USD.",
    benefit: "Get paid faster",
  },
  {
    icon: <ClipboardCheck {...iconProps} />,
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
        <p
          className="font-mono text-xs uppercase tracking-[0.2em] mb-4"
          style={{ color: "#ff7a1a" }}
        >
          Full feature set
        </p>
        <h1
          className="font-display leading-none mb-4"
          style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)" }}
        >
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
