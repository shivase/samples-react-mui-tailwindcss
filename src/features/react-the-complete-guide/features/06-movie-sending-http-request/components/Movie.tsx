import clsx from 'clsx';
import { FC } from 'react';

export type MovieType = {
  id: number;
  title: string;
  releaseDate: string;
  openingText: string;
};

type MovieProps = {
  title: string;
  releaseDate: string;
  openingText: string;
};

const Movie: FC<MovieProps> = (props) => {
  const { title, releaseDate, openingText } = props;

  return (
    <li
      className={clsx(
        'm-1 rounded-xl bg-[#230052] p-1 text-center text-white shadow-[0_2px_8px_rgba(0,0,0,0.26)]',
      )}>
      <h2 className={clsx('text-3xl text-[#f7e702]')}>{title}</h2>
      <h3 className={clsx('m-0 text-base text-[#eccf77]')}>{releaseDate}</h3>
      <p>{openingText}</p>
    </li>
  );
};

export default Movie;
