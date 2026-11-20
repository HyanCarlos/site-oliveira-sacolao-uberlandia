export type CatalogCategoryId =
  | "acougue"
  | "hortifruti"
  | "padaria"
  | "mercearia"
  | "bebidas"
  | "higiene";

export type CatalogFilter = "todas" | CatalogCategoryId;

export interface DepartmentConfig {
  id: CatalogCategoryId;
  tabLabel: string;
  title: string;
  shortDesc: string;
  coverImage: string;
  coverAlt: string;
  accentTag: string;
}

export const DEPARTMENTS: DepartmentConfig[] = [
  {
    id: "acougue",
    tabLabel: "Casa de Carnes",
    title: "Casa de Carnes (Açougue)",
    shortDesc: "Cortes bovinos, suínos e aves selecionados e fatiados na hora no balcão.",
    coverImage: "/images/categorias/acougue.webp",
    coverAlt: "Balcão de açougue com cortes frescos e selecionados",
    accentTag: "Especialidade da casa",
  },
  {
    id: "hortifruti",
    tabLabel: "Sacolão & Hortifrúti",
    title: "Sacolão & Hortifrúti",
    shortDesc: "Frutas doces, legumes e folhosos frescos chegando cedo todos os dias.",
    coverImage: "/images/categorias/hortifruti.webp",
    coverAlt: "Banca farta de frutas, verduras e legumes frescos",
    accentTag: "Frescor diário",
  },
  {
    id: "padaria",
    tabLabel: "Padaria & Frios",
    title: "Padaria & Frios",
    shortDesc: "Pães, quitandas mineiras, queijos e frios fatiados para o café e lanche.",
    coverImage: "/images/categorias/padaria.webp",
    coverAlt: "Setor de padaria e frios",
    accentTag: "Café & Frios",
  },
  {
    id: "mercearia",
    tabLabel: "Mercearia",
    title: "Mercearia",
    shortDesc: "Arroz, feijão, óleo, massas, temperos e itens essenciais da despensa.",
    coverImage: "/images/categorias/mercearia.webp",
    coverAlt: "Corredor de mercearia abastecido",
    accentTag: "Despensa completa",
  },
  {
    id: "bebidas",
    tabLabel: "Bebidas",
    title: "Bebidas & Matinais",
    shortDesc: "Sucos, refrigerantes, cafés, lácteos e bebidas geladas para sua mesa.",
    coverImage: "/images/categorias/bebidas.webp",
    coverAlt: "Gôndola de bebidas e refrigerantes",
    accentTag: "Geladas & Café",
  },
  {
    id: "higiene",
    tabLabel: "Higiene e limpeza",
    title: "Higiene e limpeza",
    shortDesc: "Produtos práticos para a limpeza da casa e cuidado pessoal.",
    coverImage: "/images/categorias/higiene-limpeza.webp",
    coverAlt: "Produtos de limpeza e cuidados para casa",
    accentTag: "Casa cuidada",
  },
];

export interface CatalogProduct {
  id: string;
  category: CatalogCategoryId;
  name: string;
  unit: string;
  /** Preço puramente ilustrativo para demonstração da sacola */
  illustrativePrice: number;
  image: string;
  imageAlt: string;
  badge?: string;
}

export const CATALOG_PRODUCTS: CatalogProduct[] = [
  // Casa de Carnes (Açougue)
  {
    id: "alcatra-bovina",
    category: "acougue",
    name: "Alcatra Bovina em Bifes",
    unit: "kg",
    illustrativePrice: 39.9,
    image: "/images/produtos/alcatra-bovina.webp",
    imageAlt: "Corte bovino de alcatra",
    badge: "Açougue · Exemplo",
  },
  {
    id: "carne-moida",
    category: "acougue",
    name: "Carne Moída Patinho",
    unit: "kg",
    illustrativePrice: 36.9,
    image: "/images/produtos/carne-moida.webp",
    imageAlt: "Carne bovina moída na hora",
    badge: "Moída na hora",
  },
  {
    id: "peito-frango",
    category: "acougue",
    name: "Filé de Peito de Frango",
    unit: "kg",
    illustrativePrice: 18.9,
    image: "/images/produtos/peito-frango.webp",
    imageAlt: "Filés de peito de frango frescos",
  },
  {
    id: "linguica-toscana",
    category: "acougue",
    name: "Linguiça Toscana Suína",
    unit: "kg",
    illustrativePrice: 21.9,
    image: "/images/produtos/linguica-toscana.webp",
    imageAlt: "Linguiça toscana para churrasco",
  },
  {
    id: "coxa-sobrecoxa",
    category: "acougue",
    name: "Coxa e Sobrecoxa de Frango",
    unit: "kg",
    illustrativePrice: 12.9,
    image: "/images/produtos/coxa-sobrecoxa.webp",
    imageAlt: "Cortes de coxa e sobrecoxa de frango",
  },
  {
    id: "costela-suina",
    category: "acougue",
    name: "Costela Suína Selecionada",
    unit: "kg",
    illustrativePrice: 24.9,
    image: "/images/produtos/costela-suina.webp",
    imageAlt: "Costela suína preparada",
  },

  // Hortifrúti (Sacolão)
  {
    id: "banana-prata",
    category: "hortifruti",
    name: "Banana Prata Selecionada",
    unit: "kg",
    illustrativePrice: 5.49,
    image: "/images/produtos/banana-prata.webp",
    imageAlt: "Bananas prata maduras",
    badge: "Sacolão · Exemplo",
  },
  {
    id: "laranja-pera",
    category: "hortifruti",
    name: "Laranja Pera Doce",
    unit: "kg",
    illustrativePrice: 4.49,
    image: "/images/produtos/laranja-pera.webp",
    imageAlt: "Laranjas frescas",
    badge: "Fresco do dia",
  },
  {
    id: "tomate-italiano",
    category: "hortifruti",
    name: "Tomate Italiano Fresco",
    unit: "kg",
    illustrativePrice: 6.99,
    image: "/images/produtos/tomate-italiano.webp",
    imageAlt: "Tomates vermelhos frescos",
  },
  {
    id: "batata-inglesa",
    category: "hortifruti",
    name: "Batata Inglesa Lavada",
    unit: "kg",
    illustrativePrice: 4.79,
    image: "/images/produtos/batata-inglesa.webp",
    imageAlt: "Batatas inglesas lavadas",
  },
  {
    id: "maca-gala",
    category: "hortifruti",
    name: "Maçã Gala Nacional",
    unit: "kg",
    illustrativePrice: 8.9,
    image: "/images/produtos/maca-gala.webp",
    imageAlt: "Maçã gala vermelha",
  },
  {
    id: "alface-crespa",
    category: "hortifruti",
    name: "Alface Crespa Hidropônica",
    unit: "unid.",
    illustrativePrice: 3.29,
    image: "/images/produtos/alface-crespa.webp",
    imageAlt: "Folhas frescas de alface crespa",
  },

  // Padaria & Frios
  {
    id: "pao-frances",
    category: "padaria",
    name: "Pão Francês Quentinho",
    unit: "kg",
    illustrativePrice: 14.9,
    image: "/images/produtos/pao-frances.webp",
    imageAlt: "Cestas com pães franceses assados na hora",
    badge: "Exemplo",
  },
  {
    id: "pao-de-queijo",
    category: "padaria",
    name: "Pão de Queijo Mineiro",
    unit: "400 g",
    illustrativePrice: 12.9,
    image: "/images/produtos/pao-de-queijo.webp",
    imageAlt: "Pães de queijo mineiros assados",
  },
  {
    id: "queijo-minas",
    category: "padaria",
    name: "Queijo Minas Frescal",
    unit: "kg",
    illustrativePrice: 38.9,
    image: "/images/produtos/queijo-minas.webp",
    imageAlt: "Queijo Minas Frescal inteiro no prato",
  },
  {
    id: "presunto-fatiado",
    category: "padaria",
    name: "Presunto Cozido Fatiado",
    unit: "200 g",
    illustrativePrice: 8.49,
    image: "/images/produtos/presunto-fatiado.webp",
    imageAlt: "Frios e presunto fatiado na tábua",
  },
  {
    id: "bolo-fuba",
    category: "padaria",
    name: "Bolo Caseiro de Fubá",
    unit: "unid.",
    illustrativePrice: 16.9,
    image: "/images/produtos/bolo-fuba.webp",
    imageAlt: "Fatia de bolo de fubá caseiro",
  },
  {
    id: "pao-de-forma",
    category: "padaria",
    name: "Pão de Forma Tradicional",
    unit: "400 g",
    illustrativePrice: 6.99,
    image: "/images/produtos/pao-de-forma.webp",
    imageAlt: "Pão fatiado tradicional",
  },

  // Mercearia
  {
    id: "arroz-branco",
    category: "mercearia",
    name: "Arroz Branco Tipo 1",
    unit: "5 kg",
    illustrativePrice: 25.9,
    image: "/images/produtos/arroz-branco.webp",
    imageAlt: "Grãos de arroz branco tipo 1",
    badge: "Exemplo",
  },
  {
    id: "feijao-carioca",
    category: "mercearia",
    name: "Feijão Carioca Tipo 1",
    unit: "1 kg",
    illustrativePrice: 7.49,
    image: "/images/produtos/feijao-carioca.webp",
    imageAlt: "Grãos de feijão selecionados",
  },
  {
    id: "oleo-soja",
    category: "mercearia",
    name: "Óleo de Soja Refinado",
    unit: "900 ml",
    illustrativePrice: 7.29,
    image: "/images/produtos/oleo-soja.webp",
    imageAlt: "Garrafas de óleo vegetal na gôndola",
  },
  {
    id: "macarrao-espaguete",
    category: "mercearia",
    name: "Macarrão Espaguete Sêmola",
    unit: "500 g",
    illustrativePrice: 4.49,
    image: "/images/produtos/macarrao-espaguete.webp",
    imageAlt: "Fios de macarrão espaguete",
  },
  {
    id: "acucar-cristal",
    category: "mercearia",
    name: "Açúcar Cristal Especial",
    unit: "5 kg",
    illustrativePrice: 16.9,
    image: "/images/produtos/acucar-cristal.webp",
    imageAlt: "Tigela com açúcar cristal branco",
  },
  {
    id: "molho-tomate",
    category: "mercearia",
    name: "Molho de Tomate Tradicional",
    unit: "340 g",
    illustrativePrice: 2.99,
    image: "/images/produtos/molho-tomate.webp",
    imageAlt: "Molho de tomate com tomates frescos",
  },

  // Bebidas & Matinais
  {
    id: "cafe-moido",
    category: "bebidas",
    name: "Café Torrado e Moído",
    unit: "500 g",
    illustrativePrice: 21.9,
    image: "/images/produtos/cafe-moido.webp",
    imageAlt: "Pó de café torrado e moído",
    badge: "Exemplo",
  },
  {
    id: "leite-integral",
    category: "bebidas",
    name: "Leite Integral UHT",
    unit: "1 L",
    illustrativePrice: 4.89,
    image: "/images/produtos/leite-integral.webp",
    imageAlt: "Copo com leite integral",
  },
  {
    id: "suco-laranja",
    category: "bebidas",
    name: "Suco de Laranja Integral",
    unit: "1 L",
    illustrativePrice: 11.9,
    image: "/images/produtos/suco-laranja.webp",
    imageAlt: "Copo de suco de laranja natural",
  },
  {
    id: "refrigerante-cola",
    category: "bebidas",
    name: "Refrigerante Sabor Cola",
    unit: "2 L",
    illustrativePrice: 8.99,
    image: "/images/produtos/refrigerante-cola.webp",
    imageAlt: "Copo de refrigerante de cola com gelo",
  },
  {
    id: "manteiga-sal",
    category: "bebidas",
    name: "Manteiga com Sal",
    unit: "200 g",
    illustrativePrice: 9.9,
    image: "/images/produtos/manteiga-sal.webp",
    imageAlt: "Pedaços de manteiga cremosa",
  },
  {
    id: "requeijao-cremoso",
    category: "bebidas",
    name: "Requeijão Cremoso Tradicional",
    unit: "200 g",
    illustrativePrice: 7.9,
    image: "/images/produtos/requeijao-cremoso.webp",
    imageAlt: "Pote de requeijão cremoso",
  },

  // Higiene e limpeza
  {
    id: "sabao-po",
    category: "higiene",
    name: "Sabão em Pó Multiação",
    unit: "1,6 kg",
    illustrativePrice: 18.9,
    image: "/images/produtos/sabao-po.webp",
    imageAlt: "Sabão em pó com medidor",
    badge: "Exemplo",
  },
  {
    id: "detergente-liquido",
    category: "higiene",
    name: "Detergente Líquido Lava-Louças",
    unit: "500 ml",
    illustrativePrice: 2.69,
    image: "/images/produtos/detergente-liquido.webp",
    imageAlt: "Frasco de detergente líquido para louças",
  },
  {
    id: "papel-higienico",
    category: "higiene",
    name: "Papel Higiênico Folha Dupla",
    unit: "12 rolos",
    illustrativePrice: 19.9,
    image: "/images/produtos/papel-higienico.webp",
    imageAlt: "Rolo de papel higiênico folha dupla",
  },
  {
    id: "agua-sanitaria",
    category: "higiene",
    name: "Água Sanitária Multiuso",
    unit: "2 L",
    illustrativePrice: 6.49,
    image: "/images/produtos/agua-sanitaria.webp",
    imageAlt: "Embalagens de água sanitária",
  },
];
