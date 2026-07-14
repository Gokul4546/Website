"use client";

import { motion } from "framer-motion";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";

/**
 * Abstract network arrangement per industry — each industry context
 * re-organizes the same node system into a different structure:
 * concourse rows (malls), radial runways (airports), aisle grid (retail),
 * stage arc (entertainment), orbit cluster (FECs), tiered mesh (B2B).
 */

type P = [number, number];

const LAYOUTS: { nodes: P[]; edges: [number, number][] }[] = [
  {
    // Malls or Shopping centers — anchored concourse rows
    nodes: [[20, 30], [45, 26], [70, 30], [90, 40], [25, 60], [50, 56], [75, 60], [55, 80]],
    edges: [[0, 1], [1, 2], [2, 3], [4, 5], [5, 6], [1, 5], [5, 7], [2, 6]],
  },
  {
    // Airports — radial runways from a central hub
    nodes: [[55, 50], [20, 22], [88, 20], [15, 74], [90, 78], [55, 12], [55, 88], [30, 50]],
    edges: [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7]],
  },
  {
    // Retail businesses — aisle grid
    nodes: [[22, 25], [50, 25], [78, 25], [22, 55], [50, 55], [78, 55], [22, 85], [50, 85]],
    edges: [[0, 1], [1, 2], [3, 4], [4, 5], [6, 7], [0, 3], [3, 6], [1, 4], [4, 7], [2, 5]],
  },
  {
    // Entertainment — stage with audience arc
    nodes: [[50, 24], [18, 62], [34, 74], [50, 78], [66, 74], [82, 62], [30, 42], [70, 42]],
    edges: [[0, 6], [0, 7], [6, 1], [6, 2], [0, 3], [7, 4], [7, 5], [2, 3], [3, 4]],
  },
  {
    // Family entertainment centers (FECs) — orbit cluster
    nodes: [[50, 50], [50, 18], [77, 34], [77, 66], [50, 82], [23, 66], [23, 34], [88, 50]],
    edges: [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [1, 2], [2, 7], [3, 7], [3, 4], [5, 6]],
  },
  {
    // B2B businesses — tiered partner mesh
    nodes: [[15, 30], [15, 70], [45, 20], [45, 50], [45, 80], [80, 35], [80, 65], [95, 50]],
    edges: [[0, 2], [0, 3], [1, 3], [1, 4], [2, 5], [3, 5], [3, 6], [4, 6], [5, 7], [6, 7]],
  },
];

export function IndustryConstellation({ index }: { index: number }) {
  const reduced = useReducedMotionSafe();
  const layout = LAYOUTS[index % LAYOUTS.length];
  const spring = reduced
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 120, damping: 18 };

  return (
    <svg viewBox="0 0 110 100" aria-hidden className="h-full w-full">
      {layout.edges.map(([a, b], i) => (
        <motion.line
          key={`e${i}`}
          animate={{
            x1: layout.nodes[a][0],
            y1: layout.nodes[a][1],
            x2: layout.nodes[b][0],
            y2: layout.nodes[b][1],
          }}
          initial={false}
          transition={spring}
          stroke="#2E6BFF"
          strokeOpacity="0.35"
          strokeWidth="0.6"
        />
      ))}
      {layout.nodes.map(([x, y], i) => (
        <motion.circle
          key={`n${i}`}
          animate={{ cx: x, cy: y }}
          initial={false}
          transition={spring}
          r={i === 0 ? 2.6 : 1.8}
          className={i === 0 ? "fill-signal" : "fill-steel"}
        />
      ))}
    </svg>
  );
}
