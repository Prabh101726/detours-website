// app/page.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import HeroWidgets from "@/components/HeroWidgets";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";
import FeatureCard from "@/components/FeatureCard";

const featureStrip = [
  { icon: "📋", label: "Dispatch" },
  { icon: "📦", label: "POD" },
  { icon: "⛽", label: "Fuel" },
  { icon: "💰", label: "Payroll" },
  { icon: "🧾", label: "Invoicing" },
  { icon: "🔍", label: "Inspections" },
];

const features = [
  { icon: "📋", title: "Dispatch Jobs", description: "Assign jobs to drivers in seconds. Track status from dispatch to delivery in real time.", benefit: "Zero missed jobs" },
  { icon: "📦", title: "Proof of Delivery", description: "Drivers capture photos and signatures on their phone. PDF ready instantly.", benefit: "Dispute-proof records" },
  { icon: "⛽", title: "Fuel Tracking", description: "Log fuel receipts on the road. Track cost per kilometre across your whole fleet.", benefit: "Cut fuel waste" },
  { icon: "💰", title: "Driver Payroll", description: "Hourly, per-load, or per-tonne — auto-calculated every pay period.", benefit: "Pay faster, argue less" },
  { icon: "🧾", title: "HST Invoicing", description: "Generate professional CAD invoices with HST included. One click, PDF ready.", benefit: "Get paid faster" },
  { icon: "🔍", title: "Pre-Trip Inspections", description: "MTO-compliant pre-trip checklist logged per vehicle, per driver, every day.", benefit: "Stay MTO-compliant" },
];

const steps = [
  { num: "01", title: "Driver submits POD", desc: "Photo, signature, and delivery details captured on their phone — no paper." },
  { num: "02", title: "Owner reviews & dispatches", desc: "See all jobs, PODs, and trucks in one dashboard. Approve with one tap." },
  { num: "03", title: "Invoice sent — HST included", desc: "One-click invoice generation with your HST number, ready to email or download." },
];

const testimonials = [
  {
    quote: "Detours replaced three different spreadsheets. I can see all my trucks, payroll, and invoices from my phone.",
    name: "Owner-Operator",
    company: "Ontario Fleet, 8 trucks",
  },
  {
    quote: "The POD system alone saved us hours every week. Drivers love it — it took them 2 minutes to learn.",
    name: "Fleet Manager",
    company: "Ontario Fleet, 14 trucks",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="absolute inset-0 bg-orange-glow pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 py-24 w-full flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 bg-success/10 border border-success/20 text-success text-xs font-bold px-3 py-1.5 rounded-full mb-6"
            >
              ✓ Ontario fleet-ready
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary leading-tight mb-5"
            >
              Run Your Fleet.{" "}
              <span className="text-brand-orange">Not Paperwork.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-text-muted leading-relaxed mb-8 max-w-lg"
            >
              Dispatch, POD, fuel logs, driver payroll, and HST invoices —
              built for growing Ontario fleets.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link
                href="/contact"
                className="bg-brand-orange text-white font-bold px-7 py-3.5 rounded-xl text-base hover:bg-brand-orange-light transition-colors text-center"
              >
                Book a Demo →
              </Link>
              <a
                href="https://wa.me/1XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-whatsapp/10 border border-whatsapp/25 text-whatsapp font-bold px-7 py-3.5 rounded-xl text-base hover:bg-whatsapp/20 transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
            </motion.div>
          </div>
          <HeroWidgets />
        </div>
      </section>

      {/* ── Feature strip ── */}
      <AnimatedSection className="border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-wrap justify-center gap-6 md:gap-10">
          {featureStrip.map((f) => (
            <div key={f.label} className="flex items-center gap-2 text-sm text-text-muted">
              <span className="text-xl">{f.icon}</span>
              <span className="font-medium">{f.label}</span>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* ── Features grid ── */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <AnimatedSection className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-text-primary mb-3">
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
      <section className="bg-white/[0.02] border-y border-white/5 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-text-primary mb-3">
              How it works
            </h2>
            <p className="text-text-muted">Three steps from job assigned to invoice sent.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <AnimatedSection key={s.num} delay={i * 0.1}>
                <GlassCard className="p-7">
                  <span className="text-4xl font-black text-brand-orange/30 block mb-4">{s.num}</span>
                  <h3 className="text-lg font-bold text-text-primary mb-2">{s.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{s.desc}</p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Social proof ── */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <AnimatedSection className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-text-primary mb-3">
            Trusted by Ontario operators
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <GlassCard className="p-7">
                <p className="text-base text-text-primary leading-relaxed mb-5 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-bold text-text-primary">{t.name}</p>
                  <p className="text-xs text-text-muted">{t.company}</p>
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <AnimatedSection>
        <section className="max-w-6xl mx-auto px-6 pb-24">
          <GlassCard hover={false} className="p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-black text-text-primary mb-3">
                Ready to simplify your fleet?
              </h2>
              <p className="text-text-muted mb-8">
                Book a demo and we&apos;ll show you how Detours fits your operation.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="bg-brand-orange text-white font-bold px-8 py-3.5 rounded-xl hover:bg-brand-orange-light transition-colors"
                >
                  Book a Demo →
                </Link>
                <a
                  href="https://wa.me/1XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-whatsapp/10 border border-whatsapp/25 text-whatsapp font-bold px-8 py-3.5 rounded-xl hover:bg-whatsapp/20 transition-colors"
                >
                  💬 Chat on WhatsApp
                </a>
              </div>
            </div>
          </GlassCard>
        </section>
      </AnimatedSection>
    </>
  );
}
