import { rest } from 'msw';
import { nanoid } from 'nanoid';

import { API_URL } from '@/config';

import { db, persistDb } from '../db';
import { delayedResponse } from '../utils';

type CommentBody = {
  text: string;
};

export const commentsHandlers = [
  rest.post<CommentBody>(`${API_URL}/comments/:quoteId`, async (req, res, ctx) => {
    try {
      const { quoteId } = req.params;
      const id = quoteId.toString().match(/(.+)\.json/);
      const data: CommentBody = await req.json();

      if (!id) return delayedResponse(ctx.json({}));

      const documentId = nanoid();
      db.comments.create({
        documentId: documentId,
        quoteId: id[1],
        text: data.text,
      });

      persistDb('comments');

      const result = { name: id };

      return delayedResponse(ctx.json(result));
    } catch (error: any) {
      return delayedResponse(
        ctx.status(400),
        ctx.json({ message: error?.message || 'Server Error' }),
      );
    }
  }),
  rest.get(`${API_URL}/comments/:quoteId`, (req, res, ctx) => {
    try {
      const { quoteId } = req.params;
      const id = quoteId.toString().match(/(.+)\.json/);

      const result: any = {};
      if (id) {
        db.comments
          .findMany({
            where: { quoteId: { equals: id[1] } },
          })
          .forEach((comment) => {
            result[comment.documentId] = {
              text: comment.text,
            };
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
];
