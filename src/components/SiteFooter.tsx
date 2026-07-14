import { originalContent as content } from "@/content/original-content";

/**
 * Footer: structured information architecture on the midnight surface,
 * carrying the network line motif. Only original links, addresses and
 * contact details — no invented legal or marketing text.
 */
export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-night text-white">
      {/* full-spectrum edge — the network's colors resolved into one line */}
      <div aria-hidden className="spectrum-line" />
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-[12%] h-72 w-72 rounded-full bg-pulse/[0.09] blur-[100px]" />
        <div className="absolute -bottom-28 right-[10%] h-72 w-72 rounded-full bg-haze/[0.08] blur-[100px]" />
        <div className="absolute -bottom-20 left-[45%] h-56 w-56 rounded-full bg-aurora/[0.06] blur-[90px]" />
      </div>
      <div className="relative mx-auto w-full max-w-shell px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 py-16 md:grid-cols-12 md:py-24">
          <div className="flex flex-col gap-6 md:col-span-5">
            <a href="#main" className="font-display text-2xl font-bold tracking-tight">
              {content.navigation.brand}
              <span aria-hidden className="ml-1.5 inline-block h-2 w-2 rounded-full bg-signal align-baseline" />
            </a>
            <p className="max-w-sm font-mono text-[13px] leading-relaxed text-steel">
              {content.footer.description}
            </p>
            <ul className="flex flex-col gap-1 font-mono text-[13px] text-steel-soft">
              {content.footer.emails.map((email) => (
                <li key={email}>
                  <a
                    href={`mailto:${email}`}
                    className="inline-flex min-h-[44px] items-center underline decoration-steel/30 underline-offset-4 transition-colors hover:text-signal hover:decoration-signal"
                  >
                    {email}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {content.footer.columns.map((column) => (
            <nav key={column.title} aria-label={column.title} className="md:col-span-2">
              <h2 className="mono-label text-steel">{column.title}</h2>
              <ul className="mt-6 flex flex-col gap-1">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#main"
                      className="inline-flex min-h-[44px] items-center text-[14.5px] text-steel-soft transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <address className="font-mono text-[12.5px] not-italic leading-relaxed text-steel md:col-span-3">
            {content.footer.address}
          </address>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-8 md:flex-row md:items-center md:justify-between">
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-2">
            {content.footer.legalLinks.map((link) => (
              <li key={link}>
                <a
                  href="#main"
                  className="inline-flex min-h-[44px] items-center font-mono text-[12.5px] uppercase tracking-[0.1em] text-steel transition-colors hover:text-white"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <p className="font-mono text-[12.5px] text-steel">{content.footer.entity}</p>
        </div>
      </div>
    </footer>
  );
}
