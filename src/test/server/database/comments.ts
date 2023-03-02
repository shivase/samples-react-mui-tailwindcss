import { primaryKey } from '@mswjs/data';

export const comments = {
  documentId: primaryKey(String),
  quoteId: String,
  text: String,
};

export type FetchComments = {
  [id: string]: {
    text: string;
  };
};
