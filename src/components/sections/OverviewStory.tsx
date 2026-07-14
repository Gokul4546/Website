"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";
import { originalContent as content } from "@/content/original-content";
import { SectionIntro } from "@/components/SectionIntro";

/**
 * Business Overview as editorial storytelling: the two locked paragraphs
 * set at editorial scale, "illuminated" as a signal pathway draws down
 * the page with scroll.
 */
export function OverviewStory() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotionSafe();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.45"],
  });
  const pathScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const p1Color = useTransform(scrollYProgress, [0.05, 0.4], ["#8B94A7", "#131A28"]);
  const p2Color = useTransform(scrollYProgress, [0.45, 0.85], ["#8B94A7", "#131A28"]);

  return (
    <section ref={ref} className="relative bg-paper">
      <div aria-hidden className="signal-seam animate-seam" />
      <div className="mx-auto w-full max-w-shell px-5 py-24 sm:px-8 md:py-36 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <SectionIntro label={content.overview.sectionName} className="lg:sticky lg:top-32" />
          </div>

          <div className="relative lg:col-span-8">
            {/* scroll-drawn pathway */}
            <div aria-hidden className="absolute -left-6 top-2 bottom-2 hidden w-px bg-ink/10 md:block">
              <motion.div
                style={{ scaleY: reduced ? 1 : pathScale }}
                className="h-full w-full origin-top bg-gradient-to-b from-pulse to-signal"
              />
            </div>

            <motion.p
              style={reduced ? undefined : { color: p1Color }}
              className="font-display text-editorial-lg font-medium text-ink"
            >
              {content.overview.paragraphs[0]}
            </motion.p>
            <motion.p
              style={reduced ? undefined : { color: p2Color }}
              className="mt-12 max-w-3xl text-editorial text-ink"
            >
              {content.overview.paragraphs[1]}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
