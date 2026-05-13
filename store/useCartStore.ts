import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toast } from "react-hot-toast";
import product from "@/sanity/schemaTypes/product";

export interface CartItem {
  [x: string]: any;
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size?: string;
  color?: string;
}

interface CartState {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (newItem) => {
        const { items } = get();

        // Use _id to match Sanity's unique identifier
        const existingItem = items.find(
          (item) =>
            item._id === newItem._id &&
            item.size === newItem.size &&
            item.color === newItem.color
        );

        if (existingItem) {
          set({
            items: items.map((item) =>
              item._id === newItem._id &&
                item.size === newItem.size &&
                item.color === newItem.color
                ? { ...item, quantity: item.quantity + (newItem.quantity || 1) }
                : item
            ),
          });
        } else {
          // Ensure newItem has a starting quantity of 1 if not provided
          const productToAdd = { ...newItem, quantity: newItem.quantity || 1 };
          set({ items: [...items, productToAdd] });
        }

        toast.success(`${newItem.title} added to cart`);
      },

      removeItem: (id) => {
        set({ items: get().items.filter((item) => item.id !== id) });
      },

      updateQuantity: (id, quantity) => {
        set({
          items: get().items.map((item) =>
            item.id === id
              ? { ...item, quantity: Math.max(1, quantity) }
              : item,
          ),
        });
      },

      clearCart: () => set({ items: [] }),

      getTotalPrice: () => {
        return get().items.reduce(
          (total, item) => total + (Number(item.price) || 0) * (Number(item.quantity) || 1),
          0,
        );
      },
    }),
    {
      name: "cart-storage", // Saves to localStorage automatically
    },
  ),
);
