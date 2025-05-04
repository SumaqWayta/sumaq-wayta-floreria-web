import { FLOWER_CAR } from "@/types/flower";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FlowerCartState {
  flowersCar: FLOWER_CAR[];
  setFlower: (flower: FLOWER_CAR) => void;
  removeFlower: (id: string) => void;
  clearCart: () => void;
}

export const useFlowerCartStore = create<FlowerCartState>()(
  persist(
    (set, get) => ({
      flowersCar: [],
      setFlower: (flower) => {
        const current = get().flowersCar;
        const index = current.findIndex((f) => f.id === flower.id);

        if (index !== -1) {
          const updated = [...current];
          updated[index] = flower;
          set({ flowersCar: updated });
        } else {
          set({ flowersCar: [...current, flower] });
        }
      },
      removeFlower: (id) => {
        const updated = get().flowersCar.filter((f) => f.id !== id);
        set({ flowersCar: updated });
      },
      clearCart: () => {
        set({ flowersCar: [] });
      },
    }),
    {
      name: "flowers-car",
    }
  )
);
