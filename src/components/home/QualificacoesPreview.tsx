import { Link } from "@tanstack/react-router";
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
import { qualificacoes, type Qualificacao } from "@/data/qualificacoes";
import { SectionTitle } from "@/components/ui/SectionTitle";

const iconMap: Record<Qualificacao["icone"], LucideIcon> = {
  Heart,
  Monitor,
  Building2,
  Briefcase,
  Leaf,
  BookOpen,
  Zap,
};

export function QualificacoesPreview() {
  return (
    <section className="bg-secondary py-20 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Oferta Formativa"
          title="As Nossas Qualificações"
          subtitle="7 áreas de formação técnico-profissional certificadas pela ANEP"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {qualificacoes.map((q) => (
            <QualificacaoCard key={q.id} q={q} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/qualificacoes"
            className="inline-flex items-center gap-2 text-primary font-ui font-semibold hover:underline"
          >
            Ver todas as qualificações
            <ChevronRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function QualificacaoCard({ q }: { q: Qualificacao }) {
  const Icon = iconMap[q.icone];
  const visible = q.cvs.slice(0, 3);
  const restante = q.cvs.length - visible.length;

  return (
    <div
      className="group bg-white rounded-xl border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 overflow-hidden flex flex-col"
      style={{ borderTop: `4px solid ${q.cor}` }}
    >
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start gap-3 mb-4">
          <Icon size={28} style={{ color: q.cor }} strokeWidth={1.75} />
          <h3 className="font-ui font-bold text-lg text-foreground leading-tight">
            {q.nome}
          </h3>
        </div>

        <div className="flex items-baseline gap-2 mb-4">
          <span className="font-accent font-bold text-2xl text-accent">{q.mensalidade}</span>
          <span className="text-sm text-muted-foreground">/ mês</span>
        </div>

        <hr className="border-border mb-4" />

        <ul className="space-y-2 text-sm text-muted-foreground mb-6 flex-1">
          {visible.map((cvs) => (
            <li key={cvs} className="flex items-start gap-2">
              <ChevronRight size={14} className="mt-1 shrink-0" style={{ color: q.cor }} />
              <span>{cvs}</span>
            </li>
          ))}
          {restante > 0 && (
            <li className="text-xs italic text-muted-foreground/80 pl-6">
              + {restante} {restante === 1 ? "outra especialização" : "outras especializações"}
            </li>
          )}
        </ul>

        <Link
          to="/qualificacoes"
          className="block text-center border-2 border-primary text-primary font-accent font-bold uppercase tracking-wide text-sm py-2.5 rounded-md hover:bg-primary hover:text-white transition-colors"
        >
          Ver Qualificação
        </Link>
      </div>
    </div>
  );
}
