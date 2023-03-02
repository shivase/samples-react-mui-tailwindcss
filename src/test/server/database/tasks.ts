import { primaryKey } from '@mswjs/data';

export const tasks = {
  documentId: primaryKey(String),
  text: String,
};

export type FetchTask = {
  [id: string]: {
    text: string;
  };
};
