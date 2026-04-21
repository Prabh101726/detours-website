"use client";
import { useCountUp } from "@/lib/useCountUp";

export default function StatCounter({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) {
  const [value, ref] = useCountUp({
    target,
    duration: 1400,
    whenVisible: true,
    threshold: 0.5,
  });

  return <span ref={ref}>{`${Math.round(value)}${suffix}`}</span>;
}
