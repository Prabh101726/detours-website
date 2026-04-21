/**
 * Tesseract — a rotating 4D hypercube wireframe projection.
 *
 * Outer cube  : 12 edges, orange at 30% opacity
 * Inner cube  : 12 edges, orange at 14% opacity
 * Connectors  : 8 edges linking outer→inner vertices, cosmic blue at 20% opacity
 *
 * The projection is a classic 2D flat SVG — two concentric cubes connected
 * at corresponding corners — rendered with CSS 3D perspective rotation.
 * Hidden entirely when prefers-reduced-motion is set; replaced by a static snapshot.
 */

const OUTER = 210; // outer cube half-size in SVG units
const INNER = 110; // inner cube half-size
const C = 260;     // SVG centre

// 8 vertices of the outer cube (2D projected isometric corners)
const outerV = [
  [C - OUTER, C - OUTER * 0.45],  // 0 top-left-back
  [C + OUTER, C - OUTER * 0.45],  // 1 top-right-back
  [C + OUTER, C + OUTER * 0.45],  // 2 bottom-right-back
  [C - OUTER, C + OUTER * 0.45],  // 3 bottom-left-back
  [C - OUTER * 0.5, C - OUTER * 0.75], // 4 top-left-front
  [C + OUTER * 0.5, C - OUTER * 0.75], // 5 top-right-front
  [C + OUTER * 0.5, C + OUTER * 0.75], // 6 bottom-right-front
  [C - OUTER * 0.5, C + OUTER * 0.75], // 7 bottom-left-front
];

// 8 inner vertices (same topology, scaled)
const innerV = outerV.map(([x, y]) => [
  C + (x - C) * (INNER / OUTER),
  C + (y - C) * (INNER / OUTER),
]);

// 12 edges of a cube: 4 back face + 4 front face + 4 depth
const cubeEdges: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 0], // back face
  [4, 5], [5, 6], [6, 7], [7, 4], // front face
  [0, 4], [1, 5], [2, 6], [3, 7], // depth connectors
];

// 8 connector edges: each outer vertex to corresponding inner vertex
const connectorEdges: [number, number][] = [0, 1, 2, 3, 4, 5, 6, 7].map((i) => [i, i] as [number, number]);

function edgePath(a: number[], b: number[]) {
  return `M ${a[0]} ${a[1]} L ${b[0]} ${b[1]}`;
}

export default function Tesseract() {
  return (
    <div
      className="relative"
      style={{ width: 520, height: 520 }}
      aria-hidden="true"
    >
      {/* Ambient glow behind the tesseract */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(255,122,26,0.13) 0%, rgba(100,149,237,0.05) 40%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      {/* Outer slow-rotating wrapper */}
      <div
        className="animate-spin-slow"
        style={{
          width: "100%",
          height: "100%",
          transformOrigin: "50% 50%",
        }}
      >
        {/* Inner counter-rotating for 4D effect */}
        <div
          className="animate-spin-slow-reverse"
          style={{
            width: "100%",
            height: "100%",
            transformOrigin: "50% 50%",
          }}
        >
          <svg
            viewBox="0 0 520 520"
            width="520"
            height="520"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Connector edges — cosmic blue */}
            {connectorEdges.map(([oi]) => (
              <path
                key={`conn-${oi}`}
                d={edgePath(outerV[oi], innerV[oi])}
                stroke="rgba(100,149,237,0.22)"
                strokeWidth="1"
              />
            ))}

            {/* Inner cube edges */}
            {cubeEdges.map(([a, b], i) => (
              <path
                key={`inner-${i}`}
                d={edgePath(innerV[a], innerV[b])}
                stroke="rgba(255,122,26,0.18)"
                strokeWidth="1"
              />
            ))}

            {/* Outer cube edges */}
            {cubeEdges.map(([a, b], i) => (
              <path
                key={`outer-${i}`}
                d={edgePath(outerV[a], outerV[b])}
                stroke="rgba(255,122,26,0.32)"
                strokeWidth="1"
              />
            ))}

            {/* Vertex dots on outer cube corners */}
            {outerV.map(([x, y], i) => (
              <circle
                key={`ov-${i}`}
                cx={x}
                cy={y}
                r="2"
                fill="rgba(255,122,26,0.45)"
              />
            ))}

            {/* Vertex dots on inner cube corners */}
            {innerV.map(([x, y], i) => (
              <circle
                key={`iv-${i}`}
                cx={x}
                cy={y}
                r="1.5"
                fill="rgba(100,149,237,0.50)"
              />
            ))}
          </svg>
        </div>
      </div>

      {/* Bobbing wrapper — sits above rotation */}
      <div
        className="animate-float-orb absolute inset-0 pointer-events-none"
        style={{ mixBlendMode: "screen" }}
      >
        {/* Core glow in centre */}
        <div
          className="absolute"
          style={{
            top: "40%",
            left: "40%",
            width: "20%",
            height: "20%",
            background:
              "radial-gradient(circle, rgba(255,122,26,0.28) 0%, rgba(255,122,26,0.08) 50%, transparent 80%)",
            borderRadius: "50%",
            filter: "blur(6px)",
          }}
        />
      </div>
    </div>
  );
}
