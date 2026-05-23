import { ILink } from "@/components/ui/IButton";

export function CTAFinal() {
  return (
    <section className="bg-gradient-mahala text-white py-20 lg:py-24">
      <div className="mx-auto max-w-3xl text-center px-4 sm:px-6">
        <h2 className="font-display font-black leading-tight text-[clamp(2rem,5vw,4rem)]">
          Faz parte do IMPCI.
          <br />
          <span className="text-white/90">O teu futuro começa aqui.</span>
        </h2>
        <p className="mt-6 text-white/90 text-base sm:text-lg leading-relaxed">
          Inscrições abertas para o Ano Lectivo 2026. Sem exame de admissão.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <ILink to="/admissoes" variant="white" size="lg">
            Inscrever-se Já
          </ILink>
          <ILink to="/qualificacoes" variant="ghost" size="lg">
            Ver Qualificações
          </ILink>
        </div>
      </div>
    </section>
  );
}
