import { Badge } from "./Badge";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  kicker,
  heading,
  description,
  align = "center",
  dark = false,
}: {
  kicker: string;
  heading: string;
  description?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  const centered = align === "center";
  return (
    <div
      className={cn(
        "mb-14 flex flex-col gap-5 md:mb-20",
        centered ? "items-center text-center" : "items-start text-left"
      )}
    >
      <Reveal>
        <Badge dark={dark}>{kicker}</Badge>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "text-display-lg font-display font-semibold max-w-3xl",
            dark ? "text-white" : "text-ink"
          )}
        >
          {heading}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "max-w-2xl text-lg leading-relaxed",
              dark ? "text-white/60" : "text-ink-muted"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
