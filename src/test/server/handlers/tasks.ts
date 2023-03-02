import { rest } from 'msw';
import { nanoid } from 'nanoid';

import { API_URL } from '@/config';

import { FetchTask } from '../database/tasks';
import { db, persistDb } from '../db';
import { delayedResponse } from '../utils';

type TaskBody = {
  title: string;
};

export const tasksHandlers = [
  rest.get(`${API_URL}/tasks.json`, (req, res, ctx) => {
    try {
      const result: FetchTask = {};
      db.tasks.getAll().forEach((task) => {
        result[task.documentId] = {
          text: task.text,
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

  rest.post<TaskBody>(`${API_URL}/tasks.json`, async (req, res, ctx) => {
    try {
      const data = await req.json();
      const id = nanoid();
      db.tasks.create({
        documentId: id,
        ...data,
      });
      persistDb('tasks');

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
