import clsx from 'clsx';
import { FC, useRef } from 'react';

import type { MovieType } from './Movie';

type AddMovieProps = {
  onAddMovie: (movie: MovieType) => void;
};

const AddMovie: FC<AddMovieProps> = (props) => {
  const { onAddMovie } = props;

  const titleRef = useRef<HTMLInputElement>(null);
  const openingTextRef = useRef<HTMLTextAreaElement>(null);
  const releaseDateRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // could add validation here...

    if (titleRef.current && openingTextRef.current && releaseDateRef.current) {
      const movie: MovieType = {
        id: Math.random(),
        title: titleRef.current.value,
        openingText: openingTextRef.current.value,
        releaseDate: releaseDateRef.current.value,
      };
      onAddMovie(movie);
    }
  };

  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <div className="my-4 mx-0">
        <label htmlFor="title" className="mb-2 block text-left font-bold">
          Title
        </label>
        <input
          type="text"
          id="title"
          ref={titleRef}
          className="block w-full rounded-xl border-[1px] border-solid border-[#ccc] p-1 focus:border-[#230052] focus:outline-none"
        />
      </div>
      <div className="my-4 mx-0">
        <label htmlFor="opening-text" className="mb-2 block text-left font-bold">
          Opening Text
        </label>
        <textarea
          className="block w-full rounded-xl border-[1px] border-solid border-[#ccc] p-1 focus:border-[#230052] focus:outline-none"
          rows={5}
          id="opening-text"
          ref={openingTextRef}
        />
      </div>
      <div className="my-4 mx-0">
        <label htmlFor="date" className="mb-2 block text-left font-bold">
          Release Date
        </label>
        <input
          className="block w-full rounded-xl border-[1px] border-solid border-[#ccc] p-1 focus:border-[#230052] focus:outline-none"
          type="text"
          id="date"
          ref={releaseDateRef}
        />
      </div>
      <button
        className={clsx(
          `cursor-pointer rounded-2xl border-solid border-[#230052]
            bg-[#230052] py-3 px-8 text-white hover:border-[#460897]
            hover:bg-[#460897] focus:outline-none
            active:border-[#460897] active:bg-[#460897]
            `,
        )}
        type="submit">
        Add Movie
      </button>
    </form>
  );
};

export default AddMovie;
