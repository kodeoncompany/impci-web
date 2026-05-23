import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Phone, MapPin, Shield } from "lucide-react";
import logo from "@/assets/logo-impci.png";

export function Footer() {
  return (
    <footer className="bg-[#111827] text-white">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Identidade */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="IMPCI" className="h-14 w-14 bg-white rounded-full p-1" />
              <div className="font-accent font-bold text-xl">IMPCI</div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-5">
              Formando os profissionais que Moçambique precisa.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-md bg-white/10 hover:bg-accent flex items-center justify-center transition-colors text-accent hover:text-white"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-md bg-white/10 hover:bg-accent flex items-center justify-center transition-colors text-accent hover:text-white"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Navegação */}
          <div>
            <FooterTitle>Navegação</FooterTitle>
            <ul className="space-y-3 text-sm text-white/75">
              <FooterLink to="/">Início</FooterLink>
              <FooterLink to="/qualificacoes">Qualificações</FooterLink>
              <FooterLink to="/admissoes">Admissões</FooterLink>
              <FooterLink to="/contacto">Contacto</FooterLink>
              <FooterLink to="/plataforma/biblioteca">Biblioteca Virtual</FooterLink>
              <FooterLink to="/plataforma/portal">Portal do Estudante</FooterLink>
            </ul>
          </div>

          {/* Contactos */}
          <div>
            <FooterTitle>Contactos</FooterTitle>
            <ul className="space-y-3 text-sm text-white/75">
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 text-accent shrink-0" />
                <a href="tel:+258877396100" className="hover:text-accent">
                  +258 87 739 6100
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 text-accent shrink-0" />
                <a href="tel:+258857496100" className="hover:text-accent">
                  +258 85 749 6100
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-accent shrink-0" />
                <span>
                  Bairro Francisco Manhanga, Chimoio
                  <br />
                  <span className="text-white/55 text-xs">
                    Localidade Urbana nº 4, depois do Mercado 38, Zona Subestação da EDM
                  </span>
                </span>
              </li>
            </ul>
          </div>

          {/* Institucional */}
          <div>
            <FooterTitle>Institucional</FooterTitle>
            <div className="flex items-center gap-3 p-3 rounded-md bg-white/5 border border-white/10 mb-4">
              <Shield size={28} className="text-success" />
              <div>
                <div className="text-sm font-semibold text-white">Certificado pela ANEP</div>
                <div className="text-xs text-white/60">
                  Autoridade Nacional de Educação Profissional
                </div>
              </div>
            </div>
            <span className="inline-block bg-accent text-white font-accent font-bold tracking-wider text-xs uppercase px-3 py-1.5 rounded">
              Ano Lectivo 2026
            </span>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-center text-xs text-white/50">
          © {new Date().getFullYear()} IMPCI — Instituto Médio Politécnico de Ciência e
          Inovação. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

function FooterTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-ui font-bold uppercase tracking-[0.12em] text-xs text-accent mb-5">
      {children}
    </h3>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li>
      <Link to={to} className="hover:text-accent transition-colors">
        {children}
      </Link>
    </li>
  );
}
