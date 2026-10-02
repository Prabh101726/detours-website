"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { scrollBus } from "@/components/three/scrollBus";

const SceneCanvas = dynamic(() => import("@/components/three/SceneCanvas"), {
  ssr: false,
});

export const HOME_STORY_ID = "home-story";

type ClientEnv = {
  reduced: boolean;
  lowPower: boolean;
  webglOk: boolean;
};

const SERVER_ENV: ClientEnv = {
  reduced: false,
  lowPower: false,
  webglOk: true,
};

let clientEnvCache: ClientEnv | null = null;

function readClientEnv(): ClientEnv {
  if (clientEnvCache) return clientEnvCache;

  let webglOk = true;
  try {
    const c = document.createElement("canvas");
    webglOk = !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    webglOk = false;
  }
  clientEnvCache = {
    reduced: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    lowPower: window.innerWidth < 768,
    webglOk,
  };
  return clientEnvCache;
}

function useClientEnv() {
  return useSyncExternalStore(
    () => () => {},
    readClientEnv,
    () => SERVER_ENV,
  );
}

function useIsClient() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

/** Defer WebGL until after LCP (or idle) so the story copy paints first. */
function useSceneAfterLcp(enabled: boolean) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!enabled) {
      setReady(false);
      return;
    }

    let cancelled = false;
    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let po: PerformanceObserver | undefined;

    const arm = () => {
      if (cancelled) return;
      setReady(true);
    };

    const schedule = () => {
      if (cancelled) return;
      if (typeof window.requestIdleCallback === "function") {
        idleId = window.requestIdleCallback(() => arm(), { timeout: 2000 });
      } else {
        timeoutId = setTimeout(arm, 250);
      }
    };

    try {
      if (typeof PerformanceObserver !== "undefined") {
        po = new PerformanceObserver((list) => {
          if (list.getEntries().length > 0) {
            po?.disconnect();
            schedule();
          }
        });
        po.observe({ type: "largest-contentful-paint", buffered: true });
      }
    } catch {
      // fall through to idle / timeout
    }

    // Safety: LCP may already have fired, or never fire on some pages
    timeoutId = setTimeout(() => {
      po?.disconnect();
      schedule();
    }, 3500);

    return () => {
      cancelled = true;
      po?.disconnect();
      if (idleId !== undefined && typeof window.cancelIdleCallback === "function") {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [enabled]);

  return ready;
}

/**
 * Client-only layer: WebGL canvas + Lenis/GSAP scroll choreography.
 * Story copy lives in StorySections (server-rendered) for SEO and CLS.
 */
export default function HomeEnhancer() {
  const isClient = useIsClient();
  const { reduced, lowPower, webglOk } = useClientEnv();
  const wantsScene = isClient && webglOk && !reduced;
  const sceneReady = useSceneAfterLcp(wantsScene);

  useEffect(() => {
    const root = document.getElementById(HOME_STORY_ID);
    if (!root || reduced) return;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({ lerp: 0.09 });
    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: root,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          scrollBus.p = self.progress;
        },
      });

      root.querySelectorAll<HTMLElement>("[data-stagger]").forEach((el) => {
        gsap.from(el.querySelectorAll(".sw"), {
          yPercent: 115,
          duration: 0.95,
          ease: "power3.out",
          stagger: 0.055,
          scrollTrigger: { trigger: el, start: "top 80%" },
        });
      });

      root.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 34,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          delay: parseFloat(el.dataset.delay ?? "0"),
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      root.querySelectorAll<HTMLElement>("[data-ticker]").forEach((el) => {
        const value = parseFloat(el.dataset.value ?? "0");
        const decimals = parseInt(el.dataset.decimals ?? "0", 10);
        const prefix = el.dataset.prefix ?? "";
        const suffix = el.dataset.suffix ?? "";
        const state = { v: 0 };
        gsap.to(state, {
          v: value,
          duration: 1.7,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
          onUpdate: () => {
            el.textContent = `${prefix}${state.v.toFixed(decimals)}${suffix}`;
          },
        });
      });
    }, root);

    return () => {
      ctx.revert();
      gsap.ticker.remove(raf);
      lenis.destroy();
      scrollBus.p = 0;
    };
  }, [reduced]);

  if (!isClient) return null;

  const showScene = wantsScene && sceneReady;
  const showFallback = reduced || !webglOk || !showScene;

  return (
    <>
      {showScene && <SceneCanvas reduced={false} lowPower={lowPower} />}
      {showFallback && (
        <div
          className="blueprint-grid fixed inset-0 z-0 opacity-60"
          aria-hidden="true"
        />
      )}
    </>
  );
}
