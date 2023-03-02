import { cartHandlers } from './cart';
import { commentsHandlers } from './comments';
import { mealsHandlers } from './meals';
import { moviesHandlers } from './movies';
import { ordersHandlers } from './orders';
import { productsHandlers } from './products';
import { quotesHandlers } from './quotes';
import { tasksHandlers } from './tasks';

export const handlers = [
  ...moviesHandlers,
  ...tasksHandlers,
  ...mealsHandlers,
  ...ordersHandlers,
  ...productsHandlers,
  ...cartHandlers,
  ...quotesHandlers,
  ...commentsHandlers,
];
