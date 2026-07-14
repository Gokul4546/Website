"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "inverse";

const styles: Record<Variant, string> = {
  primary:
    "bg-ink text-white hover:bg-ink-soft shadow-glow-sm hover:shadow-glow",
  secondary:
    "bg-white text-ink border border-ink/10 hover:border-ink/25 shadow-card hover:shadow-card-hover",
  ghost: "text-ink hover:bg-ink/5",
  inverse:
    "bg-white text-ink hover:bg-mist shadow-[0_0_30px_rgba(255,255,255,0.15)]",
};

export function Button({
  variant = "primary",
  href,
  children,
  withArrow = false,
  className,
}: {
  variant?: Variant;
  href: string;
  children: React.ReactNode;
  withArrow?: boolean;
  className?: string;
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className={cn(
        "group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold transition-colors duration-300",
        styles[variant],
        className
      )}
    >
      {children}
      {withArrow && (
        <ArrowRight
          aria-hidden
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </motion.a>
  );
}
