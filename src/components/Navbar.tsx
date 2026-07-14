"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav, brand } from "@/content/site";
import { cn } from "@/lib/utils";

function Wordmark() {
  return (
    <a
      href="#main"
      className="font-display text-[22px] font-bold tracking-tight text-ink"
      aria-label={brand.name}
    >
      WovV<span className="gradient-text">Tech</span>
    </a>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(
    () => scrollY.on("change", (v) => setScrolled(v > 24)),
    [scrollY]
  );

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.21, 0.65, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-500 sm:px-8 lg:px-12",
          scrolled ? "py-3" : "py-5"
        )}
      >
        <div
          className={cn(
            "flex w-full items-center justify-between rounded-full px-6 py-3 transition-all duration-500",
            scrolled ? "glass shadow-nav" : "bg-transparent"
          )}
        >
          <Wordmark />

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {nav.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="rounded-full px-4 py-2 text-[15px] font-medium text-ink-muted transition-colors hover:bg-ink/5 hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden lg:block">
            <a
              href="#contact"
              className="rounded-full bg-ink px-6 py-2.5 text-[14px] font-semibold text-white transition-all duration-300 hover:bg-ink-soft hover:shadow-glow-sm"
            >
              {nav.cta}
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="rounded-full p-2 text-ink lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="mx-5 rounded-3xl glass p-4 shadow-card-hover lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {nav.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-5 py-3 text-[16px] font-medium text-ink transition-colors hover:bg-ink/5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl bg-ink px-5 py-3.5 text-center text-[15px] font-semibold text-white"
                >
                  {nav.cta}
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
