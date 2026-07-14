import { Award, Linkedin, Mail, Twitter } from "lucide-react";
import { footer, brand } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/4 h-[400px] w-[400px] rounded-full bg-electric-600/10 blur-3xl" />
        <div className="absolute -bottom-32 right-1/4 h-[360px] w-[360px] rounded-full bg-violet-600/10 blur-3xl" />
      </div>

      <Container className="relative">
        <div className="flex flex-col gap-10 border-b border-white/10 py-16 md:flex-row md:items-center md:justify-between md:py-20">
          <div className="max-w-md">
            <h2 className="font-display text-display-sm font-semibold text-white">
              {footer.newsletter.heading}
            </h2>
          </div>
          <form
            className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
            aria-label="Newsletter"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              {footer.newsletter.placeholder}
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder={footer.newsletter.placeholder}
              className="w-full rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-[15px] text-white placeholder:text-white/40 transition-colors focus:border-electric-400 focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-ink transition-all duration-300 hover:bg-mist hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              {footer.newsletter.button}
            </button>
          </form>
        </div>

        <div className="grid gap-12 py-16 md:grid-cols-[minmax(0,2fr)_repeat(3,minmax(0,1fr))] md:py-20">
          <div className="flex flex-col gap-6">
            <a href="#main" className="font-display text-[24px] font-bold tracking-tight">
              WovV<span className="gradient-text">Tech</span>
            </a>
            <p className="max-w-sm text-[14.5px] leading-relaxed text-white/55">
              {footer.tagline}
            </p>
            <div className="flex items-center gap-3">
              <a
                href={`mailto:${footer.email}`}
                aria-label="Email"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:border-electric-400 hover:text-white"
              >
                <Mail className="h-[18px] w-[18px]" />
              </a>
              <a
                href="https://www.linkedin.com/company/wovvtech"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:border-electric-400 hover:text-white"
              >
                <Linkedin className="h-[18px] w-[18px]" />
              </a>
              <a
                href="https://x.com/wovvtech"
                aria-label="Twitter"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:border-electric-400 hover:text-white"
              >
                <Twitter className="h-[18px] w-[18px]" />
              </a>
            </div>
          </div>

          {footer.columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="text-[13px] font-semibold uppercase tracking-[0.18em] text-white/45">
                {column.title}
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#main"
                      className="text-[14.5px] text-white/70 transition-colors duration-200 hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="border-t border-white/10 py-10">
          <ul className="flex flex-col items-center justify-center gap-3 md:flex-row md:gap-6">
            {footer.recognitions.map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-2 text-[12.5px] font-medium text-white/45"
              >
                <Award aria-hidden className="h-3.5 w-3.5 text-electric-400" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-[13px] text-white/40">
            {footer.copyright}
          </p>
        </div>
      </Container>
    </footer>
  );
}
