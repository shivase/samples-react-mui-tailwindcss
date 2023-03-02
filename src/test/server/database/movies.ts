import { primaryKey } from '@mswjs/data';

export const movies = {
  documentId: primaryKey(String),
  id: String,
  title: String,
  openingText: String,
  releaseDate: String,
};

export type FetchMovie = {
  [id: string]: {
    id: string;
    title: string;
    openingText: string;
    releaseDate: string;
  };
};
