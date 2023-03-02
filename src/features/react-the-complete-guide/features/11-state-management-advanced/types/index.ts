export type Product = {
  id: string;
  title: string;
  price: number;
  description: string;
};

export type FetchProduct = {
  [id: string]: {
    title: string;
    description: string;
    price: number;
  };
};

export type CartItem = Product & { quantity: number; total: number };

export type FetchCart = {
  [id: string]: CartItem[];
};
