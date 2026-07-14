import { overview } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";

export function Overview() {
  return (
    <section aria-labelledby="overview-heading" className="py-24 md:py-36">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          <div className="flex flex-col items-start gap-5 lg:sticky lg:top-32">
            <Reveal>
              <Badge>{overview.kicker}</Badge>
            </Reveal>
            <Reveal delay={0.08}>
              <h2
                id="overview-heading"
                className="text-display-lg font-display font-semibold text-ink"
              >
                {overview.heading}
              </h2>
            </Reveal>
          </div>

          <div className="flex flex-col gap-8">
            {overview.body.map((paragraph, i) => (
              <Reveal key={i} delay={0.12 + i * 0.1}>
                <p className="border-l-2 border-electric-200 pl-6 text-lg leading-[1.85] text-ink-muted md:text-xl md:leading-[1.85]">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
