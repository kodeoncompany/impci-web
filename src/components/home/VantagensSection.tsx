import {
  Gift,
  Briefcase,
  CheckCircle,
  Clock,
  Wifi,
  Shield,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";

const vantagens: { Icon: LucideIcon; title: string; text: string }[] = [
  { Icon: Gift, title: "Camiseta Gratuita", text: "Todos os estudantes recebem uma camiseta do instituto" },
  { Icon: Briefcase, title: "Estágio Gratuito", text: "Estágios profissionais integrados no plano curricular" },
  { Icon: CheckCircle, title: "Sem Exame de Admissão", text: "Candidatura directa, sem testes de entrada" },
  { Icon: Clock, title: "Horário Flexível", text: "Escolhe entre regime diurno ou nocturno" },
  { Icon: Wifi, title: "Ensino à Distância", text: "Aprende de qualquer lugar com a nossa plataforma digital" },
  { Icon: Shield, title: "Certificado pela ANEP", text: "Diploma com reconhecimento nacional e oficial" },
];

export function VantagensSection() {
  return (
    <section className="bg-secondary py-20 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Vantagens"
          title="Porquê escolher o IMPCI?"
          subtitle="Um instituto pensado para te dar tudo o que precisas para crescer."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vantagens.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="bg-white rounded-xl shadow-sm p-8 text-center hover:shadow-md transition-shadow"
            >
              <Icon size={44} className="mx-auto text-primary mb-4" strokeWidth={1.5} />
              <h3 className="font-ui font-bold text-base mb-2 text-foreground">{title}</h3>
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
