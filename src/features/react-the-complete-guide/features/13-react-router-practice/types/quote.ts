export type Quote = {
  id: string;
  author: string;
  text: string;
};

export type QuoteFormInput = Omit<Quote, 'id'>;
