"use client";

import { motion } from "framer-motion";
import { industries } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

export function Industries() {
  return (
    <section
      id="industries"
      aria-labelledby="industries-heading"
      className="scroll-mt-24 bg-white py-24 md:py-36"
    >
      <Container>
        <SectionHeading
          kicker={industries.kicker}
          heading={industries.heading}
          description={industries.description}
        />

        <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {industries.items.map((industry, i) => (
            <Reveal as="li" key={industry.name} delay={i * 0.07} className="h-full">
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group flex h-full flex-col items-center gap-4 rounded-3xl border border-ink/5 bg-mist-soft px-4 py-8 text-center transition-colors duration-400 hover:border-electric-200 hover:bg-electric-50/50"
              >
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-card transition-all duration-400 group-hover:shadow-glow-sm">
                  <Icon
                    name={industry.icon}
                    className="h-6 w-6 text-ink transition-colors duration-300 group-hover:text-electric-600"
                  />
                </span>
                <h3 className="text-[14.5px] font-semibold leading-snug text-ink">
                  {industry.name}
                </h3>
              </motion.div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
