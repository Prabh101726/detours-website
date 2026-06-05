import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Camera,
  FileText,
  DollarSign,
  MapPin,
  Mountain,
  ClipboardCheck,
  ShieldCheck,
  Wrench,
  Receipt,
  Route,
  MessageCircle,
  ArrowRight,
  Check,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "For Fleet Owners — Run Your Whole Fleet From One App",
  description:
    "Detours replaces the whiteboard, paper tickets and the office admin. POD, invoicing, payroll, live tracking, compliance and AI agents — built for Ontario gravel and dump fleets.",
  alternates: { canonical: "/fleet-owners" },
};

const problems = [
  {
    p: "Paper tickets get lost",
    s: "Digital POD with a photo.",
    d: "Drivers snap the ticket the moment the load drops — nothing gets wet, lost, or left in the truck.",
  },
  {
    p: "Invoicing takes days",
    s: "Same-day, AI-built invoices.",
    d: "Approved loads turn into accurate invoices with HST and fuel surcharge in seconds — cash stops sitting in the truck.",
  },
  {
    p: "Payroll & owner-op settlements are a mess",
    s: "Automatic settlements.",
    d: "Driver pay and owner-operator payouts are calculated per load — no spreadsheets, no double-pays, full audit trail.",
  },
  {
    p: "You can't see your trucks",
    s: "Live GPS tracking.",
    d: "Every truck on a live map, plus loads and hours in real time — not at the end of the week.",
  },
  {
    p: "Compliance lives on a clipboard",
    s: "Digital pre-trip inspections.",
    d: "Signed inspections stored automatically, ready the second an MTO blitz happens.",
  },
  {
    p: "Breakdowns ambush you",
    s: "Predictive maintenance.",
    d: "Detours watches every truck and warns you before a unit goes down — not after it strands a load.",
  },
];

const pillars = [
  { icon: Camera, title: "Proof of Delivery", desc: "Photo tickets, weights, pickup → drop, auto-matched to the right customer and route." },
  { icon: FileText, title: "Invoicing", desc: "Same-day invoices with HST, fuel surcharge, and clean PDFs ready to send." },
  { icon: DollarSign, title: "Driver & OO Payroll", desc: "Per-load settlements for employees and owner-operators, with HST for contractors." },
  { icon: MapPin, title: "Live Tracking", desc: "Real-time map of every truck, every load, every hour worked." },
  { icon: Mountain, title: "Asphalt Haul Cycles", desc: "Plant → site cycle tracking with loads, tonnes and timing built for aggregate hauling." },
  { icon: ClipboardCheck, title: "Inspections & Compliance", desc: "Digital pre-trip checks and MTO records, signed and stored automatically." },
];

const agents = [
  { icon: Receipt, tag: "Billing", title: "Billing Agent", desc: "The second a load is approved, it drafts the driver and owner-operator settlement — pay math, done." },
  { icon: ShieldCheck, tag: "Compliance", title: "Compliance Agent", desc: "Runs a daily MTO audit of your inspections and flags any truck that should be out of service." },
  { icon: Wrench, tag: "Maintenance", title: "Maintenance Agent", desc: "Scans your fleet weekly and predicts which trucks need service before they break down." },
  { icon: Route, tag: "Dispatch", title: "Dispatch Agent", desc: "Plans the next day's dispatch and rates, so the morning is already organized when you wake up." },
  { icon: MessageCircle, tag: "Pulse", title: "Pulse AI", desc: "Ask anything about your fleet in plain English — “how many loads today?” — and get an instant answer." },
];

const compliance = [
  "Digital pre-trip inspections signed on the driver's phone",
  "Daily AI audit of every truck's inspection record",
  "Automatic out-of-service flag when a truck fails — before it rolls",
  "Full MTO-ready history, exportable to PDF in one tap",
  "Nothing on paper, nothing lost when a blitz shows up",
];
const maintenance = [
  "Weekly AI scan of the whole fleet's service status",
  "Predicts the trucks most likely to need work next",
  "Maintenance alerts pushed straight to the owner",
  "Service history and odometer tracked per unit",
  "Catch a repair in the yard instead of on the shoulder of the 400",
];

const pricing = [
  { fleet: "5 trucks", tier: "Owner-operator / Starter", price: "$299", hi: true },
  { fleet: "10 trucks", tier: "Small fleet", price: "$550", hi: true },
  { fleet: "25 trucks", tier: "Growing", price: "$1,050", hi: false },
  { fleet: "50 trucks", tier: "Mid-size", price: "$1,800", hi: false },
  { fleet: "100 trucks", tier: "Large", price: "$3,200", hi: false },
  { fleet: "250 trucks", tier: "Major operator", price: "$7,500", hi: false },
];

const kicker =
  "font-mono text-xs uppercase tracking-[0.2em] mb-4 text-brand-orange";
const h2 = "font-display leading-none";
const h2size = { fontSize: "clamp(2.4rem, 5vw, 4rem)" } as const;

export default function FleetOwners() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="grid-lines-fade absolute inset-0 dot-grid opacity-40 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-8 lg:px-16 pt-24 pb-16 relative">
          <AnimatedSection instant>
            <p className={kicker}>For fleet owners</p>
            <h1
              className="font-display leading-[0.95]"
              style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
            >
              Run your whole fleet from{" "}
              <span className="text-brand-orange">one app.</span>
            </h1>
            <p className="text-text-muted max-w-2xl mt-6 text-lg">
              Built for Ontario gravel, dump and live-bottom fleets. Dispatch,
              hauls, proof-of-delivery, inspections, payroll and invoicing — plus
              a team of AI agents that handle the office work for you.
            </p>
            <div className="glass inline-flex items-center gap-3 mt-8 px-5 py-3.5 rounded-full">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-orange glow-orange" />
              <span className="font-mono text-sm">
                Replace the whiteboard, the paper tickets, and the{" "}
                <b className="text-brand-orange-ink">$5,000/month office admin.</b>
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Problem → Solution ── */}
      <section className="max-w-5xl mx-auto px-8 lg:px-16 py-20">
        <AnimatedSection className="mb-12">
          <p className={kicker}>The problem we solve</p>
          <h2 className={h2} style={h2size}>
            Hauling makes money.{" "}
            <span className="text-brand-orange">Paperwork loses it.</span>
          </h2>
          <p className="text-text-muted max-w-2xl mt-4">
            Every load has to be ticketed, weighed, approved, billed, paid out
            and logged for compliance. Miss one step and you lose money or fail
            an audit. Detours closes every gap — automatically.
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {problems.map((row, i) => (
            <AnimatedSection key={row.p} delay={(i % 2) * 0.08}>
              <div className="glass rounded-2xl overflow-hidden h-full">
                <div className="px-6 py-5 border-b border-dashed border-border-subtle">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted mb-1.5">
                    Problem
                  </p>
                  <h3 className="font-display text-2xl tracking-wide">{row.p}</h3>
                </div>
                <div className="px-6 py-5 flex gap-3">
                  <ArrowRight className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                  <p className="text-[15px] text-text-primary">
                    <b>{row.s}</b>{" "}
                    <span className="text-text-muted">{row.d}</span>
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── Everything in one place ── */}
      <section
        className="py-20 border-y border-border-subtle"
        style={{ background: "rgba(255,255,255,0.3)" }}
      >
        <div className="max-w-5xl mx-auto px-8 lg:px-16">
          <AnimatedSection className="mb-12">
            <p className={kicker}>Everything in one place</p>
            <h2 className={h2} style={h2size}>
              Your whole back office,{" "}
              <span className="text-brand-orange">in your pocket.</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pillars.map((f, i) => (
              <AnimatedSection key={f.title} delay={(i % 3) * 0.07}>
                <div className="glass rounded-2xl p-6 h-full transition-transform hover:-translate-y-1">
                  <f.icon className="w-6 h-6 text-brand-orange" />
                  <h3 className="text-lg font-bold mt-4 mb-2">{f.title}</h3>
                  <p className="text-sm text-text-muted">{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI agents ── */}
      <section className="max-w-5xl mx-auto px-8 lg:px-16 py-20">
        <AnimatedSection className="mb-12">
          <p className={kicker}>Your AI back office</p>
          <h2 className={h2} style={h2size}>
            Five AI agents working your office —{" "}
            <span className="text-brand-orange">24/7.</span>
          </h2>
          <p className="text-text-muted max-w-2xl mt-4">
            Detours doesn&apos;t just store your data. A team of AI agents
            actually does the work — billing, compliance, maintenance, dispatch
            and answering your questions — so you don&apos;t need to hire for it.
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {agents.map((a, i) => (
            <AnimatedSection key={a.title} delay={(i % 5) * 0.06}>
              <div className="glass rounded-2xl p-5 h-full relative overflow-hidden transition-transform hover:-translate-y-1">
                <span className="absolute top-0 left-0 right-0 h-[3px] bg-brand-orange" />
                <a.icon className="w-6 h-6 text-brand-orange" />
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-brand-orange-ink mt-3">
                  {a.tag}
                </p>
                <h3 className="text-lg font-bold mb-2">{a.title}</h3>
                <p className="text-[13px] text-text-muted">{a.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── Compliance + Maintenance ── */}
      <section
        className="py-20 border-y border-border-subtle"
        style={{ background: "rgba(255,255,255,0.3)" }}
      >
        <div className="max-w-5xl mx-auto px-8 lg:px-16">
          <AnimatedSection className="mb-12">
            <p className={kicker}>Stay legal · Stay running</p>
            <h2 className={h2} style={h2size}>
              Compliance and maintenance,{" "}
              <span className="text-brand-orange">handled.</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: ShieldCheck, title: "Compliance", items: compliance },
              { icon: Wrench, title: "Maintenance", items: maintenance },
            ].map((col, i) => (
              <AnimatedSection key={col.title} delay={i * 0.1}>
                <div className="glass rounded-2xl p-8 h-full">
                  <div className="w-12 h-12 rounded-xl bg-brand-orange grid place-items-center mb-5 glow-orange">
                    <col.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display text-3xl tracking-wide mb-4">
                    {col.title}
                  </h3>
                  <ul className="flex flex-col gap-2.5">
                    {col.items.map((it) => (
                      <li key={it} className="flex gap-2.5 text-[15px] text-text-primary">
                        <Check className="w-4 h-4 text-brand-orange flex-shrink-0 mt-1" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="max-w-5xl mx-auto px-8 lg:px-16 py-20">
        <AnimatedSection className="mb-10">
          <p className={kicker}>Simple pricing</p>
          <h2 className={h2} style={h2size}>
            One flat price per fleet.{" "}
            <span className="text-brand-orange">Less than one admin.</span>
          </h2>
          <p className="text-text-muted max-w-2xl mt-4">
            No per-seat games, no setup fees. Pick your fleet size — the bigger
            you run, the better the value.
          </p>
        </AnimatedSection>
        <AnimatedSection>
          <div className="glass rounded-2xl overflow-hidden">
            <div
              className="grid grid-cols-2 px-7 py-4 font-mono text-[10.5px] uppercase tracking-[0.18em] text-brand-orange-ink font-bold border-b border-border-subtle"
              style={{ background: "rgba(255,106,0,0.05)" }}
            >
              <span>Fleet size</span>
              <span className="text-right">Per month</span>
            </div>
            {pricing.map((r) => (
              <div
                key={r.fleet}
                className="grid grid-cols-2 px-7 py-4 items-center border-b border-border-dim last:border-b-0"
                style={r.hi ? { background: "rgba(255,106,0,0.06)" } : undefined}
              >
                <div>
                  <p className="font-display text-xl tracking-wide leading-none">
                    {r.fleet}
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-text-muted mt-1">
                    {r.tier}
                  </p>
                </div>
                <p className="font-mono text-2xl font-bold text-right tabular-nums">
                  {r.price}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.08}>
          <div className="glass rounded-2xl mt-4 px-7 py-6 font-display text-2xl md:text-3xl tracking-wide uppercase leading-tight">
            Costs less than one office admin —{" "}
            <span className="text-brand-orange">and never takes a day off.</span>
          </div>
        </AnimatedSection>
      </section>

      {/* ── What's coming: Pulse System of Action + Hermes ── */}
      <section
        className="py-20 border-y border-border-subtle"
        style={{ background: "rgba(255,255,255,0.3)" }}
      >
        <div className="max-w-5xl mx-auto px-8 lg:px-16">
          <AnimatedSection className="mb-12">
            <p className={kicker}>What&apos;s coming next</p>
            <h2 className={h2} style={h2size}>
              From answers to{" "}
              <span className="text-brand-orange">actions.</span>
            </h2>
            <p className="text-text-muted max-w-2xl mt-4">
              Today Pulse tells you what&apos;s happening. Next, it acts — and
              your fleet plugs into the chat apps your drivers already use every
              day.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AnimatedSection>
              <div className="glass rounded-2xl p-8 h-full">
                <span className="inline-block font-mono text-[10px] uppercase tracking-[0.16em] text-brand-orange-ink border border-border-subtle rounded-full px-3 py-1.5 mb-4" style={{ background: "rgba(255,106,0,0.06)" }}>
                  Pulse · System of Action
                </span>
                <h3 className="font-display text-3xl tracking-wide mb-3">
                  Pulse that <span className="text-brand-orange">does</span>, not
                  just answers.
                </h3>
                <p className="text-text-muted mb-5">
                  Pulse AI is evolving from answering questions into running tasks
                  for you. Tell it what you want and it handles the steps —
                  approve loads, draft the invoice, notify a driver, flag a truck
                  — all from a single sentence.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["“Approve today's loads”", "“Invoice Laidlaw”", "“Send truck 12 to the pit”"].map((c) => (
                    <span key={c} className="glass-sm rounded-lg px-3 py-2 font-mono text-[11px]">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="glass rounded-2xl p-8 h-full">
                <span className="inline-block font-mono text-[10px] uppercase tracking-[0.16em] text-brand-orange-ink border border-border-subtle rounded-full px-3 py-1.5 mb-4" style={{ background: "rgba(255,106,0,0.06)" }}>
                  Hermes AI · Messaging
                </span>
                <h3 className="font-display text-3xl tracking-wide mb-3">
                  Your fleet on{" "}
                  <span className="text-brand-orange">WhatsApp &amp; Telegram.</span>
                </h3>
                <p className="text-text-muted mb-5">
                  Hermes AI connects Detours to the apps your team already lives
                  in. Drivers send a ticket photo over WhatsApp. You ask
                  &ldquo;how many loads today?&rdquo; in Telegram and get an
                  instant answer. Quick actions, no app required.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="glass-sm rounded-lg px-3 py-2 font-mono text-[11px] flex items-center gap-2">
                    <span style={{ color: "#25d366" }}>●</span> WhatsApp
                  </span>
                  <span className="glass-sm rounded-lg px-3 py-2 font-mono text-[11px] flex items-center gap-2">
                    <span style={{ color: "#2aabee" }}>●</span> Telegram
                  </span>
                  <span className="glass-sm rounded-lg px-3 py-2 font-mono text-[11px]">
                    Driver ↔ Office, instantly
                  </span>
                </div>
                <p className="mt-5 pt-5 border-t border-dashed border-border-subtle font-mono text-[13px] text-text-muted leading-relaxed">
                  <b className="text-text-primary">Driver</b> sends ticket photo
                  on WhatsApp → <b className="text-text-primary">Detours</b> logs
                  the load → <b className="text-text-primary">Owner</b> asks
                  &ldquo;loads today?&rdquo; on Telegram →{" "}
                  <b className="text-text-primary">answer in seconds.</b>
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-5xl mx-auto px-8 lg:px-16 py-24 text-center">
        <AnimatedSection>
          <div className="glass rounded-3xl px-8 py-16">
            <p className={`${kicker} flex justify-center`}>Get started</p>
            <h2 className="font-display leading-none" style={{ fontSize: "clamp(2.6rem, 6vw, 5rem)" }}>
              Stop chasing <span className="text-brand-orange">paper.</span>
              <br />
              Start running the fleet.
            </h2>
            <p className="text-text-muted max-w-xl mx-auto mt-5">
              Live on the App Store now. See it on your own fleet in a 15-minute
              demo.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center px-8 py-3.5">
                Book a Demo →
              </Link>
              <a
                href="https://apps.apple.com/app/id6769499953"
                className="btn-ghost inline-flex items-center justify-center px-8 py-3.5"
              >
                Get Detours Fleet
              </a>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
