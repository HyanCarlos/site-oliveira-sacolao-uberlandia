import { motion } from "framer-motion";
import { ArrowRight, Beef, CheckCircle2, Leaf, MapPin } from "lucide-react";
import type { CatalogCategoryId } from "../data/catalog";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface ButcherProduceShowcaseProps {
  onSelectDepartment: (dept: CatalogCategoryId) => void;
}

export function ButcherProduceShowcase({
  onSelectDepartment,
}: ButcherProduceShowcaseProps) {
  const goToCatalog = (dept: CatalogCategoryId) => {
    onSelectDepartment(dept);
    document.querySelector("#ofertas")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="destaques"
      className="w-full bg-[#FAF7F0] py-16 sm:py-20 border-b border-emerald-950/10"
    >
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-2xl space-y-3">
          <Badge variant="green">
            <Leaf className="h-3.5 w-3.5" />
            O forte da casa no Laranjeiras e no São Jorge
          </Badge>
          <h2 className="font-['Sora'] text-3xl font-extrabold text-[#0C1B12] sm:text-4xl">
            Duas paixões em um só lugar: Casa de Carnes &amp; Sacolão
          </h2>
          <p className="text-base text-zinc-600">
            Atendimento próximo no balcão do açougue e bancas sempre abastecidas
            para a feira do dia a dia da sua família.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* Card 1: Casa de Carnes (Açougue) */}
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35 }}
            className="flex flex-col overflow-hidden rounded-3xl border border-red-900/15 bg-white shadow-sm transition-shadow hover:shadow-xl"
          >
            <div className="relative h-60 w-full overflow-hidden bg-zinc-900">
              <img
                src="/images/categorias/acougue.webp"
                alt="Balcão de açougue da Casa de Carnes Oliveira"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"
              />
              <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-[#B91C1C] px-3 py-1 text-xs font-extrabold text-white shadow">
                <Beef className="h-3.5 w-3.5 text-[#FACC15]" />
                Casa de Carnes Oliveira
              </span>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="font-['Sora'] text-2xl font-extrabold">
                  Cortes frescos e preparados na hora
                </h3>
                <p className="mt-1 text-xs text-zinc-200 flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-[#FACC15]" />
                  R. Aurora Nogueira, 579 (Laranjeiras) &amp; Av. Seme Simão, 35 (São Jorge)
                </p>
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-between p-6 space-y-5">
              <ul className="space-y-2.5 text-sm text-zinc-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#B91C1C]" />
                  <span>
                    Bovinos, suínos, frangos e linguiças para o almoço da semana ou o churrasco de domingo.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#B91C1C]" />
                  <span>
                    Moagem e porcionamento no balcão do jeito que você pedir.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#B91C1C]" />
                  <span>
                    Atendimento também aos domingos pela manhã nas unidades dos dois bairros.
                  </span>
                </li>
              </ul>

              <Button
                variant="butcher"
                size="md"
                onClick={() => goToCatalog("acougue")}
                className="w-full sm:w-auto self-start"
              >
                Ver cortes no catálogo
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.article>

          {/* Card 2: Sacolão & Hortifrúti */}
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: 0.08 }}
            className="flex flex-col overflow-hidden rounded-3xl border border-emerald-900/15 bg-white shadow-sm transition-shadow hover:shadow-xl"
          >
            <div className="relative h-60 w-full overflow-hidden bg-zinc-900">
              <img
                src="/images/categorias/hortifruti.webp"
                alt="Bancas de hortifrúti do Sacolão Oliveira"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#091810]/85 via-[#091810]/25 to-transparent"
              />
              <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-[#0E6B38] px-3 py-1 text-xs font-extrabold text-white shadow">
                <Leaf className="h-3.5 w-3.5 text-[#FACC15]" />
                Sacolão &amp; Hortifrúti
              </span>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="font-['Sora'] text-2xl font-extrabold">
                  Frutas, verduras e legumes todos os dias
                </h3>
                <p className="mt-1 text-xs text-emerald-100 flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-[#FACC15]" />
                  Aberto a partir das 06h no Laranjeiras e 06h30 no São Jorge
                </p>
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-between p-6 space-y-5">
              <ul className="space-y-2.5 text-sm text-zinc-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0E6B38]" />
                  <span>
                    Bancas repostas com frutas da estação, raízes, folhosos e temperos frescos.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0E6B38]" />
                  <span>
                    Ofertas destacadas na porta da loja e prontas para divulgação no encarte digital.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0E6B38]" />
                  <span>
                    Complemento completo com padaria, mercearia, bebidas e limpeza em um só lugar.
                  </span>
                </li>
              </ul>

              <Button
                variant="primary"
                size="md"
                onClick={() => goToCatalog("hortifruti")}
                className="w-full sm:w-auto self-start"
              >
                Ver itens de hortifrúti
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
