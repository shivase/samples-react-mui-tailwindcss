import { factory } from '@mswjs/data';
import { ModelAPI } from '@mswjs/data/lib/glossary';

import { cart, cartItem } from './database/cart';
import { comments } from './database/comments';
import { meals } from './database/meals';
import { movies } from './database/movies';
import { orders, orderedItem } from './database/orders';
import { products } from './database/products';
import { quotes } from './database/quotes';
import { tasks } from './database/tasks';
import { initialize as mealsInit } from './handlers/meals';
import { initialize as productsInit } from './handlers/products';

const models = {
  movies,
  tasks,
  meals,
  orderedItem,
  orders,
  products,
  cart,
  cartItem,
  quotes,
  comments,
};

export const db = factory(models);

export type Model = keyof typeof db;

export const loadDb = () =>
  Object.assign(JSON.parse(window.localStorage.getItem('msw-db') ?? '{}'));

export const persistDb = (model: Model) => {
  if (process.env.NODE_ENV === 'test') return;
  const data = loadDb();
  const api = db[model] as ModelAPI<typeof models, keyof typeof models>;
  data[model] = api.getAll();
  window.localStorage.setItem('msw-db', JSON.stringify(data));
};

export const initializeDb = () => {
  const database = loadDb();
  if (Object.keys(database).length) {
    Object.entries(db).forEach(([key, model]) => {
      const dataEntries = database[key];
      if (dataEntries) {
        dataEntries?.forEach((entry: Record<string, any>) => {
          // TODO: fix me
          if ('orderedItem' in entry) {
            const items: any = [];
            entry.orderedItem.forEach((item: Record<string, any>) => {
              items.push(db.orderedItem.create(item));
            });
            entry.orderedItem = items;
          }
          if ('cartItem' in entry) {
            const items: any = [];
            entry.cartItem.forEach((item: Record<string, any>) => {
              items.push(db.cartItem.create(item));
            });
            entry.cartItem = items;
          }
          model.create(entry);
        });
      }
    });
  } else {
    /* 初期データでリセット */
    mealsInit();
    productsInit();
  }
};

export const resetDb = () => {
  window.localStorage.clear();
};

initializeDb();
