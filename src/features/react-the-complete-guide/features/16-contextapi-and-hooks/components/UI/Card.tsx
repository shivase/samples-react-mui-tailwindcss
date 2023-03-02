import clsx from 'clsx';
import React, { FC } from 'react';

type CardProps = {
  style: string;
  children: React.ReactNode;
};

const Card: FC<CardProps> = (props) => {
  return (
    <div className={clsx(props.style, 'rounded-md p-4 shadow-[0_2px_8px_rgba(0,0,0,0.26)]')}>
      {props.children}
    </div>
  );
};

export default Card;
