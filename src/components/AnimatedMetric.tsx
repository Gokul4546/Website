"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion, animate } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Counts up to a locked statistic the first time it enters view.
 * Server-renders the final value so the content is always present
 * without JavaScript; digits are tabular to prevent layout shift.
 */
export function AnimatedMetric({
  value,
  label,
  dark = false,
}: {
  value: string;
  label: string;
  dark?: boolean;
}) {
  const target = parseInt(value, 10);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(value);
  const played = useRef(false);

  useEffect(() => {
    if (!inView || reduced || played.current || Number.isNaN(target)) return;
    played.current = true;
    const controls = animate(0, target, {
      duration: 1.6,
      ease: [0.2, 0.65, 0.25, 1],
      onUpdate: (v) => setDisplay(String(Math.round(v))),
    });
    return () => controls.stop();
  }, [inView, reduced, target]);

  return (
    <div className="flex items-baseline gap-3">
      <span
        ref={ref}
        className={cn(
          "tabular font-display text-5xl font-bold md:text-6xl",
          dark ? "text-white" : "text-ink"
        )}
      >
        {display}
      </span>
      <span
        className={cn(
          "font-mono text-sm lowercase tracking-[0.08em]",
          dark ? "text-steel-soft" : "text-ink-muted"
        )}
      >
        {label}
      </span>
    </div>
  );
}
