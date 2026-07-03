import * as THREE from "three";

/**
 * The haul route — plant exit → highway sweep through the origin (where the
 * hero truck sits) → dump site. One shared curve so the truck, the glowing
 * route line, and the camera all agree.
 */
export const routeCurve = new THREE.CatmullRomCurve3(
  [
    new THREE.Vector3(-13.5, 0, -8.5),
    new THREE.Vector3(-7, 0, -3),
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(8, 0, 3),
    new THREE.Vector3(16, 0, -2),
    new THREE.Vector3(26, 0, -10),
  ],
  false,
  "catmullrom",
  0.35
);

/** Where the truck parks for the hero act (the origin point on the curve). */
export const TRUCK_HERO_T = 0.4;

/** Truck position along the route as a function of story progress p. */
export function truckTFromProgress(p: number): number {
  if (p < 0.36) return TRUCK_HERO_T;
  if (p < 0.58) return TRUCK_HERO_T + ((p - 0.36) / 0.22) * (0.85 - TRUCK_HERO_T);
  if (p < 0.9) return 0.85;
  return 0.85 + ((p - 0.9) / 0.1) * 0.13;
}
