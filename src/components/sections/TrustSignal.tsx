"use client";

import { motion } from "framer-motion";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";
import { originalContent as content } from "@/content/original-content";
import { rise, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

const LAUREL_HUES = ["#F5A524", "#37D4E6", "#C65CF0"];

/** Small laurel-style recognition mark, tinted per award. */
function RecognitionMark({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden className="h-4 w-4 shrink-0" strokeWidth="1.3" strokeLinecap="round">
      <path d="M5 4 C3 8 3 12 6 15 M15 4 C17 8 17 12 14 15" stroke={color} opacity="0.8" />
      <path d="M10 4 l1.3 2.7 3 .4 -2.2 2.1 .5 2.9 -2.6 -1.4 -2.6 1.4 .5 -2.9 -2.2 -2.1 3 -.4 z" fill={color} fillOpacity="0.9" stroke="none" />
    </svg>
  );
}

function RecognitionRail({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <ul
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 items-center"
    >
      {content.trust.recognitions.map((item, i) => (
        <li
          key={item}
          className="flex items-center gap-4 whitespace-nowrap pr-16 font-mono text-sm text-steel-soft"
        >
          <RecognitionMark color={LAUREL_HUES[i % LAUREL_HUES.length]} />
          {item}
        </li>
      ))}
    </ul>
  );
}

/**
 * Trust rail: the fortune-500 sentence as the lead statement, with the
 * three industry recognitions moving slowly along a signal rail.
 */
export function TrustSignal() {
  const reduced = useReducedMotionSafe();

  return (
    <section
      aria-labelledby="trust-heading"
      className="relative overflow-hidden bg-night pb-20 pt-4"
    >
      <div className="mx-auto w-full max-w-shell px-5 sm:px-8 lg:px-12">
        <motion.h2
          id="trust-heading"
          variants={rise}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mono-label text-signal"
        >
          {content.trust.sectionName}
        </motion.h2>
        <motion.p
          variants={rise}
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-6 max-w-4xl font-display text-editorial-lg font-semibold text-white"
        >
          {content.trust.line}
        </motion.p>
      </div>

      <div className="relative mt-12 border-y border-white/10 py-5">
        <div
          className={cn(
            "flex w-max",
            !reduced && "animate-rail-slide",
            reduced && "max-w-full flex-wrap gap-y-3 px-5"
          )}
        >
          <RecognitionRail />
          {!reduced && <RecognitionRail ariaHidden />}
        </div>
      </div>
    </section>
  );
}
