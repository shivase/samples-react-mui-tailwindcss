import { axios } from '../../../lib/axios';
import { Quote } from '../types';

export type GetQuotesDTO = {
  [key: string]: Quote;
};

export type GetSingleQuoteDTO = Quote;

export const getQuotes = (): Promise<GetQuotesDTO> => {
  return axios.get('/quotes.json');
};

export const getSingleQuote = (id: string): Promise<GetSingleQuoteDTO> => {
  return axios.get(`/quotes/${id}.json`);
};
