export interface EncartePageItem {
  pageNumber: number;
  title: string;
  subtitle: string;
  imageUrl: string | null;
  statusLabel: string;
  sectorsPreview: string[];
}

export interface EncarteEdition {
  id: string;
  title: string;
  validityLabel: string;
  participatingStores: string;
  isDemoPlaceholder: boolean;
  pages: EncartePageItem[];
}

export const CURRENT_ENCARTE: EncarteEdition = {
  id: "encarte-oliveira-demo",
  title: "Encarte Semanal · Sacolão e Casa de Carnes Oliveira",
  validityLabel: "Aguardando arte oficial da semana",
  participatingStores: "Laranjeiras (Av. dos Titos / R. Aurora Nogueira) e São Jorge (Av. Seme Simão)",
  isDemoPlaceholder: true,
  pages: [
    {
      pageNumber: 1,
      title: "Capa · Quarta Verde & Fim de Semana do Açougue",
      subtitle:
        "Espaço preparado para publicar o tabloide oficial com as ofertas reais de frutas, verduras e carnes da semana, sem simular descontos inexistentes.",
      imageUrl: null,
      statusLabel: "Página demonstrativa · Sem preços inventados",
      sectorsPreview: ["Casa de Carnes", "Hortifrúti & Sacolão", "Padaria & Frios"],
    },
    {
      pageNumber: 2,
      title: "Verso · Mercearia, Bebidas & Utilidades",
      subtitle:
        "Lâmina pronta para exibir ofertas semanais de mercearia, bebidas e limpeza com zoom, tela cheia e compartilhamento direto no celular.",
      imageUrl: null,
      statusLabel: "Página demonstrativa · Aguardando arte oficial",
      sectorsPreview: ["Mercearia do Dia a Dia", "Bebidas Geladas", "Higiene e Limpeza"],
    },
  ],
};
