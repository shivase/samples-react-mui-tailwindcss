import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { usePostQuote } from '../../hooks/useQuotes';
import { QuoteFormInput } from '../../types';
import { QuoteForm } from '../quotes/QuoteForm';

export const NewQuote = () => {
  const navigate = useNavigate();
  const postQuoteMutation = usePostQuote();

  const isLoading = postQuoteMutation.isLoading;

  useEffect(() => {
    if (postQuoteMutation.isSuccess) {
      navigate('../quotes');
    }
  }, [postQuoteMutation.isSuccess, navigate]);

  const addQuoteHandler = async (data: QuoteFormInput) => {
    await postQuoteMutation.mutateAsync(data);
  };

  return <QuoteForm onAddQuote={addQuoteHandler} isLoading={isLoading} />;
};
