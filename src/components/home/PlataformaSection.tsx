import { Link } from "@tanstack/react-router";
import { Library, GraduationCap, ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function PlataformaSection() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Plataforma"
          title="O Teu Ecossistema Digital"
          subtitle="Ferramentas digitais pensadas para o sucesso académico dos nossos estudantes"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <Block
            to="/plataforma/biblioteca"
            gradient="linear-gradient(135deg, #1A6AB5 0%, #0D4A8A 100%)"
            Icon={Library}
            title="Biblioteca Virtual"
            text="Acede a manuais, apostilas, videoaulas e recursos académicos organizados por qualificação."
            cta="Aceder à Biblioteca"
          />
          <Block
            to="/plataforma/portal"
            gradient="linear-gradient(135deg, #E8541A 0%, #C94010 100%)"
            Icon={GraduationCap}
            title="Portal do Estudante"
            text="Consulta notas, horários, documentos académicos e comunicados da direcção num só lugar."
            cta="Entrar no Portal"
          />
        </div>
      </div>
    </section>
  );
}

function Block({
  to,
  gradient,
  Icon,
  title,
  text,
  cta,
}: {
  to: string;
  gradient: string;
  Icon: typeof Library;
  title: string;
  text: string;
  cta: string;
}) {
  return (
    <div
      className="rounded-2xl p-10 lg:p-12 text-white flex flex-col"
      style={{ background: gradient }}
    >
      <Icon size={56} strokeWidth={1.5} />
      <h3 className="font-display font-bold text-2xl lg:text-3xl mt-5 mb-3">{title}</h3>
      <p className="text-white/85 leading-relaxed mb-8 flex-1">{text}</p>
      <Link
        to={to}
        className="self-start inline-flex items-center gap-2 border-2 border-white text-white font-accent font-bold uppercase tracking-wide px-6 py-3 rounded-md hover:bg-white/15 transition-colors"
      >
        {cta}
        <ArrowRight size={18} />
      </Link>
    </div>
  );
}
