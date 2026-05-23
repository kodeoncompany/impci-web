import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "white";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-foreground hover:bg-accent-dark hover:-translate-y-0.5 shadow-cta font-accent font-bold tracking-wide uppercase",
  secondary:
    "bg-primary text-primary-foreground hover:bg-primary-dark hover:-translate-y-0.5 font-accent font-bold tracking-wide uppercase",
  outline:
    "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-accent font-bold tracking-wide uppercase",
  ghost:
    "border-2 border-white text-white hover:bg-white/15 font-accent font-bold tracking-wide uppercase",
  white:
    "bg-white text-accent hover:bg-white/90 hover:-translate-y-0.5 font-accent font-bold tracking-wide uppercase",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm rounded-md",
  md: "px-8 py-3.5 text-[0.95rem] rounded-md",
  lg: "px-10 py-4 text-base rounded-md",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

export function IButton({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: CommonProps & ComponentProps<"button">) {
  return (
    <button
      {...rest}
      className={cn(
        "inline-flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        className,
      )}
    >
      {children}
    </button>
  );
}

export function ILink({
  to,
  href,
  variant = "primary",
  size = "md",
  className,
  children,
}: CommonProps & { to?: string; href?: string }) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 transition-all duration-200",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link to={to!} className={classes}>
      {children}
    </Link>
  );
}
