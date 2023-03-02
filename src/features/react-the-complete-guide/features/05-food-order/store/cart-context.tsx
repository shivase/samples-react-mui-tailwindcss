/* eslint-disable @typescript-eslint/no-empty-function */
import { FC, createContext, useReducer } from 'react';

export type Item = {
  id: string;
  name: string;
  amount: number;
  price: number;
};

type ContextInterface = {
  items: Array<Item>;
  totalAmount: number;
  addItem: (item: Item) => void;
  removeItem: (item: Item) => void;
};

const CartContext = createContext<ContextInterface>({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
});

type CartProviderProps = {
  children: React.ReactNode;
};

type CartState = {
  items: Array<Item>;
  totalAmount: number;
};

const defaultCartState: CartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state: CartState, action: { type: string; item: Item }) => {
  if (action.type === 'ADD') {
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);

    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = { ...action.item };
      updatedItems = state.items.concat(updatedItems);
    }

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  if (action.type === 'REMOVE') {
    const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.item.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  return defaultCartState;
};

export const CartProvider: FC<CartProviderProps> = (props) => {
  const { children } = props;

  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item: Item) => {
    dispatchCartAction({ type: 'ADD', item });
  };

  const removeItemFromCartHandler = (item: Item) => {
    dispatchCartAction({ type: 'REMOVE', item });
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const cartContext: ContextInterface = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
};

export default CartContext;
