"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";
import { originalContent as content } from "@/content/original-content";
import { SectionIntro } from "@/components/SectionIntro";
import { rise, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Global Presence as an interactive operations network: every location is
 * a node on a signal rail with arcs back to the Mumbai hub (index 0).
 * The location list itself is the accessible content — the SVG is a
 * decorative enhancement, and touch/keyboard users get the full list.
 */
export function GlobalOperationsMap() {
  const [active, setActive] = useState<number | null>(null);
  const reduced = useReducedMotionSafe();
  const locations = content.globalPresence.locations;
  const positions = locations.map((_, i) => 8 + (i * 84) / (locations.length - 1));

  return (
    <section className="paper-wash-aurora bg-paper pb-28 md:pb-40">
      <div className="mx-auto w-full max-w-shell px-5 sm:px-8 lg:px-12">
        <SectionIntro label={content.globalPresence.sectionName} />

        {/* operations network — decorative twin of the list below */}
        <motion.div
          variants={rise}
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          aria-hidden
          className="mt-14 hidden border border-ink/10 bg-night px-6 py-2 sm:block"
        >
          <svg viewBox="0 0 100 34" className="h-auto w-full">
            {/* hub arcs */}
            {positions.slice(1).map((x, i) => {
              const hubX = positions[0];
              const mid = (hubX + x) / 2;
              const lift = 6 + Math.abs(x - hubX) / 6;
              const on = active === i + 1 || active === 0;
              return (
                <motion.path
                  key={locations[i + 1]}
                  d={`M ${hubX} 26 Q ${mid} ${26 - lift} ${x} 26`}
                  fill="none"
                  stroke={on ? "#37D4E6" : "#2E6BFF"}
                  strokeWidth="0.35"
                  animate={{ opacity: on ? 0.95 : 0.4 }}
                  initial={false}
                  transition={{ duration: reduced ? 0 : 0.3 }}
                />
              );
            })}
            {/* baseline rail */}
            <line x1="4" y1="26" x2="96" y2="26" stroke="#8B94A7" strokeOpacity="0.25" strokeWidth="0.25" />
            {locations.map((loc, i) => {
              const on = active === i;
              return (
                <g key={loc}>
                  <motion.circle
                    cx={positions[i]}
                    cy={26}
                    r={i === 0 ? 1.7 : 1.2}
                    className={i === 0 ? "fill-signal" : "fill-steel"}
                    animate={{
                      opacity: active === null || on || i === 0 ? 1 : 0.45,
                      scale: on ? 1.5 : 1,
                    }}
                    initial={false}
                    style={{ transformOrigin: `${positions[i]}px 26px` }}
                    transition={{ duration: reduced ? 0 : 0.25 }}
                  />
                  <text
                    x={positions[i]}
                    y={31.5}
                    textAnchor="middle"
                    className="fill-steel font-mono"
                    fontSize="2.2"
                    opacity={on ? 1 : 0.65}
                  >
                    {loc}
                  </text>
                </g>
              );
            })}
          </svg>
        </motion.div>

        {/* accessible location list */}
        <motion.ul
          variants={rise}
          custom={0.16}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          aria-label={content.globalPresence.sectionName}
          className="mt-8 flex flex-wrap gap-x-10 gap-y-4"
        >
          {locations.map((loc, i) => (
            <li key={loc}>
              <button
                type="button"
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
                className={cn(
                  "flex min-h-[44px] items-center gap-3 font-display text-xl font-semibold transition-colors md:text-2xl",
                  active === i ? "text-pulse" : "text-ink"
                )}
              >
                <span
                  aria-hidden
                  className={cn(
                    "h-1.5 w-1.5 rounded-full transition-colors",
                    active === i ? "bg-signal" : i === 0 ? "bg-pulse" : "bg-steel"
                  )}
                />
                {loc}
              </button>
            </li>
          ))}
        </motion.ul>

        <motion.address
          variants={rise}
          custom={0.24}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 max-w-2xl border-t border-ink/15 pt-6 font-mono text-[13px] not-italic leading-relaxed text-ink-muted"
        >
          {content.globalPresence.address}
        </motion.address>
      </div>
    </section>
  );
}
