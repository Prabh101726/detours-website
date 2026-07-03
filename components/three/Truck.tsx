"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { scrollBus } from "./scrollBus";
import { routeCurve, truckTFromProgress } from "./routeCurve";
import { WIRE_ORANGE } from "./wire";

/**
 * Stylized replica of the real rig: red Western Star-style long-hood tractor
 * pulling a silver live-bottom trailer with red rails — DETOURS branding,
 * truck #1713. Solid low-poly meshes, PBR-lit. Faces +X; origin at ground
 * center. Drives itself along routeCurve from scroll progress.
 */

const PAINT_RED = "#c22417";
const PAINT_RED_DARK = "#8f1a10";
const CHROME = "#cdd2d8";
const ALUMINUM = "#b9bec6";
const ALUMINUM_DARK = "#7d838c";
const GLASS = "#1c2430";
const TIRE = "#23262a";

function makeDecalTexture(
  main: string,
  sub: string | null,
  mainColor: string,
  subColor: string
): THREE.CanvasTexture {
  const c = document.createElement("canvas");
  c.width = 1024;
  c.height = 256;
  const ctx = c.getContext("2d")!;
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = "900 150px Archivo, 'Arial Black', sans-serif";
  ctx.fillStyle = mainColor;
  ctx.letterSpacing = "10px";
  ctx.fillText(main, c.width / 2, sub ? 96 : 128);
  if (sub) {
    ctx.font = "700 54px 'JetBrains Mono', monospace";
    ctx.fillStyle = subColor;
    ctx.letterSpacing = "22px";
    ctx.fillText(sub, c.width / 2, 208);
  }
  const tex = new THREE.CanvasTexture(c);
  tex.anisotropy = 4;
  return tex;
}

function Decal({
  texture,
  width,
  height,
  position,
  rotationY,
}: {
  texture: THREE.CanvasTexture;
  width: number;
  height: number;
  position: [number, number, number];
  rotationY: number;
}) {
  return (
    <mesh position={position} rotation={[0, rotationY, 0]}>
      <planeGeometry args={[width, height]} />
      <meshBasicMaterial map={texture} transparent depthWrite={false} />
    </mesh>
  );
}

function Paint({ color, metalness = 0.15, roughness = 0.35 }: { color: string; metalness?: number; roughness?: number }) {
  return <meshStandardMaterial color={color} metalness={metalness} roughness={roughness} />;
}

function Wheel({ position }: { position: [number, number, number] }) {
  return (
    <group position={position} name="wheel">
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.55, 0.55, 0.4, 20]} />
        <meshStandardMaterial color={TIRE} roughness={0.95} metalness={0} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.24, 0.24, 0.42, 16]} />
        <meshStandardMaterial color={CHROME} roughness={0.25} metalness={0.9} />
      </mesh>
    </group>
  );
}

export default function Truck({ reduced = false }: { reduced?: boolean }) {
  const rig = useRef<THREE.Group>(null);
  const scanRing = useRef<THREE.Mesh>(null);
  const lastT = useRef(truckTFromProgress(0));
  const pos = useMemo(() => new THREE.Vector3(), []);
  const tangent = useMemo(() => new THREE.Vector3(), []);

  const doorDecal = useMemo(
    () => makeDecalTexture("DETOURS", null, "#ffffff", "#ffffff"),
    []
  );
  const trailerDecal = useMemo(
    () => makeDecalTexture("DETOURS", "FLEET OPS", "#ff6a00", "#3a3a42"),
    []
  );
  const hoodNumber = useMemo(
    () => makeDecalTexture("1713", null, "#ffffff", "#ffffff"),
    []
  );

  useFrame((state) => {
    const g = rig.current;
    if (!g) return;

    const t = reduced ? truckTFromProgress(0) : truckTFromProgress(scrollBus.p);
    routeCurve.getPointAt(t, pos);
    routeCurve.getTangentAt(t, tangent);
    g.position.copy(pos);
    g.rotation.y = Math.atan2(-tangent.z, tangent.x);

    // Roll wheels proportionally to distance travelled
    const dist = Math.abs(t - lastT.current) * routeCurve.getLength();
    lastT.current = t;
    if (dist > 0) {
      const spin = dist / 0.55;
      for (const row of g.children) {
        if (row.name === "wheelrow") {
          for (const wheel of row.children) wheel.rotation.z -= spin;
        }
      }
    }

    // Hero scan ring — expanding survey pulse under the truck
    const ring = scanRing.current;
    if (ring) {
      const heroVisible = scrollBus.p < 0.2 || reduced;
      const cycle = (state.clock.elapsedTime % 3) / 3;
      const s = 1 + cycle * 5;
      ring.scale.set(s, s, s);
      const mat = ring.material as THREE.MeshBasicMaterial;
      mat.opacity = heroVisible ? (1 - cycle) * 0.35 : 0;
    }
  });

  return (
    <group ref={rig}>
      {/* ══ TRACTOR ══ */}
      {/* chassis rails */}
      <mesh position={[2.6, 0.95, 0]}>
        <boxGeometry args={[4.6, 0.2, 0.9]} />
        <Paint color={PAINT_RED_DARK} />
      </mesh>
      {/* long hood */}
      <mesh position={[3.62, 1.7, 0]}>
        <boxGeometry args={[1.75, 0.95, 1.62]} />
        <Paint color={PAINT_RED} />
      </mesh>
      {/* grille */}
      <mesh position={[4.46, 1.55, 0]}>
        <boxGeometry args={[0.1, 0.8, 1.3]} />
        <meshStandardMaterial color={CHROME} metalness={0.9} roughness={0.3} />
      </mesh>
      {/* bumper */}
      <mesh position={[4.58, 0.72, 0]}>
        <boxGeometry args={[0.28, 0.45, 1.95]} />
        <meshStandardMaterial color={CHROME} metalness={0.85} roughness={0.35} />
      </mesh>
      {/* cab */}
      <mesh position={[2.32, 2.05, 0]}>
        <boxGeometry args={[1.55, 1.65, 2.0]} />
        <Paint color={PAINT_RED} />
      </mesh>
      {/* cab roof cap */}
      <mesh position={[2.32, 2.95, 0]}>
        <boxGeometry args={[1.5, 0.22, 1.85]} />
        <Paint color={PAINT_RED} />
      </mesh>
      {/* windshield */}
      <mesh position={[3.12, 2.42, 0]} rotation={[0, 0, -0.12]}>
        <boxGeometry args={[0.07, 0.62, 1.72]} />
        <meshStandardMaterial color={GLASS} metalness={0.4} roughness={0.15} />
      </mesh>
      {/* side windows */}
      <mesh position={[2.5, 2.45, 1.01]}>
        <boxGeometry args={[1.0, 0.55, 0.05]} />
        <meshStandardMaterial color={GLASS} metalness={0.4} roughness={0.15} />
      </mesh>
      <mesh position={[2.5, 2.45, -1.01]}>
        <boxGeometry args={[1.0, 0.55, 0.05]} />
        <meshStandardMaterial color={GLASS} metalness={0.4} roughness={0.15} />
      </mesh>
      {/* twin chrome stacks */}
      <mesh position={[1.62, 2.9, 0.92]}>
        <cylinderGeometry args={[0.09, 0.09, 1.9, 10]} />
        <meshStandardMaterial color={CHROME} metalness={0.9} roughness={0.25} />
      </mesh>
      <mesh position={[1.62, 2.9, -0.92]}>
        <cylinderGeometry args={[0.09, 0.09, 1.9, 10]} />
        <meshStandardMaterial color={CHROME} metalness={0.9} roughness={0.25} />
      </mesh>
      {/* fuel tanks */}
      <mesh position={[2.3, 0.78, 0.82]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.32, 0.32, 1.15, 14]} />
        <meshStandardMaterial color={CHROME} metalness={0.85} roughness={0.3} />
      </mesh>
      <mesh position={[2.3, 0.78, -0.82]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.32, 0.32, 1.15, 14]} />
        <meshStandardMaterial color={CHROME} metalness={0.85} roughness={0.3} />
      </mesh>
      {/* mirrors */}
      <mesh position={[3.05, 2.5, 1.15]}>
        <boxGeometry args={[0.06, 0.42, 0.2]} />
        <Paint color={GLASS} />
      </mesh>
      <mesh position={[3.05, 2.5, -1.15]}>
        <boxGeometry args={[0.06, 0.42, 0.2]} />
        <Paint color={GLASS} />
      </mesh>
      {/* headlights */}
      <mesh position={[4.5, 1.15, 0.62]}>
        <boxGeometry args={[0.06, 0.14, 0.3]} />
        <meshBasicMaterial color="#ffe9c4" />
      </mesh>
      <mesh position={[4.5, 1.15, -0.62]}>
        <boxGeometry args={[0.06, 0.14, 0.3]} />
        <meshBasicMaterial color="#ffe9c4" />
      </mesh>

      {/* door + hood decals */}
      <Decal texture={doorDecal} width={1.15} height={0.3} position={[2.32, 1.95, 1.02]} rotationY={0} />
      <Decal texture={doorDecal} width={1.15} height={0.3} position={[2.32, 1.95, -1.02]} rotationY={Math.PI} />
      <Decal texture={hoodNumber} width={0.55} height={0.16} position={[3.85, 1.85, 0.83]} rotationY={0} />
      <Decal texture={hoodNumber} width={0.55} height={0.16} position={[3.85, 1.85, -0.83]} rotationY={Math.PI} />

      {/* ══ LIVE-BOTTOM TRAILER ══ */}
      {/* aluminum tub */}
      <mesh position={[-1.55, 2.1, 0]}>
        <boxGeometry args={[5.6, 1.55, 2.25]} />
        <meshStandardMaterial color={ALUMINUM} metalness={0.7} roughness={0.4} />
      </mesh>
      {/* red top rails */}
      <mesh position={[-1.55, 2.92, 1.1]}>
        <boxGeometry args={[5.7, 0.12, 0.1]} />
        <Paint color={PAINT_RED} />
      </mesh>
      <mesh position={[-1.55, 2.92, -1.1]}>
        <boxGeometry args={[5.7, 0.12, 0.1]} />
        <Paint color={PAINT_RED} />
      </mesh>
      {/* front tarp arch */}
      <mesh position={[0.85, 2.88, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <cylinderGeometry args={[1.1, 1.1, 0.55, 18, 1, true, 0, Math.PI]} />
        <meshStandardMaterial
          color="#dfe3e8"
          metalness={0.3}
          roughness={0.6}
          side={THREE.DoubleSide}
        />
      </mesh>
      {/* belly conveyor housing */}
      <mesh position={[-1.55, 1.08, 0]}>
        <boxGeometry args={[5.0, 0.72, 1.05]} />
        <meshStandardMaterial color={ALUMINUM_DARK} metalness={0.5} roughness={0.55} />
      </mesh>
      {/* rear discharge chute */}
      <mesh position={[-4.5, 0.98, 0]} rotation={[0, 0, -0.3]}>
        <boxGeometry args={[1.0, 0.4, 0.9]} />
        <meshStandardMaterial color={ALUMINUM_DARK} metalness={0.5} roughness={0.55} />
      </mesh>
      {/* red trailer chassis */}
      <mesh position={[-1.55, 0.9, 0]}>
        <boxGeometry args={[5.3, 0.18, 0.85]} />
        <Paint color={PAINT_RED} />
      </mesh>
      {/* landing gear */}
      <mesh position={[0.6, 0.5, 0.5]}>
        <boxGeometry args={[0.12, 0.85, 0.12]} />
        <meshStandardMaterial color={ALUMINUM_DARK} metalness={0.5} roughness={0.6} />
      </mesh>
      <mesh position={[0.6, 0.5, -0.5]}>
        <boxGeometry args={[0.12, 0.85, 0.12]} />
        <meshStandardMaterial color={ALUMINUM_DARK} metalness={0.5} roughness={0.6} />
      </mesh>

      {/* trailer decals */}
      <Decal texture={trailerDecal} width={3.4} height={0.85} position={[-1.55, 2.15, 1.14]} rotationY={0} />
      <Decal texture={trailerDecal} width={3.4} height={0.85} position={[-1.55, 2.15, -1.14]} rotationY={Math.PI} />

      {/* ══ WHEELS ══ */}
      <group name="wheelrow">
        {/* steer axle */}
        <Wheel position={[3.95, 0.55, 0.95]} />
        <Wheel position={[3.95, 0.55, -0.95]} />
        {/* tandem drives */}
        <Wheel position={[1.45, 0.55, 0.95]} />
        <Wheel position={[1.45, 0.55, -0.95]} />
        <Wheel position={[0.55, 0.55, 0.95]} />
        <Wheel position={[0.55, 0.55, -0.95]} />
        {/* trailer tri-axle */}
        <Wheel position={[-2.85, 0.55, 0.95]} />
        <Wheel position={[-2.85, 0.55, -0.95]} />
        <Wheel position={[-3.55, 0.55, 0.95]} />
        <Wheel position={[-3.55, 0.55, -0.95]} />
        <Wheel position={[-4.25, 0.55, 0.95]} />
        <Wheel position={[-4.25, 0.55, -0.95]} />
      </group>

      {/* survey scan ring on the ground */}
      <mesh ref={scanRing} position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.35, 1.42, 48]} />
        <meshBasicMaterial color={WIRE_ORANGE} transparent opacity={0.3} />
      </mesh>
    </group>
  );
}
