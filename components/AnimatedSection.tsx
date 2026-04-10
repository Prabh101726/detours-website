"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** No enter animation — use for above-the-fold heroes so large display type isn’t shifted/clipped under the fixed nav */
  instant?: boolean;
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  instant = false,
}: AnimatedSectionProps) {
  if (instant) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -40px 0px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
