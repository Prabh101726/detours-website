"use client";

import {
  WireBox,
  WireCylinder,
  WireCone,
  WIRE_ORANGE_SOFT,
  WIRE_STEEL,
  WIRE_DIM,
} from "./wire";

/**
 * Procedural wireframe asphalt/gravel plant: batch tower, twin silos,
 * inclined feed conveyor, stack, and a gravel stockpile.
 * Positioned by the parent scene.
 */
export default function AsphaltPlant(props: { position?: [number, number, number] }) {
  return (
    <group {...props}>
      {/* ground pad */}
      <WireBox size={[12, 0.1, 9]} position={[0, 0.05, 0]} color={WIRE_DIM} />

      {/* batch tower */}
      <WireBox size={[2.4, 5.8, 2.4]} position={[0, 2.95, 0]} color={WIRE_ORANGE_SOFT} />
      <WireBox size={[2.9, 0.5, 2.9]} position={[0, 6.1, 0]} color={WIRE_STEEL} />
      {/* tower legs detail */}
      <WireBox size={[0.14, 2.2, 0.14]} position={[1.05, 1.1, 1.05]} color={WIRE_STEEL} />
      <WireBox size={[0.14, 2.2, 0.14]} position={[-1.05, 1.1, 1.05]} color={WIRE_STEEL} />
      <WireBox size={[0.14, 2.2, 0.14]} position={[1.05, 1.1, -1.05]} color={WIRE_STEEL} />
      <WireBox size={[0.14, 2.2, 0.14]} position={[-1.05, 1.1, -1.05]} color={WIRE_STEEL} />

      {/* twin storage silos */}
      <WireCylinder args={[1.05, 1.05, 4.6, 12]} position={[3.4, 2.3, -1.6]} color={WIRE_STEEL} />
      <WireCone args={[1.05, 1.2, 12]} position={[3.4, 5.2, -1.6]} color={WIRE_STEEL} />
      <WireCylinder args={[1.05, 1.05, 4.6, 12]} position={[3.4, 2.3, 1.6]} color={WIRE_STEEL} />
      <WireCone args={[1.05, 1.2, 12]} position={[3.4, 5.2, 1.6]} color={WIRE_STEEL} />

      {/* inclined feed conveyor up to the tower head */}
      <WireBox
        size={[9.2, 0.22, 1.0]}
        position={[-4.1, 3.1, 0.4]}
        rotation={[0, 0, 0.58]}
        color={WIRE_ORANGE_SOFT}
      />
      {/* conveyor support legs */}
      <WireBox size={[0.14, 2.6, 0.14]} position={[-4.6, 1.3, 0.4]} color={WIRE_STEEL} />
      <WireBox size={[0.14, 4.6, 0.14]} position={[-2.2, 2.3, 0.4]} color={WIRE_STEEL} />

      {/* exhaust stack */}
      <WireCylinder args={[0.3, 0.38, 7.2, 10]} position={[-1.9, 3.6, -2.4]} color={WIRE_STEEL} />

      {/* gravel stockpile */}
      <WireCone args={[3.1, 2.0, 9]} position={[-8.6, 1.0, -2.2]} color={WIRE_DIM} />
      <WireCone args={[1.9, 1.3, 8]} position={[-9.8, 0.65, 1.4]} color={WIRE_DIM} />
    </group>
  );
}
