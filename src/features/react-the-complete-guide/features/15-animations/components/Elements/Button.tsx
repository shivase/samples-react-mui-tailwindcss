import { FC } from 'react';

type ButtonProps = {
  type: 'button' | 'submit';
  onClick?: () => void;
  children: React.ReactNode;
};

export const Button: FC<ButtonProps> = (props) => {
  return (
    <button
      className="cursor-pointer border-[1px] border-solid border-[#521751] bg-[#521751] p-2 text-white hover:bg-[#fa923f] active:bg-[#fa923f]"
      type={props.type}
      onClick={props.onClick}>
      {props.children}
    </button>
  );
};
