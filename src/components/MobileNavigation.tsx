"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { originalContent as content } from "@/content/original-content";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Escape to close, focus trap while open, scroll lock.
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";

    const panel = panelRef.current;
    const focusables = panel?.querySelectorAll<HTMLElement>("a, button");
    focusables?.[0]?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
      if (e.key === "Tab" && focusables && focusables.length > 0) {
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex min-h-[44px] min-w-[44px] items-center justify-center text-white"
      >
        {open ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={panelRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-16 z-40 bg-night"
          >
            <div aria-hidden className="night-grid absolute inset-0 opacity-60" />
            <nav aria-label="Mobile" className="relative flex h-full flex-col px-6 pt-10">
              <ul className="flex flex-col">
                {content.navigation.links.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.06, duration: 0.4 }}
                    className="border-b border-white/10"
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex min-h-[56px] items-center justify-between py-4 font-display text-2xl font-semibold text-white"
                    >
                      {link.label}
                      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-steel" />
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-10 inline-flex min-h-[52px] items-center justify-center bg-pulse px-6 font-mono text-sm uppercase tracking-[0.12em] text-white"
              >
                {content.navigation.cta}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
