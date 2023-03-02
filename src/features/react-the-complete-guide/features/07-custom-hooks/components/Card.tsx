import { FC } from 'react';

type CardProps = {
  children: React.ReactNode;
};

const Card: FC<CardProps> = (props) => {
  const { children } = props;

  return (
    <div className="my-12 mx-auto max-w-[40rem] rounded-xl bg-white p-4 text-center text-4xl font-bold shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
      {children}
    </div>
  );
};

export default Card;
