import { primaryKey } from '@mswjs/data';

export const quotes = {
  documentId: primaryKey(String),
  author: String,
  text: String,
};

export type FetchQuotes = {
  [id: string]: {
    author: string;
    text: string;
  };
};
