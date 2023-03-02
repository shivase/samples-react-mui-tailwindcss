import { Navigate, Route, Routes } from 'react-router-dom';

import { Comments } from '../components/comments/Comments';
import { Layout } from '../components/layout/Layout';
import { AllQuote } from '../components/pages/AllQuotes';
import { NewQuote } from '../components/pages/NewQuote';
import { NotFound } from '../components/pages/NotFound';
import { QuoteDetail } from '../components/pages/QuoteDetail';

export const ReactRouterPractice = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate replace to="quotes" />} />
        <Route path="quotes" element={<AllQuote />} />
        <Route path="quotes/:quoteId" element={<QuoteDetail />}>
          <Route path="comments" element={<Comments />} />
        </Route>
        <Route path="new-quote" element={<NewQuote />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
