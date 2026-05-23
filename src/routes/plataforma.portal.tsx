import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ClipboardList,
  Calendar,
  FileText,
  Bell,
  CreditCard,
  Users,
  Info,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";

export const Route = createFileRoute("/plataforma/portal")({
  head: () => ({
    meta: [
      { title: "Portal do Estudante — IMPCI" },
      {
        name: "description",
        content:
          "Portal do Estudante IMPCI: notas, horários, documentos, comunicados e situação financeira num só lugar.",
      },
      { property: "og:title", content: "Portal do Estudante — IMPCI" },
      {
        property: "og:description",
        content: "O teu espaço académico digital no IMPCI — em preparação.",
      },
      { property: "og:url", content: "/plataforma/portal" },
    ],
    links: [{ rel: "canonical", href: "/plataforma/portal" }],
  }),
  component: PortalPage,
});

const funcs: { Icon: LucideIcon; title: string; text: string }[] = [
  { Icon: ClipboardList, title: "Notas e Avaliações", text: "Consulta os teus resultados académicos por disciplina e período" },
  { Icon: Calendar, title: "Horários", text: "Acede ao teu horário lectivo actualizado" },
  { Icon: FileText, title: "Documentos", text: "Declarações, certificados e outros documentos académicos" },
  { Icon: Bell, title: "Comunicados", text: "Avisos e informações da direcção do instituto" },
  { Icon: CreditCard, title: "Situação Financeira", text: "Consulta o estado das tuas mensalidades" },
  { Icon: Users, title: "Turma", text: "Informações sobre a tua turma e colegas" },
];

function PortalPage() {
  return (
    <>
      <PageHero
        title="Portal do Estudante"
        subtitle="O teu espaço académico digital — gestão completa do percurso lectivo num só lugar."
        breadcrumb={[
          { label: "Início", href: "/" },
          { label: "Plataforma" },
          { label: "Portal do Estudante" },
        ]}
      />

      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {funcs.map(({ Icon, title, text }) => (
              <div
                key={title}
                className="bg-white rounded-xl border border-border shadow-sm p-7 relative"
              >
                <span className="absolute top-4 right-4 text-[10px] font-accent font-bold uppercase tracking-wider bg-accent text-white px-2 py-0.5 rounded">
                  Em breve
                </span>
                <Icon size={36} className="text-primary mb-4" strokeWidth={1.5} />
                <h3 className="font-ui font-bold text-lg text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          <div className="bg-white border-l-4 border-primary rounded-r-lg p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <div className="flex items-start gap-3">
              <Info size={22} className="text-primary mt-0.5 shrink-0" />
              <p className="text-sm text-foreground leading-relaxed">
                Para aceder ao portal necessita das credenciais fornecidas pela secretaria
                do IMPCI. Contacte-nos em caso de dúvida.
              </p>
            </div>
            <Link
              to="/contacto"
              className="shrink-0 inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-accent font-bold uppercase tracking-wide text-sm px-5 py-3 rounded-md transition-colors"
            >
              Contactar Secretaria
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
