import clsx from 'clsx';
import { useState, useEffect, useCallback } from 'react';

import { API_URL } from '@/config';

import AddMovie from '../components/AddMovie';
import type { MovieType } from '../components/Movie';
import MovieList from '../components/MovieList';

type Movies = {
  [key: string]: MovieType;
};

export const HttpRequest = () => {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchMovieHandler = useCallback(async () => {
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch(API_URL + '/movies.json');

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const loadedMovies: MovieType[] = [];
      const data: Movies = (await response.json()) as Movies;

      Object.keys(data).forEach((key) => {
        loadedMovies.push({
          id: data[key].id,
          title: data[key].title,
          releaseDate: data[key].releaseDate,
          openingText: data[key].openingText,
        });
      });

      setMovies(loadedMovies);
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    void fetchMovieHandler();
  }, [fetchMovieHandler]);

  const addMovieHandler = async (movie: MovieType) => {
    await fetch(API_URL + '/movies.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  return (
    <div className="font-NotoSansJP">
      <section className={clsx('my-4 mx-auto max-w-[40rem] rounded-xl bg-white p-16 text-center')}>
        <AddMovie
          onAddMovie={(movie) => {
            void addMovieHandler(movie);
          }}
        />
      </section>
      <section className={clsx('my-4 mx-auto max-w-[40rem] rounded-xl bg-white p-16 text-center')}>
        <button
          type="button"
          onClick={() => {
            void fetchMovieHandler();
          }}
          className={clsx(
            `cursor-pointer rounded-2xl border-solid border-[#230052]
            bg-[#230052] py-3 px-8 text-white hover:border-[#460897]
            hover:bg-[#460897] focus:outline-none
            active:border-[#460897] active:bg-[#460897]
            `,
          )}>
          Fetch Movie
        </button>
      </section>
      <section className={clsx('my-4 mx-auto max-w-[40rem] rounded-xl bg-white p-16 text-center')}>
        {!isLoading && movies.length > 0 && <MovieList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>Found no movies</p>}
        {isLoading && <p>Loading...</p>}
        {!isLoading && error && <p>{error}</p>}
      </section>
    </div>
  );
};
