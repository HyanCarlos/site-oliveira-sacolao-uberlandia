import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle2,
  Info,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  X,
} from "lucide-react";
import { formatBRL, useBag } from "../context/BagContext";
import { Button } from "./ui/button";

export function BagDrawer() {
  const {
    items,
    totalItems,
    subtotal,
    isDrawerOpen,
    closeDrawer,
    setQuantity,
    removeItem,
    clearBag,
  } = useBag();

  const [demoSubmitted, setDemoSubmitted] = useState(false);

  useEffect(() => {
    if (!isDrawerOpen) {
      setDemoSubmitted(false);
      return;
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDrawer();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isDrawerOpen, closeDrawer]);

  const handleGoToCatalog = () => {
    closeDrawer();
    document.querySelector("#ofertas")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <div
          className="fixed inset-0 z-[70] flex justify-end"
          role="dialog"
          aria-modal="true"
          aria-label="Sacola de compras demonstrativa"
          data-testid="bag-drawer"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeDrawer}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            aria-hidden="true"
          />

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            className="relative z-10 flex h-full w-full max-w-md flex-col bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-zinc-200 px-5 py-4">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#0E6B38] text-white">
                  <ShoppingBag className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="font-['Sora'] text-base font-extrabold text-[#0C1B12]">
                    Sua Sacola
                  </h2>
                  <p className="text-xs text-zinc-500">
                    {totalItems} {totalItems === 1 ? "item" : "itens"} · modelo
                    demonstrativo
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {items.length > 0 && !demoSubmitted && (
                  <button
                    type="button"
                    onClick={clearBag}
                    className="rounded-lg px-2.5 py-1.5 text-xs font-semibold text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 cursor-pointer"
                  >
                    Limpar
                  </button>
                )}
                <button
                  type="button"
                  onClick={closeDrawer}
                  aria-label="Fechar sacola"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 text-zinc-700 hover:bg-zinc-100 cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-4" data-lenis-prevent>
              {demoSubmitted ? (
                <div className="flex h-full flex-col items-center justify-center text-center px-3 py-8">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-[#0E6B38]">
                    <CheckCircle2 className="h-8 w-8" />
                  </span>
                  <h3 className="mt-4 font-['Sora'] text-xl font-extrabold text-[#0C1B12]">
                    Simulação concluída!
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                    Este é um modelo de demonstração da{" "}
                    <strong>HRP Múltipla</strong> para o Sacolão e Casa de Carnes
                    Oliveira. Nenhum pedido real foi enviado e os preços são
                    ilustrativos.
                  </p>
                  <div className="mt-6 flex flex-col gap-2 w-full">
                    <Button
                      variant="primary"
                      onClick={() => {
                        clearBag();
                        setDemoSubmitted(false);
                        closeDrawer();
                      }}
                    >
                      Limpar e voltar à página
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setDemoSubmitted(false)}
                    >
                      Voltar para a sacola
                    </Button>
                  </div>
                </div>
              ) : items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center px-4 py-10">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-[#0E6B38]">
                    <ShoppingBag className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-['Sora'] text-lg font-extrabold text-[#0C1B12]">
                    Sua sacola está vazia
                  </h3>
                  <p className="mt-1.5 text-sm text-zinc-500">
                    Escolha cortes do açougue ou itens do sacolão no catálogo para
                    testar a montagem do pedido.
                  </p>
                  <Button
                    variant="primary"
                    className="mt-5"
                    onClick={handleGoToCatalog}
                  >
                    Ir para o catálogo
                  </Button>
                </div>
              ) : (
                <ul className="space-y-3">
                  {items.map(({ product, quantity }) => (
                    <li
                      key={product.id}
                      className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white p-3"
                    >
                      <img
                        src={product.image}
                        alt={product.imageAlt}
                        className="h-16 w-16 shrink-0 rounded-xl object-cover bg-zinc-100"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-['Sora'] text-sm font-bold text-[#0C1B12]">
                          {product.name}
                        </p>
                        <p className="text-xs text-zinc-500">
                          {formatBRL(product.illustrativePrice)} / {product.unit}
                        </p>
                        <div className="mt-2 flex items-center justify-between">
                          <div className="inline-flex items-center gap-1 rounded-lg border border-zinc-200 bg-zinc-50 p-0.5">
                            <button
                              type="button"
                              onClick={() => setQuantity(product.id, quantity - 1)}
                              aria-label={`Diminuir ${product.name}`}
                              className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-white text-zinc-700 hover:bg-zinc-100 cursor-pointer"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="min-w-6 text-center text-xs font-extrabold text-zinc-900">
                              {quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => setQuantity(product.id, quantity + 1)}
                              aria-label={`Aumentar ${product.name}`}
                              className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#0E6B38] text-white hover:bg-[#094A26] cursor-pointer"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="font-['Sora'] text-sm font-extrabold text-[#0C1B12]">
                              {formatBRL(product.illustrativePrice * quantity)}
                            </span>
                            <button
                              type="button"
                              onClick={() => removeItem(product.id)}
                              aria-label={`Remover ${product.name}`}
                              className="rounded-md p-1 text-zinc-400 hover:bg-red-50 hover:text-[#B91C1C] cursor-pointer"
                            >
                              <Trash2 className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && !demoSubmitted && (
              <div className="border-t border-zinc-200 bg-zinc-50 px-5 py-4 space-y-3">
                <div className="flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-[11px] text-amber-950">
                  <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-700" aria-hidden="true" />
                  <span>
                    Subtotal baseado em <strong>preços ilustrativos</strong> (modelo
                    de demonstração).
                  </span>
                </div>

                <div className="flex items-baseline justify-between">
                  <span className="text-sm font-semibold text-zinc-700">
                    Subtotal ilustrativo
                  </span>
                  <span
                    className="font-['Sora'] text-xl font-extrabold text-[#0E6B38]"
                    data-testid="bag-subtotal"
                  >
                    {formatBRL(subtotal)}
                  </span>
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  className="w-full"
                  onClick={() => setDemoSubmitted(true)}
                  data-testid="bag-checkout-demo-btn"
                >
                  Finalizar pedido (demonstração)
                </Button>
              </div>
            )}
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
