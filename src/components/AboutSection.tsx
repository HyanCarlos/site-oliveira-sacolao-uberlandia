import { motion } from "framer-motion";
import { Beef, Clock, ExternalLink, Leaf } from "lucide-react";

export function AboutSection() {
  return (
    <section id="sobre" className="relative w-full overflow-hidden bg-[#0C1B12] text-white">
      <div className="grid w-full lg:grid-cols-2">
        <div className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-[460px]">
          <img
            src="/images/oliveira-fachada-laranjeiras.jpg"
            alt="Fachada do Oliveira Sacolão e Casa de Carnes no bairro Laranjeiras, Uberlândia/MG"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#0C1B12] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0C1B12]"
          />
        </div>

        <div className="flex flex-col justify-center px-5 py-12 sm:px-8 sm:py-16 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className="max-w-xl space-y-5"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#FACC15]/40 bg-[#FACC15]/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#FACC15]">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              Desde 2019 em Uberlândia
            </span>

            <h2 className="font-['Sora'] text-3xl font-extrabold tracking-tight sm:text-4xl">
              Sobre o Sacolão e Casa de Carnes Oliveira
            </h2>

            <p className="text-base leading-relaxed text-emerald-50/85 sm:text-lg">
              Com raízes no bairro Laranjeiras e presença também no São Jorge,
              unimos a praticidade do sacolão com o cuidado do açougue de
              bairro — sempre com produtos selecionados para a sua família.
            </p>

            <ul className="grid gap-3 sm:grid-cols-2">
              <li className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <Leaf className="mt-0.5 h-5 w-5 shrink-0 text-[#FACC15]" aria-hidden="true" />
                <span>
                  <span className="block font-['Sora'] text-sm font-bold text-white">
                    Hortifrúti na porta
                  </span>
                  <span className="text-xs text-emerald-100/70">
                    Frutas, verduras e ofertas repostas cedo
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <Beef className="mt-0.5 h-5 w-5 shrink-0 text-[#EF4444]" aria-hidden="true" />
                <span>
                  <span className="block font-['Sora'] text-sm font-bold text-white">
                    Casa de Carnes
                  </span>
                  <span className="text-xs text-emerald-100/70">
                    Cortes frescos preparados sob medida
                  </span>
                </span>
              </li>
            </ul>

            <div className="pt-1">
              <a
                href="https://www.instagram.com/ccs_oliveira/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[#FACC15]/40 bg-[#0E6B38] px-4 py-2.5 text-xs font-extrabold text-white transition hover:bg-[#094A26]"
              >
                Acompanhar ofertas no Instagram @ccs_oliveira
                <ExternalLink className="h-3.5 w-3.5 text-[#FACC15]" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
