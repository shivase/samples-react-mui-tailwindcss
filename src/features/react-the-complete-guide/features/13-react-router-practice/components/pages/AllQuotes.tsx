import React from 'react';

import { Spinner } from '../../../../components/Elements';
import { useGetQuotes } from '../../hooks/useQuotes';
import { Quote } from '../../types';
import { NoQuotesFound } from '../quotes/NoQuotesFound';
import { QuoteList } from '../quotes/QuoteList';

export const AllQuote = () => {
  const quotes = useGetQuotes();

  const res: Quote[] = [];
  if (quotes.data) {
    Object.keys(quotes.data).forEach((key) => {
      res.push({
        id: key,
        author: quotes.data[key].author,
        text: quotes.data[key].text,
      });
    });
  }

  if (quotes.isLoading) {
    return (
      <div className="flex h-48 w-full items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <>
      {quotes.isSuccess && res.length === 0 && <NoQuotesFound />}
      {quotes.isSuccess && res.length > 0 && <QuoteList quotes={res} />}
    </>
  );
};
