"use client";

import { motion } from "framer-motion";
import { originalContent as content } from "@/content/original-content";
import { SectionIntro } from "@/components/SectionIntro";
import { unmask, rise, viewportOnce } from "@/lib/motion";

/**
 * About as an editorial statement: the company name at display scale,
 * the locked positioning sentence as a large pull quote.
 */
export function AboutStatement() {
  return (
    <section id="about" className="scroll-mt-16 bg-paper">
      <div aria-hidden className="signal-seam animate-seam" />
      <div className="mx-auto w-full max-w-shell px-5 py-24 sm:px-8 md:py-36 lg:px-12">
        <SectionIntro label={content.about.sectionName} />

        <div className="overflow-hidden">
          <motion.h2
            variants={unmask}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-10 font-display text-section font-bold text-ink"
          >
            {content.about.companyName}
          </motion.h2>
        </div>

        <motion.figure
          variants={rise}
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative mt-14 max-w-4xl md:ml-[8%] md:mt-20"
        >
          <span
            aria-hidden
            className="absolute -top-10 left-0 font-display text-[7rem] font-bold leading-none text-pulse/15 select-none md:-left-14 md:-top-6"
          >
            “
          </span>
          <blockquote className="relative text-editorial-lg font-medium text-ink">
            {content.about.statement}
          </blockquote>
          <span aria-hidden className="mt-8 block h-px w-24 bg-gradient-to-r from-pulse to-signal" />
        </motion.figure>
      </div>
    </section>
  );
}
