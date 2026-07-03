"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Grid } from "@react-three/drei";
import * as THREE from "three";
import { scrollBus } from "./scrollBus";
import { routeCurve, truckTFromProgress } from "./routeCurve";
import AsphaltPlant from "./AsphaltPlant";
import RouteLine from "./RouteLine";
import { DustField, DataCluster, AgentOrbits } from "./Particles";

/**
 * The single WebGL world behind the homepage. The camera flies a keyframed
 * path scrubbed by scroll progress (scrollBus.p), with a special "follow the
 * truck" mode blended in during the haul act.
 */

type Key = { p: number; pos: [number, number, number]; look: [number, number, number] };

const KEYS: Key[] = [
  { p: 0.0, pos: [7.2, 2.7, 9.4], look: [0, 1.6, 0] },
  { p: 0.15, pos: [5.4, 2.1, 7.9], look: [0, 1.5, 0] },
  { p: 0.32, pos: [-5.5, 4.6, 8.0], look: [-12, 2.8, -8.5] },
  { p: 0.4, pos: [-1.5, 3.6, 9.0], look: [2, 1.2, 1] },
  { p: 0.58, pos: [18.5, 4.2, 6.5], look: [14.5, 1.2, -1] },
  { p: 0.68, pos: [0, 14.2, -14.5], look: [0, 18, -26] },
  { p: 0.82, pos: [3.2, 17.6, -18.8], look: [0, 18, -26] },
  { p: 0.92, pos: [-2.5, 7.5, 24], look: [15, 1, -4] },
  { p: 1.0, pos: [-3.5, 9.5, 30], look: [21, 0, -9] },
];

const smoothstep = (x: number) => x * x * (3 - 2 * x);

const FOLLOW_OFFSET = new THREE.Vector3(3.6, 3.1, 7.4);
const LERP_A = new THREE.Vector3();
const LERP_B = new THREE.Vector3();

function keyPose(p: number, outPos: THREE.Vector3, outLook: THREE.Vector3) {
  let a = KEYS[0];
  let b = KEYS[KEYS.length - 1];
  for (let i = 0; i < KEYS.length - 1; i++) {
    if (p >= KEYS[i].p && p <= KEYS[i + 1].p) {
      a = KEYS[i];
      b = KEYS[i + 1];
      break;
    }
  }
  const u = b.p === a.p ? 0 : smoothstep((p - a.p) / (b.p - a.p));
  outPos.set(...a.pos).lerp(LERP_A.set(...b.pos), u);
  outLook.set(...a.look).lerp(LERP_B.set(...b.look), u);
}

function CameraRig({ reduced }: { reduced: boolean }) {
  const { camera } = useThree();
  const target = useRef(new THREE.Vector3(0, 1.6, 0));
  const pose = useMemo(
    () => ({
      pos: new THREE.Vector3(),
      look: new THREE.Vector3(),
      truck: new THREE.Vector3(),
      follow: new THREE.Vector3(),
      followLook: new THREE.Vector3(),
    }),
    []
  );

  useFrame((state) => {
    const p = reduced ? 0 : scrollBus.p;
    keyPose(p, pose.pos, pose.look);

    // Blend into truck-follow during the haul act
    const wIn = smoothstep(THREE.MathUtils.clamp((p - 0.36) / 0.06, 0, 1));
    const wOut = 1 - smoothstep(THREE.MathUtils.clamp((p - 0.54) / 0.08, 0, 1));
    const w = wIn * wOut;
    if (w > 0.001) {
      routeCurve.getPointAt(truckTFromProgress(p), pose.truck);
      pose.follow.copy(pose.truck).add(FOLLOW_OFFSET);
      pose.followLook.copy(pose.truck).setY(pose.truck.y + 1.2);
      pose.pos.lerp(pose.follow, w);
      pose.look.lerp(pose.followLook, w);
    }

    // Idle drift in the hero so the opening frame breathes
    if (p < 0.15 && !reduced) {
      const fade = 1 - p / 0.15;
      const t = state.clock.elapsedTime;
      pose.pos.x += Math.sin(t * 0.22) * 0.5 * fade;
      pose.pos.y += Math.sin(t * 0.3) * 0.22 * fade;
    }

    // Damped approach for cinematic weight
    camera.position.lerp(pose.pos, reduced ? 1 : 0.11);
    target.current.lerp(pose.look, reduced ? 1 : 0.11);
    camera.lookAt(target.current);
  });

  return null;
}

export default function SceneCanvas({
  reduced = false,
  lowPower = false,
}: {
  reduced?: boolean;
  lowPower?: boolean;
}) {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
      <Canvas
        dpr={lowPower ? [1, 1.5] : [1, 2]}
        camera={{ fov: 42, near: 0.1, far: 120, position: [7.2, 2.7, 9.4] }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <fog attach="fog" args={["#fcfbf9", 26, 95]} />
        <CameraRig reduced={reduced} />

        {/* lights for the GLB truck's PBR materials */}
        <hemisphereLight args={["#ffffff", "#e8e2d8", 1.15]} />
        <directionalLight position={[8, 12, 6]} intensity={1.7} />
        <directionalLight position={[-6, 8, -4]} intensity={0.5} />

        <Grid
          position={[0, -0.01, 0]}
          infiniteGrid
          cellSize={1.4}
          sectionSize={8.4}
          cellThickness={0.6}
          sectionThickness={1}
          cellColor="#e6e1d8"
          sectionColor="#d4cec2"
          fadeDistance={60}
          fadeStrength={1.6}
        />

        <AsphaltPlant position={[-13, 0, -9]} />
        <RouteLine />
        <DustField count={lowPower ? 220 : 480} />
        <DataCluster count={lowPower ? 380 : 700} />
        <AgentOrbits />
      </Canvas>
    </div>
  );
}
