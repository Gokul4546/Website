"use client";

import { motion } from "framer-motion";
import { whyChoose } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

export function WhyChoose() {
  return (
    <section aria-labelledby="why-heading" className="py-24 md:py-36">
      <Container>
        <SectionHeading
          kicker={whyChoose.kicker}
          heading={whyChoose.heading}
          description={whyChoose.body}
        />

        <ul className="grid gap-5 md:grid-cols-2">
          {whyChoose.reasons.map((reason, i) => (
            <Reveal as="li" key={reason.title} delay={(i % 2) * 0.1} className="h-full">
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="group flex h-full gap-6 rounded-3xl bg-white p-8 shadow-card transition-shadow duration-400 hover:shadow-card-hover md:p-10"
              >
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-electric-500 to-violet-500 text-white shadow-glow-sm transition-transform duration-400 group-hover:scale-110">
                  <Icon name={reason.icon} className="h-[22px] w-[22px]" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold tracking-tight text-ink">
                    {reason.title}
                  </h3>
                  <p className="mt-3 text-[15.5px] leading-relaxed text-ink-muted">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
