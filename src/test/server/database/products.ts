import { primaryKey } from '@mswjs/data';

export const products = {
  documentId: primaryKey(String),
  title: String,
  description: String,
  price: Number,
};

export type FetchProduct = {
  [id: string]: {
    title: string;
    description: string;
    price: number;
  };
};

export const defaultProducts: FetchProduct = {
  m1: {
    title: 'Test',
    description: 'This is a first product - amazing!',
    price: 6,
  },
  m2: {
    title: 'Test2',
    description: 'This is a second product - amazing!',
    price: 12,
  },
};
