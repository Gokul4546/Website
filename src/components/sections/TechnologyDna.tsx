"use client";

import { motion } from "framer-motion";
import { technologyDna } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

export function TechnologyDna() {
  return (
    <section
      aria-labelledby="dna-heading"
      className="relative overflow-hidden bg-ink py-24 md:py-36"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-electric-600/15 blur-3xl animate-float-slow" />
        <div className="absolute -right-32 bottom-0 h-[440px] w-[440px] rounded-full bg-violet-600/15 blur-3xl animate-float" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:52px_52px]" />
      </div>

      <Container className="relative">
        <SectionHeading
          kicker={technologyDna.kicker}
          heading={technologyDna.heading}
          description={technologyDna.body}
          dark
        />

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {technologyDna.pillars.map((pillar, i) => (
            <Reveal as="li" key={pillar.name} delay={i * 0.09} className="h-full">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="group relative flex h-full flex-col items-center gap-5 overflow-hidden rounded-3xl gradient-border-dark p-8 text-center"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-8 -top-10 h-24 rounded-full bg-electric-500/25 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl glass-dark text-white transition-transform duration-400 group-hover:scale-110">
                  <Icon name={pillar.icon} className="h-6 w-6" />
                </span>
                <h3 className="font-display text-lg font-semibold text-white">
                  {pillar.name}
                </h3>
              </motion.div>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.2} className="mt-14 text-center">
          <p className="mx-auto max-w-2xl text-lg font-medium leading-relaxed text-white/70">
            {technologyDna.principles}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
