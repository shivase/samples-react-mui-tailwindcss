import clsx from 'clsx';
import { FC } from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export const Card: FC<CardProps> = (props) => {
  return (
    <section
      className={clsx(
        'my-4 mx-auto w-[90%] max-w-[40rem] rounded-md bg-white p-4',
        props.className,
      )}>
      {props.children}
    </section>
  );
};
