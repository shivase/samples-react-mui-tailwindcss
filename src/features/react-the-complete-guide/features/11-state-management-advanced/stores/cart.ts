import create from 'zustand';

import { Product, CartItem, FetchCart } from '../types';

type CartStore = {
  items: CartItem[];
  visible: boolean;
  toggleVisible: () => void;
  addCart: (product: Product) => void;
  delCart: (product: Product) => void;
  replaceCart: (cart: FetchCart) => void;
  reset: () => void;
};

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  visible: false,
  changed: false,
  toggleVisible: () =>
    set((state) => {
      return { visible: !state.visible };
    }),
  addCart: (product: Product) =>
    set((state) => {
      const items = state.items ? state.items : [];
      const index = items.findIndex((i) => i.id === product.id);

      const updatedItem = [...items];
      if (index >= 0) {
        const cartedItem = { ...items[index] };
        cartedItem.quantity += 1;
        cartedItem.total = cartedItem.price * cartedItem.quantity;
        updatedItem[index] = cartedItem;
      } else {
        const newItem = { ...product, quantity: 1, total: product.price };
        updatedItem.push(newItem);
      }

      return { items: updatedItem };
    }),
  delCart: (product: Product) =>
    set((state) => {
      const index = state.items.findIndex((i) => i.id === product.id);

      let updatedItem = [];
      if (state.items[index].quantity === 1) {
        updatedItem = state.items.filter((item) => item.id !== state.items[index].id);
      } else {
        updatedItem = [...state.items];
        updatedItem[index].quantity -= 1;
        updatedItem[index].total = updatedItem[index].quantity * updatedItem[index].price;
      }

      return { items: updatedItem };
    }),
  replaceCart: (cart: FetchCart) =>
    set(() => {
      const items = Object.keys(cart).map((key) => {
        return cart[key][0];
      });

      if (items) {
        return { items: items };
      }

      return { items: [] };
    }),
  reset: () =>
    set(() => {
      return { items: [] };
    }),
}));
