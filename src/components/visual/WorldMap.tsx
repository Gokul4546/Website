"use client";

import { motion } from "framer-motion";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";

/**
 * Stylized dotted world map (equirectangular, drawn from range data — no
 * external assets). Operating locations from the locked content are
 * highlighted with glowing markers and connected to the Mumbai hub by
 * signal arcs. Decorative twin of the accessible location list.
 */

// Land rows as [startCol, endCol] ranges on a 64 × 26 grid.
const LAND: [number, number][][] = [
  /* r0 */ [],
  /* r1 */ [],
  /* r2 */ [[24, 27], [36, 38], [42, 58]],
  /* r3 */ [[5, 16], [23, 28], [34, 38], [40, 60]],
  /* r4 */ [[4, 18], [25, 27], [34, 37], [40, 61]],
  /* r5 */ [[4, 19], [30, 31], [33, 38], [40, 60]],
  /* r6 */ [[5, 20], [30, 31], [32, 38], [40, 58]],
  /* r7 */ [[6, 20], [32, 39], [42, 56], [58, 59]],
  /* r8 */ [[7, 19], [33, 42], [44, 56], [58, 59]],
  /* r9 */ [[8, 17], [30, 40], [44, 55]],
  /* r10 */ [[10, 16], [30, 40], [43, 48], [49, 54]],
  /* r11 */ [[11, 15], [30, 39], [43, 47], [49, 53]],
  /* r12 */ [[12, 15], [30, 38], [44, 47], [50, 53]],
  /* r13 */ [[14, 18], [31, 38], [44, 46], [50, 52]],
  /* r14 */ [[14, 20], [31, 38], [45, 46], [50, 52], [54, 56]],
  /* r15 */ [[15, 21], [32, 38], [50, 58]],
  /* r16 */ [[15, 21], [33, 38], [52, 58]],
  /* r17 */ [[15, 20], [33, 37]],
  /* r18 */ [[16, 19], [33, 36], [52, 58]],
  /* r19 */ [[16, 19], [33, 36], [51, 59]],
  /* r20 */ [[16, 18], [33, 35], [51, 59]],
  /* r21 */ [[16, 18], [34, 35], [52, 58]],
  /* r22 */ [[16, 17], [54, 56], [61, 62]],
  /* r23 */ [[16, 17], [62, 62]],
  /* r24 */ [[16, 17]],
  /* r25 */ [],
];

const CELL = 2;
const pt = (col: number, row: number) => ({ x: col * CELL + 1, y: row * CELL + 1 });

/** Marker positions per locked location name (grid coordinates). */
const MARKERS: Record<string, { col: number; row: number; color: string }> = {
  Mumbai: { col: 44.5, row: 12.4, color: "#37D4E6" },
  Vadodara: { col: 44.2, row: 11.2, color: "#2E6BFF" },
  Chennai: { col: 46.2, row: 13.9, color: "#23C39B" },
  US: { col: 12, row: 7.4, color: "#8467F3" },
  Canada: { col: 12, row: 4.2, color: "#C65CF0" },
  UK: { col: 30.5, row: 5.4, color: "#FF7A5E" },
  Singapore: { col: 51, row: 14.6, color: "#F5A524" },
};

export function WorldMap({
  locations,
  active,
}: {
  locations: readonly string[];
  active: number | null;
}) {
  const reduced = useReducedMotionSafe();
  const hub = MARKERS.Mumbai;
  const hubP = pt(hub.col, hub.row);

  return (
    <svg viewBox="0 0 130 54" aria-hidden className="h-auto w-full">
      <defs>
        <linearGradient id="wm-arc" x1="0" y1="0" x2="1" y2="0">
          <stop stopColor="#2E6BFF" />
          <stop offset="1" stopColor="#37D4E6" />
        </linearGradient>
      </defs>

      {/* land dots */}
      {LAND.flatMap((ranges, row) =>
        ranges.flatMap(([a, b]) =>
          Array.from({ length: b - a + 1 }, (_, i) => {
            const p = pt(a + i, row);
            return (
              <circle
                key={`d-${row}-${a + i}`}
                cx={p.x}
                cy={p.y}
                r="0.62"
                fill="#8B94A7"
                fillOpacity="0.38"
              />
            );
          })
        )
      )}

      {/* hub arcs */}
      {locations.map((loc, i) => {
        if (loc === "Mumbai" || !MARKERS[loc]) return null;
        const m = MARKERS[loc];
        const p = pt(m.col, m.row);
        const mid = { x: (hubP.x + p.x) / 2, y: Math.min(hubP.y, p.y) - Math.abs(p.x - hubP.x) / 5 - 4 };
        const on = active === i || active === 0;
        return (
          <motion.path
            key={`arc-${loc}`}
            d={`M ${hubP.x} ${hubP.y} Q ${mid.x} ${mid.y} ${p.x} ${p.y}`}
            fill="none"
            stroke="url(#wm-arc)"
            strokeWidth="0.42"
            animate={{ opacity: on ? 1 : 0.45 }}
            initial={false}
            transition={{ duration: reduced ? 0 : 0.3 }}
          />
        );
      })}

      {/* location markers */}
      {locations.map((loc, i) => {
        const m = MARKERS[loc];
        if (!m) return null;
        const p = pt(m.col, m.row);
        const on = active === i;
        return (
          <motion.g
            key={`m-${loc}`}
            animate={{ opacity: active === null || on || loc === "Mumbai" ? 1 : 0.6 }}
            initial={false}
            transition={{ duration: reduced ? 0 : 0.25 }}
          >
            <circle cx={p.x} cy={p.y} r={on ? 3 : 2.2} fill={m.color} fillOpacity="0.22" />
            <circle cx={p.x} cy={p.y} r={on ? 1.5 : 1.15} fill={m.color} />
            <circle cx={p.x} cy={p.y} r="0.45" fill="#FFFFFF" fillOpacity="0.9" />
          </motion.g>
        );
      })}
    </svg>
  );
}
