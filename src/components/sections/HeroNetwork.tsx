"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";
import { originalContent as content } from "@/content/original-content";
import { AnimatedMetric } from "@/components/AnimatedMetric";
import { unmask, rise } from "@/lib/motion";

const NetworkBackground = dynamic(
  () => import("@/components/visual/NetworkBackground"),
  { ssr: false }
);

export function HeroNetwork() {
  const reduced = useReducedMotionSafe();
  const ref = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const depthX = useSpring(useTransform(mx, [-0.5, 0.5], [14, -14]), {
    stiffness: 50,
    damping: 20,
  });
  const depthY = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), {
    stiffness: 50,
    damping: 20,
  });

  function onPointerMove(e: React.PointerEvent) {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set(e.clientX / rect.width - 0.5);
    my.set(e.clientY / rect.height - 0.5);
  }

  return (
    <section
      ref={ref}
      onPointerMove={onPointerMove}
      className="relative flex min-h-svh flex-col justify-end overflow-hidden bg-night"
    >
      {/* the living network */}
      <div className="absolute inset-0">
        <NetworkBackground mode="drift" className="h-full w-full" />
      </div>
      {/* ambient depth lighting, offset by pointer */}
      <motion.div
        aria-hidden
        style={{ x: depthX, y: depthY }}
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-[12%] top-[18%] h-[42vmin] w-[42vmin] rounded-full bg-pulse/[0.13] blur-[110px]" />
        <div className="absolute bottom-[8%] right-[10%] h-[36vmin] w-[36vmin] rounded-full bg-signal/[0.08] blur-[100px]" />
      </motion.div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-night to-transparent"
      />

      <div className="relative mx-auto w-full max-w-shell px-5 pb-16 pt-36 sm:px-8 md:pb-20 lg:px-12">
        <div className="max-w-5xl">
          <div className="overflow-hidden">
            <motion.h1
              variants={unmask}
              initial={reduced ? false : "hidden"}
              animate="visible"
              className="font-display text-hero font-bold text-white"
            >
              {content.hero.heading}
            </motion.h1>
          </div>

          <motion.p
            variants={rise}
            custom={0.25}
            initial={reduced ? false : "hidden"}
            animate="visible"
            className="mt-8 max-w-3xl text-editorial text-steel-soft"
          >
            {content.hero.subheading}
          </motion.p>

          <motion.p
            variants={rise}
            custom={0.38}
            initial={reduced ? false : "hidden"}
            animate="visible"
            className="mt-5 max-w-2xl font-mono text-[13.5px] leading-relaxed text-steel"
          >
            {content.hero.description}
          </motion.p>

          <motion.div
            variants={rise}
            custom={0.5}
            initial={reduced ? false : "hidden"}
            animate="visible"
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group relative inline-flex min-h-[52px] items-center overflow-hidden bg-pulse px-8 font-mono text-sm uppercase tracking-[0.12em] text-white transition-colors hover:bg-pulse-deep"
            >
              <span
                aria-hidden
                className="absolute inset-y-0 -left-full w-1/2 bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-[300%]"
              />
              {content.hero.primaryCta}
            </a>
            <a
              href="#products"
              className="inline-flex min-h-[52px] items-center gap-3 border border-white/20 px-8 font-mono text-sm uppercase tracking-[0.12em] text-white transition-colors hover:border-signal hover:text-signal"
            >
              {content.hero.secondaryCta}
              <span aria-hidden>→</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={rise}
          custom={0.65}
          initial={reduced ? false : "hidden"}
          animate="visible"
          className="mt-16 flex flex-wrap items-center gap-x-14 gap-y-6 border-t border-white/10 pt-8 md:mt-20"
        >
          {content.hero.stats.map((stat) => (
            <AnimatedMetric key={stat.label} value={stat.value} label={stat.label} dark />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
