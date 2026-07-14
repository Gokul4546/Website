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
    <section ref={ref} className="paper-wash-blue relative overflow-hidden bg-paper">
      <div aria-hidden className="signal-seam animate-seam" />
      {/* digital transformation motif: scattered grid resolving into order */}
      <div aria-hidden className="pointer-events-none absolute -left-16 bottom-10 hidden h-72 w-72 opacity-60 lg:block">
        <svg viewBox="0 0 200 200" fill="none" className="h-full w-full" strokeLinecap="round">
          <defs>
            <linearGradient id="ov-order" x1="0" y1="200" x2="200" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2E6BFF" />
              <stop offset="1" stopColor="#37D4E6" />
            </linearGradient>
          </defs>
          <circle cx="28" cy="168" r="3" fill="#8B94A7" fillOpacity="0.5" />
          <circle cx="58" cy="182" r="2.4" fill="#8B94A7" fillOpacity="0.4" />
          <circle cx="44" cy="140" r="2.7" fill="#8B94A7" fillOpacity="0.45" />
          <path d="M28 168 C70 150 90 120 108 96 C126 72 148 56 176 44" stroke="url(#ov-order)" strokeOpacity="0.6" strokeDasharray="3 6" />
          <circle cx="108" cy="96" r="3.4" fill="#37D4E6" />
          <circle cx="176" cy="44" r="4.2" fill="#2E6BFF" />
          <path d="M160 60 h32 M176 28 v32" stroke="url(#ov-order)" strokeOpacity="0.35" />
        </svg>
      </div>
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
