import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function PageHero({
  title,
  subtitle,
  breadcrumb,
}: {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href?: string }[];
}) {
  return (
    <section className="bg-gradient-hero text-white pt-28 pb-16 sm:pt-32 sm:pb-20">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {breadcrumb && (
          <nav className="flex items-center gap-1.5 text-xs sm:text-sm text-white/70 mb-5">
            {breadcrumb.map((item, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight size={14} className="text-white/40" />}
                {item.href ? (
                  <Link to={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-white/90">{item.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-base sm:text-lg text-white/85 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
