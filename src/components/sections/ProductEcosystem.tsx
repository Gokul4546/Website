"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { originalContent as content } from "@/content/original-content";
import { SectionIntro } from "@/components/SectionIntro";
import { ProductMark } from "@/components/visual/ProductMark";
import { rise, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

const [featured, ...modules] = content.products.items;

/** Deliberate size variation across the ecosystem grid (12-col system). */
const SPANS = [
  "md:col-span-6 lg:col-span-4",
  "md:col-span-6 lg:col-span-4",
  "md:col-span-6 lg:col-span-4",
  "md:col-span-6 lg:col-span-6",
  "md:col-span-6 lg:col-span-6",
  "md:col-span-6 lg:col-span-4",
  "md:col-span-6 lg:col-span-4",
  "md:col-span-6 lg:col-span-4",
  "md:col-span-6 lg:col-span-6",
  "md:col-span-6 lg:col-span-6",
  "md:col-span-6 lg:col-span-6",
  "md:col-span-6 lg:col-span-6",
];

type Line = { x1: number; y1: number; x2: number; y2: number };

export function ProductEcosystem() {
  const reduced = useReducedMotion();
  const gridRef = useRef<HTMLDivElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<string | null>(null);
  const [line, setLine] = useState<Line | null>(null);

  /** Draw the relationship pathway from a module to the featured hub. */
  function connect(name: string, el: HTMLElement | null) {
    setActive(name);
    const grid = gridRef.current;
    const hub = hubRef.current;
    if (!grid || !hub || !el) return;
    const g = grid.getBoundingClientRect();
    const a = el.getBoundingClientRect();
    const b = hub.getBoundingClientRect();
    setLine({
      x1: a.left + a.width / 2 - g.left,
      y1: a.top + a.height / 2 - g.top,
      x2: b.left + b.width / 2 - g.left,
      y2: b.top + b.height / 2 - g.top,
    });
  }

  function disconnect() {
    setActive(null);
    setLine(null);
  }

  return (
    <section id="products" className="scroll-mt-16 bg-paper pb-28 md:pb-40">
      <div className="mx-auto w-full max-w-shell px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-12">
          <SectionIntro
            label={content.products.sectionName}
            heading={content.products.heading}
            className="lg:col-span-7"
          />
          <motion.p
            variants={rise}
            custom={0.15}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="self-end text-body text-ink-muted lg:col-span-5"
          >
            {content.products.description}
          </motion.p>
        </div>

        <div ref={gridRef} className="relative mt-16 md:mt-20">
          {/* relationship pathway overlay */}
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-0 z-10 h-full w-full"
          >
            <AnimatePresence>
              {line && (
                <motion.line
                  key={active}
                  x1={line.x1}
                  y1={line.y1}
                  x2={line.x2}
                  y2={line.y2}
                  stroke="#2E6BFF"
                  strokeWidth="1.5"
                  strokeDasharray="6 6"
                  initial={{ pathLength: reduced ? 1 : 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.55 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: reduced ? 0 : 0.4 }}
                />
              )}
            </AnimatePresence>
          </svg>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
            {/* featured hub — the ecosystem's revenue core */}
            <motion.div
              ref={hubRef}
              variants={rise}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className={cn(
                "relative overflow-hidden border border-ink/10 bg-night p-8 transition-shadow duration-300 md:col-span-12 md:p-12 lg:col-span-8",
                active && "shadow-[0_0_0_1px_#2E6BFF]"
              )}
            >
              <div aria-hidden className="night-grid absolute inset-0 opacity-70" />
              <div
                aria-hidden
                className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-pulse/15 blur-[90px]"
              />
              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="mono-label text-signal">{featured.category}</p>
                    <h3 className="mt-4 font-display text-section-sm font-bold text-white">
                      {featured.name}
                    </h3>
                  </div>
                  <div className="h-20 w-20 shrink-0 text-steel-soft md:h-28 md:w-28">
                    <ProductMark name={featured.name} />
                  </div>
                </div>
                <p className="mt-6 max-w-xl text-editorial text-steel-soft">
                  {featured.description}
                </p>
                <a
                  href="#contact"
                  className="group mt-auto inline-flex min-h-[44px] items-center gap-3 pt-10 font-mono text-sm uppercase tracking-[0.12em] text-signal"
                >
                  {content.products.learnMore}
                  <span
                    aria-hidden
                    className="transition-transform duration-300 group-hover:translate-x-1.5"
                  >
                    →
                  </span>
                </a>
              </div>
            </motion.div>

            {/* supporting modules — varied composition, all content visible */}
            {modules.map((product, i) => (
              <motion.div
                key={product.name}
                variants={rise}
                custom={Math.min(i % 3, 2) * 0.08}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                onMouseEnter={(e) => connect(product.name, e.currentTarget)}
                onMouseLeave={disconnect}
                onFocusCapture={(e) => connect(product.name, e.currentTarget)}
                onBlurCapture={disconnect}
                className={cn(
                  "group relative flex flex-col border border-ink/10 bg-white/60 p-7 transition-all duration-300",
                  "hover:-translate-y-1 hover:border-pulse/50 hover:bg-white",
                  "focus-within:-translate-y-1 focus-within:border-pulse/50 focus-within:bg-white",
                  SPANS[i]
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="mono-label text-ink-muted group-hover:text-pulse">
                    {product.category}
                  </p>
                  <div className="h-11 w-11 shrink-0 text-ink-muted transition-colors duration-300 group-hover:text-pulse">
                    <ProductMark name={product.name} />
                  </div>
                </div>
                <h3 className="mt-3 font-display text-2xl font-bold text-ink">
                  {product.name}
                </h3>
                <p className="mt-3 flex-1 text-[15.5px] leading-relaxed text-ink-muted">
                  {product.description}
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex min-h-[44px] items-center gap-2.5 font-mono text-[13px] uppercase tracking-[0.12em] text-ink transition-colors group-hover:text-pulse"
                >
                  {content.products.learnMore}
                  <span
                    aria-hidden
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
