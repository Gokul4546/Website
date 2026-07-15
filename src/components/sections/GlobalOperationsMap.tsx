"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { originalContent as content } from "@/content/original-content";
import { SectionIntro } from "@/components/SectionIntro";
import { WorldMap } from "@/components/visual/WorldMap";
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
  const locations = content.globalPresence.locations;

  return (
    <section className="paper-wash-aurora bg-paper pb-28 md:pb-40">
      <div className="mx-auto w-full max-w-shell px-5 sm:px-8 lg:px-12">
        <SectionIntro label={content.globalPresence.sectionName} />

        {/* world operations map — decorative twin of the list below */}
        <motion.div
          variants={rise}
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          aria-hidden
          className="relative mt-14 hidden overflow-hidden rounded-lg border border-ink/10 bg-gradient-to-br from-night via-navy to-night px-8 py-6 sm:block"
        >
          <div className="night-grid absolute inset-0 opacity-50" />
          <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-pulse/[0.14] blur-[90px]" />
          <div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-aurora/[0.12] blur-[90px]" />
          <div className="relative">
            <WorldMap locations={locations} active={active} />
          </div>
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
