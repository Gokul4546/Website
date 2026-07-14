"use client";

import { cta } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function Cta() {
  return (
    <section id="contact" aria-labelledby="cta-heading" className="scroll-mt-24 pb-24 md:pb-36">
      <Container>
        <div className="relative overflow-hidden rounded-4xl bg-ink px-6 py-20 text-center md:px-16 md:py-28">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-[380px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric-600/30 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-[320px] w-[320px] rounded-full bg-violet-600/25 blur-3xl animate-float-slow" />
            <div className="absolute -right-20 bottom-0 h-[280px] w-[280px] rounded-full bg-cyanic-500/20 blur-3xl animate-float" />
          </div>

          <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-7">
            <Reveal>
              <h2
                id="cta-heading"
                className="text-display-lg font-display font-semibold text-white"
              >
                {cta.heading}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg leading-relaxed text-white/65 md:text-xl">
                {cta.description}
              </p>
            </Reveal>
            <Reveal delay={0.2} className="flex flex-col items-center gap-5">
              <Button href={`mailto:${cta.email}`} variant="inverse" withArrow>
                {cta.button}
              </Button>
              <a
                href={`mailto:${cta.email}`}
                className="text-[15px] font-medium text-white/60 underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                {cta.email}
              </a>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
