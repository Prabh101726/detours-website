"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** No enter animation — use for above-the-fold heroes */
  instant?: boolean;
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  instant = false,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(instant);

  useEffect(() => {
    if (instant) return;
    const el = ref.current;
    if (!el) return;

    // If IntersectionObserver is unavailable, just show.
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [instant]);

  if (instant) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
