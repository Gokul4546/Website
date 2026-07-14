import { trust } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Award } from "lucide-react";

export function TrustBar() {
  return (
    <section aria-labelledby="trust-heading" className="border-y border-ink/5 bg-white py-16 md:py-20">
      <Container>
        <Reveal className="text-center">
          <h2
            id="trust-heading"
            className="text-[13px] font-semibold uppercase tracking-[0.22em] text-ink-muted"
          >
            {trust.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-medium leading-relaxed text-ink">
            {trust.line}
          </p>
        </Reveal>

        <ul className="mt-10 flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
          {trust.recognitions.map((item, i) => (
            <Reveal as="li" key={item} delay={0.1 + i * 0.1}>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-ink/8 bg-mist px-5 py-2.5 text-[13.5px] font-medium text-ink-muted transition-colors duration-300 hover:border-electric-300 hover:text-ink">
                <Award aria-hidden className="h-4 w-4 text-electric-500" />
                {item}
              </span>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
