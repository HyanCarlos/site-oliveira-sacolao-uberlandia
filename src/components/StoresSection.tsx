import { useMemo, useState } from "react";
import {
  Clock,
  ExternalLink,
  MapPin,
  Navigation,
  Phone,
  Search,
  Star,
} from "lucide-react";
import { STORES, type StoreUnit } from "../data/stores";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

const NEIGHBORHOODS: Array<"Todos" | StoreUnit["neighborhood"]> = [
  "Todos",
  "Laranjeiras",
  "São Jorge",
];

export function StoresSection() {
  const [search, setSearch] = useState("");
  const [neighborhoodFilter, setNeighborhoodFilter] = useState<
    "Todos" | StoreUnit["neighborhood"]
  >("Todos");
  const [activeStoreId, setActiveStoreId] = useState<string>(STORES[0].id);

  const filteredStores = useMemo(() => {
    return STORES.filter((store) => {
      const matchesNeighborhood =
        neighborhoodFilter === "Todos" ||
        store.neighborhood === neighborhoodFilter;
      const q = search.trim().toLowerCase();
      const matchesQuery =
        !q ||
        store.name.toLowerCase().includes(q) ||
        store.neighborhood.toLowerCase().includes(q) ||
        store.address.toLowerCase().includes(q);
      return matchesNeighborhood && matchesQuery;
    });
  }, [neighborhoodFilter, search]);

  const activeStore =
    STORES.find((s) => s.id === activeStoreId) ?? filteredStores[0] ?? STORES[0];

  const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    activeStore.embedQuery
  )}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="lojas" className="bg-[#FAF7F0] py-16 sm:py-20">
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-3xl space-y-3">
          <Badge variant="green">
            <MapPin className="h-3.5 w-3.5" />
            Unidades em Uberlândia/MG
          </Badge>
          <h2 className="font-['Sora'] text-3xl font-extrabold text-[#0C1B12] sm:text-4xl">
            Nossas Lojas no Laranjeiras e no São Jorge
          </h2>
          <p className="text-base text-zinc-600">
            Confira os endereços completos, horários de funcionamento, telefones
            para ligação direta e rotas no Google Maps.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-sm">
            <Search
              className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-zinc-400"
              aria-hidden="true"
            />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar rua, avenida ou bairro..."
              aria-label="Buscar unidade por endereço ou bairro"
              className="h-11 w-full rounded-xl border border-zinc-300 bg-white pr-4 pl-10 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-[#0E6B38] focus:outline-none focus:ring-2 focus:ring-[#0E6B38]/20"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {NEIGHBORHOODS.map((nb) => {
              const active = neighborhoodFilter === nb;
              return (
                <button
                  key={nb}
                  type="button"
                  onClick={() => setNeighborhoodFilter(nb)}
                  className={`rounded-full px-4 py-2 text-xs font-bold transition cursor-pointer ${
                    active
                      ? "bg-[#0E6B38] text-white shadow-sm"
                      : "border border-zinc-300 bg-white text-zinc-700 hover:border-[#0E6B38]/40"
                  }`}
                >
                  {nb === "Todos" ? "Todas as unidades" : `Bairro ${nb}`}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-6">
            {filteredStores.length === 0 ? (
              <div className="rounded-3xl border border-zinc-200 bg-white p-8 text-center text-sm text-zinc-600">
                Nenhuma unidade encontrada para sua busca.
              </div>
            ) : (
              filteredStores.map((store) => {
                const isSelected = activeStore.id === store.id;
                return (
                  <Card
                    key={store.id}
                    className={`p-5 transition-all cursor-pointer ${
                      isSelected
                        ? "border-[#0E6B38] bg-white ring-2 ring-[#0E6B38]/15 shadow-lg"
                        : "border-zinc-200 bg-white hover:border-emerald-300"
                    }`}
                    onClick={() => setActiveStoreId(store.id)}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-['Sora'] text-lg font-extrabold text-[#0C1B12]">
                            {store.name}
                          </h3>
                          {store.badge && (
                            <span
                              className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold ${
                                store.id === "laranjeiras-acougue"
                                  ? "bg-[#B91C1C]/10 text-[#B91C1C]"
                                  : "bg-[#0E6B38]/10 text-[#0E6B38]"
                              }`}
                            >
                              {store.badge}
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-sm font-medium text-zinc-700">
                          {store.address}
                        </p>
                        <p className="text-xs text-zinc-500">CEP {store.cep} · Uberlândia/MG</p>
                      </div>
                    </div>

                    <div className="mt-4 grid gap-2 text-xs text-zinc-600 sm:grid-cols-2">
                      <div className="flex items-start gap-2">
                        <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0E6B38]" aria-hidden="true" />
                        <div>
                          <p>{store.hoursWeekday}</p>
                          <p>{store.hoursSunday}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Star className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-500" aria-hidden="true" />
                        <span>{store.googleRating}</span>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-zinc-100 pt-3">
                      <div className="text-xs">
                        <a
                          href={store.phoneHref}
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 font-extrabold text-[#0E6B38] hover:underline"
                        >
                          <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                          {store.phoneDisplay}
                        </a>
                        {store.phoneNote && (
                          <span className="ml-2 text-zinc-500">({store.phoneNote})</span>
                        )}
                      </div>

                      <a
                        href={store.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-[#0C1B12] px-3 py-1.5 text-xs font-bold text-white hover:bg-emerald-950 transition"
                      >
                        <Navigation className="h-3.5 w-3.5 text-[#FACC15]" aria-hidden="true" />
                        Como chegar
                      </a>
                    </div>
                  </Card>
                );
              })
            )}
          </div>

          <div className="lg:col-span-6">
            <div className="sticky top-24 rounded-3xl border border-zinc-200 bg-white p-4 shadow-sm">
              <div className="mb-3 flex items-start justify-between gap-3">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#0E6B38]">
                    Mapa da unidade selecionada
                  </p>
                  <h3 className="font-['Sora'] text-lg font-extrabold text-[#0C1B12]">
                    {activeStore.name}
                  </h3>
                  <p className="text-xs text-zinc-600">{activeStore.address}</p>
                </div>
                <a
                  href={activeStore.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Abrir ${activeStore.name} no Google Maps`}
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-[#0E6B38] hover:bg-emerald-100"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 aspect-[4/3]">
                <iframe
                  title={`Mapa de localização: ${activeStore.name}`}
                  src={embedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0"
                />
              </div>

              <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-600">
                <a
                  href={activeStore.phoneHref}
                  className="inline-flex items-center gap-1.5 font-bold text-[#0C1B12] hover:text-[#0E6B38]"
                >
                  <Phone className="h-3.5 w-3.5 text-[#0E6B38]" aria-hidden="true" />
                  Ligar: {activeStore.phoneDisplay}
                </a>
                <a
                  href={activeStore.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-bold text-[#0E6B38] hover:underline"
                >
                  Abrir rotas no Google Maps
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
