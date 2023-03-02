export type Task = {
  id: string;
  text: string;
};

export type PostTask = {
  text: string;
};

export type FetchTask = {
  [key: string]: {
    text: string;
  };
};
