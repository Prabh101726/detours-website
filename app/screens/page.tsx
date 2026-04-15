import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightLeft, BellRing, FileCheck2, Route, Smartphone, Truck } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Screens — Detours Fleet Management",
  description:
    "See how driver updates flow to the owner dashboard in real time with the Detours screen interface.",
};

const flowEvents = [
  {
    icon: <Route className="w-4 h-4" aria-hidden="true" />,
    title: "Job accepted by driver",
    detail: "Dispatcher sees status switch from Assigned to In Progress instantly.",
  },
  {
    icon: <Truck className="w-4 h-4" aria-hidden="true" />,
    title: "Delivery checkpoint posted",
    detail: "GPS checkpoint and ETA changes sync to owner view automatically.",
  },
  {
    icon: <FileCheck2 className="w-4 h-4" aria-hidden="true" />,
    title: "POD uploaded from phone",
    detail: "Photo and signature arrive on the dashboard and invoice queue in one stream.",
  },
];

export default function ScreensPage() {
  return (
    <div className="relative isolate max-w-5xl mx-auto px-8 lg:px-16 pt-10 pb-28">
      <AnimatedSection instant className="text-center mb-14 pt-1">
        <p
          className="font-mono text-xs uppercase tracking-[0.2em] mb-5"
          style={{ color: "#ff7a1a" }}
        >
          Product screens
        </p>
        <h1
          className="font-display leading-[1.08] mb-6"
          style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)" }}
        >
          Driver to owner.
          <br />
          <span style={{ color: "#ff7a1a" }}>One live workflow.</span>
        </h1>
        <p className="text-lg text-text-muted max-w-2xl mx-auto">
          A clean interface for drivers on mobile and a real-time operations view for owners.
          Every update travels as one connected data flow.
        </p>
      </AnimatedSection>

      <AnimatedSection className="mb-14">
        <section className="glass p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-8">
            <article className="glass-sm p-5">
              <div className="flex items-center gap-2 mb-4">
                <Smartphone className="w-4 h-4" style={{ color: "#ff7a1a" }} aria-hidden="true" />
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-muted">
                  Driver screen
                </p>
              </div>
              <div className="rounded-xl border border-[rgba(180,200,255,0.10)] bg-[rgba(8,8,16,0.85)] p-4">
                <p className="text-sm text-text-primary font-semibold mb-3">Load #ON-2481</p>
                <div className="space-y-2.5 text-sm">
                  <div className="rounded-lg bg-[rgba(255,122,26,0.12)] border border-[rgba(255,122,26,0.25)] px-3 py-2">
                    POD photo attached
                  </div>
                  <div className="rounded-lg bg-[rgba(180,200,255,0.05)] border border-[rgba(180,200,255,0.10)] px-3 py-2">
                    Signature captured
                  </div>
                  <div className="rounded-lg bg-[rgba(180,200,255,0.05)] border border-[rgba(180,200,255,0.10)] px-3 py-2">
                    Delivered at 3:42 PM
                  </div>
                </div>
              </div>
            </article>

            <div className="hidden lg:flex items-center justify-center" aria-hidden="true">
              <div className="data-flow-rail">
                <div className="data-flow-packet data-flow-packet--one" />
                <div className="data-flow-packet data-flow-packet--two" />
                <ArrowRightLeft className="w-4 h-4 data-flow-icon" />
              </div>
            </div>

            <article className="glass-sm p-5">
              <div className="flex items-center gap-2 mb-4">
                <BellRing className="w-4 h-4" style={{ color: "#ff7a1a" }} aria-hidden="true" />
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-muted">
                  Owner dashboard
                </p>
              </div>
              <div className="rounded-xl border border-[rgba(180,200,255,0.10)] bg-[rgba(8,8,16,0.85)] p-4">
                <p className="text-sm text-text-primary font-semibold mb-3">Live operations feed</p>
                <ul className="space-y-2.5 text-sm text-text-muted">
                  <li className="rounded-lg bg-[rgba(180,200,255,0.05)] border border-[rgba(180,200,255,0.10)] px-3 py-2">
                    POD received - ready for review
                  </li>
                  <li className="rounded-lg bg-[rgba(180,200,255,0.05)] border border-[rgba(180,200,255,0.10)] px-3 py-2">
                    Invoice draft auto-created
                  </li>
                  <li className="rounded-lg bg-[rgba(34,197,94,0.10)] border border-[rgba(34,197,94,0.30)] px-3 py-2 text-[#86efac]">
                    Dispatch cycle complete
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection className="mb-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {flowEvents.map((event, index) => (
            <AnimatedSection key={event.title} delay={index * 0.08}>
              <article className="glass p-6 h-full">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{
                    background: "rgba(255,122,26,0.10)",
                    border: "1px solid rgba(255,122,26,0.22)",
                    color: "#ff7a1a",
                  }}
                >
                  {event.icon}
                </div>
                <h2 className="text-base font-semibold text-text-primary mb-2">{event.title}</h2>
                <p className="text-sm text-text-muted leading-relaxed">{event.detail}</p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="text-center">
        <h2
          className="font-display leading-none mb-4"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
        >
          Want this flow in your fleet?
        </h2>
        <p className="text-text-muted mb-8 max-w-xl mx-auto">
          We can walk through the exact driver and owner screens in a live product demo.
        </p>
        <Link href="/contact" className="btn-primary inline-flex items-center justify-center px-8 py-3.5 text-base">
          Book a Demo →
        </Link>
      </AnimatedSection>
    </div>
  );
}
