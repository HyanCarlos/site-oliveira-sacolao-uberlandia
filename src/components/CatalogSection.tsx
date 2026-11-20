import { useMemo, useState } from "react";
import {
  Info,
  Minus,
  Plus,
  Search,
  ShoppingBag,
  Tag,
  Trash2,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  CATALOG_PRODUCTS,
  DEPARTMENTS,
  type CatalogFilter,
} from "../data/catalog";
import { formatBRL, useBag } from "../context/BagContext";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

interface CatalogSectionProps {
  selectedCategory: CatalogFilter;
  onSelectCategory: (cat: CatalogFilter) => void;
}

export function CatalogSection({
  selectedCategory,
  onSelectCategory,
}: CatalogSectionProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [showAllInOverview, setShowAllInOverview] = useState(false);

  const { getQuantity, addItem, setQuantity, totalItems, subtotal, openDrawer } =
    useBag();

  const departmentMap = useMemo(
    () => new Map(DEPARTMENTS.map((d) => [d.id, d])),
    []
  );

  const filteredProducts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return CATALOG_PRODUCTS.filter((item) => {
      const catOk =
        selectedCategory === "todas" || item.category === selectedCategory;
      if (!catOk) return false;
      if (!q) return true;
      const catLabel = departmentMap.get(item.category)?.title.toLowerCase() ?? "";
      return (
        item.name.toLowerCase().includes(q) ||
        item.unit.toLowerCase().includes(q) ||
        catLabel.includes(q)
      );
    });
  }, [selectedCategory, searchQuery, departmentMap]);

  const visibleProducts = useMemo(() => {
    if (
      selectedCategory !== "todas" ||
      searchQuery.trim().length > 0 ||
      showAllInOverview
    ) {
      return filteredProducts;
    }
    const perCat = new Map<string, number>();
    return filteredProducts.filter((item) => {
      const count = perCat.get(item.category) ?? 0;
      if (count >= 2) return false;
      perCat.set(item.category, count + 1);
      return true;
    });
  }, [filteredProducts, selectedCategory, searchQuery, showAllInOverview]);

  const activeDepartment =
    selectedCategory === "todas" ? null : departmentMap.get(selectedCategory) ?? null;

  return (
    <section id="ofertas" className="w-full bg-[#FAF7F0] py-16 sm:py-20">
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <Badge variant="green">
              <Tag className="h-3.5 w-3.5" />
              Catálogo &amp; Sacola · Modelo de demonstração
            </Badge>
            <h2 className="font-['Sora'] text-3xl font-extrabold text-[#0C1B12] sm:text-4xl">
              Ofertas de campanha e sacola de compras
            </h2>
            <p className="text-base text-zinc-600">
              Estrutura comercial pronta para publicar os cortes do açougue e o
              hortifrúti da semana, com valores ilustrativos para teste da sacola.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative w-full sm:w-72">
              <Search
                className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-zinc-400"
                aria-hidden="true"
              />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar carne, fruta ou produto..."
                aria-label="Buscar produto no catálogo"
                className="h-11 w-full rounded-xl border border-zinc-300 bg-white pr-9 pl-10 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-[#0E6B38] focus:outline-none focus:ring-2 focus:ring-[#0E6B38]/20"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  aria-label="Limpar busca"
                  className="absolute top-1/2 right-2.5 -translate-y-1/2 rounded-md p-1 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700 cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            <button
              type="button"
              onClick={openDrawer}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#0C1B12] px-4 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-950 cursor-pointer"
            >
              <ShoppingBag className="h-4 w-4 text-[#FACC15]" aria-hidden="true" />
              <span>Ver sacola ({totalItems})</span>
              {totalItems > 0 && (
                <span className="rounded-md bg-white/15 px-2 py-0.5 text-xs font-extrabold text-[#FACC15]">
                  {formatBRL(subtotal)}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Aviso transparente de preços ilustrativos */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-amber-300/80 bg-amber-50 px-4 py-3 text-xs text-amber-950">
          <p className="flex items-start gap-2 leading-relaxed">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" aria-hidden="true" />
            <span>
              <strong>Preços ilustrativos (demonstração):</strong> os valores abaixo
              existem apenas para simular a experiência da sacola. Os preços reais do
              dia são divulgados na loja e no Instagram{" "}
              <a
                href="https://www.instagram.com/ccs_oliveira/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline underline-offset-2"
              >
                @ccs_oliveira
              </a>
              .
            </span>
          </p>
          <span className="rounded-full bg-amber-200/70 px-2.5 py-0.5 text-[11px] font-bold text-amber-950">
            Modelo de demonstração — HRP Múltipla
          </span>
        </div>

        {/* Filtros por departamento */}
        <div
          className="mt-6 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Filtrar catálogo por departamento"
        >
          <button
            type="button"
            role="tab"
            aria-selected={selectedCategory === "todas"}
            onClick={() => onSelectCategory("todas")}
            className={`rounded-full px-4 py-2 text-xs font-bold transition cursor-pointer ${
              selectedCategory === "todas"
                ? "bg-[#0E6B38] text-white shadow-sm"
                : "border border-zinc-300 bg-white text-zinc-700 hover:border-[#0E6B38]/40 hover:text-[#0E6B38]"
            }`}
          >
            Todos os setores
          </button>
          {DEPARTMENTS.map((dept) => {
            const active = selectedCategory === dept.id;
            return (
              <button
                key={dept.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => onSelectCategory(dept.id)}
                className={`rounded-full px-4 py-2 text-xs font-bold transition cursor-pointer ${
                  active
                    ? dept.id === "acougue"
                      ? "bg-[#B91C1C] text-white shadow-sm"
                      : "bg-[#0E6B38] text-white shadow-sm"
                    : "border border-zinc-300 bg-white text-zinc-700 hover:border-[#0E6B38]/40 hover:text-[#0E6B38]"
                }`}
              >
                {dept.tabLabel}
              </button>
            );
          })}
        </div>

        {activeDepartment && (
          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm">
            <div>
              <span className="font-['Sora'] font-extrabold text-[#0C1B12]">
                {activeDepartment.title}:
              </span>{" "}
              <span className="text-zinc-600">{activeDepartment.shortDesc}</span>
            </div>
            <button
              type="button"
              onClick={() => onSelectCategory("todas")}
              className="text-xs font-bold text-[#0E6B38] hover:underline cursor-pointer"
            >
              Ver todos os setores
            </button>
          </div>
        )}

        {visibleProducts.length === 0 ? (
          <div className="mt-8 rounded-3xl border border-zinc-200 bg-white p-10 text-center">
            <p className="font-['Sora'] text-lg font-bold text-zinc-900">
              Nenhum produto encontrado para &ldquo;{searchQuery}&rdquo;
            </p>
            <p className="mt-1 text-sm text-zinc-500">
              Limpe a busca ou troque de departamento para visualizar os itens.
            </p>
            <Button
              variant="outline"
              size="sm"
              className="mt-4"
              onClick={() => {
                setSearchQuery("");
                onSelectCategory("todas");
              }}
            >
              Mostrar todos os produtos
            </Button>
          </div>
        ) : (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visibleProducts.map((product) => {
              const qty = getQuantity(product.id);
              const dept = departmentMap.get(product.category);
              const isButcher = product.category === "acougue";

              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.25 }}
                >
                  <Card className="group flex h-full flex-col overflow-hidden border-zinc-200/90 bg-white shadow-xs transition hover:-translate-y-0.5 hover:shadow-lg">
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100">
                      <img
                        src={product.image}
                        alt={product.imageAlt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {product.badge && (
                        <span
                          className={`absolute top-3 left-3 rounded-full px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide shadow-xs ${
                            isButcher
                              ? "bg-[#B91C1C] text-white"
                              : "bg-[#FACC15] text-zinc-950"
                          }`}
                        >
                          {product.badge}
                        </span>
                      )}
                      {dept && (
                        <span className="absolute right-3 bottom-2.5 rounded-full bg-black/65 px-2.5 py-0.5 text-[10px] font-semibold text-white backdrop-blur-xs">
                          {dept.tabLabel}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-1 flex-col justify-between p-4">
                      <div>
                        <h3 className="font-['Sora'] text-base font-extrabold leading-snug text-[#0C1B12]">
                          {product.name}
                        </h3>
                        <p className="mt-0.5 text-xs font-medium text-zinc-500">
                          Unidade: {product.unit}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-zinc-100">
                        <div className="flex items-baseline justify-between gap-2">
                          <div>
                            <span className="block text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
                              Valor ilustrativo
                            </span>
                            <span
                              className={`font-['Sora'] text-xl font-extrabold ${
                                isButcher ? "text-[#B91C1C]" : "text-[#0E6B38]"
                              }`}
                            >
                              {formatBRL(product.illustrativePrice)}
                            </span>
                          </div>
                          <span className="text-xs font-semibold text-zinc-500">
                            / {product.unit}
                          </span>
                        </div>

                        <div className="mt-3">
                          {qty === 0 ? (
                            <Button
                              variant={isButcher ? "butcher" : "primary"}
                              size="sm"
                              className="w-full"
                              onClick={() => addItem(product)}
                              data-testid={`add-${product.id}`}
                            >
                              <Plus className="h-4 w-4" />
                              Adicionar à sacola
                            </Button>
                          ) : (
                            <div className="flex items-center justify-between rounded-xl border border-emerald-200 bg-emerald-50/70 p-1">
                              <button
                                type="button"
                                onClick={() => setQuantity(product.id, qty - 1)}
                                aria-label={
                                  qty === 1
                                    ? `Remover ${product.name} da sacola`
                                    : `Diminuir quantidade de ${product.name}`
                                }
                                data-testid={`dec-${product.id}`}
                                className="inline-flex h-8 w-9 items-center justify-center rounded-lg bg-white text-zinc-800 shadow-xs transition hover:bg-zinc-100 cursor-pointer"
                              >
                                {qty === 1 ? (
                                  <Trash2 className="h-3.5 w-3.5 text-[#B91C1C]" />
                                ) : (
                                  <Minus className="h-4 w-4" />
                                )}
                              </button>
                              <span
                                className="text-xs font-extrabold text-[#0C1B12]"
                                data-testid={`qty-value-${product.id}`}
                              >
                                {qty} na sacola
                              </span>
                              <button
                                type="button"
                                onClick={() => setQuantity(product.id, qty + 1)}
                                aria-label={`Aumentar quantidade de ${product.name}`}
                                data-testid={`inc-${product.id}`}
                                className="inline-flex h-8 w-9 items-center justify-center rounded-lg bg-[#0E6B38] text-white shadow-xs transition hover:bg-[#094A26] cursor-pointer"
                              >
                                <Plus className="h-4 w-4" />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        )}

        {selectedCategory === "todas" &&
          searchQuery.trim() === "" &&
          filteredProducts.length > visibleProducts.length && (
            <div className="mt-8 flex justify-center">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowAllInOverview(true)}
                className="bg-white border-[#0E6B38]/30 text-[#0E6B38] hover:bg-emerald-50"
              >
                Mostrar todos os {filteredProducts.length} produtos do catálogo
              </Button>
            </div>
          )}
      </div>
    </section>
  );
}
