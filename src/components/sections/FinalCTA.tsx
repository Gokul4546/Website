"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";
import { originalContent as content } from "@/content/original-content";
import { rise, viewportOnce } from "@/lib/motion";

const NetworkBackground = dynamic(
  () => import("@/components/visual/NetworkBackground"),
  { ssr: false }
);

/**
 * Final CTA: the network converges to a single point of contact behind
 * the locked heading, with a pointer-following spotlight. Full-bleed
 * midnight surface — not a small box in a white section.
 */
export function FinalCTA() {
  const reduced = useReducedMotionSafe();
  const ref = useRef<HTMLElement>(null);
  const sx = useSpring(useMotionValue(50), { stiffness: 60, damping: 22 });
  const sy = useSpring(useMotionValue(45), { stiffness: 60, damping: 22 });
  const spotlight = useMotionTemplate`radial-gradient(34rem 34rem at ${sx}% ${sy}%, rgba(46,107,255,0.16), transparent 70%)`;

  function onPointerMove(e: React.PointerEvent) {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    sx.set(((e.clientX - rect.left) / rect.width) * 100);
    sy.set(((e.clientY - rect.top) / rect.height) * 100);
  }

  return (
    <section
      id="contact"
      ref={ref}
      onPointerMove={onPointerMove}
      className="relative scroll-mt-16 overflow-hidden bg-night"
    >
      <div aria-hidden className="signal-seam animate-seam" />
      <div className="absolute inset-0">
        <NetworkBackground mode="converge" className="h-full w-full" interactive={false} />
      </div>
      <motion.div aria-hidden style={{ background: spotlight }} className="absolute inset-0" />

      <div className="relative mx-auto flex w-full max-w-shell flex-col items-start px-5 py-32 sm:px-8 md:py-48 lg:px-12">
        <motion.h2
          variants={rise}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-4xl font-display text-section font-bold text-white"
        >
          {content.cta.heading}
        </motion.h2>

        <motion.div
          variants={rise}
          custom={0.15}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 flex flex-wrap items-center gap-6"
        >
          <a
            href={`mailto:${content.cta.email}`}
            className="group relative inline-flex min-h-[56px] items-center overflow-hidden bg-pulse px-10 font-mono text-sm uppercase tracking-[0.12em] text-white transition-colors hover:bg-pulse-deep"
          >
            <span
              aria-hidden
              className="absolute inset-y-0 -left-full w-1/2 bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-[300%]"
            />
            {content.cta.button}
          </a>
          <a
            href={`mailto:${content.cta.email}`}
            className="font-mono text-sm text-steel-soft underline decoration-steel/40 underline-offset-8 transition-colors hover:text-signal hover:decoration-signal"
          >
            {content.cta.email}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
