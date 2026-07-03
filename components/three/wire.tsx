"use client";

import { useMemo } from "react";
import * as THREE from "three";

/**
 * Wireframe primitives for the industrial blueprint aesthetic.
 * Each solid = a near-black occluder fill + glowing edge lines, so shapes
 * hide geometry behind them while reading as luminous wireframes.
 */

export const WIRE_ORANGE = "#ff6a00";
export const WIRE_ORANGE_SOFT = "#e8620a";
export const WIRE_STEEL = "#6f6a72";
export const WIRE_DIM = "#b6b0a6";
export const FILL_DARK = "#fcfbf9";

type WireProps = {
  color?: string;
  fill?: string;
  opacity?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number] | number;
};

function useEdges(geo: THREE.BufferGeometry, threshold = 12) {
  return useMemo(() => new THREE.EdgesGeometry(geo, threshold), [geo, threshold]);
}

function WireShape({
  geometry,
  color = WIRE_STEEL,
  fill = FILL_DARK,
  opacity = 1,
  position,
  rotation,
  scale,
}: WireProps & { geometry: THREE.BufferGeometry }) {
  const edges = useEdges(geometry);
  return (
    <group position={position} rotation={rotation} scale={scale}>
      <mesh geometry={geometry}>
        <meshBasicMaterial
          color={fill}
          polygonOffset
          polygonOffsetFactor={1}
          polygonOffsetUnits={1}
          transparent={opacity < 1}
          opacity={opacity}
        />
      </mesh>
      <lineSegments geometry={edges}>
        <lineBasicMaterial color={color} transparent opacity={opacity} />
      </lineSegments>
    </group>
  );
}

export function WireBox({
  size,
  ...rest
}: WireProps & { size: [number, number, number] }) {
  const geo = useMemo(() => new THREE.BoxGeometry(...size), [size]);
  return <WireShape geometry={geo} {...rest} />;
}

export function WireCylinder({
  args,
  ...rest
}: WireProps & {
  /** radiusTop, radiusBottom, height, radialSegments */
  args: [number, number, number, number];
}) {
  const geo = useMemo(() => new THREE.CylinderGeometry(...args), [args]);
  return <WireShape geometry={geo} {...rest} />;
}

export function WireCone({
  args,
  ...rest
}: WireProps & {
  /** radius, height, radialSegments */
  args: [number, number, number];
}) {
  const geo = useMemo(() => new THREE.ConeGeometry(...args), [args]);
  return <WireShape geometry={geo} {...rest} />;
}
