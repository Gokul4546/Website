"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { originalContent as content } from "@/content/original-content";
import { SectionIntro } from "@/components/SectionIntro";
import { rise, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Technology Services as a connected journey: a sticky progress spine
 * tracks which capability chapter is in view; chapters alternate their
 * editorial offset so no two consecutive services read as the same card.
 */
export function ServiceJourney() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="services" className="scroll-mt-16 bg-paper-deep">
      <div aria-hidden className="signal-seam animate-seam" />
      <div className="mx-auto w-full max-w-shell px-5 py-24 sm:px-8 md:py-36 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-12">
          {/* sticky rail */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionIntro
                label={content.services.sectionName}
                heading={content.services.heading}
                headingClassName="text-section-sm"
              />
              <motion.p
                variants={rise}
                custom={0.15}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="mt-6 text-body text-ink-muted"
              >
                {content.services.intro}
              </motion.p>

              {/* progress spine — desktop */}
              <nav aria-label="Services in this section" className="mt-10 hidden lg:block">
                <ul className="relative flex flex-col gap-1 border-l border-ink/15 pl-5">
                  {content.services.items.map((service, i) => (
                    <li key={service.name} className="relative">
                      <span
                        aria-hidden
                        className={cn(
                          "absolute -left-[23px] top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full transition-all duration-300",
                          i === activeIdx ? "scale-150 bg-pulse" : "bg-steel"
                        )}
                      />
                      <a
                        href={`#service-${i}`}
                        className={cn(
                          "block py-1.5 font-mono text-[13px] uppercase tracking-[0.1em] transition-colors",
                          i === activeIdx ? "text-ink" : "text-ink-muted hover:text-ink"
                        )}
                      >
                        {service.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          {/* chapters */}
          <div className="flex flex-col gap-20 lg:col-span-8 lg:gap-28">
            {content.services.items.map((service, i) => (
              <motion.article
                key={service.name}
                id={`service-${i}`}
                variants={rise}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                onViewportEnter={() => setActiveIdx(i)}
                className={cn(
                  "scroll-mt-28 border-t border-ink/15 pt-8",
                  i % 2 === 1 && "lg:ml-16"
                )}
              >
                <div className="flex items-baseline justify-between gap-6">
                  <h3 className="font-display text-3xl font-bold text-ink md:text-4xl">
                    {service.name}
                  </h3>
                  <span
                    aria-hidden
                    className="h-2 w-2 shrink-0 rounded-full bg-pulse/60"
                  />
                </div>
                <p className="mt-5 max-w-2xl text-editorial text-ink-muted">
                  {service.description}
                </p>
                {service.technologies.length > 0 && (
                  <ul
                    aria-label={`${service.name} technologies`}
                    className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2"
                  >
                    {service.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="flex items-center gap-2.5 font-mono text-[13px] uppercase tracking-[0.1em] text-ink-muted"
                      >
                        <span aria-hidden className="h-1 w-1 rounded-full bg-signal" />
                        {tech}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
