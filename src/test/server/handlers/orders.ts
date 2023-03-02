import { rest } from 'msw';
import { nanoid } from 'nanoid';

import { API_URL } from '@/config';

import { db, persistDb } from '../db';
import { delayedResponse } from '../utils';

type OrderBody = {
  user: {
    name: string;
    city: string;
    postalCode: string;
    street: string;
  };
  orderedItems: {
    id: string;
    name: string;
    amount: number;
    price: number;
  }[];
};

export const ordersHandlers = [
  rest.post<OrderBody>(`${API_URL}/orders.json`, async (req, res, ctx) => {
    try {
      const data: OrderBody = await req.json();

      const orderedItems: any = [];
      data.orderedItems.forEach((item) => {
        const id = nanoid();
        orderedItems.push(
          db.orderedItem.create({
            documentId: id,
            id: item.id,
            name: item.name,
            amount: item.amount,
            price: item.price,
          }),
        );
      });

      const id = nanoid();
      db.orders.create({
        documentId: id,
        name: data.user.name,
        city: data.user.city,
        postalCode: data.user.postalCode,
        street: data.user.street,
        orderedItem: orderedItems,
      });
      persistDb('orders');

      const result = { name: id };

      return delayedResponse(ctx.json(result));
    } catch (error: any) {
      return delayedResponse(
        ctx.status(400),
        ctx.json({ message: error?.message || 'Server Error' }),
      );
    }
  }),
];
