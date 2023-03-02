import { rest } from 'msw';
import { nanoid } from 'nanoid';

import { API_URL } from '@/config';

import { PutCart, FetchCart } from '../database/cart';
import { db, persistDb } from '../db';
import { delayedResponse } from '../utils';

export const cartHandlers = [
  rest.put<PutCart>(`${API_URL}/cart.json`, async (req, res, ctx) => {
    try {
      const data: PutCart = await req.json();

      db.cartItem.deleteMany({ where: {} });
      db.cart.deleteMany({ where: {} });

      const cartItems: any = [];
      data.cart.forEach((item) => {
        const id = nanoid();
        cartItems.push(
          db.cartItem.create({
            documentId: id,
            id: item.id,
            title: item.title,
            price: item.price,
            description: item.description,
            quantity: item.quantity,
            total: item.total,
          }),
        );
      });

      const id = nanoid();
      db.cart.create({
        documentId: id,
        cartItem: cartItems,
      });
      persistDb('cart');

      const result = { name: id };

      return delayedResponse(ctx.json(result));
    } catch (error: any) {
      return delayedResponse(
        ctx.status(400),
        ctx.json({ message: error?.message || 'Server Error' }),
      );
    }
  }),
  rest.get(`${API_URL}/cart.json`, (req, res, ctx) => {
    try {
      const result: FetchCart = {};
      db.cart.getAll().forEach((cart) => {
        cart.cartItem.forEach((item) => {
          result[item.documentId] = [];
          result[item.documentId].push({
            id: item.id,
            title: item.title,
            price: item.price,
            description: item.description,
            quantity: item.quantity,
            total: item.total,
          });
        });
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
