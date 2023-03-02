import { axios } from '../../../lib/axios';
import { FetchMeal } from '../types';

export const getMeals = (): Promise<FetchMeal> => {
  return axios.get('/meals.json');
};
