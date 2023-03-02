import { axios } from '../../../lib/axios';
import { FetchProduct } from '../types';

export const getProducts = (): Promise<FetchProduct> => {
  return axios.get('/products.json');
};
