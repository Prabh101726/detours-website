"use client";
import { useEffect, useRef, useState } from "react";

interface UseCountUpOptions {
  target: number;
  duration?: number;
  delay?: number;
  /** When true, animation only runs once the element enters the viewport. */
  whenVisible?: boolean;
  /** Threshold passed to IntersectionObserver (only used with whenVisible). */
  threshold?: number;
}

// easeOutCubic — matches the "easeOut" used previously
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * Lightweight count-up. Honours prefers-reduced-motion (jumps straight to target).
 * Returns [value, ref]. Attach `ref` only if you passed `whenVisible`.
 */
export function useCountUp({
  target,
  duration = 1200,
  delay = 0,
  whenVisible = false,
  threshold = 0.5,
}: UseCountUpOptions): [number, React.RefObject<HTMLSpanElement | null>] {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let rafId = 0;
    let startTimeout = 0;

    const run = () => {
      if (startedRef.current) return;
      startedRef.current = true;

      if (prefersReduced) {
        setValue(target);
        return;
      }

      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        setValue(target * easeOut(t));
        if (t < 1) rafId = requestAnimationFrame(tick);
      };

      startTimeout = window.setTimeout(() => {
        rafId = requestAnimationFrame(tick);
      }, delay);
    };

    if (!whenVisible) {
      run();
    } else {
      const el = ref.current;
      if (!el) return;
      if (typeof IntersectionObserver === "undefined") {
        run();
        return;
      }
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            run();
            io.disconnect();
          }
        },
        { threshold }
      );
      io.observe(el);
      return () => {
        io.disconnect();
        window.clearTimeout(startTimeout);
        cancelAnimationFrame(rafId);
      };
    }

    return () => {
      window.clearTimeout(startTimeout);
      cancelAnimationFrame(rafId);
    };
  }, [target, duration, delay, whenVisible, threshold]);

  return [value, ref];
}
