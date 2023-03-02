import { axios } from '../../../lib/axios';
import { User } from '../types';

export type CreateOrderDTO = {
  user: User;
  orderedItems: {
    id: string;
    name: string;
    amount: number;
    price: number;
  }[];
};

export const createOrder = (data: CreateOrderDTO): Promise<{ name: string }> => {
  return axios.post('/orders.json', data);
};

// 'Content-Type': 'application/json',
