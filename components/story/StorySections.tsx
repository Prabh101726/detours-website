import Link from "next/link";
import type { ReactNode } from "react";
import { StaggerHeading, Reveal } from "./Stagger";
import {
  Apple,
  ArrowDown,
  ArrowRight,
  MapPin,
  Radio,
  ReceiptText,
  Satellite,
  ShieldCheck,
  Wrench,
  CalendarClock,
  Activity,
} from "lucide-react";

const APP_STORE_URL = "https://apps.apple.com/app/id6769499953";

function HudChip({
  className = "",
  icon,
  label,
  value,
  float = 0,
}: {
  className?: string;
  icon: ReactNode;
  label: string;
  value: string;
  float?: number;
}) {
  return (
    <div
      className={`glass-sm animate-float-orb flex items-center gap-3 px-4 py-3 ${className}`}
      style={{ animationDelay: `${float}s` }}
    >
      <span className="text-brand-orange">{icon}</span>
      <span className="flex flex-col">
        <span className="hud-label">{label}</span>
        <span className="font-mono text-[13px] text-text-primary">{value}</span>
      </span>
    </div>
  );
}

function ActKicker({ n, label }: { n: string; label: string }) {
  return (
    <Reveal className="mb-6 flex items-center gap-4">
      <span className="hud-label--orange hud-label">{n}</span>
      <span className="h-px w-14 bg-brand-orange/60" />
      <span className="hud-label">{label}</span>
    </Reveal>
  );
}

function ActHero() {
  return (
    <section className="relative z-10 flex min-h-svh flex-col justify-center px-6 md:px-12 lg:px-20">
      <div className="mx-auto w-full max-w-7xl">
        <Reveal delay={0.1} className="mb-8">
          <p className="hud-label flex flex-wrap items-center gap-3">
            <span className="status-dot inline-block" />
            DETOURS FLEET OPS // ONTARIO · CANADA
          </p>
        </Reveal>

        <StaggerHeading
          as="h1"
          lines={["THE OPERATING SYSTEM", "FOR ^AGGREGATE FLEETS"]}
          className="text-[clamp(2.6rem,6.8vw,6.5rem)] text-text-primary"
        />

        <Reveal delay={0.35} className="mt-8 max-w-xl">
          <p className="text-lg leading-relaxed text-text-muted">
            Dispatch, live tracking, proof-of-delivery, and HST invoicing — your
            gravel, dump, and live-bottom fleet on one command deck. Built for
            5–500 trucks.
          </p>
        </Reveal>

        <Reveal delay={0.5} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex min-h-12 items-center gap-2.5 px-7 py-3.5 text-[15px]"
          >
            <Apple size={18} strokeWidth={2.2} />
            Download on the App Store
          </a>
          <Link
            href="/contact"
            className="btn-ghost inline-flex min-h-12 items-center gap-2.5 px-7 py-3.5 text-[15px]"
          >
            Book a demo
            <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>

      <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
        <HudChip
          className="absolute right-[8%] top-[24%]"
          icon={<Satellite size={16} />}
          label="GPS · LIVE"
          value="TRUCK 1408 · 68 KM/H"
          float={0.4}
        />
        <HudChip
          className="absolute right-[16%] top-[52%]"
          icon={<ReceiptText size={16} />}
          label="POD #98879"
          value="APPROVED · 39.42 T"
          float={1.6}
        />
        <HudChip
          className="absolute right-[6%] top-[72%]"
          icon={<Activity size={16} />}
          label="AGENT · BILLING"
          value="INVOICE DRAFTED $555.91"
          float={2.7}
        />
      </div>

      <Reveal
        delay={0.8}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <p className="hud-label flex flex-col items-center gap-3">
          SCROLL TO ENTER THE YARD
          <ArrowDown size={14} className="animate-float-orb text-brand-orange" />
        </p>
      </Reveal>
    </section>
  );
}

function ActDispatch() {
  return (
    <section className="relative z-10 flex min-h-[140vh] items-center px-6 md:px-12 lg:px-20">
      <div className="mx-auto flex w-full max-w-7xl justify-end">
        <div className="max-w-xl">
          <ActKicker n="01" label="DISPATCH" />
          <StaggerHeading
            lines={["JOBS LEAVE THE OFFICE", "BEFORE THE ^COFFEE", "GETS POURED"]}
            className="text-[clamp(2.6rem,6.5vw,5.5rem)] text-text-primary"
          />
          <Reveal delay={0.2} className="mt-7">
            <p className="text-lg leading-relaxed text-text-muted">
              A customer texts you a load. It lands in Detours as a structured
              job — material, tonnage, plant, dump site — and hits your
              driver&rsquo;s phone in seconds. No whiteboard. No 6&nbsp;AM phone
              tree.
            </p>
          </Reveal>
          <Reveal delay={0.35} className="mt-8">
            <div className="glass-cosmic max-w-md p-5">
              <div className="mb-3 flex items-center justify-between">
                <span className="hud-label--orange hud-label">INCOMING JOB</span>
                <span className="hud-label">07:02 AM</span>
              </div>
              <p className="font-mono text-sm leading-6 text-text-primary">
                LAIDLAW — 40 T SLAG
                <br />
                NANTICOKE → WOODSTOCK
                <br />
                FIRST LOAD 7:00 AM
              </p>
              <div className="mt-4 flex items-center gap-2 border-t border-border-dim pt-3">
                <MapPin size={14} className="text-brand-orange" />
                <span className="hud-label">ASSIGN DRIVER →</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ActHaul() {
  return (
    <section className="relative z-10 flex min-h-[150vh] items-center px-6 md:px-12 lg:px-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-xl">
          <ActKicker n="02" label="LIVE TRACKING" />
          <StaggerHeading
            lines={["EVERY TRUCK. ^LIVE.", "NO CHECK-IN CALLS"]}
            className="text-[clamp(2.6rem,6.5vw,5.5rem)] text-text-primary"
          />
          <Reveal delay={0.2} className="mt-7">
            <p className="text-lg leading-relaxed text-text-muted">
              Watch the whole fleet move on one map — position, speed, and cycle
              status off each driver&rsquo;s phone. You&rsquo;ll know a truck is
              stuck at the plant before the plant does.
            </p>
          </Reveal>
          <Reveal delay={0.35} className="mt-8 flex flex-wrap gap-3">
            <div className="glass-sm flex items-center gap-3 px-4 py-3">
              <Radio size={15} className="text-brand-orange" />
              <span className="font-mono text-[13px]">MOVING · 68 KM/H</span>
            </div>
            <div className="glass-sm flex items-center gap-3 px-4 py-3">
              <MapPin size={15} className="text-brand-orange" />
              <span className="font-mono text-[13px]">PLANT WAIT · 12 MIN</span>
            </div>
            <div className="glass-sm flex items-center gap-3 px-4 py-3">
              <Activity size={15} className="text-brand-orange" />
              <span className="font-mono text-[13px]">CYCLE 4 OF 6</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ActPod() {
  return (
    <section className="relative z-10 flex min-h-[150vh] items-center px-6 md:px-12 lg:px-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <ActKicker n="03" label="POD → INVOICE" />
          </div>
          <StaggerHeading
            lines={["FROM DUMP GATE", "TO ^INVOICE.", "UNTOUCHED BY HANDS"]}
            className="text-[clamp(2.6rem,6.5vw,5.5rem)] text-text-primary"
          />
          <Reveal delay={0.2} className="mt-7">
            <p className="text-lg leading-relaxed text-text-muted">
              The driver snaps the scale ticket. AI reads it, matches the route,
              applies your rates and fuel surcharge, and drafts the invoice —
              HST done right, to the cent.
            </p>
          </Reveal>

          <Reveal delay={0.35} className="mt-10">
            <div className="glass-cosmic mx-auto grid max-w-2xl grid-cols-2 gap-y-8 p-8 md:grid-cols-4">
              <div>
                <p
                  className="font-mono text-2xl font-semibold text-text-primary"
                  data-ticker
                  data-value="39.42"
                  data-decimals="2"
                  data-suffix=" T"
                >
                  39.42 T
                </p>
                <p className="hud-label mt-2">TICKET WEIGHT</p>
              </div>
              <div>
                <p
                  className="font-mono text-2xl font-semibold text-text-primary"
                  data-ticker
                  data-value="12"
                  data-decimals="2"
                  data-prefix="$"
                  data-suffix="/T"
                >
                  $12.00/T
                </p>
                <p className="hud-label mt-2">ROUTE RATE</p>
              </div>
              <div>
                <p
                  className="font-mono text-2xl font-semibold text-text-primary"
                  data-ticker
                  data-value="13"
                  data-decimals="0"
                  data-suffix="%"
                >
                  13%
                </p>
                <p className="hud-label mt-2">HST APPLIED</p>
              </div>
              <div>
                <p
                  className="font-mono text-2xl font-semibold text-brand-orange"
                  data-ticker
                  data-value="555.91"
                  data-decimals="2"
                  data-prefix="$"
                >
                  $555.91
                </p>
                <p className="hud-label mt-2">INVOICE TOTAL</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const AGENTS = [
  {
    icon: <ReceiptText size={17} />,
    name: "BILLING",
    blurb: "Drafts settlements and invoices the moment a POD is approved.",
  },
  {
    icon: <ShieldCheck size={17} />,
    name: "COMPLIANCE",
    blurb: "Audits inspections daily. Flags trucks out of service before the MTO does.",
  },
  {
    icon: <Wrench size={17} />,
    name: "MAINTENANCE",
    blurb: "Predicts service needs across the fleet every week.",
  },
  {
    icon: <CalendarClock size={17} />,
    name: "DISPATCH",
    blurb: "Plans tomorrow's loads every evening and suggests assignments.",
  },
  {
    icon: <Activity size={17} />,
    name: "PULSE",
    blurb: "Ask your fleet anything — tonnage, revenue, who hauled what.",
  },
];

function ActAgents() {
  return (
    <section className="relative z-10 flex min-h-[150vh] items-center px-6 md:px-12 lg:px-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-xl">
          <ActKicker n="04" label="AI AGENTS" />
          <StaggerHeading
            lines={["FIVE ^AGENTS.", "ZERO BABYSITTING"]}
            className="text-[clamp(2.6rem,6.5vw,5.5rem)] text-text-primary"
          />
          <Reveal delay={0.2} className="mt-7">
            <p className="text-lg leading-relaxed text-text-muted">
              While you run trucks, five AI agents run the back office — on
              schedule, on their own, writing every action to an audit log you
              can read.
            </p>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {AGENTS.map((a, i) => (
            <Reveal key={a.name} delay={0.1 + i * 0.08}>
              <div className="glass h-full p-5 transition-colors duration-200 hover:border-brand-orange/40">
                <span className="text-brand-orange">{a.icon}</span>
                <p className="hud-label--orange hud-label mt-4">{a.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {a.blurb}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ActFinale() {
  return (
    <section className="relative z-10 flex min-h-[120vh] flex-col items-center justify-center px-6 text-center md:px-12">
      <StaggerHeading
        lines={["RUN THE WHOLE", "OPERATION FROM", "YOUR ^POCKET"]}
        className="text-[clamp(3rem,9vw,8.5rem)] text-text-primary"
      />
      <Reveal delay={0.3} className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex min-h-12 items-center gap-2.5 px-8 py-4 text-[15px]"
        >
          <Apple size={18} strokeWidth={2.2} />
          Get Detours Fleet Ops
        </a>
        <Link
          href="/contact"
          className="btn-ghost inline-flex min-h-12 items-center gap-2.5 px-8 py-4 text-[15px]"
        >
          Talk to us
          <ArrowRight size={16} />
        </Link>
      </Reveal>
      <Reveal delay={0.5} className="mt-12">
        <p className="hud-label">
          DETOURS FLEET OPS // 5–500 TRUCKS // BUILT IN ONTARIO
        </p>
      </Reveal>
    </section>
  );
}

/** Server-rendered homepage story — visible in initial HTML for SEO and CLS. */
export default function StorySections() {
  return (
    <>
      <ActHero />
      <ActDispatch />
      <ActHaul />
      <ActPod />
      <ActAgents />
      <ActFinale />
    </>
  );
}
