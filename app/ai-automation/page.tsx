import { Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  ClipboardList,
  FileText,
  Package,
  ScanLine,
  ShieldCheck,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";

export const metadata: Metadata = {
  title: "AI Automation — Detours Fleet Management",
  description:
    "AI-powered POD processing, invoice building, and maintenance reporting — live in Detours. Less manual work, clearer records, owner approval at every step.",
};

const iconSm = { className: "w-5 h-5 flex-shrink-0", style: { color: "#ff7a1a" } };

const pillars = [
  {
    icon: <ScanLine {...iconSm} aria-hidden />,
    title: "AI POD Processing",
    description:
      "Delivery proof lands from the driver; AI reads and organizes the details so you are not retyping photos, weights, or signatures. Live today for fleets using Detours.",
  },
  {
    icon: <FileText {...iconSm} aria-hidden />,
    title: "AI Invoice Builder + Sorting",
    description:
      "Turn approved work into structured invoice lines faster. AI helps group and sort line items so billing stays consistent — you stay in control of what goes out the door.",
  },
  {
    icon: <ClipboardList {...iconSm} aria-hidden />,
    title: "AI Maintenance Reports",
    description:
      "Inspection and maintenance notes get summarized into clear, shareable reports. Easier handoffs between shop, owner, and drivers without losing the paper trail.",
  },
];

const workflowSteps = [
  {
    title: "Driver uploads POD",
    description:
      "Photos, signatures, and delivery context captured in the app — the same flow your drivers already use.",
  },
  {
    title: "AI extracts & classifies",
    description:
      "Key fields and document types are pulled out automatically so the office sees structured data, not a pile of images.",
  },
  {
    title: "Owner reviews & approves",
    description:
      "You confirm what is billable and accurate before anything moves forward. AI assists; you decide.",
  },
  {
    title: "Invoice & report output",
    description:
      "Approved work becomes invoices and maintenance-ready documentation with a traceable path from POD to PDF.",
  },
];

const outcomes = [
  {
    title: "Less time in the back office",
    body: "Fewer manual transcriptions from PODs and receipts means your team can focus on dispatch and customers instead of data entry.",
  },
  {
    title: "Cleaner handoffs between roles",
    body: "Drivers, owners, and accounting see the same structured picture — so questions get answered from the record, not from memory.",
  },
  {
    title: "Fewer billing surprises",
    body: "Line items are sorted and reviewed before invoicing, which reduces rework and client disputes without promising a specific dollar or hour savings.",
  },
];

const trustPoints = [
  {
    icon: <Package {...iconSm} aria-hidden />,
    title: "Unclear data is flagged",
    body: "When the model is not confident, those items surface for human review instead of silently slipping through.",
  },
  {
    icon: <ShieldCheck {...iconSm} aria-hidden />,
    title: "Nothing auto-sent without owner approval",
    body: "Invoices and customer-facing outputs wait for your sign-off. AI prepares drafts; you release them.",
  },
  {
    icon: <FileText {...iconSm} aria-hidden />,
    title: "Traceable, audit-ready records",
    body: "PODs, approvals, and generated documents stay linked so you can show what happened, when, and who approved it.",
  },
];

export default function AiAutomationPage() {
  return (
    <div className="relative isolate">
      {/* Hero */}
      <section
        className="relative overflow-hidden border-b"
        style={{ borderColor: "rgba(180,200,255,0.05)" }}
      >
        <div className="animate-star-pulse absolute inset-0 star-field opacity-50 pointer-events-none" />
        <div className="grid-lines-fade absolute inset-0 dot-grid opacity-15 pointer-events-none" />
        <div
          className="absolute pointer-events-none"
          style={{
            left: "50%",
            top: "20%",
            transform: "translateX(-50%)",
            width: "min(900px, 100vw)",
            height: 480,
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(255,122,26,0.12) 0%, rgba(100,149,237,0.06) 45%, transparent 70%)",
          }}
        />
        <div className="relative max-w-5xl mx-auto px-8 lg:px-16 pt-14 pb-20 md:pt-20 md:pb-24">
          <AnimatedSection instant className="max-w-3xl">
            <p
              className="font-mono text-xs uppercase tracking-[0.2em] mb-5"
              style={{ color: "#ff7a1a" }}
            >
              AI Automation
            </p>
            <h1
              className="font-display leading-[1.06] mb-6"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.25rem)" }}
            >
              A new era for fleet ops — already running in Detours
            </h1>
            <p className="text-lg text-text-muted leading-relaxed mb-4">
              Practical automation for Ontario fleets: AI handles the tedious
              extraction and sorting; you keep the judgment calls. It is built
              into the product today — not a roadmap slide.
            </p>
            <p className="text-base text-text-muted/90 leading-relaxed mb-10">
              Less copy-paste from photos, fewer mismatched invoice lines, and
              maintenance paperwork that is easier to file and defend.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center justify-center px-8 py-3.5 text-base"
              >
                Book a Demo →
              </Link>
              <p className="text-sm text-text-muted sm:pl-2">
                We will walk through live AI workflows on your use cases.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pillars */}
      <section className="max-w-5xl mx-auto px-8 lg:px-16 py-20 md:py-28">
        <AnimatedSection className="text-center mb-14 md:mb-16">
          <p
            className="font-mono text-xs uppercase tracking-[0.2em] mb-4"
            style={{ color: "#ff7a1a" }}
          >
            What AI does today
          </p>
          <h2
            className="font-display leading-[1.05] mb-4"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
          >
            Three pillars of AI automation
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Each capability is designed for real shop floors and real billing —
            visionary where it helps, grounded where it matters.
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {pillars.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.07}>
              <GlassCard className="p-8 h-full flex flex-col relative overflow-hidden">
                <div
                  className="absolute inset-0 pointer-events-none opacity-[0.35]"
                  style={{
                    background:
                      "linear-gradient(165deg, rgba(255,122,26,0.06) 0%, transparent 55%)",
                  }}
                />
                <div className="relative flex items-start gap-3 mb-4">
                  {p.icon}
                  <h3 className="text-lg font-bold text-text-primary leading-snug">
                    {p.title}
                  </h3>
                </div>
                <p className="relative text-sm text-text-muted leading-relaxed flex-1">
                  {p.description}
                </p>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Workflow strip */}
      <section
        className="py-20 md:py-28 border-y"
        style={{
          borderColor: "rgba(180,200,255,0.05)",
          background: "rgba(180,200,255,0.012)",
        }}
      >
        <div className="max-w-5xl mx-auto px-8 lg:px-16">
          <AnimatedSection className="text-center mb-14 md:mb-16">
            <p
              className="font-mono text-xs uppercase tracking-[0.2em] mb-4"
              style={{ color: "#ff7a1a" }}
            >
              End-to-end flow
            </p>
            <h2
              className="font-display leading-[1.05] mb-4"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
            >
              From POD upload to invoice and report
            </h2>
            <p className="text-text-muted max-w-xl mx-auto">
              One continuous path — AI accelerates the middle; owners keep the
              gates at the end.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-7 gap-8 md:gap-4">
            {workflowSteps.map((step, i) => (
              <Fragment key={step.title}>
                <AnimatedSection delay={i * 0.09} className="md:col-span-1">
                  <GlassCard className="p-6 md:p-7 h-full" hover={false}>
                    <p
                      className="font-mono text-[0.65rem] uppercase tracking-[0.2em] mb-3"
                      style={{ color: "rgba(255,122,26,0.85)" }}
                    >
                      Step {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="text-base font-bold text-text-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {step.description}
                    </p>
                  </GlassCard>
                </AnimatedSection>
                {i < workflowSteps.length - 1 && (
                  <div
                    className="hidden md:flex items-center justify-center self-center md:col-span-1"
                    aria-hidden="true"
                  >
                    <ChevronRight
                      className="w-6 h-6"
                      style={{ color: "rgba(255,122,26,0.35)" }}
                    />
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Business outcomes */}
      <section className="max-w-5xl mx-auto px-8 lg:px-16 py-20 md:py-28">
        <AnimatedSection className="text-center mb-14 md:mb-16">
          <p
            className="font-mono text-xs uppercase tracking-[0.2em] mb-4"
            style={{ color: "#ff7a1a" }}
          >
            Business outcomes
          </p>
          <h2
            className="font-display leading-[1.05] mb-4"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
          >
            What changes for your operation
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            We do not quote fabricated ROI percentages — every fleet is
            different. Here is what teams typically gain when the busywork
            shrinks.
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {outcomes.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.08}>
              <GlassCard className="p-8 h-full">
                <h3 className="text-lg font-bold text-text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {item.body}
                </p>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Trust / controls */}
      <section
        className="py-20 md:py-28 border-t"
        style={{
          borderColor: "rgba(180,200,255,0.05)",
          background: "rgba(180,200,255,0.008)",
        }}
      >
        <div className="max-w-5xl mx-auto px-8 lg:px-16">
          <AnimatedSection className="text-center mb-14 md:mb-16">
            <p
              className="font-mono text-xs uppercase tracking-[0.2em] mb-4"
              style={{ color: "#ff7a1a" }}
            >
              Trust & controls
            </p>
            <h2
              className="font-display leading-[1.05] mb-4"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
            >
              Built for owners who still sign the checks
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Automation should reduce risk, not hide it. Detours keeps
              approval and visibility in your hands.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {trustPoints.map((t, i) => (
              <AnimatedSection key={t.title} delay={i * 0.08}>
                <GlassCard className="p-8 h-full">
                  <div className="flex items-start gap-3 mb-3">
                    {t.icon}
                    <h3 className="text-base font-bold text-text-primary leading-snug">
                      {t.title}
                    </h3>
                  </div>
                  <p className="text-sm text-text-muted leading-relaxed pl-0 md:pl-8">
                    {t.body}
                  </p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <AnimatedSection>
        <section className="max-w-5xl mx-auto px-8 lg:px-16 pb-24 md:pb-28 pt-4">
          <div
            className="relative rounded-2xl p-12 md:p-14 text-center overflow-hidden glass"
            style={{
              boxShadow:
                "0 0 0 1px rgba(180,200,255,0.06) inset, 0 24px 80px rgba(0,0,0,0.25)",
            }}
          >
            <div className="absolute inset-0 star-field opacity-35 pointer-events-none rounded-2xl" />
            <div
              className="absolute inset-0 pointer-events-none rounded-2xl"
              style={{
                background:
                  "radial-gradient(ellipse 70% 55% at 50% 100%, rgba(255,122,26,0.11) 0%, transparent 65%)",
              }}
            />
            <div className="relative">
              <p
                className="font-mono text-xs uppercase tracking-[0.2em] mb-5"
                style={{ color: "#ff7a1a" }}
              >
                See it live
              </p>
              <h2
                className="font-display leading-[1.05] mb-4"
                style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)" }}
              >
                Ready to put AI to work in your fleet?
              </h2>
              <p className="text-text-muted mb-10 max-w-lg mx-auto leading-relaxed">
                Book a demo and we will show POD, invoicing, and maintenance
                workflows with AI assistance — on your timeline, with your
                questions answered directly.
              </p>
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center justify-center px-8 py-3.5 text-base"
              >
                Book a Demo →
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
