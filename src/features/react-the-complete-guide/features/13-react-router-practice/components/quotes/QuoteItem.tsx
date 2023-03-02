import { FC } from 'react';

import { LinkButton } from '../Elements/LinkButton';

type QuoteItemProps = {
  id: string;
  text: string;
  author: string;
};

export const QuoteItem: FC<QuoteItemProps> = (props) => {
  return (
    <li className=" my-4 mx-0 flex items-end justify-between rounded-md bg-[#c2e7f0] p-4 shadow-[0_2px_4px_rgba(0,0,0,0.2)] last-of-type:border-b-0">
      <figure className="m-0 w-[70%] p-0">
        <blockquote className="m-0 border-none p-0 text-left text-2xl text-[#212929]">
          <p className="m-0 mb-1">{props.text}</p>
        </blockquote>
        <figcaption className="italic text-[#566d6d]">{props.author}</figcaption>
      </figure>
      <LinkButton to={`${props.id}`}>View Fullscreen</LinkButton>
    </li>
  );
};
