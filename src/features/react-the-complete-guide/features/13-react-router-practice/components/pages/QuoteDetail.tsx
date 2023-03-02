import { Outlet, useParams } from 'react-router-dom';

import { Spinner } from '../../../../components/Elements';
import { useGetSingleQuote } from '../../hooks/useQuotes';
import { LinkButton } from '../Elements/LinkButton';
import { HighlightedQuote } from '../quotes/HighlightedQuote';

export const QuoteDetail = () => {
  const params = useParams();
  const { quoteId = '' } = params;

  const response = useGetSingleQuote({ id: quoteId });
  const quote = response.data;

  if (response.isLoading) {
    return (
      <div className="flex h-48 w-full items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <>
      {response.isSuccess && quote && (
        <>
          <HighlightedQuote author={quote.author} text={quote.text} />
          <div className="my-12 mx-auto flex items-center justify-center text-center ">
            <LinkButton flat to={'comments'}>
              Load Comments
            </LinkButton>
          </div>
          <Outlet />
        </>
      )}
      {response.isSuccess && !quote && <p>No quote found!</p>}
    </>
  );
};
