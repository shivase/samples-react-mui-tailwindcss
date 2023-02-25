import clsx from 'clsx';
import { FC } from 'react';

type HeaderProps = {
  type: 'h3' | 'h5';
  children: React.ReactNode;
};

export const Header: FC<HeaderProps> = ({ type, children }) => {
  return (
    <div
      className={clsx(
        type === 'h3' && 'mb-8 text-4xl font-bold text-darkGrayishBlue md:text-5xl',
        type === 'h5' && 'mb-2 text-2xl font-bold text-darkGrayishBlue',
      )}>
      {children}
    </div>
  );
};
