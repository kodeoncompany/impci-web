import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PreInscricaoForm } from "@/components/admissoes/PreInscricaoForm";

export const Route = createFileRoute("/admissoes")({
  head: () => ({
    meta: [
      { title: "Admissões 2026 — IMPCI" },
      {
        name: "description",
        content:
          "Inscrições abertas para o Ano Lectivo 2026 no IMPCI. Sem exame de admissão. Inscrição e matrícula MAHALA. Consulta os documentos necessários.",
      },
      { property: "og:title", content: "Admissões 2026 — IMPCI" },
      {
        property: "og:description",
        content:
          "Sem exame de admissão. Inscrição e matrícula gratuitas. Documentos necessários e passos para candidatura.",
      },
      { property: "og:url", content: "/admissoes" },
    ],
    links: [{ rel: "canonical", href: "/admissoes" }],
  }),
  component: AdmisoesPage,
});

const steps = [
  "Escolhe a tua qualificação na nossa oferta formativa",
  "Reúne os documentos necessários listados ao lado",
  "Dirige-te ao IMPCI ou contacta-nos por telefone",
  "Efectua o pagamento da 1ª mensalidade e inicia as aulas",
];

const documentos = [
  "Boletim de Matrícula devidamente preenchido",
  "Fotocópia do BI ou Passaporte",
  "Fotocópia Autenticada do Certificado de Habilitações",
  "Uma Foto tipo passe",
  "Declaração do NUIT",
  "Atestado Médico",
  "Processo do Aluno",
  "Talão de Depósito",
];

function AdmisoesPage() {
  return (
    <>
      <PageHero
        title="Admissões 2026"
        subtitle="Começa o teu percurso académico no IMPCI. Inscrições abertas — sem exame de admissão."
        breadcrumb={[
          { label: "Início", href: "/" },
          { label: "Admissões" },
        ]}
      />

      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          {/* MAHALA Banner */}
          <div className="bg-gradient-mahala text-white rounded-2xl p-10 lg:p-14 text-center mb-14 shadow-lg">
            <span className="inline-block bg-white text-accent font-accent font-bold text-2xl lg:text-3xl tracking-[0.15em] px-6 py-2 rounded mb-5">
              100% MAHALA
            </span>
            <h2 className="font-accent font-bold uppercase text-2xl lg:text-4xl tracking-wide mb-3">
              Inscrição e Matrícula Gratuitas
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto leading-relaxed">
              No IMPCI não pagas nada na inscrição e matrícula. Pagas apenas a 1ª mensalidade
              (mínimo <strong>1.000,00 MT</strong>) no acto da inscrição.
            </p>
          </div>

          {/* Formulário de pré-inscrição */}
          <div className="mb-16">
            <PreInscricaoForm />
          </div>


          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h3 className="font-display font-bold text-2xl text-foreground mb-6">
                Como Candidatar-se
              </h3>
              <ol className="space-y-5">
                {steps.map((s, i) => (
                  <li key={s} className="flex items-start gap-4">
                    <span className="shrink-0 w-9 h-9 rounded-full bg-primary text-white font-accent font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <p className="text-foreground pt-1.5 leading-relaxed">{s}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8">
              <h3 className="font-display font-bold text-2xl text-foreground mb-6">
                Documentos Necessários
              </h3>
              <ul className="space-y-3">
                {documentos.map((d) => (
                  <li key={d} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-success shrink-0 mt-0.5" />
                    <span className="text-foreground">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA contacto */}
          <div className="bg-white rounded-2xl p-10 text-center shadow-sm">
            <SectionTitle
              title="Tens dúvidas? Fala connosco."
              subtitle="A nossa equipa está disponível para te ajudar em todo o processo."
              align="center"
              className="mb-8"
            />
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <a
                href="tel:+258877396100"
                className="inline-flex items-center gap-2 text-primary font-accent font-bold text-xl"
              >
                <Phone size={20} /> +258 87 739 6100
              </a>
              <a
                href="tel:+258857496100"
                className="inline-flex items-center gap-2 text-primary font-accent font-bold text-xl"
              >
                <Phone size={20} /> +258 85 749 6100
              </a>
            </div>
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-accent font-bold uppercase tracking-wide px-8 py-3.5 rounded-md shadow-cta transition-all hover:-translate-y-0.5"
            >
              Ir para Contactos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
