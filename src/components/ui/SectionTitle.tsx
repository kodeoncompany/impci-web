import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
  invert = false,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  invert?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" ? "text-center mx-auto max-w-2xl" : "text-left max-w-2xl",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "font-accent font-bold uppercase tracking-[0.15em] text-sm mb-3",
            invert ? "text-accent" : "text-accent",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight",
          invert ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h2>
      <span
        className={cn(
          "block h-1 w-16 bg-accent rounded-full mt-5",
          align === "center" && "mx-auto",
        )}
      />
      {subtitle && (
        <p
          className={cn(
            "mt-5 text-base sm:text-lg leading-relaxed",
            invert ? "text-white/80" : "text-muted-foreground",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
