import { createFileRoute } from "@tanstack/react-router";
import { PreInscricaoForm } from "@/components/admissoes/PreInscricaoForm";

export const Route = createFileRoute("/admissoes")({
  head: () => ({
    meta: [
      { title: "Pré-inscrição 2026 — IMPCI" },
      {
        name: "description",
        content:
          "Formulário de pré-inscrição para o Ano Lectivo 2026 no IMPCI. Preenche os teus dados e paga via e-Mola.",
      },
      { property: "og:title", content: "Pré-inscrição 2026 — IMPCI" },
      {
        property: "og:description",
        content:
          "Formulário de pré-inscrição online do IMPCI com pagamento via e-Mola.",
      },
      { property: "og:url", content: "/admissoes" },
    ],
    links: [{ rel: "canonical", href: "/admissoes" }],
  }),
  component: AdmisoesPage,
});

function AdmisoesPage() {
  return (
    <section className="bg-secondary py-12 lg:py-16 min-h-screen">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <PreInscricaoForm />
      </div>
    </section>
  );
}
