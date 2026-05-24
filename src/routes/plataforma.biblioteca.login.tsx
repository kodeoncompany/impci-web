import { useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Info, Loader2 } from "lucide-react";

export const Route = createFileRoute("/plataforma/biblioteca/login")({
  head: () => ({
    meta: [
      { title: "Entrar na Biblioteca Virtual — IMPCI" },
      {
        name: "description",
        content:
          "Acesso à Biblioteca Virtual do IMPCI. Usa as credenciais fornecidas pela secretaria do instituto.",
      },
      { property: "og:title", content: "Entrar na Biblioteca Virtual — IMPCI" },
      {
        property: "og:description",
        content: "Login na Biblioteca Virtual do IMPCI com credenciais de estudante.",
      },
      { property: "og:url", content: "/plataforma/biblioteca/login" },
    ],
    links: [{ rel: "canonical", href: "/plataforma/biblioteca/login" }],
  }),
  component: BibliotecaLoginPage,
});

function BibliotecaLoginPage() {
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
      {/* Esquerdo */}
      <div
        className="hidden lg:flex flex-col justify-center px-12 xl:px-20 py-16 text-white"
        style={{ background: "linear-gradient(135deg, #1A6AB5 0%, #0D4A8A 100%)" }}
      >
        <BookOpen size={64} strokeWidth={1.5} className="mb-6" />
        <h1 className="font-display font-bold text-[2rem] leading-tight mb-4">
          Biblioteca Virtual IMPCI
        </h1>
        <p className="text-white/85 text-base leading-relaxed max-w-md mb-8">
          Acede a manuais, apostilas e recursos académicos organizados por qualificação.
        </p>
        <span className="inline-block self-start bg-white/15 backdrop-blur text-white text-sm font-ui px-4 py-2 rounded">
          IMPCI — Chimoio, Moçambique
        </span>
      </div>

      {/* Direito */}
      <div className="flex flex-col justify-center px-6 sm:px-12 py-16 bg-white">
        <div className="w-full max-w-md mx-auto">
          <div className="lg:hidden flex items-center gap-3 mb-6">
            <BookOpen size={32} className="text-primary" />
            <span className="font-display font-bold text-xl text-foreground">
              Biblioteca Virtual
            </span>
          </div>

          <h2 className="font-display font-bold text-[1.75rem] text-foreground mb-2">
            Entrar na Biblioteca
          </h2>
          <p className="text-muted-foreground mb-8">
            Usa as credenciais fornecidas pelo instituto
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
              className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-accent font-bold uppercase tracking-wide px-8 py-3.5 rounded-md transition-colors disabled:opacity-60"
            >
              {loading && <Loader2 size={18} className="animate-spin" />}
              {loading ? "A entrar..." : "Entrar na Biblioteca"}
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
            style={{ borderLeft: "4px solid #1A6AB5" }}
          >
            <Info size={18} className="text-primary shrink-0 mt-0.5" />
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
        className="w-full border border-border rounded-md px-4 py-3 text-base font-ui focus:outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/15 transition-all"
      />
    </div>
  );
}
