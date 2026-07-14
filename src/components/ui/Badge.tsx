import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  dark = false,
}: {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[13px] font-medium tracking-wide",
        dark
          ? "glass-dark text-white/85"
          : "glass text-ink-muted shadow-card",
        className
      )}
    >
      <span
        aria-hidden
        className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-electric-500 to-violet-500"
      />
      {children}
    </span>
  );
}
