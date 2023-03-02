import { primaryKey } from '@mswjs/data';

export const meals = {
  documentId: primaryKey(String),
  name: String,
  description: String,
  price: Number,
};

export type FetchMeal = {
  [id: string]: {
    name: string;
    description: string;
    price: number;
  };
};

export const defaultMeals: FetchMeal = {
  m1: {
    description: 'First fish and vegies',
    name: 'sushi',
    price: 22.99,
  },
  m2: {
    description: 'A german specialty!',
    name: 'Schnitzel',
    price: 16.5,
  },
  m3: {
    description: 'American, raw, meaty',
    name: 'Barbecue Burger',
    price: 12.99,
  },
  m4: {
    description: 'Healthy...and green...',
    name: 'Green Bowl',
    price: 18.99,
  },
};
