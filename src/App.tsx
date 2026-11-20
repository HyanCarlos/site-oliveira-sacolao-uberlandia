import { useEffect, useState } from "react";
import { MotionConfig } from "framer-motion";
import Lenis from "lenis";
import { BagProvider } from "./context/BagContext";
import type { CatalogFilter } from "./data/catalog";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ButcherProduceShowcase } from "./components/ButcherProduceShowcase";
import { DepartmentsSection } from "./components/DepartmentsSection";
import { CatalogSection } from "./components/CatalogSection";
import { EncarteViewer } from "./components/EncarteViewer";
import { StoresSection } from "./components/StoresSection";
import { AboutSection } from "./components/AboutSection";
import { Footer } from "./components/Footer";
import { BagDrawer } from "./components/BagDrawer";

export function App() {
  const [selectedCategory, setSelectedCategory] =
    useState<CatalogFilter>("todas");

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <BagProvider>
        <div className="min-h-screen flex flex-col bg-white text-[#0C1B12]">
          <a
            href="#conteudo-principal"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[80] focus:rounded-lg focus:bg-[#0E6B38] focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
          >
            Ir para o conteúdo principal
          </a>

          <Navbar />

          <main id="conteudo-principal" className="flex-1">
            <HeroSection onSelectDepartment={setSelectedCategory} />
            <ButcherProduceShowcase onSelectDepartment={setSelectedCategory} />
            <DepartmentsSection onSelectDepartment={setSelectedCategory} />
            <CatalogSection
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
            <EncarteViewer />
            <StoresSection />
            <AboutSection />
          </main>

          <Footer />
          <BagDrawer />
        </div>
      </BagProvider>
    </MotionConfig>
  );
}

export default App;
