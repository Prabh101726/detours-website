"use client";

import { useEffect, useSyncExternalStore } from "react";
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
    () => SERVER_ENV
  );
}

function useIsClient() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

/**
 * Client-only layer: WebGL canvas + Lenis/GSAP scroll choreography.
 * Story copy lives in StorySections (server-rendered) for SEO and CLS.
 */
export default function HomeEnhancer() {
  const isClient = useIsClient();
  const { reduced, lowPower, webglOk } = useClientEnv();

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

  return (
    <>
      {webglOk && <SceneCanvas reduced={reduced} lowPower={lowPower} />}
      {!webglOk && (
        <div
          className="blueprint-grid fixed inset-0 z-0 opacity-60"
          aria-hidden="true"
        />
      )}
    </>
  );
}
