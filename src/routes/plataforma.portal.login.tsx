import { useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, Info, Loader2 } from "lucide-react";

export const Route = createFileRoute("/plataforma/portal/login")({
  head: () => ({
    meta: [
      { title: "Entrar no Portal do Estudante — IMPCI" },
      {
        name: "description",
        content:
          "Acesso ao Portal do Estudante IMPCI. Consulta notas, horários e documentos com as tuas credenciais.",
      },
      { property: "og:title", content: "Entrar no Portal do Estudante — IMPCI" },
      {
        property: "og:description",
        content: "Login no Portal do Estudante IMPCI.",
      },
      { property: "og:url", content: "/plataforma/portal/login" },
    ],
    links: [{ rel: "canonical", href: "/plataforma/portal/login" }],
  }),
  component: PortalLoginPage,
});

function PortalLoginPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    setTimeout(() => {
      setLoading(false);
      setMessage("Sistema em implementação. Contacta a secretaria para mais informações.");
    }, 1200);
  };

  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 pt-16 lg:pt-[72px]">
      <div
        className="hidden lg:flex flex-col justify-center px-12 xl:px-20 py-16 text-white"
        style={{ background: "linear-gradient(135deg, #E8541A 0%, #C94010 100%)" }}
      >
        <GraduationCap size={64} strokeWidth={1.5} className="mb-6" />
        <h1 className="font-display font-bold text-[2rem] leading-tight mb-4">
          Portal do Estudante IMPCI
        </h1>
        <p className="text-white/85 text-base leading-relaxed max-w-md mb-8">
          Consulta notas, horários, documentos académicos e comunicados da direcção.
        </p>
        <span className="inline-block self-start bg-white/15 backdrop-blur text-white text-sm font-ui px-4 py-2 rounded">
          IMPCI — Chimoio, Moçambique
        </span>
      </div>

      <div className="flex flex-col justify-center px-6 sm:px-12 py-16 bg-white">
        <div className="w-full max-w-md mx-auto">
          <div className="lg:hidden flex items-center gap-3 mb-6">
            <GraduationCap size={32} className="text-accent" />
            <span className="font-display font-bold text-xl text-foreground">
              Portal do Estudante
            </span>
          </div>

          <h2 className="font-display font-bold text-[1.75rem] text-foreground mb-2">
            Entrar no Portal
          </h2>
          <p className="text-muted-foreground mb-8">
            Usa as credenciais do teu número de estudante
          </p>

          <form onSubmit={onSubmit} className="space-y-5">
            <Field
              label="Número de Estudante"
              type="text"
              placeholder="Ex: IMPCI-2026-001"
              required
            />
            <Field
              label="Palavra-passe"
              type="password"
              placeholder="A tua palavra-passe"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-accent font-bold uppercase tracking-wide px-8 py-3.5 rounded-md transition-colors disabled:opacity-60 shadow-cta"
            >
              {loading && <Loader2 size={18} className="animate-spin" />}
              {loading ? "A entrar..." : "Entrar no Portal"}
            </button>
          </form>

          {message && (
            <div className="mt-5 bg-secondary border border-border rounded-md p-4 text-sm text-foreground">
              {message}
            </div>
          )}

          <p className="text-sm text-muted-foreground mt-6 text-center">
            Não tens credenciais?{" "}
            <Link to="/contacto" className="text-primary font-semibold hover:underline">
              Contacta a secretaria →
            </Link>
          </p>

          <div
            className="mt-8 bg-secondary p-4 rounded-md flex gap-3"
            style={{ borderLeft: "4px solid #E8541A" }}
          >
            <Info size={18} className="text-accent shrink-0 mt-0.5" />
            <p className="text-sm text-foreground leading-relaxed">
              As credenciais de acesso são fornecidas pela secretaria do IMPCI no acto da
              matrícula.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  type,
  placeholder,
  required,
}: {
  label: string;
  type: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block font-ui font-semibold text-sm text-foreground mb-1.5">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full border border-border rounded-md px-4 py-3 text-base font-ui focus:outline-none focus:border-accent focus:ring-[3px] focus:ring-accent/15 transition-all"
      />
    </div>
  );
}
