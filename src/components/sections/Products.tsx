"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

const hues: Record<string, { iconBg: string; halo: string }> = {
  electric: {
    iconBg: "from-electric-500 to-electric-700",
    halo: "from-electric-100/80",
  },
  violet: {
    iconBg: "from-violet-500 to-violet-600",
    halo: "from-violet-400/20",
  },
  cyan: {
    iconBg: "from-cyanic-400 to-electric-500",
    halo: "from-cyanic-400/20",
  },
};

export function Products() {
  return (
    <section
      id="products"
      aria-labelledby="products-heading"
      className="scroll-mt-24 bg-white py-24 md:py-36"
    >
      <Container>
        <SectionHeading
          kicker={products.kicker}
          heading={products.heading}
          description={products.description}
        />

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.items.map((product, i) => {
            const hue = hues[product.hue] ?? hues.electric;
            return (
              <Reveal as="li" key={product.name} delay={(i % 3) * 0.09} className="h-full">
                <motion.a
                  href="#contact"
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl gradient-border p-8 shadow-card transition-shadow duration-400 hover:shadow-card-hover"
                >
                  <div
                    aria-hidden
                    className={cn(
                      "pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100",
                      hue.halo
                    )}
                  />

                  <div
                    className={cn(
                      "mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-glow-sm transition-transform duration-400 group-hover:scale-110 group-hover:-rotate-3",
                      hue.iconBg
                    )}
                  >
                    <Icon name={product.icon} className="h-[22px] w-[22px]" />
                  </div>

                  <h3 className="font-display text-xl font-bold tracking-tight text-ink">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-[13px] font-semibold uppercase tracking-[0.12em] text-electric-600">
                    {product.tagline}
                  </p>
                  <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-muted">
                    {product.description}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-ink transition-colors group-hover:text-electric-600">
                    {products.learnMore}
                    <ArrowUpRight
                      aria-hidden
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </motion.a>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
