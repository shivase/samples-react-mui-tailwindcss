import clsx from 'clsx';

export const LoadingSpinner = () => {
  return (
    <div
      className={clsx(
        'my-12 mx-auto flex items-center justify-center text-center',
        `h-[80px] w-[80px]`,
        `after:m-2 after:block after:h-[64px] after:w-[64px] after:animate-spinner after:rounded-[50%] after:border-[6px] after:border-solid after:border-teal-500 `,
      )}></div>
  );
};
