import { primaryKey, manyOf } from '@mswjs/data';

export const orders = {
  documentId: primaryKey(String),
  name: String,
  city: String,
  postalCode: String,
  street: String,
  orderedItem: manyOf('orderedItem'),
};

export const orderedItem = {
  documentId: primaryKey(String),
  id: String,
  name: String,
  amount: Number,
  price: Number,
};
