"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ClipboardList,
  Package,
  Fuel,
  DollarSign,
  FileText,
  ClipboardCheck,
  CheckCircle,
} from "lucide-react";
import HeroWidgets from "@/components/HeroWidgets";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";
import FeatureCard from "@/components/FeatureCard";
import Tesseract from "@/components/Tesseract";

const featureStrip = [
  { icon: ClipboardList, label: "Dispatch" },
  { icon: Package, label: "POD" },
  { icon: Fuel, label: "Fuel" },
  { icon: DollarSign, label: "Payroll" },
  { icon: FileText, label: "Invoicing" },
  { icon: ClipboardCheck, label: "Inspections" },
];

const features = [
  {
    icon: <ClipboardList className="w-5 h-5" style={{ color: "#ff7a1a" }} />,
    title: "Dispatch Jobs",
    description: "Assign jobs to drivers in seconds. Track status from dispatch to delivery in real time.",
    benefit: "Zero missed jobs",
  },
  {
    icon: <Package className="w-5 h-5" style={{ color: "#ff7a1a" }} />,
    title: "Proof of Delivery",
    description: "Drivers capture photos and signatures on their phone. PDF ready instantly.",
    benefit: "Dispute-proof records",
  },
  {
    icon: <Fuel className="w-5 h-5" style={{ color: "#ff7a1a" }} />,
    title: "Fuel Tracking",
    description: "Log fuel receipts on the road. Track cost per kilometre across your whole fleet.",
    benefit: "Cut fuel waste",
  },
  {
    icon: <DollarSign className="w-5 h-5" style={{ color: "#ff7a1a" }} />,
    title: "Driver Payroll",
    description: "Hourly, per-load, or per-tonne — auto-calculated every pay period.",
    benefit: "Pay faster, argue less",
  },
  {
    icon: <FileText className="w-5 h-5" style={{ color: "#ff7a1a" }} />,
    title: "HST Invoicing",
    description: "Generate professional CAD invoices with HST included. One click, PDF ready.",
    benefit: "Get paid faster",
  },
  {
    icon: <ClipboardCheck className="w-5 h-5" style={{ color: "#ff7a1a" }} />,
    title: "Pre-Trip Inspections",
    description: "MTO-compliant pre-trip checklist logged per vehicle, per driver, every day.",
    benefit: "Stay MTO-compliant",
  },
];

const steps = [
  {
    num: "01",
    title: "Driver submits POD",
    desc: "Photo, signature, and delivery details captured on their phone — no paper.",
  },
  {
    num: "02",
    title: "Owner reviews & dispatches",
    desc: "See all jobs, PODs, and trucks in one dashboard. Approve with one tap.",
  },
  {
    num: "03",
    title: "Invoice sent — HST included",
    desc: "One-click invoice generation with your HST number, ready to email or download.",
  },
];

const testimonials = [
  {
    quote:
      "Detours replaced three different spreadsheets. I can see all my trucks, payroll, and invoices from my phone.",
    name: "Owner-Operator",
    company: "Ontario Fleet, 8 trucks",
  },
  {
    quote:
      "The POD system alone saved us hours every week. Drivers love it — it took them 2 minutes to learn.",
    name: "Fleet Manager",
    company: "Ontario Fleet, 14 trucks",
  },
];

const whatsappSvg = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Star field */}
        <div className="animate-star-pulse absolute inset-0 star-field opacity-60 pointer-events-none" />

        {/* Dot grid */}
        <div className="grid-lines-fade absolute inset-0 dot-grid opacity-20 pointer-events-none" />

        {/* Ambient cosmic glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            right: "-5%",
            top: "50%",
            transform: "translateY(-50%)",
            width: 760,
            height: 760,
            background:
              "radial-gradient(circle, rgba(255,122,26,0.08) 0%, rgba(100,149,237,0.04) 40%, transparent 68%)",
            borderRadius: "50%",
          }}
        />

        {/* Tesseract — desktop only */}
        <div
          className="absolute hidden md:block pointer-events-none"
          style={{
            right: "2%",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <Tesseract />
        </div>

        {/* Content */}
        <div className="relative max-w-5xl mx-auto px-8 lg:px-16 py-28 w-full flex flex-col md:flex-row items-center gap-12 md:gap-8">
          {/* Left copy */}
          <div className="flex-1 max-w-xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 mb-7"
            >
              <span
                className="inline-flex items-center gap-1.5 font-mono text-xs tracking-widest uppercase px-3 py-1.5 rounded-full"
                style={{
                  background: "rgba(34,197,94,0.08)",
                  border: "1px solid rgba(34,197,94,0.20)",
                  color: "#22c55e",
                }}
              >
                <CheckCircle className="w-3.5 h-3.5" aria-hidden="true" />
                Ontario fleet-ready
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="font-display leading-none mb-6"
              style={{ fontSize: "clamp(3.5rem, 8vw, 6.5rem)" }}
            >
              Run Your Fleet.{" "}
              <span style={{ color: "#ff7a1a" }}>Not Paperwork.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="text-lg leading-relaxed mb-9 max-w-md"
              style={{ color: "#64748b" }}
            >
              Dispatch, POD, fuel logs, driver payroll, and HST invoices —
              built for growing Ontario fleets.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.34 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center justify-center px-7 py-3.5 text-base font-bold"
              >
                Book a Demo →
              </Link>
              <a
                href="https://wa.me/1XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-bold transition-all duration-200 cursor-pointer"
                style={{
                  background: "rgba(37,211,102,0.08)",
                  border: "1px solid rgba(37,211,102,0.22)",
                  color: "#25d366",
                }}
              >
                {whatsappSvg}
                WhatsApp Us
              </a>
            </motion.div>
          </div>

          {/* Right — widgets */}
          <div className="w-full md:w-auto md:flex-shrink-0 relative z-10">
            <HeroWidgets />
          </div>
        </div>
      </section>

      {/* ── Marquee strip ── */}
      <div
        className="border-y overflow-hidden"
        style={{
          borderColor: "rgba(180,200,255,0.05)",
          background: "rgba(180,200,255,0.015)",
        }}
      >
        <div className="marquee-track py-5">
          {[...featureStrip, ...featureStrip, ...featureStrip, ...featureStrip].map(
            ({ icon: Icon, label }, i) => (
              <div
                key={i}
                className="flex items-center gap-3 whitespace-nowrap px-10"
              >
                <Icon className="w-4 h-4 flex-shrink-0" style={{ color: "#ff7a1a" }} />
                <span
                  className="font-mono text-xs uppercase tracking-[0.18em] font-medium"
                  style={{ color: "#64748b" }}
                >
                  {label}
                </span>
                <span style={{ color: "rgba(180,200,255,0.10)" }} className="ml-6">
                  ◆
                </span>
              </div>
            )
          )}
        </div>
      </div>

      {/* ── Features grid ── */}
      <section className="max-w-5xl mx-auto px-8 lg:px-16 py-28">
        <AnimatedSection className="text-center mb-16">
          <p
            className="font-mono text-xs uppercase tracking-[0.2em] mb-4"
            style={{ color: "#ff7a1a" }}
          >
            Features
          </p>
          <h2
            className="font-display leading-none mb-4"
            style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)" }}
          >
            Everything your fleet needs
          </h2>
          <p className="text-text-muted max-w-xl mx-auto">
            One app. Every workflow. No more spreadsheets, WhatsApp chains, or paper logs.
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <AnimatedSection key={f.title} delay={i * 0.07}>
              <FeatureCard {...f} />
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── How it works ── */}
      <section
        className="py-28 border-y"
        style={{
          borderColor: "rgba(180,200,255,0.05)",
          background: "rgba(180,200,255,0.012)",
        }}
      >
        <div className="max-w-5xl mx-auto px-8 lg:px-16">
          <AnimatedSection className="text-center mb-16">
            <p
              className="font-mono text-xs uppercase tracking-[0.2em] mb-4"
              style={{ color: "#ff7a1a" }}
            >
              How It Works
            </p>
            <h2
              className="font-display leading-none mb-4"
              style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)" }}
            >
              Three steps. That&apos;s it.
            </h2>
            <p className="text-text-muted">From job assigned to invoice sent.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <AnimatedSection key={s.num} delay={i * 0.1}>
                <GlassCard className="p-8 h-full">
                  <span
                    className="font-display text-6xl block mb-5 leading-none"
                    style={{ color: "rgba(255,122,26,0.22)" }}
                  >
                    {s.num}
                  </span>
                  <h3 className="text-lg font-bold text-text-primary mb-3">
                    {s.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">{s.desc}</p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Social proof ── */}
      <section className="max-w-5xl mx-auto px-8 lg:px-16 py-28">
        <AnimatedSection className="text-center mb-16">
          <p
            className="font-mono text-xs uppercase tracking-[0.2em] mb-4"
            style={{ color: "#ff7a1a" }}
          >
            Testimonials
          </p>
          <h2
            className="font-display leading-none"
            style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)" }}
          >
            Trusted by Ontario operators
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <GlassCard className="p-8">
                <p className="text-base text-text-primary leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                    style={{ background: "rgba(255,122,26,0.14)", color: "#ff7a1a" }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-text-primary">{t.name}</p>
                    <p className="text-xs text-text-muted">{t.company}</p>
                  </div>
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <AnimatedSection>
        <section className="max-w-5xl mx-auto px-8 lg:px-16 pb-28">
          <div
            className="relative rounded-2xl p-14 text-center overflow-hidden"
            style={{
              background: "rgba(180,200,255,0.025)",
              border: "1px solid rgba(180,200,255,0.08)",
            }}
          >
            {/* Star field inside CTA */}
            <div className="absolute inset-0 star-field opacity-40 pointer-events-none rounded-2xl" />
            {/* Glow backdrop */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(255,122,26,0.10) 0%, transparent 70%)",
              }}
            />
            <div className="relative">
              <p
                className="font-mono text-xs uppercase tracking-[0.2em] mb-5"
                style={{ color: "#ff7a1a" }}
              >
                Get Started
              </p>
              <h2
                className="font-display leading-none mb-4"
                style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)" }}
              >
                Ready to simplify your fleet?
              </h2>
              <p className="text-text-muted mb-10 max-w-md mx-auto">
                Book a demo and we&apos;ll show you how Detours fits your operation.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center justify-center px-8 py-3.5 text-base"
                >
                  Book a Demo →
                </Link>
                <a
                  href="https://wa.me/1XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-base font-bold transition-all duration-200 cursor-pointer"
                  style={{
                    background: "rgba(37,211,102,0.08)",
                    border: "1px solid rgba(37,211,102,0.22)",
                    color: "#25d366",
                  }}
                >
                  {whatsappSvg}
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
