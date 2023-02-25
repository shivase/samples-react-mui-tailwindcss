import clsx from 'clsx';
import { FC } from 'react';

type ButtonProps = {
  color: 'blue' | 'cyan';
  children: React.ReactNode;
};

export const Button: FC<ButtonProps> = ({ color, children }) => {
  return (
    <a
      href="#"
      className={clsx(
        color === 'blue' && 'bg-lightBlue',
        color === 'cyan' && 'bg-strongCyan',
        'rounded-full p-4 px-8 shadow-lg duration-200 hover:opacity-80',
      )}>
      {children}
    </a>
  );
};
