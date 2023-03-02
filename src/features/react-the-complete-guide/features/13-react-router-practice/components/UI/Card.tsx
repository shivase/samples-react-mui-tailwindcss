import { FC } from 'react';

type CardProps = {
  children: React.ReactNode;
};

export const Card: FC<CardProps> = (props) => {
  return (
    <div className="m-4 rounded-md bg-white p-4 shadow-[0_2px_8px_rgba(0,0,0,0.2)]">
      {props.children}
    </div>
  );
};
