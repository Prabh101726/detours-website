/**
 * Shared scroll-progress bus between the GSAP ScrollTrigger world (DOM) and
 * the R3F render loop. A plain mutable module object — no React state — so
 * the canvas can read it every frame with zero re-renders.
 * p: 0 → top of page, 1 → bottom of the homepage story.
 */
export const scrollBus = {
  p: 0,
};
