import { motion } from "framer-motion";
import { ArrowRight, Layers } from "lucide-react";
import { DEPARTMENTS, type CatalogCategoryId } from "../data/catalog";
import { Badge } from "./ui/badge";

interface DepartmentsSectionProps {
  onSelectDepartment: (dept: CatalogCategoryId) => void;
}

export function DepartmentsSection({
  onSelectDepartment,
}: DepartmentsSectionProps) {
  const goToDepartment = (id: CatalogCategoryId) => {
    onSelectDepartment(id);
    document.querySelector("#ofertas")?.scrollIntoView({ behavior: "smooth" });
  };

  const [acougue, hortifruti, padaria, mercearia, bebidas, higiene] = DEPARTMENTS;

  return (
    <section id="departamentos" className="w-full bg-white py-16 sm:py-20">
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-3">
            <Badge variant="green">
              <Layers className="h-3.5 w-3.5" />
              Setores da Loja
            </Badge>
            <h2 className="font-['Sora'] text-3xl font-extrabold text-[#0C1B12] sm:text-4xl">
              Do balcão de carnes à feira da semana
            </h2>
            <p className="text-base text-zinc-600">
              Escolha um setor para filtrar o catálogo demonstrativo e testar a
              sacola de compras por categoria.
            </p>
          </div>
          <span className="inline-flex self-start rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold text-[#0E6B38] md:self-auto">
            6 setores organizados para o bairro
          </span>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-12 lg:gap-5">
          {/* 1. Casa de Carnes (Açougue) - Card vertical de destaque */}
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35 }}
            onClick={() => goToDepartment(acougue.id)}
            className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-900 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:col-span-6 lg:col-span-5 lg:row-span-2 min-h-[280px] lg:min-h-[460px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B91C1C]"
          >
            <img
              src={acougue.coverImage}
              alt={acougue.coverAlt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/15"
            />
            <div className="relative z-10 flex h-full flex-col justify-between p-6">
              <span className="inline-flex self-start rounded-full bg-[#B91C1C] px-3 py-1 text-xs font-extrabold text-white shadow-xs">
                {acougue.accentTag}
              </span>
              <div className="space-y-2">
                <h3 className="font-['Sora'] text-2xl font-extrabold text-white sm:text-3xl">
                  {acougue.title}
                </h3>
                <p className="text-sm text-zinc-200 max-w-sm">
                  {acougue.shortDesc}
                </p>
                <span className="inline-flex items-center gap-1.5 pt-1 text-xs font-extrabold uppercase tracking-wider text-[#FACC15]">
                  Explorar cortes
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </motion.button>

          {/* 2. Sacolão & Hortifrúti - Card largo */}
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: 0.05 }}
            onClick={() => goToDepartment(hortifruti.id)}
            className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-900 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:col-span-6 lg:col-span-7 min-h-[220px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E6B38]"
          >
            <img
              src={hortifruti.coverImage}
              alt={hortifruti.coverAlt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-r from-[#091810]/92 via-[#091810]/60 to-[#091810]/20"
            />
            <div className="relative z-10 flex h-full flex-col justify-between p-6">
              <span className="inline-flex self-start rounded-full bg-[#0E6B38] px-3 py-1 text-xs font-bold text-white border border-white/20">
                {hortifruti.accentTag}
              </span>
              <div className="max-w-md space-y-1.5">
                <h3 className="font-['Sora'] text-2xl font-extrabold text-white">
                  {hortifruti.title}
                </h3>
                <p className="text-sm text-emerald-50">{hortifruti.shortDesc}</p>
                <span className="inline-flex items-center gap-1.5 pt-1 text-xs font-extrabold uppercase tracking-wider text-[#FACC15]">
                  Ver frutas e verduras
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </motion.button>

          {/* 3. Padaria & Frios */}
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            onClick={() => goToDepartment(padaria.id)}
            className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-900 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:col-span-6 lg:col-span-4 min-h-[220px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E6B38]"
          >
            <img
              src={padaria.coverImage}
              alt={padaria.coverAlt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/15"
            />
            <div className="relative z-10 flex h-full flex-col justify-between p-6">
              <span className="inline-flex self-start rounded-full bg-[#FACC15] px-3 py-1 text-xs font-extrabold text-zinc-950">
                {padaria.accentTag}
              </span>
              <div className="space-y-1.5">
                <h3 className="font-['Sora'] text-xl font-extrabold text-white">
                  {padaria.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-200">
                  {padaria.shortDesc}
                </p>
                <span className="inline-flex items-center gap-1.5 pt-1 text-xs font-extrabold uppercase tracking-wider text-[#FACC15]">
                  Ver padaria
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </motion.button>

          {/* 4. Mercearia */}
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: 0.14 }}
            onClick={() => goToDepartment(mercearia.id)}
            className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-900 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:col-span-6 lg:col-span-3 min-h-[220px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E6B38]"
          >
            <img
              src={mercearia.coverImage}
              alt={mercearia.coverAlt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/15"
            />
            <div className="relative z-10 flex h-full flex-col justify-between p-6">
              <span className="inline-flex self-start rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white backdrop-blur-xs border border-white/20">
                {mercearia.accentTag}
              </span>
              <div className="space-y-1.5">
                <h3 className="font-['Sora'] text-xl font-extrabold text-white">
                  {mercearia.title}
                </h3>
                <p className="text-xs text-zinc-200">{mercearia.shortDesc}</p>
                <span className="inline-flex items-center gap-1.5 pt-1 text-xs font-extrabold uppercase tracking-wider text-[#FACC15]">
                  Ver itens
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </motion.button>

          {/* 5. Bebidas */}
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: 0.18 }}
            onClick={() => goToDepartment(bebidas.id)}
            className="group relative flex flex-col sm:flex-row overflow-hidden rounded-3xl border border-zinc-200 bg-[#0C1B12] text-left text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:col-span-6 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FACC15]"
          >
            <div className="relative h-40 w-full shrink-0 overflow-hidden sm:h-auto sm:w-52">
              <img
                src={bebidas.coverImage}
                alt={bebidas.coverAlt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
              <div>
                <span className="inline-block rounded-full bg-[#0E6B38] px-2.5 py-0.5 text-[11px] font-bold text-white">
                  {bebidas.accentTag}
                </span>
                <h3 className="mt-2 font-['Sora'] text-xl font-extrabold text-white">
                  {bebidas.title}
                </h3>
                <p className="mt-1 text-sm text-emerald-100/80">{bebidas.shortDesc}</p>
              </div>
              <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#FACC15]">
                Explorar bebidas
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </motion.button>

          {/* 6. Higiene e limpeza */}
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: 0.22 }}
            onClick={() => goToDepartment(higiene.id)}
            className="group relative flex flex-col sm:flex-row overflow-hidden rounded-3xl border border-emerald-900/15 bg-[#FAF7F0] text-left text-[#0C1B12] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0E6B38]/40 hover:shadow-xl md:col-span-6 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E6B38]"
          >
            <div className="relative h-40 w-full shrink-0 overflow-hidden sm:h-auto sm:w-52 bg-zinc-200">
              <img
                src={higiene.coverImage}
                alt={higiene.coverAlt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
              <div>
                <span className="inline-block rounded-full bg-[#FACC15]/35 px-2.5 py-0.5 text-[11px] font-extrabold text-amber-950">
                  {higiene.accentTag}
                </span>
                <h3 className="mt-2 font-['Sora'] text-xl font-extrabold text-[#0C1B12]">
                  {higiene.title}
                </h3>
                <p className="mt-1 text-sm text-zinc-600">{higiene.shortDesc}</p>
              </div>
              <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#0E6B38]">
                Ver itens de limpeza
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
