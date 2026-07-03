"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Line } from "@react-three/drei";
import type { Line2 } from "three-stdlib";
import { routeCurve } from "./routeCurve";
import { WIRE_ORANGE, WireCone, WIRE_DIM } from "./wire";
import { scrollBus } from "./scrollBus";

/**
 * The glowing haul route from plant to dump site + the dump-site marker.
 * Dashes crawl forward so the route reads as a live corridor.
 */
export default function RouteLine() {
  const points = useMemo(() => routeCurve.getPoints(140), []);
  const lineRef = useRef<Line2>(null);

  useFrame((state) => {
    const line = lineRef.current;
    if (!line) return;
    const mat = line.material;
    mat.dashOffset = -state.clock.elapsedTime * 1.4;
    // Route brightens during the haul act
    const p = scrollBus.p;
    const inHaul = p > 0.3 && p < 0.62;
    mat.opacity = THREE.MathUtils.lerp(mat.opacity, inHaul ? 0.95 : 0.4, 0.05);
  });

  return (
    <group>
      <Line
        ref={lineRef}
        points={points}
        color={WIRE_ORANGE}
        lineWidth={1.6}
        dashed
        dashSize={0.7}
        gapSize={0.45}
        transparent
        opacity={0.4}
        position={[0, 0.06, 0]}
      />
      {/* dump-site: destination mound + marker ring */}
      <group position={[26, 0, -10]}>
        <WireCone args={[2.6, 1.7, 8]} position={[2.5, 0.85, -1.5]} color={WIRE_DIM} />
        <mesh position={[0, 0.03, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[1.6, 1.75, 40]} />
          <meshBasicMaterial color={WIRE_ORANGE} transparent opacity={0.5} />
        </mesh>
      </group>
    </group>
  );
}
