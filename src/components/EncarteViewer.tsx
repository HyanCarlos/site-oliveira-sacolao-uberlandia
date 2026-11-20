import { useEffect, useState } from "react";
import {
  BookOpen,
  Calendar,
  Check,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Share2,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { CURRENT_ENCARTE } from "../data/encartes";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { OliveiraLogo } from "./OliveiraLogo";

export function EncarteViewer() {
  const [pageIdx, setPageIdx] = useState(0);
  const [zoom, setZoom] = useState(100);
  const [fullscreen, setFullscreen] = useState(false);
  const [copied, setCopied] = useState(false);

  const pages = CURRENT_ENCARTE.pages;
  const activePage = pages[pageIdx] ?? pages[0];

  useEffect(() => {
    if (!fullscreen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setFullscreen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [fullscreen]);

  const handleShare = async () => {
    const shareUrl = `${window.location.origin}${window.location.pathname}#encartes`;
    try {
      if (navigator.share) {
        await navigator.share({
          title: CURRENT_ENCARTE.title,
          text: "Confira o encarte semanal do Sacolão e Casa de Carnes Oliveira em Uberlândia.",
          url: shareUrl,
        });
        return;
      }
    } catch {
      // Fallback to clipboard
    }
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const renderCanvas = () => (
    <div
      className="relative mx-auto flex w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-xl transition-transform duration-300 origin-top"
      style={{ transform: `scale(${zoom / 100})` }}
    >
      <div className="flex flex-wrap items-center justify-between gap-3 bg-[#0E6B38] px-6 py-4 text-white">
        <div className="flex items-center gap-3">
          <OliveiraLogo variant="dark" showSubtitle={false} className="scale-90 origin-left" />
          <div className="h-7 w-px bg-white/25 hidden sm:block" />
          <div>
            <p className="font-['Sora'] text-sm font-extrabold sm:text-base">
              {CURRENT_ENCARTE.title}
            </p>
            <p className="text-[11px] text-emerald-100">
              {CURRENT_ENCARTE.participatingStores}
            </p>
          </div>
        </div>
        <span className="rounded-full bg-[#FACC15] px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-zinc-950">
          {activePage.statusLabel}
        </span>
      </div>

      {activePage.imageUrl ? (
        <img
          src={activePage.imageUrl}
          alt={activePage.title}
          className="w-full h-auto object-contain"
        />
      ) : (
        <div className="flex flex-col items-center justify-center bg-gradient-to-br from-[#FAF7F0] via-white to-emerald-50/60 px-6 py-12 text-center sm:px-12 sm:py-16">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0E6B38]/12 text-[#0E6B38]">
            <BookOpen className="h-7 w-7" aria-hidden="true" />
          </span>

          <span className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-amber-300 bg-amber-100 px-3 py-1 text-xs font-bold text-amber-950">
            <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
            {CURRENT_ENCARTE.validityLabel}
          </span>

          <h3 className="mt-4 font-['Sora'] text-2xl font-extrabold text-[#0C1B12] sm:text-3xl">
            {activePage.title}
          </h3>

          <p className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-600 sm:text-base">
            {activePage.subtitle}
          </p>

          <div className="mt-8 grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            {activePage.sectorsPreview.map((sector) => (
              <div
                key={sector}
                className="rounded-2xl border border-dashed border-emerald-300 bg-white/95 p-4 text-center"
              >
                <p className="font-['Sora'] text-sm font-extrabold text-[#0C1B12]">
                  {sector}
                </p>
                <p className="mt-1 text-xs text-zinc-500">
                  Espaço reservado para ofertas oficiais
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs font-medium text-zinc-500">
            Página {activePage.pageNumber} de {pages.length} · Modelo de demonstração — HRP Múltipla
          </p>
        </div>
      )}
    </div>
  );

  return (
    <section id="encartes" className="w-full bg-white py-16 sm:py-20">
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <Badge variant="gold">
              <BookOpen className="h-3.5 w-3.5" />
              Encarte Digital Semanal
            </Badge>
            <h2 className="font-['Sora'] text-3xl font-extrabold text-[#0C1B12] sm:text-4xl">
              Tabloide de ofertas da semana
            </h2>
            <p className="text-base text-zinc-600">
              Área pronta para publicar as lâminas de promoções do sacolão e do
              açougue com troca de página, zoom, tela cheia e compartilhamento.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-zinc-200 bg-[#FAF7F0] p-2">
            <div className="inline-flex items-center gap-1">
              <button
                type="button"
                onClick={() => setPageIdx((i) => Math.max(0, i - 1))}
                disabled={pageIdx === 0}
                aria-label="Página anterior do encarte"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-800 hover:bg-zinc-100 disabled:opacity-40 cursor-pointer"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="px-2 text-xs font-bold text-zinc-800">
                Pág. {pageIdx + 1} / {pages.length}
              </span>
              <button
                type="button"
                onClick={() => setPageIdx((i) => Math.min(pages.length - 1, i + 1))}
                disabled={pageIdx === pages.length - 1}
                aria-label="Próxima página do encarte"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-800 hover:bg-zinc-100 disabled:opacity-40 cursor-pointer"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            <div className="h-5 w-px bg-zinc-300 hidden sm:block" />

            <div className="inline-flex items-center gap-1">
              <button
                type="button"
                onClick={() => setZoom((z) => Math.max(75, z - 25))}
                disabled={zoom <= 75}
                aria-label="Diminuir zoom"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-800 hover:bg-zinc-100 disabled:opacity-40 cursor-pointer"
              >
                <ZoomOut className="h-4 w-4" />
              </button>
              <span className="min-w-12 text-center text-xs font-bold text-zinc-700">
                {zoom}%
              </span>
              <button
                type="button"
                onClick={() => setZoom((z) => Math.min(125, z + 25))}
                disabled={zoom >= 125}
                aria-label="Aumentar zoom"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-800 hover:bg-zinc-100 disabled:opacity-40 cursor-pointer"
              >
                <ZoomIn className="h-4 w-4" />
              </button>
            </div>

            <div className="h-5 w-px bg-zinc-300 hidden sm:block" />

            <Button
              variant="outline"
              size="sm"
              onClick={() => setFullscreen(true)}
              className="bg-white"
            >
              <Maximize2 className="h-4 w-4" />
              Tela cheia
            </Button>

            <Button variant="primary" size="sm" onClick={handleShare}>
              {copied ? (
                <>
                  <Check className="h-4 w-4" />
                  Link copiado
                </>
              ) : (
                <>
                  <Share2 className="h-4 w-4" />
                  Compartilhar
                </>
              )}
            </Button>
          </div>
        </div>

        <div className="mt-8 overflow-x-auto rounded-3xl border border-zinc-200 bg-zinc-100/80 p-4 sm:p-8">
          {renderCanvas()}
        </div>
      </div>

      {fullscreen && (
        <div
          className="fixed inset-0 z-[80] flex flex-col bg-black/90 p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Visualizador do encarte em tela cheia"
        >
          <div className="mb-4 flex items-center justify-between text-white">
            <span className="font-['Sora'] text-sm font-bold sm:text-base">
              {CURRENT_ENCARTE.title} · Pág. {pageIdx + 1}/{pages.length}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setFullscreen(false)}
              className="border border-white/25 bg-white/10 text-white hover:bg-white/20 hover:text-white"
            >
              <Minimize2 className="h-4 w-4" />
              Fechar tela cheia
            </Button>
          </div>
          <div data-lenis-prevent className="flex-1 overflow-auto">
            {renderCanvas()}
          </div>
        </div>
      )}
    </section>
  );
}
