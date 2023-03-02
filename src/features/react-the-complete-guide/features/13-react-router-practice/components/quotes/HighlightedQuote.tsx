import { FC } from 'react';

type HighlightedQuoteType = {
  text: string;
  author: string;
};

export const HighlightedQuote: FC<HighlightedQuoteType> = (props) => {
  return (
    <figure className="my-12 mx-auto w-[90%] max-w-[40rem] rounded-md bg-[#162b2b] p-12 text-white">
      <p className="text-4xl">{props.text}</p>
      <figcaption className="text-right text-2xl italic text-[#a1e0e0]">{props.author}</figcaption>
    </figure>
  );
};
