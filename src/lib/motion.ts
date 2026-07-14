import type { Transition, Variants } from "framer-motion";

/** Shared easing — a decisive settle, used across all entrance motion. */
export const settle: Transition = {
  duration: 0.75,
  ease: [0.22, 0.61, 0.24, 1],
};

export const spring: Transition = {
  type: "spring",
  stiffness: 320,
  damping: 26,
};

/** Entrance for content blocks: illuminate + rise. */
export const rise: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { ...settle, delay },
  }),
};

/** Masked reveal for display headings. */
export const unmask: Variants = {
  hidden: { y: "110%" },
  visible: (delay: number = 0) => ({
    y: "0%",
    transition: { duration: 0.85, ease: [0.22, 0.61, 0.24, 1], delay },
  }),
};

export const viewportOnce = { once: true, margin: "-80px" } as const;
