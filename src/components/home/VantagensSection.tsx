import {
  GraduationCap,
  Target,
  Users,
  Laptop,
  MapPin,
  TrendingUp,
  Shield,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";

const vantagens: {
  Icon: LucideIcon;
  title: string;
  text: string;
  cor: string;
}[] = [
  {
    Icon: GraduationCap,
    title: "Formação Técnica Certificada",
    text: "Os nossos diplomas são emitidos e reconhecidos pela ANEP — Autoridade Nacional de Educação Profissional — com validade em todo o território moçambicano.",
    cor: "#1A6AB5",
  },
  {
    Icon: Target,
    title: "Currículo Orientado para o Mercado",
    text: "Os nossos planos curriculares são desenhados em parceria com o sector produtivo, garantindo que aprendes exactamente o que o mercado de trabalho exige.",
    cor: "#E8541A",
  },
  {
    Icon: Users,
    title: "Corpo Docente Especializado",
    text: "Os nossos professores são profissionais activos nas suas áreas, trazendo experiência real para a sala de aula e preparando-te para os desafios do mundo do trabalho.",
    cor: "#2E7D32",
  },
  {
    Icon: Laptop,
    title: "Plataforma Digital Integrada",
    text: "Acede à Biblioteca Virtual e ao Portal do Estudante — ferramentas digitais que complementam a aprendizagem presencial e mantêm-te sempre conectado ao instituto.",
    cor: "#1A6AB5",
  },
  {
    Icon: MapPin,
    title: "Localizado no Coração de Chimoio",
    text: "Instalações modernas em Chimoio, com infraestrutura preparada para oferecer uma experiência de aprendizagem profissional e confortável.",
    cor: "#E8541A",
  },
  {
    Icon: TrendingUp,
    title: "Estágios e Inserção Profissional",
    text: "Apoiamos os nossos estudantes na transição para o mercado de trabalho, com estágios integrados no currículo e rede de parceiros empresariais.",
    cor: "#2E7D32",
  },
];

export function VantagensSection() {
  return (
    <section className="bg-secondary py-20 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Vantagens"
          title="Porquê escolher o IMPCI?"
          subtitle="Mais do que um instituto — um compromisso com o teu futuro profissional"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vantagens.map(({ Icon, title, text, cor }) => (
            <div
              key={title}
              className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow"
            >
              <Icon size={44} style={{ color: cor }} className="mb-4" strokeWidth={1.5} />
              <h3 className="font-ui font-bold text-lg mb-3 text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-3 bg-white border-2 border-primary rounded-lg px-6 py-4 shadow-sm max-w-2xl">
            <Shield size={28} className="text-success shrink-0" />
            <p className="text-sm sm:text-base text-foreground">
              <strong>Certificado oficialmente pela ANEP</strong> — Autoridade Nacional de
              Educação Profissional
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
