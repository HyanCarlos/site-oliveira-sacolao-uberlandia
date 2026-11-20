export interface StoreUnit {
  id: string;
  name: string;
  neighborhood: "Laranjeiras" | "São Jorge";
  badge?: string;
  address: string;
  cep: string;
  phoneDisplay: string;
  phoneHref: string;
  phoneNote?: string;
  hoursWeekday: string;
  hoursSunday: string;
  googleRating: string;
  mapsUrl: string;
  embedQuery: string;
}

export const STORES: StoreUnit[] = [
  {
    id: "laranjeiras-sacolao",
    name: "Unidade Laranjeiras — Sacolão & Mercado",
    neighborhood: "Laranjeiras",
    badge: "Matriz · Laranjeiras",
    address: "Av. dos Titos, 78 (esq. R. Aurora Nogueira) — Laranjeiras",
    cep: "38410-524",
    phoneDisplay: "(34) 99173-2874",
    phoneHref: "tel:+5534991732874",
    phoneNote: "Também (34) 99216-6674",
    hoursWeekday: "Seg. a Sáb.: 06h às 21h",
    hoursSunday: "Dom.: 06h às 14h",
    googleRating: "4,7 no Google (11 avaliações)",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Sacolao+e+Casa+de+Carnes+Oliveira+Av+dos+Tito+78+Laranjeiras+Uberlandia+MG",
    embedQuery: "Av. dos Titos, 78, Laranjeiras, Uberlândia - MG",
  },
  {
    id: "laranjeiras-acougue",
    name: "Unidade Laranjeiras — Casa de Carnes",
    neighborhood: "Laranjeiras",
    badge: "Açougue · Esquina",
    address: "R. Aurora Nogueira, 579 (esq. Av. dos Titos) — Laranjeiras",
    cep: "38410-224",
    phoneDisplay: "(34) 3232-6504",
    phoneHref: "tel:+553432326504",
    phoneNote: "Balcão de carnes na esquina da Av. dos Titos",
    hoursWeekday: "Seg. a Sex.: 07h30 às 20h15 · Sáb.: 07h30 às 13h",
    hoursSunday: "Dom.: 07h às 13h",
    googleRating: "4,8 no Google Maps",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Oliveira+Sacolao+e+Casa+de+Carnes+Rua+Aurora+Nogueira+579+Laranjeiras+Uberlandia+MG",
    embedQuery: "Rua Aurora Nogueira, 579, Laranjeiras, Uberlândia - MG",
  },
  {
    id: "sao-jorge",
    name: "Unidade São Jorge — Sacolão & Casa de Carnes",
    neighborhood: "São Jorge",
    badge: "São Jorge",
    address: "Av. Seme Simão, 35 (próx. R. Paulo Maia, 17) — São Jorge",
    cep: "38410-179",
    phoneDisplay: "(34) 99128-1347",
    phoneHref: "tel:+5534991281347",
    phoneNote: "Também (34) 99841-6495",
    hoursWeekday: "Seg. a Sáb.: 06h30 às 20h",
    hoursSunday: "Dom.: 06h40 às 14h",
    googleRating: "4,4 no Google (97 avaliações)",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Sacolao+e+Casa+de+Carnes+Oliveira+Av+Seme+Simao+35+Sao+Jorge+Uberlandia+MG",
    embedQuery: "Av. Seme Simão, 35, São Jorge, Uberlândia - MG",
  },
];
