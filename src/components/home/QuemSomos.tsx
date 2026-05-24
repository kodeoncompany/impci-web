import { BookOpen, Users, Shield } from "lucide-react";
import { ILink } from "@/components/ui/IButton";

export function QuemSomos() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Visual */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&q=80"
              alt="Estudantes africanos em ambiente académico"
              loading="lazy"
              className="w-full h-[420px] lg:h-[520px] object-cover rounded-2xl shadow-lg"
            />
            <div
              className="absolute bottom-0 left-0 bg-primary text-white px-6 py-4"
              style={{ borderRadius: "0 12px 0 12px" }}
            >
              <div className="font-accent font-bold text-lg leading-tight">Desde 2020</div>
              <div className="text-[13px] text-white/80 font-ui">Chimoio, Moçambique</div>
            </div>
          </div>

          {/* Texto */}
          <div>
            <p className="text-accent font-ui font-bold text-[13px] uppercase tracking-[0.15em] mb-3">
              Sobre o Instituto
            </p>
            <h2 className="font-display font-bold text-foreground leading-tight mb-6 text-[clamp(1.75rem,3vw,2.5rem)]">
              Formamos os profissionais que Moçambique precisa
            </h2>

            <div className="space-y-4 text-muted-foreground text-base leading-[1.75]">
              <p>
                O Instituto Médio Politécnico de Ciência e Inovação (IMPCI) é uma instituição
                de ensino técnico-profissional sediada em Chimoio, comprometida com a formação
                de qualidade e o desenvolvimento humano de Moçambique.
              </p>
              <p>
                Certificados pela ANEP, oferecemos 7 qualificações técnicas em áreas estratégicas
                para o mercado de trabalho nacional — da Saúde às Tecnologias de Informação, da
                Construção Civil à Administração e Gestão.
              </p>
              <p>
                A nossa missão é simples: dar a cada estudante as ferramentas, o conhecimento e
                a confiança para construir o seu próprio futuro.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-border">
              {[
                { Icon: BookOpen, numero: "7", label: "Qualificações" },
                { Icon: Users, numero: "500+", label: "Estudantes Formados" },
                { Icon: Shield, numero: "ANEP", label: "Certificado por" },
              ].map(({ Icon, numero, label }) => (
                <div key={label}>
                  <Icon size={22} className="text-primary mb-2" strokeWidth={1.75} />
                  <div className="font-accent font-bold text-[2.25rem] text-primary leading-none">
                    {numero}
                  </div>
                  <div className="text-[13px] text-muted-foreground uppercase tracking-[0.05em] mt-1">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <ILink to="/qualificacoes" variant="secondary" size="md">
                Conhecer as Qualificações
              </ILink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
