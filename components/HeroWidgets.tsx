"use client";
import { useCountUp } from "@/lib/useCountUp";

const widgets = [
  {
    label: "Revenue MTD",
    value: 84200,
    display: (v: number) => `$${Math.round(v).toLocaleString("en-CA")}`,
    unit: "CAD",
    sub: "↑ 18% vs last month",
    subColor: "#15803d",
    accent: "rgba(34,197,94,0.08)",
    accentBorder: "rgba(34,197,94,0.18)",
  },
  {
    label: "Trucks Active",
    value: 12,
    display: (v: number) => `${Math.round(v)} / 14`,
    unit: "",
    sub: "2 scheduled off",
    subColor: "#ff6a00",
    accent: "rgba(255,106,0,0.07)",
    accentBorder: "rgba(255,106,0,0.18)",
  },
  {
    label: "Open PODs",
    value: 7,
    display: (v: number) => `${Math.round(v)}`,
    unit: "",
    sub: "Ready to invoice",
    subColor: "#74747e",
    accent: "rgba(20,18,14,0.04)",
    accentBorder: "rgba(20,18,14,0.10)",
  },
];

function AnimatedNumber({
  target,
  display,
  delay,
}: {
  target: number;
  display: (v: number) => string;
  delay: number;
}) {
  const [value] = useCountUp({ target, duration: 1200, delay });
  return <>{display(value)}</>;
}

export default function HeroWidgets() {
  return (
    <div className="flex flex-col gap-3.5 w-full md:w-52">
      {widgets.map((w, i) => (
        <div
          key={w.label}
          className="glass-cosmic rounded-2xl p-4 hero-slide-in"
          style={{
            background: `linear-gradient(135deg, ${w.accent}, rgba(255,255,255,0.5))`,
            borderColor: w.accentBorder,
            animationDelay: `${0.55 + i * 0.15}s`,
          }}
        >
          <p
            className="font-mono text-[10px] uppercase tracking-[0.18em] mb-2"
            style={{ color: "#64748b" }}
          >
            {w.label}
          </p>
          <div className="flex items-baseline gap-1.5 mb-1">
            <p className="text-2xl font-bold text-text-primary">
              <AnimatedNumber
                target={w.value}
                display={w.display}
                delay={(0.6 + i * 0.15) * 1000}
              />
            </p>
            {w.unit ? (
              <span className="font-mono text-xs" style={{ color: "#64748b" }}>
                {w.unit}
              </span>
            ) : null}
          </div>
          <p className="font-mono text-[11px]" style={{ color: w.subColor }}>
            {w.sub}
          </p>
        </div>
      ))}
    </div>
  );
}
