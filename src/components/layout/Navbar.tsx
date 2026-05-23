import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  BookOpen,
  GraduationCap,
} from "lucide-react";
import logo from "@/assets/logo-impci.png";
import { cn } from "@/lib/utils";
import { ILink } from "@/components/ui/IButton";

const navLinks = [
  { label: "Início", to: "/" },
  { label: "Qualificações", to: "/qualificacoes" },
  { label: "Admissões", to: "/admissoes" },
  { label: "Contacto", to: "/contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [platOpen, setPlatOpen] = useState(false);
  const [mobilePlatOpen, setMobilePlatOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 bg-white transition-shadow duration-200",
        scrolled ? "shadow-md border-b border-border" : "",
      )}
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 h-16 lg:h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
          <img
            src={logo}
            alt="Logotipo IMPCI"
            className="h-10 w-10 lg:h-12 lg:w-12 object-contain"
          />
          <div className="leading-tight">
            <div className="font-accent font-bold text-primary text-lg">IMPCI</div>
            <div className="text-[11px] text-muted-foreground hidden sm:block">
              Instituto Médio Politécnico
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.slice(0, 2).map((l) => (
            <NavItem key={l.to} {...l} />
          ))}

          {/* Plataforma dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setPlatOpen(true)}
            onMouseLeave={() => setPlatOpen(false)}
          >
            <button
              type="button"
              onClick={() => setPlatOpen((v) => !v)}
              className="flex items-center gap-1 font-ui font-semibold text-[15px] text-foreground hover:text-primary transition-colors"
              aria-expanded={platOpen}
              aria-haspopup="true"
            >
              Plataforma
              <ChevronDown
                size={16}
                className={cn("transition-transform", platOpen && "rotate-180")}
              />
            </button>
            {platOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3">
                <div className="bg-white rounded-lg shadow-lg p-2 w-[280px] border border-border">
                  <DropdownItem
                    to="/plataforma/biblioteca"
                    icon={<BookOpen size={20} className="text-primary" />}
                    title="Biblioteca Virtual"
                    subtitle="Materiais e recursos de estudo"
                  />
                  <DropdownItem
                    to="/plataforma/portal"
                    icon={<GraduationCap size={20} className="text-primary" />}
                    title="Portal do Estudante"
                    subtitle="Notas, horários e documentos"
                  />
                </div>
              </div>
            )}
          </div>

          {navLinks.slice(2).map((l) => (
            <NavItem key={l.to} {...l} />
          ))}
        </nav>

        <div className="hidden lg:block">
          <ILink to="/admissoes" variant="primary" size="sm">
            Inscrever-se
          </ILink>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-white max-h-[calc(100vh-64px)] overflow-y-auto">
          <div className="px-4 py-2">
            {navLinks.slice(0, 2).map((l) => (
              <MobileLink key={l.to} {...l} onClick={() => setMobileOpen(false)} />
            ))}
            <button
              type="button"
              onClick={() => setMobilePlatOpen((v) => !v)}
              className="w-full flex items-center justify-between py-4 font-ui font-semibold text-foreground"
            >
              Plataforma
              <ChevronDown
                size={18}
                className={cn("transition-transform", mobilePlatOpen && "rotate-180")}
              />
            </button>
            {mobilePlatOpen && (
              <div className="pl-4 pb-2 space-y-1">
                <MobileLink
                  to="/plataforma/biblioteca"
                  label="Biblioteca Virtual"
                  onClick={() => setMobileOpen(false)}
                  small
                />
                <MobileLink
                  to="/plataforma/portal"
                  label="Portal do Estudante"
                  onClick={() => setMobileOpen(false)}
                  small
                />
              </div>
            )}
            {navLinks.slice(2).map((l) => (
              <MobileLink key={l.to} {...l} onClick={() => setMobileOpen(false)} />
            ))}
            <div className="py-4">
              <ILink to="/admissoes" variant="primary" size="md" className="w-full">
                Inscrever-se
              </ILink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function NavItem({ label, to }: { label: string; to: string }) {
  return (
    <Link
      to={to}
      className="relative font-ui font-semibold text-[15px] text-foreground hover:text-primary transition-colors group"
      activeProps={{ className: "text-primary" }}
      activeOptions={{ exact: to === "/" }}
    >
      {label}
      <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
    </Link>
  );
}

function MobileLink({
  to,
  label,
  onClick,
  small,
}: {
  to: string;
  label: string;
  onClick: () => void;
  small?: boolean;
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={cn(
        "block py-3 font-ui font-semibold text-foreground border-b border-border last:border-0",
        small && "text-sm py-2 pl-2 text-muted-foreground",
      )}
      activeProps={{ className: "text-primary" }}
      activeOptions={{ exact: to === "/" }}
    >
      {label}
    </Link>
  );
}

function DropdownItem({
  to,
  icon,
  title,
  subtitle,
}: {
  to: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <Link
      to={to}
      className="flex items-start gap-3 p-3 rounded-md hover:bg-secondary transition-colors"
    >
      <div className="shrink-0 mt-0.5">{icon}</div>
      <div>
        <div className="font-ui font-semibold text-sm text-foreground">{title}</div>
        <div className="text-xs text-muted-foreground">{subtitle}</div>
      </div>
    </Link>
  );
}
