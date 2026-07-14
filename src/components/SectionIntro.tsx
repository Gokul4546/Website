"use client";

import { motion } from "framer-motion";
import { rise, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Section opener: mono system label on a signal rule, optional display
 * heading. Left-aligned by default — the layout system is asymmetric.
 */
export function SectionIntro({
  label,
  heading,
  dark = false,
  className,
  headingClassName,
}: {
  label: string;
  heading?: string;
  dark?: boolean;
  className?: string;
  headingClassName?: string;
}) {
  // When a section has no display heading, the label is the section's
  // real heading — render it as h2 to keep the document outline correct.
  const LabelTag = heading ? motion.p : motion.h2;

  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <LabelTag
        variants={rise}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className={cn(
          "mono-label flex items-center gap-4",
          dark ? "text-signal" : "text-pulse"
        )}
      >
        <span
          aria-hidden
          className={cn("h-px w-10", dark ? "bg-signal/60" : "bg-pulse/50")}
        />
        {label}
      </LabelTag>
      {heading && (
        <motion.h2
          variants={rise}
          custom={0.08}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className={cn(
            "font-display text-section font-bold",
            dark ? "text-white" : "text-ink",
            headingClassName
          )}
        >
          {heading}
        </motion.h2>
      )}
    </div>
  );
}
