import { FC } from 'react';

type CardProps = {
  children: React.ReactNode;
};

const Card: FC<CardProps> = (props) => {
  const { children } = props;

  return (
    <div className="rounded-2xl bg-white p-4 shadow-[0_2px_8px_rgba(0,0,0,0.25)]">{children}</div>
  );
};

export default Card;
