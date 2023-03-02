import { rest } from 'msw';

import { API_URL } from '@/config';

import { FetchProduct, defaultProducts } from '../database/products';
import { db, persistDb } from '../db';
import { delayedResponse } from '../utils';

export const initialize = () => {
  Object.keys(defaultProducts).forEach((key) => {
    db.products.create({
      documentId: key,
      title: defaultProducts[key].title,
      description: defaultProducts[key].description,
      price: defaultProducts[key].price,
    });
  });
  persistDb('products');
};

export const productsHandlers = [
  rest.get(`${API_URL}/products.json`, (req, res, ctx) => {
    try {
      const result: FetchProduct = {};
      db.products.getAll().forEach((product) => {
        result[product.documentId] = {
          title: product.title,
          description: product.description,
          price: product.price,
        };
      });

      return delayedResponse(ctx.json(result));
    } catch (error: any) {
      return delayedResponse(
        ctx.status(400),
        ctx.json({ message: error?.message || 'Server Error' }),
      );
    }
  }),
];
