"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { globalPresence } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function GlobalPresence() {
  return (
    <section aria-labelledby="global-heading" className="py-24 md:py-36">
      <Container>
        <SectionHeading
          kicker={globalPresence.kicker}
          heading={globalPresence.heading}
        />

        <ul className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {globalPresence.locations.map((location, i) => (
            <Reveal as="li" key={location} delay={i * 0.06}>
              <motion.span
                whileHover={{ y: -4, scale: 1.04 }}
                transition={{ type: "spring", stiffness: 320, damping: 20 }}
                className="inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-[15px] font-semibold text-ink shadow-card transition-shadow duration-300 hover:shadow-card-hover"
              >
                <MapPin aria-hidden className="h-4 w-4 text-electric-500" />
                {location}
              </motion.span>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.3} className="mt-14 text-center">
          <address className="mx-auto max-w-xl text-[14.5px] not-italic leading-relaxed text-ink-muted">
            {globalPresence.address}
          </address>
        </Reveal>
      </Container>
    </section>
  );
}
