import { rest } from 'msw';

import { API_URL } from '@/config';

import { FetchMeal, defaultMeals } from '../database/meals';
import { db, persistDb } from '../db';
import { delayedResponse } from '../utils';

export const initialize = () => {
  Object.keys(defaultMeals).forEach((key) => {
    db.meals.create({
      documentId: key,
      name: defaultMeals[key].name,
      description: defaultMeals[key].description,
      price: defaultMeals[key].price,
    });
  });
  persistDb('meals');
};

export const mealsHandlers = [
  rest.get(`${API_URL}/meals.json`, (req, res, ctx) => {
    try {
      const result: FetchMeal = {};
      db.meals.getAll().forEach((meal) => {
        result[meal.documentId] = {
          name: meal.name,
          description: meal.description,
          price: meal.price,
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
