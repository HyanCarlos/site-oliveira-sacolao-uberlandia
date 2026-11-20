import { ExternalLink, MapPin, Phone } from "lucide-react";
import { OliveiraLogo } from "./OliveiraLogo";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#091810] text-emerald-100/80 border-t border-white/10">
      <div className="w-full px-5 py-12 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5 space-y-4">
            <OliveiraLogo variant="dark" />
            <p className="max-w-sm text-sm leading-relaxed text-emerald-100/75">
              Sacolão e Casa de Carnes Oliveira — Hortifrúti selecionado, cortes
              frescos de açougue e mercearia de bairro em Uberlândia/MG.
            </p>
            <span className="inline-flex items-center rounded-full border border-[#FACC15]/35 bg-[#0E6B38]/60 px-3 py-1 text-xs font-semibold text-[#FACC15]">
              Modelo de demonstração — HRP Múltipla
            </span>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h3 className="font-['Sora'] text-sm font-bold uppercase tracking-wider text-white">
              Navegação
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#destaques" className="hover:text-[#FACC15] transition">
                  Açougue &amp; Sacolão
                </a>
              </li>
              <li>
                <a href="#departamentos" className="hover:text-[#FACC15] transition">
                  Departamentos
                </a>
              </li>
              <li>
                <a href="#ofertas" className="hover:text-[#FACC15] transition">
                  Catálogo &amp; Sacola
                </a>
              </li>
              <li>
                <a href="#encartes" className="hover:text-[#FACC15] transition">
                  Encarte Semanal
                </a>
              </li>
              <li>
                <a href="#lojas" className="hover:text-[#FACC15] transition">
                  Unidades e Horários
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-[#FACC15] transition">
                  Sobre o Oliveira
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h3 className="font-['Sora'] text-sm font-bold uppercase tracking-wider text-white">
              Unidades e Contato
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://www.instagram.com/ccs_oliveira/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition"
                >
                  <InstagramIcon className="h-4 w-4 text-[#FACC15]" />
                  <span>Instagram @ccs_oliveira</span>
                  <ExternalLink className="h-3 w-3 opacity-60" aria-hidden="true" />
                </a>
              </li>
              <li className="flex items-start gap-2 text-xs text-emerald-100/75 pt-1">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#FACC15]" aria-hidden="true" />
                <span>
                  Laranjeiras: Av. dos Titos, 78 / R. Aurora Nogueira, 579 · Tel.{" "}
                  <a href="tel:+5534991732874" className="text-white hover:underline">
                    (34) 99173-2874
                  </a>{" "}
                  /{" "}
                  <a href="tel:+553432326504" className="text-white hover:underline">
                    (34) 3232-6504
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2 text-xs text-emerald-100/75">
                <Phone className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#FACC15]" aria-hidden="true" />
                <span>
                  São Jorge: Av. Seme Simão, 35 · Tel.{" "}
                  <a href="tel:+5534991281347" className="text-white hover:underline">
                    (34) 99128-1347
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-emerald-100/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            EMPÓRIO SALES OLIVEIRA LTDA · CNPJ 34.215.290/0001-02 · Uberlândia/MG
          </p>
          <p>Proposta comercial demonstrativa desenvolvida por HRP Múltipla</p>
        </div>
      </div>
    </footer>
  );
}
