"use client";

import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { originalContent as content } from "@/content/original-content";
import { MobileNavigation } from "./MobileNavigation";
import { cn } from "@/lib/utils";

const SECTION_IDS = content.navigation.links.map((l) => l.href.slice(1));

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const { scrollY } = useScroll();

  useEffect(() => scrollY.on("change", (v) => setScrolled(v > 120)), [scrollY]);

  // Scroll-spy: highlight the section currently in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 0.61, 0.24, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-500",
        scrolled
          ? "border-white/10 bg-night/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      )}
    >
      <div
        className={cn(
          "mx-auto flex w-full max-w-shell items-center justify-between px-5 transition-all duration-500 sm:px-8 lg:px-12",
          scrolled ? "h-16" : "h-24"
        )}
      >
        <a
          href="#main"
          className="font-display text-xl font-bold tracking-tight text-white"
        >
          {content.navigation.brand}
          <span aria-hidden className="ml-1.5 inline-block h-2 w-2 rounded-full bg-signal align-baseline" />
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-2">
            {content.navigation.links.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <li key={link.label} className="relative">
                  <a
                    href={link.href}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "block px-4 py-3 font-mono text-[13px] uppercase tracking-[0.12em] transition-colors",
                      isActive ? "text-white" : "text-steel hover:text-white"
                    )}
                  >
                    {link.label}
                  </a>
                  {isActive && (
                    <motion.span
                      layoutId="nav-node"
                      aria-hidden
                      className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-signal"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="group relative inline-flex min-h-[44px] items-center overflow-hidden bg-pulse px-6 py-2.5 font-mono text-[13px] uppercase tracking-[0.12em] text-white transition-colors hover:bg-pulse-deep"
          >
            <span
              aria-hidden
              className="absolute inset-y-0 -left-full w-1/2 bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-[300%]"
            />
            {content.navigation.cta}
          </a>
        </div>

        <MobileNavigation />
      </div>
    </motion.header>
  );
}
