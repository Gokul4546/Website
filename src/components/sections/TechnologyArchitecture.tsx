"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";
import { originalContent as content } from "@/content/original-content";
import { SectionIntro } from "@/components/SectionIntro";
import { rise, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Technology DNA as a cinematic architecture: the four sourced technology
 * layers form an illuminated stack. Scroll progress drives a signal packet
 * down the stack, lighting each layer in sequence. Sticky choreography is
 * desktop-only; smaller viewports get the same stack in normal flow.
 */
export function TechnologyArchitecture() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotionSafe();
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const packetY = useTransform(scrollYProgress, [0.05, 0.9], ["0%", "100%"]);

  scrollYProgress.on("change", (v) => {
    const idx = Math.min(3, Math.floor(v * 4.4));
    if (idx !== active && idx >= 0) setActive(idx);
  });

  const layers = content.technologyDna.layers;

  // per-layer illumination hues: AI violet, ML cyan, Cloud blue, aPaaS teal
  const layerHues = [
    { dot: "#8467F3", border: "border-haze/50", glow: "rgba(132,103,243,0.5)" },
    { dot: "#37D4E6", border: "border-signal/50", glow: "rgba(55,212,230,0.5)" },
    { dot: "#2E6BFF", border: "border-pulse/50", glow: "rgba(46,107,255,0.5)" },
    { dot: "#23C39B", border: "border-aurora/50", glow: "rgba(35,195,155,0.5)" },
  ];

  return (
    <section className="relative bg-night">
      <div aria-hidden className="signal-seam animate-seam" />
      <div ref={containerRef} className="relative lg:h-[280vh]">
        <div className="lg:sticky lg:top-0 lg:flex lg:h-svh lg:flex-col lg:justify-center">
          <div aria-hidden className="night-grid absolute inset-0 animate-grid-drift" />
          <div
            aria-hidden
            className="absolute left-1/2 top-0 h-72 w-[min(36rem,100%)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pulse/10 blur-[120px]"
          />

          <div className="relative mx-auto w-full max-w-shell px-5 py-24 sm:px-8 lg:py-16 lg:px-12">
            <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-5">
                <SectionIntro label={content.technologyDna.sectionName} dark />
                <motion.p
                  variants={rise}
                  custom={0.12}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  className="mt-8 text-editorial text-steel-soft"
                >
                  {content.technologyDna.body}
                </motion.p>
                <motion.p
                  variants={rise}
                  custom={0.2}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  className="mt-8 border-l-2 border-signal/50 pl-5 font-mono text-sm leading-relaxed text-steel"
                >
                  {content.technologyDna.principles}
                </motion.p>
              </div>

              {/* the illuminated stack */}
              <div className="relative lg:col-span-7 lg:pl-10">
                <div
                  aria-hidden
                  className="absolute bottom-4 left-2 top-4 hidden w-px bg-white/10 lg:block"
                >
                  <motion.span
                    style={{ top: reduced ? "100%" : packetY }}
                    className="absolute -left-[3px] h-[7px] w-[7px] rounded-full bg-signal shadow-[0_0_12px_2px_rgba(55,212,230,0.6)]"
                  />
                </div>

                <ol className="flex flex-col gap-4">
                  {layers.map((layer, i) => {
                    const lit = i <= active;
                    return (
                      <motion.li
                        key={layer}
                        variants={rise}
                        custom={i * 0.08}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                        onViewportEnter={() => {
                          // small screens have no sticky scroll driver
                          if (window.innerWidth < 1024) setActive(i);
                        }}
                        className={cn(
                          "relative overflow-hidden border p-6 transition-all duration-500 md:p-8",
                          lit
                            ? cn(layerHues[i].border, "bg-night-raised")
                            : "border-white/10 bg-night-soft/50",
                          i === 1 && "lg:ml-10",
                          i === 2 && "lg:ml-20",
                          i === 3 && "lg:ml-32"
                        )}
                      >
                        <div
                          aria-hidden
                          className={cn(
                            "night-grid absolute inset-0 transition-opacity duration-500",
                            lit ? "opacity-100" : "opacity-30"
                          )}
                        />
                        {/* layer's own light when active */}
                        <div
                          aria-hidden
                          className={cn(
                            "absolute -right-12 -top-12 h-36 w-36 rounded-full blur-2xl transition-opacity duration-500",
                            lit ? "opacity-40" : "opacity-0"
                          )}
                          style={{ backgroundColor: layerHues[i].dot }}
                        />
                        <div className="relative flex items-center gap-5">
                          <span
                            aria-hidden
                            className={cn(
                              "h-2.5 w-2.5 shrink-0 rounded-full transition-all duration-500",
                              !lit && "bg-steel/50"
                            )}
                            style={
                              lit
                                ? {
                                    backgroundColor: layerHues[i].dot,
                                    boxShadow: `0 0 10px 2px ${layerHues[i].glow}`,
                                  }
                                : undefined
                            }
                          />
                          <span
                            className={cn(
                              "font-mono text-sm uppercase tracking-[0.14em] transition-colors duration-500 md:text-base",
                              lit ? "text-white" : "text-steel"
                            )}
                          >
                            {layer}
                          </span>
                        </div>
                      </motion.li>
                    );
                  })}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
