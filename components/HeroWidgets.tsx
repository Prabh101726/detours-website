// components/HeroWidgets.tsx
"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

const widgets = [
  {
    label: "Revenue MTD",
    value: 84200,
    display: (v: number) => `$${Math.round(v).toLocaleString("en-CA")}`,
    unit: "CAD",
    sub: "↑ 18% vs last month",
    subColor: "#22c55e",
    accent: "rgba(34,197,94,0.08)",
    accentBorder: "rgba(34,197,94,0.18)",
  },
  {
    label: "Trucks Active",
    value: 12,
    display: (v: number) => `${Math.round(v)} / 14`,
    unit: "",
    sub: "2 scheduled off",
    subColor: "#ff7a1a",
    accent: "rgba(255,122,26,0.07)",
    accentBorder: "rgba(255,122,26,0.18)",
  },
  {
    label: "Open PODs",
    value: 7,
    display: (v: number) => `${Math.round(v)}`,
    unit: "",
    sub: "Ready to invoice",
    subColor: "#94a3b8",
    accent: "rgba(180,200,255,0.04)",
    accentBorder: "rgba(180,200,255,0.10)",
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
  const v = useMotionValue(0);
  const rounded = useTransform(v, display);

  useEffect(() => {
    const controls = animate(v, target, {
      duration: 1.2,
      delay,
      ease: "easeOut",
    });
    return controls.stop;
  }, [v, target, delay]);

  return <motion.span>{rounded}</motion.span>;
}

export default function HeroWidgets() {
  return (
    <div className="flex flex-col gap-3.5 w-full md:w-52">
      {widgets.map((w, i) => (
        <motion.div
          key={w.label}
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.55 + i * 0.15, ease: "easeOut" }}
          className="glass-cosmic rounded-2xl p-4"
          style={{
            background: `linear-gradient(135deg, ${w.accent}, rgba(1,1,8,0.6))`,
            borderColor: w.accentBorder,
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
              <AnimatedNumber target={w.value} display={w.display} delay={0.6 + i * 0.15} />
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
        </motion.div>
      ))}
    </div>
  );
}
