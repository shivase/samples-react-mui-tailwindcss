import clsx from 'clsx';
import { FC } from 'react';

type ButtonProps = {
  outline: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

export const Button: FC<ButtonProps> = (props) => {
  return (
    <button
      className={clsx(
        'my-2 mx-0 cursor-pointer rounded-md border-[1px] border-solid border-[#ff2058] py-2 px-8',
        props.outline
          ? 'bg-white text-[#ff2058] hover:bg-[#ff2058] hover:text-white hover:shadow-none active:bg-[#ff2058] active:text-white active:shadow-none'
          : 'bg-[#ff2058] text-white hover:bg-white hover:text-[#ff2058] focus:outline-none active:bg-white active:text-[#ff2058]',
      )}
      onClick={props.onClick}>
      {props.children}
    </button>
  );
};
