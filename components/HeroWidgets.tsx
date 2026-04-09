// components/HeroWidgets.tsx
"use client";
import { motion } from "framer-motion";

const widgets = [
  { label: "Revenue MTD", value: "$84,200", sub: "↑ 18% vs last month", subColor: "text-success" },
  { label: "Trucks Active", value: "12 / 14", sub: "2 scheduled off", subColor: "text-brand-orange" },
  { label: "Open PODs", value: "7", sub: "Ready to invoice", subColor: "text-text-subtle" },
];

export default function HeroWidgets() {
  return (
    <div className="flex flex-col gap-4 w-full md:w-48">
      {widgets.map((w, i) => (
        <motion.div
          key={w.label}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 + i * 0.15, ease: "easeOut" }}
          className="glass-sm p-4"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-1">
            {w.label}
          </p>
          <p className="text-2xl font-black text-text-primary">{w.value}</p>
          <p className={`text-xs font-semibold mt-0.5 ${w.subColor}`}>{w.sub}</p>
        </motion.div>
      ))}
    </div>
  );
}
