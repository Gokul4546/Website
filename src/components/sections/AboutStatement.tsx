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
    <section id="about" className="paper-wash-aurora relative scroll-mt-16 overflow-hidden bg-paper">
      <div aria-hidden className="signal-seam signal-seam--aurora animate-seam" />

      {/* global technology illustration — company reach, drawn not stocked */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/2 hidden h-[34rem] w-[34rem] -translate-y-1/2 opacity-80 lg:block"
      >
        <svg viewBox="0 0 300 300" fill="none" className="h-full w-full" strokeLinecap="round">
          <defs>
            <linearGradient id="about-globe" x1="0" y1="0" x2="300" y2="300" gradientUnits="userSpaceOnUse">
              <stop stopColor="#23C39B" />
              <stop offset="0.5" stopColor="#37D4E6" />
              <stop offset="1" stopColor="#2E6BFF" />
            </linearGradient>
          </defs>
          <circle cx="150" cy="150" r="110" stroke="url(#about-globe)" strokeOpacity="0.5" />
          <ellipse cx="150" cy="150" rx="110" ry="44" stroke="url(#about-globe)" strokeOpacity="0.35" />
          <ellipse cx="150" cy="150" rx="66" ry="108" stroke="url(#about-globe)" strokeOpacity="0.3" />
          <path d="M42 128 h216 M50 186 h200" stroke="url(#about-globe)" strokeOpacity="0.22" />
          <path d="M76 92 C120 60 190 62 226 96" stroke="url(#about-globe)" strokeOpacity="0.55" strokeDasharray="4 6" />
          <path d="M60 200 C110 244 200 240 244 194" stroke="url(#about-globe)" strokeOpacity="0.45" strokeDasharray="4 6" />
          <circle cx="76" cy="92" r="5" fill="#23C39B" />
          <circle cx="226" cy="96" r="5" fill="#2E6BFF" />
          <circle cx="244" cy="194" r="4" fill="#37D4E6" />
          <circle cx="60" cy="200" r="4" fill="#8467F3" />
          <circle cx="150" cy="40" r="3.5" fill="#37D4E6" />
        </svg>
      </div>

      <div className="relative mx-auto w-full max-w-shell px-5 py-24 sm:px-8 md:py-36 lg:px-12">
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
