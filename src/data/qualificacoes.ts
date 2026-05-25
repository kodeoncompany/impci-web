import saudeImg from "@/assets/impci-saude.jpg";

export type Qualificacao = {
  id: number;
  slug: string;
  nome: string;
  headline: string;
  tagline: string;
  mensalidade: string;
  icone:
    | "Heart"
    | "Monitor"
    | "Building2"
    | "Briefcase"
    | "Leaf"
    | "BookOpen"
    | "Zap";
  cor: string; // hex used for the colored top border on cards
  area: "Saude" | "Tecnologia" | "Gestao" | "Engenharia" | "Educacao" | "Agricultura";
  cvs: string[];
  imagem: string;
};

export const qualificacoes: Qualificacao[] = [
  {
    id: 1,
    slug: "ciencias-de-saude",
    nome: "Ciências de Saúde",
    headline: "CIÊNCIAS DE SAÚDE",
    tagline: "Cuida. Salva. Transforma vidas.",
    mensalidade: "3.800,00 MT",
    icone: "Heart",
    cor: "#E8541A",
    area: "Saude",
    cvs: [
      "Enfermagem Geral",
      "Enfermagem de Saúde Materno-Infantil",
      "Laboratório de Análises Clínicas",
      "Farmácia",
      "Saúde Preventiva-Agente",
      "Polivalente de Saúde",
      "Administração Hospitalar",
      "Nutrição e Medicina Geral",
    ],
    imagem: saudeImg,
  },
  {
    id: 2,
    slug: "tics",
    nome: "TICS",
    headline: "TECNOLOGIAS DE INFORMAÇÃO",
    tagline: "O futuro é digital. Começa aqui.",
    mensalidade: "2.500,00 MT",
    icone: "Monitor",
    cor: "#1A6AB5",
    area: "Tecnologia",
    cvs: [
      "Suporte Informático",
      "Administração de Sistemas e Redes Informáticas",
    ],
    imagem: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1600&q=80",
  },
  {
    id: 3,
    slug: "construcao-civil",
    nome: "Construção Civil",
    headline: "CONSTRUÇÃO CIVIL",
    tagline: "Constrói o teu futuro com as tuas mãos.",
    mensalidade: "2.750,00 MT",
    icone: "Building2",
    cor: "#8B5E3C",
    area: "Engenharia",
    cvs: ["Construção Civil"],
    imagem: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600&q=80",
  },
  {
    id: 4,
    slug: "administracao-e-gestao",
    nome: "Administração e Gestão",
    headline: "ADMINISTRAÇÃO E GESTÃO",
    tagline: "Lidera. Gere. Inspira.",
    mensalidade: "2.500,00 MT",
    icone: "Briefcase",
    cor: "#2E7D32",
    area: "Gestao",
    cvs: [
      "Gestão",
      "Gestão de Recursos Humanos",
      "Gestão Autárquica (Ad. Pública)",
      "Contabilidade",
    ],
    imagem: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1600&q=80",
  },
  {
    id: 5,
    slug: "agricultura-e-conservacao",
    nome: "Agricultura e Conservação da Natureza",
    headline: "AGRICULTURA E NATUREZA",
    tagline: "Da terra nasce o progresso.",
    mensalidade: "2.750,00 MT",
    icone: "Leaf",
    cor: "#2E7D32",
    area: "Agricultura",
    cvs: [
      "Agropecuária",
      "Agricultura",
      "Pecuária",
      "Extensão e Fomento Agrário",
    ],
    imagem: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1600&q=80",
  },
  {
    id: 6,
    slug: "educacao",
    nome: "Educação",
    headline: "EDUCAÇÃO",
    tagline: "Forma educadores que moldam o amanhã.",
    mensalidade: "2.750,00 MT",
    icone: "BookOpen",
    cor: "#7C3AED",
    area: "Educacao",
    cvs: ["Educação da Infância"],
    imagem: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600&q=80",
  },
  {
    id: 7,
    slug: "manutencao-industrial",
    nome: "Manutenção Industrial",
    headline: "MANUTENÇÃO INDUSTRIAL",
    tagline: "A energia que move Moçambique.",
    mensalidade: "2.750,00 MT",
    icone: "Zap",
    cor: "#374151",
    area: "Engenharia",
    cvs: ["Electricidade Industrial"],
    imagem: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&q=80",
  },
];

export const filtroAreas: { label: string; value: Qualificacao["area"] | "Todos" }[] = [
  { label: "Todos", value: "Todos" },
  { label: "Saúde", value: "Saude" },
  { label: "Tecnologia", value: "Tecnologia" },
  { label: "Gestão", value: "Gestao" },
  { label: "Engenharia", value: "Engenharia" },
  { label: "Educação", value: "Educacao" },
  { label: "Agricultura", value: "Agricultura" },
];
