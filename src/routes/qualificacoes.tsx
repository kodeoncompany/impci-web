import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ChevronRight,
  Heart,
  Monitor,
  Building2,
  Briefcase,
  Leaf,
  BookOpen,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import {
  qualificacoes,
  filtroAreas,
  type Qualificacao,
} from "@/data/qualificacoes";
import { cn } from "@/lib/utils";

const iconMap: Record<Qualificacao["icone"], LucideIcon> = {
  Heart,
  Monitor,
  Building2,
  Briefcase,
  Leaf,
  BookOpen,
  Zap,
};

export const Route = createFileRoute("/qualificacoes")({
  head: () => ({
    meta: [
      { title: "Qualificações — IMPCI" },
      {
        name: "description",
        content:
          "7 áreas de formação técnico-profissional certificadas pela ANEP: Saúde, TICS, Construção Civil, Gestão, Agricultura, Educação e Manutenção Industrial.",
      },
      { property: "og:title", content: "Qualificações — IMPCI" },
      {
        property: "og:description",
        content:
          "Descobre as nossas 7 áreas formativas e respectivas especializações com mensalidades transparentes.",
      },
      { property: "og:url", content: "/qualificacoes" },
    ],
    links: [{ rel: "canonical", href: "/qualificacoes" }],
  }),
  component: QualificacoesPage,
});

function QualificacoesPage() {
  const [filtro, setFiltro] = useState<(typeof filtroAreas)[number]["value"]>("Todos");

  const visiveis = useMemo(
    () =>
      filtro === "Todos"
        ? qualificacoes
        : qualificacoes.filter((q) => q.area === filtro),
    [filtro],
  );

  return (
    <>
      <PageHero
        title="As Nossas Qualificações"
        subtitle="7 áreas de formação técnico-profissional certificadas pela ANEP, com mensalidades acessíveis e especializações pensadas para o mercado moçambicano."
        breadcrumb={[
          { label: "Início", href: "/" },
          { label: "Qualificações" },
        ]}
      />

      {/* Filtros */}
      <div className="sticky top-16 lg:top-[72px] z-30 bg-white border-b border-border shadow-sm">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-4 overflow-x-auto">
          <div className="flex items-center gap-2 min-w-max">
            {filtroAreas.map((f) => (
              <button
                key={f.value}
                type="button"
                onClick={() => setFiltro(f.value)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-ui font-semibold transition-colors border",
                  filtro === f.value
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-muted-foreground border-border hover:border-primary hover:text-primary",
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visiveis.map((q) => {
              const Icon = iconMap[q.icone];
              return (
                <article
                  key={q.id}
                  className="bg-white rounded-xl border border-border shadow-sm hover:shadow-lg transition-all flex flex-col overflow-hidden"
                  style={{ borderTop: `4px solid ${q.cor}` }}
                >
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start gap-3 mb-4">
                      <Icon size={32} style={{ color: q.cor }} strokeWidth={1.75} />
                      <h2 className="font-ui font-bold text-lg text-foreground leading-tight">
                        {q.nome}
                      </h2>
                    </div>

                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="font-accent font-bold text-3xl text-accent">
                        {q.mensalidade}
                      </span>
                      <span className="text-sm text-muted-foreground">/ mês</span>
                    </div>
                    <p className="text-xs text-muted-foreground italic mb-4">
                      Inscrição e matrícula sem custos adicionais.
                    </p>

                    <hr className="border-border mb-4" />

                    <p className="text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-3">
                      Especializações
                    </p>
                    <ul className="space-y-2 text-sm text-foreground mb-6 flex-1">
                      {q.cvs.map((cvs) => (
                        <li key={cvs} className="flex items-start gap-2">
                          <ChevronRight
                            size={14}
                            className="mt-1 shrink-0"
                            style={{ color: q.cor }}
                          />
                          <span>{cvs}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/admissoes"
                      className="block text-center bg-accent hover:bg-accent-dark text-white font-accent font-bold uppercase tracking-wide text-sm py-3 rounded-md shadow-cta transition-all hover:-translate-y-0.5"
                    >
                      Candidatar-me
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          {visiveis.length === 0 && (
            <p className="text-center text-muted-foreground py-12">
              Sem qualificações nesta categoria.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
