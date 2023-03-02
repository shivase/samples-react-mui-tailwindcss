import { primaryKey, manyOf } from '@mswjs/data';

export const cart = {
  documentId: primaryKey(String),
  cartItem: manyOf('cartItem'),
};

export const cartItem = {
  documentId: primaryKey(String),
  id: String,
  title: String,
  price: Number,
  description: String,
  quantity: Number,
  total: Number,
};

export type PutCart = {
  cart: {
    id: string;
    title: string;
    price: number;
    description: string;
    quantity: number;
    total: number;
  }[];
};

export type FetchCart = {
  [id: string]: {
    id: string;
    title: string;
    price: number;
    description: string;
    quantity: number;
    total: number;
  }[];
};
