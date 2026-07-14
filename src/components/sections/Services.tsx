"use client";

import { motion } from "framer-motion";
import { services } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="scroll-mt-24 py-24 md:py-36"
    >
      <Container>
        <SectionHeading
          kicker={services.kicker}
          heading={services.heading}
          description={services.description}
        />

        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.items.map((service, i) => (
            <Reveal
              as="li"
              key={service.name}
              delay={(i % 3) * 0.09}
              className={i === 0 ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="group flex h-full flex-col rounded-3xl bg-white p-8 shadow-card transition-shadow duration-400 hover:shadow-card-hover"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-mist-deep text-ink transition-all duration-400 group-hover:bg-ink group-hover:text-white">
                  <Icon name={service.icon} className="h-[22px] w-[22px]" />
                </div>

                <h3 className="font-display text-xl font-bold tracking-tight text-ink">
                  {service.name}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-muted">
                  {service.description}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Capabilities">
                  {service.chips.map((chip) => (
                    <li
                      key={chip}
                      className="rounded-full border border-ink/8 bg-mist px-3 py-1 text-[12.5px] font-medium text-ink-muted transition-colors duration-300 group-hover:border-electric-200 group-hover:bg-electric-50 group-hover:text-electric-700"
                    >
                      {chip}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
