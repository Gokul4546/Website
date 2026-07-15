"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { originalContent as content } from "@/content/original-content";
import { SectionIntro } from "@/components/SectionIntro";
import { ServiceIcon, SERVICE_HUES } from "@/components/visual/ServiceIcon";
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
    <section id="services" className="paper-wash-violet scroll-mt-16 bg-paper-deep">
      <div aria-hidden className="signal-seam signal-seam--violet animate-seam" />
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
                  "grid scroll-mt-28 items-center gap-8 border-t border-ink/15 pt-10 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]",
                  i % 2 === 1 && "md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]"
                )}
              >
                {/* illustration panel — alternates sides per capability */}
                <div
                  aria-hidden
                  className={cn(
                    "relative hidden aspect-square max-w-[15rem] items-center justify-center self-start overflow-hidden rounded-2xl p-10 md:flex",
                    i % 2 === 1 && "md:order-2 md:justify-self-end"
                  )}
                  style={{
                    background: `linear-gradient(140deg, ${(SERVICE_HUES[service.name] ?? SERVICE_HUES.Oracle).from}1E, #FFFFFFB0 55%, ${(SERVICE_HUES[service.name] ?? SERVICE_HUES.Oracle).to}1E)`,
                    boxShadow: `0 18px 40px -22px ${(SERVICE_HUES[service.name] ?? SERVICE_HUES.Oracle).from}66`,
                  }}
                >
                  <div className="paper-dots absolute inset-0 opacity-50" />
                  <div className="relative h-full w-full">
                    <ServiceIcon name={service.name} />
                  </div>
                </div>

                <div className={cn(i % 2 === 1 && "md:order-1")}>
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex items-center gap-5">
                      {/* compact mark for small screens */}
                      <span
                        aria-hidden
                        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-ink/8 bg-white p-2 shadow-[0_6px_18px_-8px_rgba(19,26,40,0.25)] md:hidden"
                      >
                        <ServiceIcon name={service.name} />
                      </span>
                      <h3 className="font-display text-3xl font-bold text-ink md:text-4xl">
                        {service.name}
                      </h3>
                    </div>
                    <span
                      aria-hidden
                      className="mt-2 h-2 w-2 shrink-0 rounded-full"
                      style={{
                        backgroundColor:
                          (SERVICE_HUES[service.name] ?? SERVICE_HUES.Oracle).from,
                      }}
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
                          className={cn(
                            "flex items-center gap-2.5 font-mono text-[13px] uppercase tracking-[0.1em]",
                            (SERVICE_HUES[service.name] ?? SERVICE_HUES.Oracle).chip
                          )}
                        >
                          <span
                            aria-hidden
                            className="h-1 w-1 rounded-full"
                            style={{
                              backgroundColor:
                                (SERVICE_HUES[service.name] ?? SERVICE_HUES.Oracle).to,
                            }}
                          />
                          {tech}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
