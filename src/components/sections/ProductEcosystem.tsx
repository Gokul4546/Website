"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { originalContent as content } from "@/content/original-content";
import { SectionIntro } from "@/components/SectionIntro";
import { ProductMark, PRODUCT_HUES } from "@/components/visual/ProductMark";
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
    <section id="products" className="paper-wash-blue relative scroll-mt-16 pb-28 md:pb-40">
      <div aria-hidden className="paper-dots absolute inset-0 opacity-40" />
      <div className="relative mx-auto w-full max-w-shell px-5 sm:px-8 lg:px-12">
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
                  stroke={(active && PRODUCT_HUES[active]?.accent) || "#2E6BFF"}
                  strokeWidth="1.5"
                  strokeDasharray="6 6"
                  initial={{ pathLength: reduced ? 1 : 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.65 }}
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
                className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-pulse/25 blur-[90px]"
              />
              <div
                aria-hidden
                className="absolute -bottom-24 -left-16 h-60 w-60 rounded-full bg-signal/15 blur-[90px]"
              />
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-pulse via-signal to-haze"
              />
              {/* featured product's own orbital signature */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 bottom-[-4.5rem] hidden h-64 w-64 opacity-70 md:block"
              >
                <svg viewBox="0 0 200 200" fill="none" className="h-full w-full animate-orbit-spin-reverse">
                  <circle cx="100" cy="100" r="88" stroke="#37D4E6" strokeOpacity="0.3" strokeDasharray="3 7" />
                  <circle cx="100" cy="100" r="60" stroke="#2E6BFF" strokeOpacity="0.35" />
                  <circle cx="160" cy="100" r="4" fill="#37D4E6" />
                  <circle cx="100" cy="12" r="3" fill="#2E6BFF" />
                </svg>
              </div>
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

            {/* supporting modules — each carries its product's own hue */}
            {modules.map((product, i) => {
              const hue = PRODUCT_HUES[product.name] ?? PRODUCT_HUES.WovVFlow;
              return (
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
                    "group relative flex flex-col overflow-hidden rounded-lg border border-ink/10 bg-white p-7 transition-all duration-300",
                    "hover:-translate-y-1 hover:shadow-[0_20px_48px_-18px_rgba(19,26,40,0.3)]",
                    "focus-within:-translate-y-1",
                    SPANS[i]
                  )}
                >
                  {/* the product's own environment: permanent tint + hairline */}
                  <div aria-hidden className={cn("absolute inset-0 opacity-70", hue.tile)} />
                  <div
                    aria-hidden
                    className={cn(
                      "absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r opacity-80 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100",
                      hue.topline
                    )}
                  />
                  <div
                    aria-hidden
                    className="absolute -right-8 -top-8 h-32 w-32 rounded-full blur-2xl transition-opacity duration-400"
                    style={{ backgroundColor: `${hue.accent}24` }}
                  />
                  {/* watermark mark — the product's glyph as a background motif */}
                  <div
                    aria-hidden
                    className="absolute -bottom-6 -right-6 h-36 w-36 opacity-[0.09] transition-all duration-400 group-hover:opacity-[0.16] group-hover:-rotate-3"
                  >
                    <ProductMark name={product.name} />
                  </div>
                  <div className="relative flex items-start justify-between gap-4">
                    <p className="mono-label text-ink-muted">{product.category}</p>
                    <div
                      className={cn(
                        "flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-ink/8 p-2.5 text-steel transition-transform duration-300 group-hover:scale-105",
                        hue.tile
                      )}
                    >
                      <ProductMark name={product.name} />
                    </div>
                  </div>
                  <h3 className="relative mt-3 font-display text-2xl font-bold text-ink">
                    {product.name}
                  </h3>
                  <p className="relative mt-3 flex-1 text-[15.5px] leading-relaxed text-ink-muted">
                    {product.description}
                  </p>
                  <a
                    href="#contact"
                    className={cn(
                      "relative mt-5 inline-flex min-h-[44px] items-center gap-2.5 font-mono text-[13px] uppercase tracking-[0.12em] text-ink transition-colors",
                      hue.linkHover
                    )}
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
