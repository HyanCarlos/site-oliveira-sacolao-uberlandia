import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Beef, Leaf, MapPin, ShoppingBag, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import type { CatalogCategoryId } from "../data/catalog";

interface HeroSectionProps {
  onSelectDepartment: (dept: CatalogCategoryId) => void;
}

const HERO_DEPARTMENTS: Array<{
  id: CatalogCategoryId;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  accent: "red" | "green" | "gold";
}> = [
  {
    id: "acougue",
    title: "Casa de Carnes",
    subtitle: "Cortes bovinos, suínos e aves na hora",
    image: "/images/categorias/acougue.webp",
    alt: "Balcão de açougue com cortes frescos",
    accent: "red",
  },
  {
    id: "hortifruti",
    title: "Sacolão & Hortifrúti",
    subtitle: "Frutas, verduras e legumes selecionados",
    image: "/images/categorias/hortifruti.webp",
    alt: "Banca farta de frutas e legumes",
    accent: "green",
  },
  {
    id: "mercearia",
    title: "Mercearia & Bebidas",
    subtitle: "Itens essenciais da despensa no bairro",
    image: "/images/categorias/mercearia.webp",
    alt: "Corredor de mercearia abastecido",
    accent: "gold",
  },
];

export function HeroSection({ onSelectDepartment }: HeroSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative isolate w-full overflow-hidden bg-[#0C1B12]"
    >
      <img
        src="/images/hero-hortifruti.webp"
        alt="Banca farta de verduras, legumes e frutas frescas do Sacolão e Casa de Carnes Oliveira"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#091810]/94 via-[#091810]/72 to-[#091810]/30"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-black/65 via-transparent to-[#091810]/90"
      />

      <div className="relative z-10 flex min-h-[100svh] w-full flex-col justify-between px-5 pb-8 pt-32 sm:px-8 sm:pb-10 sm:pt-36 lg:px-12 lg:pb-12 lg:pt-32 xl:px-16">
        <div className="hidden lg:block" aria-hidden="true" />

        <div className="grid items-end gap-8 lg:grid-cols-12">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-5"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#FACC15]/50 bg-[#0E6B38]/95 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-white shadow-md shadow-black/25">
                <Sparkles className="h-3.5 w-3.5 text-[#FACC15]" aria-hidden="true" />
                Laranjeiras &amp; São Jorge · Uberlândia/MG
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-[#B91C1C]/90 px-3 py-1 text-xs font-bold text-white shadow-md">
                <Beef className="h-3.5 w-3.5 text-[#FACC15]" aria-hidden="true" />
                Açougue &amp; Sacolão
              </span>
            </div>

            <h1 className="font-['Sora'] text-4xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[3.85rem]">
              Frescor no sacolão.
              <span className="mt-2 block text-3xl text-[#FACC15] sm:text-4xl lg:text-5xl">
                <span className="relative inline-block">
                  Confiança na casa de carnes!
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1.5 left-0 h-1.5 w-full rounded-full bg-[#B91C1C]"
                  />
                </span>
              </span>
            </h1>

            <p className="max-w-xl text-base font-medium leading-relaxed text-emerald-50/95 sm:text-lg">
              Frutas, verduras, legumes e cortes frescos preparados no balcão,
              com atendimento de família pertinho da sua casa em Uberlândia.
            </p>

            <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
              <Button
                size="lg"
                variant="primary"
                onClick={() => scrollTo("#lojas")}
                className="shadow-xl shadow-black/35 ring-1 ring-white/20"
              >
                <MapPin className="h-5 w-5 text-[#FACC15]" />
                Ver unidades e telefones
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="gold"
                onClick={() => scrollTo("#ofertas")}
                className="shadow-xl shadow-black/30"
              >
                <ShoppingBag className="h-5 w-5" />
                Explorar catálogo e sacola
              </Button>
            </div>
          </motion.div>

          {/* Card editorial com a foto real da fachada do Oliveira no Laranjeiras */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: shouldReduceMotion ? 0 : 0.1 }}
            className="hidden lg:col-span-5 lg:flex lg:justify-end"
          >
            <div className="w-full max-w-sm overflow-hidden rounded-3xl border border-white/25 bg-[#091810]/82 text-white backdrop-blur-md shadow-2xl">
              <div className="relative h-40 w-full overflow-hidden">
                <img
                  src="/images/oliveira-fachada-laranjeiras.jpg"
                  alt="Fachada do Oliveira Sacolão e Casa de Carnes no bairro Laranjeiras em Uberlândia"
                  className="h-full w-full object-cover"
                />
                <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-[#0E6B38] px-2.5 py-1 text-[11px] font-extrabold text-white shadow">
                  <Leaf className="h-3 w-3 text-[#FACC15]" />
                  Unidade Laranjeiras
                </span>
              </div>
              <div className="p-5">
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#FACC15]">
                  Sacolão e Casa de Carnes Oliveira
                </p>
                <p className="mt-1 font-['Sora'] text-base font-extrabold leading-snug">
                  Av. dos Titos / R. Aurora Nogueira e Av. Seme Simão
                </p>
                <p className="mt-1.5 text-xs text-emerald-100/80">
                  Aberto cedo todos os dias para garantir frutas frescas, carnes
                  selecionadas e itens essenciais do bairro.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Cápsulas interativas dos 3 pilares */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.14 }}
          className="mt-8 grid w-full grid-cols-1 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:mt-10"
        >
          {HERO_DEPARTMENTS.map((dept) => (
            <button
              key={dept.id}
              type="button"
              onClick={() => {
                onSelectDepartment(dept.id);
                scrollTo("#ofertas");
              }}
              className="glass-capsule group flex items-center gap-3.5 rounded-2xl border border-white/25 bg-[#091810]/65 p-2.5 pr-4 text-left shadow-lg shadow-black/25 backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 hover:border-[#FACC15]/80 hover:bg-[#091810]/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FACC15] motion-reduce:transform-none motion-reduce:transition-none cursor-pointer"
            >
              <img
                src={dept.image}
                alt={dept.alt}
                className="h-12 w-16 shrink-0 rounded-xl object-cover border border-white/15 sm:h-14 sm:w-20"
              />
              <div className="min-w-0 flex-1">
                <span className="block font-['Sora'] text-sm font-extrabold text-white group-hover:text-[#FACC15] transition-colors">
                  {dept.title}
                </span>
                <span className="block truncate text-xs text-emerald-100/85">
                  {dept.subtitle}
                </span>
              </div>
              <ArrowRight
                className="h-4 w-4 shrink-0 text-[#FACC15] transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
