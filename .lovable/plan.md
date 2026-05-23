## IMPCI — Website institucional (Fase 1 / MVP)

Construir o site completo do Instituto Médio Politécnico de Ciência e Inovação a partir do PRD v1.2, Design System v1.0 e Implementation Plan v1.0 que enviaste. Adapto os documentos ao stack real do projecto (TanStack Start + Tailwind v4) mantendo 100 % do conteúdo, paleta, tipografia e estrutura especificados.

### Adaptações ao stack
- O plano original assume `react-router-dom` + `src/pages/`. Aqui uso **TanStack Router file-based routing** em `src/routes/` (é o stack do projecto — `src/pages/` é proibido).
- Slider: `embla-carousel-react` + `embla-carousel-autoplay` (instalar).
- Ícones: `lucide-react` (já disponível).
- Tokens de cor em **oklch** em `src/styles.css` (Tailwind v4), expostos via `@theme inline`. Hex de marca preservados como referência em comentários.
- Fontes Google (Playfair Display, Source Sans 3, Oswald) injectadas via `links` no `__root.tsx`.
- Logo `LOGO_IMPCI.png` copiado para `src/assets/`.

### Estrutura de rotas
```
src/routes/
  __root.tsx                  navbar + footer + fontes + meta defaults
  index.tsx                   Home
  qualificacoes.tsx           Qualificações (7 cursos + filtros)
  plataforma.biblioteca.tsx   Biblioteca Virtual (placeholder)
  plataforma.portal.tsx       Portal do Estudante (placeholder)
  admissoes.tsx               Admissões + documentos + MAHALA
  contacto.tsx                Formulário + morada + mapa
```
Cada rota tem `head()` próprio com title, description, og:title/description, og:url e canonical no leaf.

### Design system (`src/styles.css`)
Tokens semânticos novos (oklch) mapeando para a paleta IMPCI:
- `--primary` = Azul Royal #1A6AB5
- `--primary-dark` = #0D4A8A
- `--accent` = Laranja IMPCI #E8541A
- `--accent-dark` = #C94010
- `--success` = Verde Conhecimento #2E7D32
- Cinzas, gradientes (`--gradient-hero`, `--gradient-mahala`, `--gradient-card`), sombras (`--shadow-sm/md/lg/cta`), radius.
Classes utilitárias para as 3 famílias tipográficas (`font-display`, `font-ui`, `font-accent`).

### Componentes a criar
```
src/components/
  ui/Button.tsx               primary | secondary | outline | ghost
  ui/SectionTitle.tsx         título + linha laranja decorativa
  ui/Badge.tsx                ANO LECTIVO 2026, MAHALA
  layout/Navbar.tsx           fixa, scroll-aware, dropdown Plataforma, mobile accordion
  layout/Footer.tsx           4 colunas: identidade, navegação, contactos, institucional/ANEP
  layout/PageHero.tsx         hero azul reutilizável com breadcrumb
  home/HeroSlider.tsx         embla 7 slides, autoplay 5s, fadeInUp, dots, setas
  home/DiferenciaisBanner.tsx 4 pilares sobre fundo azul
  home/QualificacoesPreview.tsx grid de 7 cards
  home/PlataformaSection.tsx  2 blocos gradientes (azul + laranja)
  home/VantagensSection.tsx   6 vantagens + badge ANEP
  home/CTAFinal.tsx           CTA gradient laranja
  qualificacoes/QualificacaoCard.tsx  card expandível com CVS
  contacto/ContactoForm.tsx   form local com validação
src/data/qualificacoes.ts     array com os 7 cursos (dados do PRD)
```

### Conteúdo (preservado integralmente do PRD)
- 7 qualificações com mensalidades reais (3.800 / 2.750 / 2.500 MT) e lista de CVS.
- Hero slider com 7 slides usando as imagens Unsplash indicadas no plano + headline/tagline por curso.
- Banner de diferenciais: Ensino de Qualidade, Plataforma Digital, Flexibilidade, Certificação Nacional.
- 6 vantagens: Camiseta, Estágio, Sem exame, Horário flexível, EaD, ANEP.
- Página Admissões: MAHALA + 8 documentos + período até 06 Fev 2026 + FAQ.
- Biblioteca e Portal: cards informativos com badge "Em breve".
- Contacto: morada completa, dois telefones, formulário, embed Google Maps de Chimoio, redes sociais.
- Footer com certificação ANEP e badge ANO LECTIVO 2026.

### Formulário de contacto
Fase 1 = client-side com validação e estado de sucesso/erro (sem envio real). Posso ligar a Lovable Cloud + Resend numa segunda iteração — pergunto antes de implementar.

### SEO e meta
- Idioma `pt` no `<html>`.
- Title/description únicos por rota.
- JSON-LD `EducationalOrganization` no `__root.tsx` (nome, morada, telefones, logo).
- Alt text em todas as imagens, contraste WCAG AA, navegação por teclado no dropdown.

### Pontos a confirmar antes do build
1. **Formulário de contacto** — entregar como mock visual nesta fase, ou já ligar a Lovable Cloud + Resend para envio real? (recomendo mock agora, integração depois)
2. **Imagens do hero** — usar os URLs Unsplash do plano como placeholder, ou queres que gere imagens com a IA para terem aspecto mais moçambicano/coerente entre si?
3. **Construir tudo num único passo** (todas as 7 páginas + componentes) ou seguir os 6 prompts sequenciais do teu Implementation Plan? Recomendo entregar tudo de uma vez — o plano já está consolidado.

Se não responderes, sigo com: formulário mock, imagens Unsplash do plano, build completo de uma vez.