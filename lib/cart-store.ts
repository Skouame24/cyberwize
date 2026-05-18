import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { PlanId } from "@/lib/plans";

export type CartLine = {
  planId: PlanId;
  name: string;
  price: number;
  billing: "monthly" | "yearly";
};

type CartStore = {
  items: CartLine[];
  addItem: (item: CartLine) => void;
  removeItem: (planId: PlanId) => void;
  clear: () => void;
  count: () => number;
  total: () => number;
};

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) =>
        set((state) => {
          const filtered = state.items.filter((i) => i.planId !== item.planId);
          return { items: [...filtered, item] };
        }),
      removeItem: (planId) =>
        set((state) => ({ items: state.items.filter((i) => i.planId !== planId) })),
      clear: () => set({ items: [] }),
      count: () => get().items.length,
      total: () => get().items.reduce((sum, i) => sum + i.price, 0),
    }),
    { name: "cyberwize-cart" }
  )
);
