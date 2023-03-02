import { rest } from 'msw';
import { nanoid } from 'nanoid';

import { API_URL } from '@/config';

import { FetchQuotes } from '../database/quotes';
import { db, persistDb } from '../db';
import { delayedResponse } from '../utils';

type QuoteBody = {
  author: string;
  text: string;
};

export const quotesHandlers = [
  rest.get(`${API_URL}/quotes.json`, (req, res, ctx) => {
    try {
      const result: FetchQuotes = {};
      db.quotes.getAll().forEach((quote) => {
        result[quote.documentId] = {
          author: quote.author,
          text: quote.text,
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

  rest.get(`${API_URL}/quotes/:quoteId`, (req, res, ctx) => {
    try {
      const { quoteId } = req.params;
      const id = quoteId.toString().match(/(.+)\.json/);

      let result;
      if (id) {
        result = db.quotes.findFirst({
          where: { documentId: { equals: id[1] } },
        });
      }

      return delayedResponse(ctx.json(result));
    } catch (error: any) {
      return delayedResponse(
        ctx.status(400),
        ctx.json({ message: error?.message || 'Server Error' }),
      );
    }
  }),

  rest.post<QuoteBody>(`${API_URL}/quotes.json`, async (req, res, ctx) => {
    try {
      const data = await req.json();
      const id = nanoid();
      db.quotes.create({
        documentId: id,
        ...data,
      });
      persistDb('quotes');

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
