import { rest } from 'msw';
import { nanoid } from 'nanoid';

import { API_URL } from '@/config';

import { FetchMovie } from '../database/movies';
import { db, persistDb } from '../db';
import { delayedResponse } from '../utils';

type MovieBody = {
  id: string;
  title: string;
  openingText: string;
  releaseDate: string;
};

export const moviesHandlers = [
  rest.get(`${API_URL}/movies.json`, (req, res, ctx) => {
    try {
      const result: FetchMovie = {};
      db.movies.getAll().forEach((movie) => {
        result[movie.documentId] = {
          id: movie.id,
          title: movie.title,
          openingText: movie.openingText,
          releaseDate: movie.releaseDate,
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

  rest.post<MovieBody>(`${API_URL}/movies.json`, async (req, res, ctx) => {
    try {
      const data = await req.json();
      const result = db.movies.create({
        documentId: nanoid(),
        ...data,
      });
      persistDb('movies');

      return delayedResponse(ctx.json(result));
    } catch (error: any) {
      return delayedResponse(
        ctx.status(400),
        ctx.json({ message: error?.message || 'Server Error' }),
      );
    }
  }),
];
