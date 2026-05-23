import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { qualificacoes } from "@/data/qualificacoes";
import { cn } from "@/lib/utils";

export function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="relative h-[75vh] lg:h-[90vh] min-h-[520px] overflow-hidden">
      <div className="h-full overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {qualificacoes.map((q, i) => (
            <div
              key={q.id}
              className="relative flex-[0_0_100%] min-w-0 h-full"
              aria-hidden={selectedIndex !== i}
            >
              <img
                src={q.imagem}
                alt={q.nome}
                loading={i === 0 ? "eager" : "lazy"}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/55" />

              <div className="absolute inset-0 flex items-end">
                <div className="mx-auto max-w-[1280px] w-full px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
                  <div
                    key={`${q.id}-${selectedIndex}`}
                    className={cn(
                      "max-w-3xl",
                      selectedIndex === i && "animate-fade-in-up",
                    )}
                  >
                    <span className="inline-block bg-accent text-white font-accent font-bold uppercase text-xs tracking-[0.15em] px-3 py-1 rounded mb-4">
                      Ano Lectivo 2026
                    </span>
                    <p className="text-white/75 uppercase tracking-[0.1em] text-xs sm:text-sm mb-2 font-ui">
                      IMPCI — Instituto Médio Politécnico
                    </p>
                    <h1 className="font-accent font-bold text-white uppercase leading-[1] text-[clamp(2.25rem,6vw,5.5rem)] mb-4">
                      {q.headline}
                    </h1>
                    <p className="text-white/85 italic text-base sm:text-lg lg:text-xl mb-8 max-w-xl">
                      {q.tagline}
                    </p>
                    <Link
                      to="/qualificacoes"
                      className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-accent font-bold uppercase tracking-wide px-8 py-3.5 rounded-md shadow-cta transition-all hover:-translate-y-0.5"
                    >
                      Saber Mais
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        type="button"
        onClick={scrollPrev}
        aria-label="Slide anterior"
        className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur items-center justify-center text-white transition-colors"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        type="button"
        onClick={scrollNext}
        aria-label="Próximo slide"
        className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur items-center justify-center text-white transition-colors"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {qualificacoes.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Ir para slide ${i + 1}`}
            onClick={() => emblaApi?.scrollTo(i)}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              selectedIndex === i ? "w-6 bg-accent" : "w-2 bg-white/45 hover:bg-white/70",
            )}
          />
        ))}
      </div>
    </section>
  );
}
