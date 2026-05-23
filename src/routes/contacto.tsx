import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  Phone,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Send,
  CheckCircle2,
} from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — IMPCI" },
      {
        name: "description",
        content:
          "Contacta o IMPCI em Chimoio: +258 87 739 6100, +258 85 749 6100. Bairro Francisco Manhanga, Localidade Urbana nº 4.",
      },
      { property: "og:title", content: "Contacto — IMPCI" },
      {
        property: "og:description",
        content: "Telefones, morada e formulário de contacto do IMPCI em Chimoio.",
      },
      { property: "og:url", content: "/contacto" },
    ],
    links: [{ rel: "canonical", href: "/contacto" }],
  }),
  component: ContactoPage,
});

function ContactoPage() {
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // Mock submission — substituir por integração real (Resend / Formspree)
    setTimeout(() => {
      setLoading(false);
      setEnviado(true);
      (e.target as HTMLFormElement).reset();
    }, 800);
  }

  return (
    <>
      <PageHero
        title="Contacto"
        subtitle="Estamos aqui para responder a todas as tuas questões."
        breadcrumb={[
          { label: "Início", href: "/" },
          { label: "Contacto" },
        ]}
      />

      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Info */}
            <div>
              <h2 className="font-display font-bold text-3xl text-foreground mb-6">
                Fala Connosco
              </h2>

              <div className="space-y-4">
                <InfoCard Icon={Phone} label="Telefone">
                  <a href="tel:+258877396100" className="block hover:text-primary">
                    +258 87 739 6100
                  </a>
                  <a href="tel:+258857496100" className="block hover:text-primary">
                    +258 85 749 6100
                  </a>
                </InfoCard>

                <InfoCard Icon={MapPin} label="Morada">
                  Bairro Francisco Manhanga, Localidade Urbana nº 4
                  <br />
                  <span className="text-sm text-muted-foreground">
                    Depois do Mercado 38, Zona Subestação da EDM
                    <br />
                    Chimoio, Moçambique
                  </span>
                </InfoCard>

                <InfoCard Icon={Clock} label="Horário">
                  Segunda a Sexta: 07h00 – 17h00
                  <br />
                  Sábado: 07h00 – 12h00
                </InfoCard>
              </div>

              <div className="mt-8">
                <p className="font-ui font-bold uppercase tracking-[0.12em] text-xs text-muted-foreground mb-3">
                  Segue-nos
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="w-11 h-11 rounded-md bg-primary hover:bg-accent flex items-center justify-center text-white transition-colors"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="w-11 h-11 rounded-md bg-primary hover:bg-accent flex items-center justify-center text-white transition-colors"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>

              <div className="mt-8 rounded-xl overflow-hidden border border-border shadow-sm">
                <iframe
                  title="IMPCI Chimoio no Google Maps"
                  src="https://maps.google.com/maps?q=Chimoio,+Mo%C3%A7ambique&output=embed"
                  className="w-full h-[300px] border-0"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl shadow-md p-8 lg:p-10">
              <h2 className="font-display font-bold text-2xl text-foreground mb-6">
                Enviar Mensagem
              </h2>

              {enviado ? (
                <div className="rounded-lg bg-success/10 border border-success/30 p-5 flex items-start gap-3">
                  <CheckCircle2 size={22} className="text-success mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Mensagem enviada!</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Entraremos em contacto brevemente.
                    </p>
                    <button
                      type="button"
                      onClick={() => setEnviado(false)}
                      className="mt-3 text-sm font-semibold text-primary hover:underline"
                    >
                      Enviar nova mensagem
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <Field label="Nome Completo" required>
                    <input
                      type="text"
                      required
                      name="nome"
                      className="input-base"
                      placeholder="O teu nome"
                    />
                  </Field>
                  <Field label="Número de Telefone" required>
                    <input
                      type="tel"
                      required
                      name="telefone"
                      className="input-base"
                      placeholder="+258 ..."
                    />
                  </Field>
                  <Field label="Assunto" required>
                    <select required name="assunto" className="input-base" defaultValue="">
                      <option value="" disabled>
                        Selecciona um assunto
                      </option>
                      <option>Informações sobre Admissões</option>
                      <option>Informações sobre Qualificações</option>
                      <option>Plataforma Digital</option>
                      <option>Outro</option>
                    </select>
                  </Field>
                  <Field label="Mensagem" required>
                    <textarea
                      required
                      name="mensagem"
                      rows={4}
                      className="input-base resize-none"
                      placeholder="Escreve a tua mensagem..."
                    />
                  </Field>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark disabled:opacity-60 text-white font-accent font-bold uppercase tracking-wide px-6 py-3.5 rounded-md shadow-cta transition-all hover:-translate-y-0.5"
                  >
                    {loading ? (
                      <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send size={18} /> Enviar Mensagem
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .input-base {
          width: 100%;
          border: 1px solid var(--color-border);
          border-radius: 8px;
          padding: 12px 16px;
          font-family: var(--font-ui);
          font-size: 15px;
          background: white;
          color: var(--color-foreground);
          transition: border-color 150ms ease, box-shadow 150ms ease;
        }
        .input-base:focus {
          outline: none;
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(26,106,181,0.15);
        }
      `}</style>
    </>
  );
}

function InfoCard({
  Icon,
  label,
  children,
}: {
  Icon: typeof Phone;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-xl p-5 flex items-start gap-4 shadow-sm">
      <div className="w-11 h-11 rounded-md bg-primary/10 text-primary flex items-center justify-center shrink-0">
        <Icon size={20} />
      </div>
      <div>
        <p className="text-xs font-ui font-bold uppercase tracking-wider text-muted-foreground mb-1">
          {label}
        </p>
        <div className="text-foreground leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-ui font-semibold text-foreground mb-2">
        {label}
        {required && <span className="text-accent ml-1">*</span>}
      </span>
      {children}
    </label>
  );
}
