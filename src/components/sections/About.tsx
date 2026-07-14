import { about } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-24 border-y border-ink/5 bg-white py-24 md:py-36"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
          <div className="flex flex-col items-start gap-6">
            <Reveal>
              <Badge>{about.kicker}</Badge>
            </Reveal>
            <Reveal delay={0.08}>
              <h2
                id="about-heading"
                className="text-display-lg font-display font-semibold text-ink"
              >
                {about.heading}
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <blockquote className="relative mt-2">
                <span
                  aria-hidden
                  className="absolute -left-2 -top-8 font-display text-8xl font-bold text-electric-100 select-none"
                >
                  &ldquo;
                </span>
                <p className="relative text-display-sm font-display font-medium leading-snug text-ink">
                  {about.quote}
                </p>
              </blockquote>
            </Reveal>
          </div>

          <div className="flex flex-col justify-center gap-8">
            {about.body.map((paragraph, i) => (
              <Reveal key={i} delay={0.12 + i * 0.1}>
                <p className="text-lg leading-[1.85] text-ink-muted">
                  {paragraph}
                </p>
              </Reveal>
            ))}

            <Reveal delay={0.3}>
              <ol className="mt-2 flex items-stretch overflow-hidden rounded-3xl border border-ink/8">
                {about.timeline.map((item, i) => (
                  <li
                    key={item.event}
                    className={
                      "flex flex-1 flex-col items-center gap-1 px-4 py-6 text-center" +
                      (i > 0 ? " border-l border-ink/8" : "")
                    }
                  >
                    <span className="font-display text-2xl font-bold gradient-text md:text-3xl">
                      {item.year}
                    </span>
                    <span className="text-[12.5px] font-medium uppercase tracking-[0.14em] text-ink-muted">
                      {item.event}
                    </span>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
