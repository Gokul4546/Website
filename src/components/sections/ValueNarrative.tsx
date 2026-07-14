"use client";

import { motion } from "framer-motion";
import { originalContent as content } from "@/content/original-content";
import { SectionIntro } from "@/components/SectionIntro";
import { viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Why Choose WovVTech as a value narrative: the lead claim at display
 * scale, then each locked statement illuminating in sequence as it
 * enters view — a statement-driven composition, not a card matrix.
 */
export function ValueNarrative() {
  return (
    <section className="relative bg-night pb-28 pt-24 md:pb-40 md:pt-32">
      <div className="mx-auto w-full max-w-shell px-5 sm:px-8 lg:px-12">
        <SectionIntro label={content.whyChoose.sectionName} dark />

        <motion.p
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.75, ease: [0.22, 0.61, 0.24, 1], delay: 0.1 }}
          className="mt-10 max-w-5xl font-display text-section-sm font-bold text-white"
        >
          {content.whyChoose.lead}
        </motion.p>

        <div className="mt-20 flex flex-col gap-16 md:mt-28 md:gap-20">
          {content.whyChoose.statements.map((statement, i) => {
            // each value statement carries its own light
            const hues = [
              { dot: "#2E6BFF", glow: "rgba(46,107,255,0.45)" },
              { dot: "#37D4E6", glow: "rgba(55,212,230,0.45)" },
              { dot: "#23C39B", glow: "rgba(35,195,155,0.45)" },
              { dot: "#C65CF0", glow: "rgba(198,92,240,0.45)" },
            ][i % 4];
            return (
              <motion.blockquote
                key={statement}
                initial={{ opacity: 0.25 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-30%" }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className={cn(
                  "relative max-w-3xl border-l border-white/15 pl-8 md:pl-12",
                  i % 2 === 1 && "md:ml-auto"
                )}
              >
                <span
                  aria-hidden
                  className="absolute -left-[5px] top-1 h-[9px] w-[9px] rounded-full"
                  style={{
                    backgroundColor: hues.dot,
                    boxShadow: `0 0 10px 2px ${hues.glow}`,
                  }}
                />
                <p className="text-editorial-lg font-medium text-steel-soft">
                  {statement}
                </p>
              </motion.blockquote>
            );
          })}
        </div>
      </div>
    </section>
  );
}
