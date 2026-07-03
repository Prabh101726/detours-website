"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { WIRE_ORANGE, WIRE_ORANGE_SOFT } from "./wire";

/** Ambient dust + drifting embers over the whole yard. */
export function DustField({ count = 480 }: { count?: number }) {
  const dust = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = THREE.MathUtils.randFloat(-24, 34);
      arr[i * 3 + 1] = THREE.MathUtils.randFloat(0, 8);
      arr[i * 3 + 2] = THREE.MathUtils.randFloat(-20, 14);
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    const pts = dust.current;
    if (!pts) return;
    const pos = pts.geometry.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < pos.count; i++) {
      let y = pos.getY(i) + delta * 0.25;
      if (y > 8) y = 0;
      pos.setY(i, y);
    }
    pos.needsUpdate = true;
  });

  return (
    <points ref={dust}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#b3ac9f"
        size={0.05}
        sizeAttenuation
        transparent
        opacity={0.55}
        depthWrite={false}
      />
    </points>
  );
}

/**
 * The data nebula — POD tickets dissolving into structured data.
 * A slowly-breathing particle sphere + a wireframe POD ticket floating in it.
 * Lives high above the yard; the camera flies up into it for acts 4–5.
 */
export function DataCluster({
  center = [0, 18, -26] as [number, number, number],
  count = 700,
}) {
  const cloud = useRef<THREE.Points>(null);
  const ticket = useRef<THREE.Group>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    const v = new THREE.Vector3();
    for (let i = 0; i < count; i++) {
      v.randomDirection().multiplyScalar(2.2 + Math.pow(Math.random(), 0.6) * 4.6);
      arr[i * 3] = v.x;
      arr[i * 3 + 1] = v.y * 0.75;
      arr[i * 3 + 2] = v.z;
    }
    return arr;
  }, [count]);

  // Wireframe POD ticket: border + text lines + stamp box
  const ticketLines = useMemo(() => {
    const w = 3.2;
    const h = 2.0;
    const pts: number[] = [];
    const seg = (x1: number, y1: number, x2: number, y2: number) =>
      pts.push(x1, y1, 0, x2, y2, 0);
    // border
    seg(-w / 2, -h / 2, w / 2, -h / 2);
    seg(w / 2, -h / 2, w / 2, h / 2);
    seg(w / 2, h / 2, -w / 2, h / 2);
    seg(-w / 2, h / 2, -w / 2, -h / 2);
    // header rule
    seg(-w / 2 + 0.25, h / 2 - 0.5, w / 2 - 0.25, h / 2 - 0.5);
    // text lines
    seg(-w / 2 + 0.25, 0.15, w / 2 - 1.3, 0.15);
    seg(-w / 2 + 0.25, -0.2, w / 2 - 0.9, -0.2);
    seg(-w / 2 + 0.25, -0.55, w / 2 - 1.6, -0.55);
    // stamp box (bottom-right)
    seg(w / 2 - 1.05, -h / 2 + 0.2, w / 2 - 0.25, -h / 2 + 0.2);
    seg(w / 2 - 0.25, -h / 2 + 0.2, w / 2 - 0.25, -h / 2 + 0.85);
    seg(w / 2 - 0.25, -h / 2 + 0.85, w / 2 - 1.05, -h / 2 + 0.85);
    seg(w / 2 - 1.05, -h / 2 + 0.85, w / 2 - 1.05, -h / 2 + 0.2);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(pts, 3));
    return geo;
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (cloud.current) {
      cloud.current.rotation.y = t * 0.05;
      const s = 1 + Math.sin(t * 0.5) * 0.05;
      cloud.current.scale.set(s, s, s);
    }
    if (ticket.current) {
      ticket.current.rotation.y = Math.sin(t * 0.3) * 0.35;
      ticket.current.position.y = Math.sin(t * 0.7) * 0.25;
    }
  });

  return (
    <group position={center}>
      <points ref={cloud}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color={WIRE_ORANGE_SOFT}
          size={0.06}
          sizeAttenuation
          transparent
          opacity={0.8}
          depthWrite={false}
        />
      </points>
      <group ref={ticket}>
        <lineSegments geometry={ticketLines}>
          <lineBasicMaterial color="#2a2a30" transparent opacity={0.9} />
        </lineSegments>
      </group>
    </group>
  );
}

/**
 * Five AI agents orbiting a core — billing, compliance, maintenance,
 * dispatch, pulse. Wireframe icosahedra on a tilted orbital plane.
 */
export function AgentOrbits({
  center = [0, 18, -26] as [number, number, number],
}) {
  const orbit = useRef<THREE.Group>(null);
  const core = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (orbit.current) orbit.current.rotation.y = t * 0.28;
    if (core.current) {
      core.current.rotation.x = t * 0.4;
      core.current.rotation.y = t * 0.55;
    }
  });

  return (
    <group position={center} rotation={[0.35, 0, 0.12]}>
      {/* core */}
      <mesh ref={core}>
        <octahedronGeometry args={[0.85, 0]} />
        <meshBasicMaterial color="#3a3a42" wireframe transparent opacity={0.9} />
      </mesh>
      {/* orbit ring guide */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[3.35, 3.38, 64]} />
        <meshBasicMaterial
          color={WIRE_ORANGE}
          transparent
          opacity={0.28}
          side={THREE.DoubleSide}
        />
      </mesh>
      {/* agents */}
      <group ref={orbit}>
        {[0, 1, 2, 3, 4].map((i) => {
          const a = (i / 5) * Math.PI * 2;
          return (
            <mesh key={i} position={[Math.cos(a) * 3.36, 0, Math.sin(a) * 3.36]}>
              <icosahedronGeometry args={[0.42, 0]} />
              <meshBasicMaterial
                color={WIRE_ORANGE}
                wireframe
                transparent
                opacity={0.95}
              />
            </mesh>
          );
        })}
      </group>
    </group>
  );
}
