import { axios } from '../../../lib/axios';
import { CartItem } from '../types';

export type PutCartDTO = {
  cart: CartItem[];
};

export const putCart = (data: PutCartDTO): Promise<{ name: string }> => {
  return axios.put('/cart.json', data);
};
