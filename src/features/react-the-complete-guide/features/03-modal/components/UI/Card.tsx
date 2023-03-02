import { FC } from 'react';

type CardProps = {
  className?: string;
  children: React.ReactNode;
};

const Card: FC<CardProps> = (props) => {
  const { className = '', children } = props;

  return (
    <div className={`${className} rounded-xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.26)]`}>
      {children}
    </div>
  );
};

export default Card;
