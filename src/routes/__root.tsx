import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const orgJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Instituto Médio Politécnico de Ciência e Inovação",
  alternateName: "IMPCI",
  url: "/",
  telephone: ["+258877396100", "+258857496100"],
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Bairro Francisco Manhanga, Localidade Urbana nº 4, depois do Mercado 38, Zona Subestação da EDM",
    addressLocality: "Chimoio",
    addressCountry: "MZ",
  },
});

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-display font-bold text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A página que procuras não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-3 text-sm font-accent font-bold uppercase tracking-wide text-white hover:bg-accent-dark transition-colors"
          >
            Voltar ao Início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold text-foreground">Esta página não carregou</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Algo correu mal. Tenta actualizar ou voltar ao início.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark"
          >
            Tentar de novo
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent/10"
          >
            Início
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#1A6AB5" },
      { title: "IMPCI — Instituto Médio Politécnico de Ciência e Inovação" },
      {
        name: "description",
        content:
          "Instituto Médio Politécnico de Ciência e Inovação (IMPCI) em Chimoio, Moçambique. Formação técnico-profissional certificada pela ANEP. Inscrições abertas 2026.",
      },
      { property: "og:site_name", content: "IMPCI" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "IMPCI — Instituto Médio Politécnico de Ciência e Inovação" },
      {
        property: "og:description",
        content:
          "Formação técnica certificada pela ANEP. 7 qualificações, ensino diurno e nocturno, plataforma digital.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "IMPCI — Instituto Médio Politécnico de Ciência e Inovação" },
      { name: "description", content: "Pixel Perfect Replication builds exact website replicas from design specifications." },
      { property: "og:description", content: "Pixel Perfect Replication builds exact website replicas from design specifications." },
      { name: "twitter:description", content: "Pixel Perfect Replication builds exact website replicas from design specifications." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;600;700&family=Oswald:wght@500;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: orgJsonLd,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
