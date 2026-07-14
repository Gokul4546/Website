"use client";

import { motion } from "framer-motion";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";
import { originalContent as content } from "@/content/original-content";
import { rise, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

function RecognitionRail({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <ul
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 items-center"
    >
      {content.trust.recognitions.map((item) => (
        <li
          key={item}
          className="flex items-center gap-4 whitespace-nowrap pr-16 font-mono text-sm text-steel"
        >
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-signal/70" />
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
