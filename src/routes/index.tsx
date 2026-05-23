import { createFileRoute } from "@tanstack/react-router";
import { HeroSlider } from "@/components/home/HeroSlider";
import { DiferenciaisBanner } from "@/components/home/DiferenciaisBanner";
import { QualificacoesPreview } from "@/components/home/QualificacoesPreview";
import { PlataformaSection } from "@/components/home/PlataformaSection";
import { VantagensSection } from "@/components/home/VantagensSection";
import { CTAFinal } from "@/components/home/CTAFinal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IMPCI — Instituto Médio Politécnico de Ciência e Inovação | Chimoio" },
      {
        name: "description",
        content:
          "Formação técnico-profissional em 7 áreas, certificada pela ANEP. Inscrições abertas para o Ano Lectivo 2026 em Chimoio, Moçambique.",
      },
      { property: "og:title", content: "IMPCI — Ciência e Inovação em Moçambique" },
      {
        property: "og:description",
        content:
          "7 qualificações certificadas pela ANEP, ensino diurno e nocturno, plataforma digital. Sem exame de admissão.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <HeroSlider />
      <DiferenciaisBanner />
      <QualificacoesPreview />
      <PlataformaSection />
      <VantagensSection />
      <CTAFinal />
    </>
  );
}
