import { axios } from '../../../lib/axios';
import { FetchCart } from '../types';

export const getCart = (): Promise<FetchCart> => {
  return axios.get('/cart.json');
};
