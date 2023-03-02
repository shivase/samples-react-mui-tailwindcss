import { axios } from '../../../lib/axios';
import { Quote } from '../types';

export type PostQuoteDTO = Omit<Quote, 'id'>;

export const postQuote = (data: PostQuoteDTO): Promise<{ name: string }> => {
  return axios.post('/quotes.json', data, {});
};
