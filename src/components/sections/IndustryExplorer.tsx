"use client";

import { useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { originalContent as content } from "@/content/original-content";
import { SectionIntro } from "@/components/SectionIntro";
import { IndustryConstellation } from "@/components/visual/IndustryConstellation";
import { rise, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Industry explorer: an accessible tablist where the selected industry
 * re-arranges the network constellation into that industry's structure.
 * Full arrow-key navigation; every industry remains reachable by touch
 * and keyboard; nothing is hover-only.
 */
export function IndustryExplorer() {
  const [selected, setSelected] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();
  const items = content.industries.items;

  function onKeyDown(e: React.KeyboardEvent) {
    const last = items.length - 1;
    let next: number | null = null;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = selected === last ? 0 : selected + 1;
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = selected === 0 ? last : selected - 1;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = last;
    if (next !== null) {
      e.preventDefault();
      setSelected(next);
      tabRefs.current[next]?.focus();
    }
  }

  return (
    <section id="industries" className="scroll-mt-16 bg-paper pb-28 pt-24 md:pb-40 md:pt-36">
      <div className="mx-auto w-full max-w-shell px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-12">
          <SectionIntro label={content.industries.sectionName} className="lg:col-span-5" />
          <motion.p
            variants={rise}
            custom={0.12}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="self-end font-mono text-[13.5px] leading-relaxed text-ink-muted lg:col-span-7"
          >
            {content.industries.description}
          </motion.p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-16">
          {/* industry selector */}
          <div
            role="tablist"
            aria-label={content.industries.sectionName}
            aria-orientation="vertical"
            onKeyDown={onKeyDown}
            className="flex flex-col lg:col-span-6"
          >
            {items.map((industry, i) => {
              const active = selected === i;
              return (
                <button
                  key={industry.name}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  role="tab"
                  id={`${baseId}-tab-${i}`}
                  aria-selected={active}
                  aria-controls={`${baseId}-panel`}
                  tabIndex={active ? 0 : -1}
                  onClick={() => setSelected(i)}
                  className={cn(
                    "group flex min-h-[56px] items-center justify-between gap-6 border-b border-ink/15 px-1 py-5 text-left transition-colors",
                    active ? "text-ink" : "text-ink-muted hover:text-ink"
                  )}
                >
                  <span
                    className={cn(
                      "font-display text-2xl font-semibold transition-transform duration-300 md:text-3xl",
                      active && "translate-x-2"
                    )}
                  >
                    {industry.name}
                  </span>
                  <span
                    aria-hidden
                    className={cn(
                      "h-2 w-2 shrink-0 rounded-full transition-all duration-300",
                      active ? "scale-125 bg-pulse" : "bg-steel/60"
                    )}
                  />
                </button>
              );
            })}
          </div>

          {/* constellation panel */}
          <div
            role="tabpanel"
            id={`${baseId}-panel`}
            aria-labelledby={`${baseId}-tab-${selected}`}
            className="relative min-h-[320px] border border-ink/10 bg-night lg:col-span-6"
          >
            <div aria-hidden className="night-grid absolute inset-0 opacity-60" />
            <div className="absolute inset-6 md:inset-10">
              <IndustryConstellation index={selected} />
            </div>
            <AnimatePresence mode="wait">
              <motion.p
                key={selected}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-6 left-6 right-6 font-mono text-sm uppercase tracking-[0.12em] text-signal md:bottom-8 md:left-8"
              >
                {items[selected].name}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
