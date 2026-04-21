"use client";
import { useReportWebVitals } from "next/web-vitals";
import { track } from "@vercel/analytics";

/**
 * Forwards Core Web Vitals (LCP, INP, CLS, FCP, TTFB) to Vercel Analytics as
 * custom events. SpeedInsights already captures these — this gives you a
 * second view alongside your own dashboards/alerts if desired.
 */
export default function WebVitalsReporter() {
  useReportWebVitals((metric) => {
    // Only forward the stable, user-experience-critical metrics
    if (["LCP", "INP", "CLS", "FCP", "TTFB"].includes(metric.name)) {
      track(`web-vitals:${metric.name}`, {
        value: Math.round(
          metric.name === "CLS" ? metric.value * 1000 : metric.value
        ),
        rating: metric.rating,
        id: metric.id,
      });
    }
  });

  return null;
}
