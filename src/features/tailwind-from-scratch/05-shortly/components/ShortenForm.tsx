import clsx from 'clsx';
import { useState } from 'react';

export const ShortenForm = () => {
  const [error, setError] = useState<string>('');
  const [input, setInput] = useState<string>('');

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (error) {
      setError('');
    }
    setInput(event.target.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input === '') {
      setError('Please enter something');
    } else {
      alert('Success');
    }
  };

  return (
    <section id="shorten" className="relative bg-gray-100">
      <div className="mx-auto max-w-4xl space-y-6 p-6">
        <form
          onSubmit={submitHandler}
          action=""
          id="link-form"
          className="relative -mt-20 flex w-full flex-col space-y-4 rounded-lg bg-veryDarkViolet p-10 md:flex-row md:space-y-0 md:space-x-3">
          <input
            type="text"
            value={input}
            onChange={inputHandler}
            className={clsx(
              error && 'border-red-400',
              'flex-1 rounded-lg border-2 p-3 placeholder:text-yellow-500 focus:outline-none',
            )}
            placeholder="shorten a link here"
            id="link-input"
          />
          <button className="rounded-lg bg-cyan-400 px-10 py-3 text-white hover:bg-cyanLight focus:outline-none md:py-2">
            {' '}
            Shorten It!
          </button>
          {error && (
            <div className="absolute left-7 bottom-3 text-sm italic text-red-400">{error}</div>
          )}
        </form>
        <div className="flex w-full flex-col items-center justify-between rounded-lg bg-white p-6 md:flex-row">
          <p className="text-center font-bold text-veryDarkViolet md:text-left">
            https://frontendmentor.io
          </p>
          <div className="flex flex-1 flex-col items-center justify-end space-x-4 space-y-2 md:flex-row md:space-y-0">
            <div className="font-bold text-cyan-400">https://rel.ink/k4fjifs</div>
            <button className="rounded-lg bg-cyan-400 p-2 px-8 text-white hover:opacity-70 focus:outline-none">
              Copy
            </button>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-between rounded-lg bg-white p-6 md:flex-row">
          <p className="text-center font-bold text-veryDarkViolet md:text-left">
            https://twitter.com
          </p>
          <div className="flex flex-1 flex-col items-center justify-end space-x-4 space-y-2 md:flex-row md:space-y-0">
            <div className="font-bold text-cyan-400">https://rel.ink/k4fjifs</div>
            <button className="rounded-lg bg-darkViolet p-2 px-8 text-white hover:opacity-70 focus:outline-none">
              Copy
            </button>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-between rounded-lg bg-white p-6 md:flex-row">
          <p className="text-center font-bold text-veryDarkViolet md:text-left">
            https://frontendmentor.io
          </p>
          <div className="flex flex-1 flex-col items-center justify-end space-x-4 space-y-2 md:flex-row md:space-y-0">
            <div className="font-bold text-cyan-400">https://rel.ink/k4fjifs</div>
            <button className="rounded-lg bg-cyan-400 p-2 px-8 text-white hover:opacity-70 focus:outline-none">
              Copy
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
