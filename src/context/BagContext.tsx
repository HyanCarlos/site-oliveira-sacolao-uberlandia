import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { CATALOG_PRODUCTS, type CatalogProduct } from "../data/catalog";

const STORAGE_KEY = "oliveira_demo_bag_v1";

export interface BagLineItem {
  product: CatalogProduct;
  quantity: number;
}

interface StoredEntry {
  id: string;
  quantity: number;
}

interface BagContextValue {
  items: BagLineItem[];
  totalItems: number;
  subtotal: number;
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  getQuantity: (productId: string) => number;
  addItem: (product: CatalogProduct) => void;
  setQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
  clearBag: () => void;
}

const BagContext = createContext<BagContextValue | null>(null);

const PRODUCT_MAP = new Map(CATALOG_PRODUCTS.map((p) => [p.id, p]));

function readInitialQuantities(): Record<string, number> {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as StoredEntry[];
    if (!Array.isArray(parsed)) return {};
    const next: Record<string, number> = {};
    for (const entry of parsed) {
      if (
        entry &&
        typeof entry.id === "string" &&
        typeof entry.quantity === "number" &&
        entry.quantity > 0 &&
        PRODUCT_MAP.has(entry.id)
      ) {
        next[entry.id] = Math.min(99, Math.floor(entry.quantity));
      }
    }
    return next;
  } catch {
    return {};
  }
}

export function formatBRL(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

export function BagProvider({ children }: { children: ReactNode }) {
  const [quantities, setQuantities] = useState<Record<string, number>>(
    readInitialQuantities
  );
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    try {
      const payload: StoredEntry[] = Object.entries(quantities)
        .filter(([, qty]) => qty > 0)
        .map(([id, quantity]) => ({ id, quantity }));
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch {
      // Ignore storage quota / privacy mode errors
    }
  }, [quantities]);

  const openDrawer = useCallback(() => setIsDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setIsDrawerOpen(false), []);

  const getQuantity = useCallback(
    (productId: string) => quantities[productId] ?? 0,
    [quantities]
  );

  const addItem = useCallback((product: CatalogProduct) => {
    setQuantities((prev) => ({
      ...prev,
      [product.id]: Math.min(99, (prev[product.id] ?? 0) + 1),
    }));
  }, []);

  const setQuantity = useCallback((productId: string, quantity: number) => {
    setQuantities((prev) => {
      const next = { ...prev };
      if (quantity <= 0) {
        delete next[productId];
      } else {
        next[productId] = Math.min(99, Math.floor(quantity));
      }
      return next;
    });
  }, []);

  const removeItem = useCallback((productId: string) => {
    setQuantities((prev) => {
      const next = { ...prev };
      delete next[productId];
      return next;
    });
  }, []);

  const clearBag = useCallback(() => {
    setQuantities({});
  }, []);

  const items = useMemo<BagLineItem[]>(() => {
    return Object.entries(quantities)
      .filter(([, qty]) => qty > 0)
      .map(([id, quantity]) => {
        const product = PRODUCT_MAP.get(id);
        return product ? { product, quantity } : null;
      })
      .filter((entry): entry is BagLineItem => entry !== null);
  }, [quantities]);

  const totalItems = useMemo(
    () => items.reduce((acc, item) => acc + item.quantity, 0),
    [items]
  );

  const subtotal = useMemo(
    () =>
      items.reduce(
        (acc, item) => acc + item.product.illustrativePrice * item.quantity,
        0
      ),
    [items]
  );

  const value = useMemo<BagContextValue>(
    () => ({
      items,
      totalItems,
      subtotal,
      isDrawerOpen,
      openDrawer,
      closeDrawer,
      getQuantity,
      addItem,
      setQuantity,
      removeItem,
      clearBag,
    }),
    [
      items,
      totalItems,
      subtotal,
      isDrawerOpen,
      openDrawer,
      closeDrawer,
      getQuantity,
      addItem,
      setQuantity,
      removeItem,
      clearBag,
    ]
  );

  return <BagContext.Provider value={value}>{children}</BagContext.Provider>;
}

export function useBag(): BagContextValue {
  const ctx = useContext(BagContext);
  if (!ctx) {
    throw new Error("useBag precisa ser usado dentro de BagProvider");
  }
  return ctx;
}
