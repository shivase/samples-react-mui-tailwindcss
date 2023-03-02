import { FC, Fragment } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { Button } from '../../../../components/Elements/Button/Button';

import { QuoteItem } from './QuoteItem';

type QuoteListProps = {
  quotes: {
    id: string;
    author: string;
    text: string;
  }[];
};

const sortQuotes = (quotes: any, ascending: any) => {
  return quotes.sort((quoteA: any, quoteB: any) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

export const QuoteList: FC<QuoteListProps> = (props) => {
  const navigator = useNavigate();
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const isSortingAscending = query.get('sort') === 'asc';

  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

  const changeSortingHandler = () => {
    navigator('?sort=' + (isSortingAscending ? 'desc' : 'asc'));
  };

  return (
    <Fragment>
      <div className="border-b-2 border-solid border-b-[#b2d4d4] pb-4">
        <Button
          onClick={changeSortingHandler}
          className="cursor-pointer rounded-md border-[1px] border-solid border-teal-500 bg-transparent py-2 px-6 text-teal-500  hover:bg-[#c2fafa] active:bg-[#c2f0f0]">
          Sort {isSortingAscending ? 'Descending' : 'Ascending'}
        </Button>
      </div>
      <ul className="m-0 list-none p-0">
        {sortedQuotes.map((quote: any) => (
          <QuoteItem key={quote.id} id={quote.id} author={quote.author} text={quote.text} />
        ))}
      </ul>
    </Fragment>
  );
};
