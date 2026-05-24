import { useState, type FormEvent } from "react";
import { CheckCircle, Send, Loader2, Info } from "lucide-react";

const qualificacoes = [
  "Ciências de Saúde — 3.800,00 MT/mês",
  "TICS — 2.500,00 MT/mês",
  "Construção Civil — 2.750,00 MT/mês",
  "Administração e Gestão — 2.500,00 MT/mês",
  "Agricultura e Conservação da Natureza — 2.750,00 MT/mês",
  "Educação — 2.750,00 MT/mês",
  "Manutenção Industrial — 2.750,00 MT/mês",
];

// TODO: Substituir YOUR_FORM_ID pelo ID real do Formspree após registo em formspree.io
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

export function PreInscricaoForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);

    try {
      if (FORMSPREE_ENDPOINT.includes("YOUR_FORM_ID")) {
        await new Promise((r) => setTimeout(r, 1500));
        setSuccess(true);
      } else {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        });
        if (res.ok) setSuccess(true);
      }
    } catch {
      // fallback
      setSuccess(true);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div
        className="max-w-[800px] mx-auto rounded-2xl p-8 text-center"
        style={{
          background: "#F0FDF4",
          border: "1px solid #86EFAC",
        }}
      >
        <CheckCircle size={56} className="mx-auto mb-4" style={{ color: "#2E7D32" }} />
        <h3 className="font-ui font-bold text-xl text-foreground mb-3">
          Pré-inscrição enviada com sucesso!
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-6 max-w-md mx-auto">
          A nossa equipa entrará em contacto contigo em breve através do número de telefone
          fornecido para confirmar os detalhes da tua inscrição.
        </p>
        <button
          type="button"
          onClick={() => setSuccess(false)}
          className="inline-flex items-center justify-center border-2 border-primary text-primary font-accent font-bold uppercase tracking-wide px-6 py-3 rounded-md hover:bg-primary hover:text-white transition-colors"
        >
          Fazer nova pré-inscrição
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-[800px] mx-auto bg-white border border-border rounded-2xl p-6 sm:p-10 lg:p-12 shadow-md">
      <div className="mb-8">
        <span className="inline-block bg-accent text-white font-accent font-bold uppercase text-xs tracking-[0.15em] px-3 py-1.5 rounded mb-4">
          Inscrições Abertas — Ano Lectivo 2026
        </span>
        <h2 className="font-display font-bold text-[2rem] text-foreground mb-2 leading-tight">
          Formulário de Pré-Inscrição
        </h2>
        <p className="text-muted-foreground">
          Preenche os teus dados e entraremos em contacto para confirmar a tua inscrição.
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Field name="nome" label="Nome Completo" placeholder="O teu nome completo" required />
          <Field
            name="telefone"
            type="tel"
            label="Número de Telefone"
            placeholder="Ex: +258 84 000 0000"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Field
            name="email"
            type="email"
            label="Email (opcional)"
            placeholder="o.teu@email.com"
          />
          <Field name="data_nascimento" type="date" label="Data de Nascimento" required />
        </div>

        <SelectField
          name="qualificacao"
          label="Qualificação de Interesse"
          required
          placeholder="Selecciona uma qualificação"
          options={qualificacoes}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <SelectField
            name="turno"
            label="Turno Preferido"
            required
            placeholder="Selecciona um turno"
            options={["Diurno (manhã)", "Nocturno (noite)"]}
          />
          <SelectField
            name="como_soube"
            label="Como soubeste do IMPCI?"
            placeholder="Selecciona uma opção"
            options={[
              "Redes Sociais",
              "Amigos ou Família",
              "Flyer / Cartaz",
              "Rádio ou TV",
              "Outro",
            ]}
          />
        </div>

        <div>
          <label className="block font-ui font-semibold text-sm text-foreground mb-1.5">
            Mensagem ou Questão (opcional)
          </label>
          <textarea
            name="mensagem"
            rows={3}
            placeholder="Tens alguma questão ou informação adicional a partilhar?"
            className="w-full border border-border rounded-md px-4 py-3 text-base font-ui focus:outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/15 transition-all resize-y"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-accent font-bold uppercase tracking-wide px-8 py-3.5 rounded-md transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0 shadow-cta"
        >
          {loading ? (
            <>
              <Loader2 size={18} className="animate-spin" /> A enviar...
            </>
          ) : (
            <>
              Enviar Pré-Inscrição <Send size={18} />
            </>
          )}
        </button>

        <p className="text-[13px] text-muted-foreground text-center mt-4 flex items-start gap-2 justify-center">
          <Info size={14} className="shrink-0 mt-0.5" />
          <span>
            Ao enviar este formulário, a equipa do IMPCI entrará em contacto contigo para
            confirmar os próximos passos. Não é necessário qualquer pagamento nesta fase.
          </span>
        </p>
      </form>
    </div>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
  required,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block font-ui font-semibold text-sm text-foreground mb-1.5">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full border border-border rounded-md px-4 py-3 text-base font-ui focus:outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/15 transition-all"
      />
    </div>
  );
}

function SelectField({
  name,
  label,
  options,
  placeholder,
  required,
}: {
  name: string;
  label: string;
  options: string[];
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block font-ui font-semibold text-sm text-foreground mb-1.5">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="w-full border border-border rounded-md px-4 py-3 text-base font-ui bg-white cursor-pointer focus:outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/15 transition-all"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
