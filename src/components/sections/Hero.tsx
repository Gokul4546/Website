"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { hero } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const ease = [0.21, 0.65, 0.36, 1] as const;

function Orbs({ mx, my }: { mx: any; my: any }) {
  const x1 = useTransform(mx, [-0.5, 0.5], [-24, 24]);
  const y1 = useTransform(my, [-0.5, 0.5], [-18, 18]);
  const x2 = useTransform(mx, [-0.5, 0.5], [30, -30]);
  const y2 = useTransform(my, [-0.5, 0.5], [22, -22]);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        style={{ x: x1, y: y1 }}
        className="absolute -left-32 top-24 h-[480px] w-[480px] rounded-full bg-gradient-to-br from-electric-400/25 to-violet-400/15 blur-3xl animate-float-slow"
      />
      <motion.div
        style={{ x: x2, y: y2 }}
        className="absolute -right-40 top-1/3 h-[520px] w-[520px] rounded-full bg-gradient-to-bl from-violet-400/20 to-cyanic-400/15 blur-3xl animate-float"
      />
      <div className="absolute left-1/2 top-0 h-full w-full -translate-x-1/2 bg-grid-fade bg-[length:100%_100%,44px_44px,44px_44px]" />
    </div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 60, damping: 20 });
  const smy = useSpring(my, { stiffness: 60, damping: 20 });

  function onMouseMove(e: React.MouseEvent) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section
      ref={ref}
      onMouseMove={onMouseMove}
      className="relative overflow-hidden bg-hero-mesh pb-24 pt-40 md:pb-32 md:pt-52"
    >
      <Orbs mx={smx} my={smy} />

      <Container className="relative">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <Badge>{hero.badge}</Badge>
          </motion.div>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="mt-8 text-display-xl font-display font-bold text-ink"
          >
            <span className="gradient-text">{hero.heading}</span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted md:text-xl"
          >
            {hero.subheading}
          </motion.p>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.32, ease }}
            className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted/80"
          >
            {hero.description}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.42, ease }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <Button href="#contact" withArrow>
              {hero.primaryCta}
            </Button>
            <Button href="#products" variant="secondary">
              {hero.secondaryCta}
            </Button>
          </motion.div>

          <motion.dl
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease }}
            className="mt-20 grid w-full grid-cols-2 gap-px overflow-hidden rounded-3xl glass shadow-card md:grid-cols-4"
          >
            {hero.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-1 bg-white/40 px-6 py-7"
              >
                <dd className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
                  {stat.value}
                </dd>
                <dt className="text-[13px] font-medium uppercase tracking-[0.14em] text-ink-muted">
                  {stat.label}
                </dt>
              </div>
            ))}
          </motion.dl>
        </div>
      </Container>
    </section>
  );
}
