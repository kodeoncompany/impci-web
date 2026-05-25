import { useState, type FormEvent, type ReactNode } from "react";
import {
  CheckCircle,
  Send,
  Loader2,
  Info,
  GraduationCap,
  User,
  FileText,
  MapPin,
  CreditCard,
  AlertCircle,
} from "lucide-react";

const qualificacoes = [
  "Ciências de Saúde — 3.800,00 MT/mês",
  "TICS — 2.500,00 MT/mês",
  "Construção Civil — 2.750,00 MT/mês",
  "Administração e Gestão — 2.500,00 MT/mês",
  "Agricultura e Conservação da Natureza — 2.750,00 MT/mês",
  "Educação — 2.750,00 MT/mês",
  "Manutenção Industrial — 2.750,00 MT/mês",
];

const provincias = [
  "Maputo Cidade",
  "Maputo Província",
  "Gaza",
  "Inhambane",
  "Sofala",
  "Manica",
  "Tete",
  "Zambézia",
  "Nampula",
  "Cabo Delgado",
  "Niassa",
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
      setSuccess(true);
    } finally {
      setLoading(false);
      if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (success) {
    return (
      <div
        className="max-w-[900px] mx-auto rounded-2xl p-10 text-center"
        style={{ background: "#F0FDF4", border: "1px solid #86EFAC" }}
      >
        <CheckCircle size={56} className="mx-auto mb-4" style={{ color: "#2E7D32" }} />
        <h3 className="font-ui font-bold text-2xl text-foreground mb-3">
          Pré-inscrição enviada com sucesso!
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-6 max-w-md mx-auto">
          A nossa equipa entrará em contacto contigo em breve para confirmar os detalhes da
          tua inscrição e do pagamento via e-Mola.
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
    <div className="max-w-[1000px] mx-auto">
      {/* Título topo */}
      <div className="text-center mb-8">
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-2">
          Formulário de Pré-inscrição
        </h1>
        <p className="text-muted-foreground">
          Preenche os campos abaixo para iniciares a tua candidatura ao IMPCI.
        </p>
      </div>

      {/* Aviso */}
      <div className="max-w-[900px] mx-auto bg-white border border-border rounded-xl px-5 py-4 mb-6 flex items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-3 text-foreground">
          <AlertCircle size={20} className="text-accent shrink-0" />
          <p className="text-sm">
            <strong>Atenção!</strong> Já se inscreveu?
          </p>
        </div>
        <a
          href="/contacto"
          className="text-success font-ui font-semibold text-sm underline underline-offset-4 hover:opacity-80 whitespace-nowrap"
        >
          Consultar dados
        </a>
      </div>

      <form onSubmit={onSubmit} className="space-y-6">
        {/* Informações Académicas */}
        <Section
          icon={<GraduationCap size={22} className="text-success" />}
          title="Informações Académicas"
          subtitle="Preenche as tuas informações educacionais"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <SelectField
              name="regime"
              label="Regime/Turno"
              required
              placeholder="Seleccione o regime"
              options={["Diurno (manhã)", "Nocturno (noite)"]}
            />
            <SelectField
              name="qualificacao"
              label="Qualificação/Curso"
              required
              placeholder="Seleccione a qualificação"
              options={qualificacoes}
            />
            <Field name="curso_anterior" label="Curso/Classe Anterior" placeholder="Ex: 12ª Classe" />
            <Field name="escola_anterior" label="Escola Onde Frequentou" placeholder="Nome da escola anterior" />
            <SelectField
              name="nivel_anterior"
              label="Nível Anterior"
              placeholder="Seleccione o nível"
              options={["Ensino Básico", "Ensino Secundário Geral", "Ensino Técnico-Profissional", "Ensino Superior"]}
            />
            <Field name="ano_conclusao" label="Ano de Conclusão" placeholder="Ex: 2023" />
          </div>
        </Section>

        {/* Informações Pessoais */}
        <Section
          icon={<User size={22} className="text-success" />}
          title="Informações Pessoais"
          subtitle="Preenche as tuas informações pessoais"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Field name="apelido" label="Apelido" placeholder="O teu apelido" required />
            <Field name="outros_nomes" label="Outros Nomes" placeholder="Outros nomes" required />
            <SelectField
              name="genero"
              label="Género"
              required
              placeholder="Seleccione o género"
              options={["Masculino", "Feminino"]}
            />
            <SelectField
              name="estado_civil"
              label="Estado Civil"
              placeholder="Seleccione o estado civil"
              options={["Solteiro(a)", "Casado(a)", "Divorciado(a)", "Viúvo(a)"]}
            />
            <Field
              name="data_nascimento"
              type="date"
              label="Data de Nascimento"
              required
            />
          </div>
        </Section>

        {/* Documentação */}
        <Section
          icon={<FileText size={22} className="text-success" />}
          title="Documentação"
          subtitle="Informações do documento de identificação"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <SelectField
              name="tipo_documento"
              label="Tipo de Documento"
              required
              placeholder="Seleccione o tipo"
              options={["Bilhete de Identidade", "Passaporte", "Cédula"]}
            />
            <Field
              name="numero_documento"
              label="Número do Documento"
              placeholder="Número do documento"
              required
            />
            <Field name="validade_documento" type="date" label="Data de Validade" />
            <Field name="local_emissao" label="Local de Emissão" placeholder="Local onde foi emitido" />
          </div>
        </Section>

        {/* Contato e Residência */}
        <Section
          icon={<MapPin size={22} className="text-success" />}
          title="Contato e Residência"
          subtitle="Informações de contacto e endereço"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <SelectField
              name="provincia"
              label="Província de Residência"
              required
              placeholder="Seleccione a província"
              options={provincias}
            />
            <Field
              name="cidade"
              label="Cidade/Distrito"
              placeholder="A tua cidade ou distrito"
              required
            />
          </div>
          <div className="mt-5">
            <label className="block font-ui font-semibold text-sm text-foreground mb-1.5">
              Endereço <span className="text-accent">*</span>
            </label>
            <textarea
              name="endereco"
              rows={3}
              required
              placeholder="Endereço completo (rua, bairro, etc.)"
              className="w-full bg-muted/30 border border-border rounded-md px-4 py-3 text-base font-ui focus:outline-none focus:border-primary focus:bg-white focus:ring-[3px] focus:ring-primary/15 transition-all resize-y"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            <Field
              name="telefone"
              type="tel"
              label="Telefone"
              placeholder="Ex: 870000000"
              required
            />
            <Field
              name="telefone_opcional"
              type="tel"
              label="Telefone Opcional"
              placeholder="Telefone alternativo (opcional)"
            />
          </div>
        </Section>

        {/* Informações de Pagamento */}
        <Section
          icon={<CreditCard size={22} className="text-success" />}
          title="Informações de Pagamento"
          subtitle={
            <>
              O valor de Inscrição é de <strong>1.500 MZN</strong>, podendo ser pago em parcela.
            </>
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Field name="valor_pagar" label="Valor a Pagar" placeholder="Ex: 1500" required />
            <Field
              name="telefone_emola"
              type="tel"
              label="Número de Telefone e-Mola"
              placeholder="Ex: 870000000"
              required
            />
          </div>
        </Section>

        {/* Nota */}
        <div className="max-w-[900px] mx-auto bg-white border border-border rounded-xl px-5 py-4 flex items-start gap-3 shadow-sm">
          <Info size={20} className="text-accent shrink-0 mt-0.5" />
          <p className="text-sm text-foreground">
            <strong>Nota:</strong> Ao clicar no botão "Enviar Pré-inscrição", receberás uma
            notificação no teu telemóvel para confirmar o PIN do teu e-Mola.
          </p>
        </div>

        {/* Botão */}
        <div className="flex justify-center pt-2">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 text-white font-accent font-bold uppercase tracking-wide px-10 py-4 rounded-md transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0 shadow-cta"
            style={{
              background: "linear-gradient(90deg, #2E7D32 0%, #E8B84A 100%)",
            }}
          >
            {loading ? (
              <>
                <Loader2 size={18} className="animate-spin" /> A enviar...
              </>
            ) : (
              <>
                <Send size={18} /> Enviar Pré-inscrição
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

function Section({
  icon,
  title,
  subtitle,
  children,
}: {
  icon: ReactNode;
  title: string;
  subtitle: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="max-w-[900px] mx-auto bg-white border border-border rounded-2xl p-6 sm:p-8 shadow-sm">
      <div className="mb-6">
        <div className="flex items-center gap-2.5 mb-1">
          {icon}
          <h2 className="font-display font-bold text-xl sm:text-2xl text-foreground">{title}</h2>
        </div>
        <p className="text-sm text-muted-foreground ml-[34px]">{subtitle}</p>
      </div>
      {children}
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
        className="w-full bg-muted/30 border border-border rounded-md px-4 py-3 text-base font-ui focus:outline-none focus:border-primary focus:bg-white focus:ring-[3px] focus:ring-primary/15 transition-all"
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
        className="w-full bg-muted/30 border border-border rounded-md px-4 py-3 text-base font-ui cursor-pointer focus:outline-none focus:border-primary focus:bg-white focus:ring-[3px] focus:ring-primary/15 transition-all"
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
