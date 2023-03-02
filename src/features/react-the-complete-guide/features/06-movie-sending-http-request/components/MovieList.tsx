import clsx from 'clsx';
import { FC } from 'react';

import Movie from './Movie';
import type { MovieType } from './Movie';

type MovieListProps = {
  movies: MovieType[];
};

const MovieList: FC<MovieListProps> = (props) => {
  const { movies } = props;

  return (
    <ul className={clsx('m-0 list-none p-0')}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default MovieList;
