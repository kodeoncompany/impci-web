import { createFileRoute } from "@tanstack/react-router";
import { Library, BookOpenCheck, Video, FileText, Link2 } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";

export const Route = createFileRoute("/plataforma/biblioteca")({
  head: () => ({
    meta: [
      { title: "Biblioteca Virtual — IMPCI" },
      {
        name: "description",
        content:
          "Biblioteca digital do IMPCI: manuais, apostilas, videoaulas e recursos académicos organizados por qualificação. Em breve.",
      },
      { property: "og:title", content: "Biblioteca Virtual — IMPCI" },
      {
        property: "og:description",
        content:
          "Acesso a recursos académicos do IMPCI: manuais, videoaulas e fichas de estudo.",
      },
      { property: "og:url", content: "/plataforma/biblioteca" },
    ],
    links: [{ rel: "canonical", href: "/plataforma/biblioteca" }],
  }),
  component: BibliotecaPage,
});

const categorias = [
  { Icon: BookOpenCheck, title: "Manuais e Apostilas", text: "Material organizado por qualificação" },
  { Icon: Video, title: "Videoaulas", text: "Aulas e tutoriais em formato vídeo" },
  { Icon: FileText, title: "Fichas de Estudo", text: "Resumos e exercícios práticos" },
  { Icon: Link2, title: "Recursos Externos", text: "Ligações para portais ANEP e nacionais" },
];

function BibliotecaPage() {
  return (
    <>
      <PageHero
        title="Biblioteca Virtual"
        subtitle="Acede aos recursos académicos do IMPCI — manuais, apostilas, videoaulas e fichas de estudo."
        breadcrumb={[
          { label: "Início", href: "/" },
          { label: "Plataforma" },
          { label: "Biblioteca Virtual" },
        ]}
      />

      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="bg-white border-2 border-dashed border-primary rounded-xl p-10 lg:p-14 text-center mb-12">
            <Library size={56} className="mx-auto text-primary mb-4" strokeWidth={1.5} />
            <h2 className="font-display font-bold text-2xl lg:text-3xl text-foreground mb-3">
              A Biblioteca Digital está a ser preparada
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-5 leading-relaxed">
              Estamos a organizar todos os recursos académicos para ti. Em breve terás acesso
              a manuais, apostilas, videoaulas e muito mais.
            </p>
            <span className="inline-block bg-accent text-white font-accent font-bold uppercase text-xs tracking-[0.15em] px-4 py-1.5 rounded">
              Em breve
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {categorias.map(({ Icon, title, text }) => (
              <div
                key={title}
                className="bg-white rounded-xl border border-border p-6 text-center opacity-70"
              >
                <Icon size={36} className="mx-auto text-primary mb-3" strokeWidth={1.5} />
                <h3 className="font-ui font-bold text-base text-foreground mb-1">{title}</h3>
                <p className="text-xs text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
