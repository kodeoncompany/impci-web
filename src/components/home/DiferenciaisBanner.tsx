import { BookOpen, Monitor, Clock, Award } from "lucide-react";

const pilares = [
  {
    Icon: BookOpen,
    title: "Ensino de Qualidade",
    text: "Formação técnica certificada pela ANEP",
  },
  {
    Icon: Monitor,
    title: "Plataforma Digital",
    text: "Biblioteca virtual e portal do estudante",
  },
  {
    Icon: Clock,
    title: "Flexibilidade",
    text: "Cursos diurnos, nocturnos e ensino à distância",
  },
  {
    Icon: Award,
    title: "Certificação Nacional",
    text: "Diploma reconhecido em todo Moçambique",
  },
];

export function DiferenciaisBanner() {
  return (
    <section className="bg-primary text-white">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:divide-x lg:divide-white/15">
          {pilares.map(({ Icon, title, text }) => (
            <div key={title} className="text-center lg:px-6">
              <Icon size={40} className="mx-auto mb-3" strokeWidth={1.75} />
              <h3 className="font-ui font-bold text-base sm:text-lg mb-2">{title}</h3>
              <p className="text-sm text-white/80 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
