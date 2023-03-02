/* eslint-disable react/button-has-type */
import { FC } from 'react';

type ButtonProps = {
  type: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  children?: React.ReactNode;
};

const Button: FC<ButtonProps> = (props) => {
  const { type, onClick, children } = props;

  return (
    <button
      type={type}
      className="cursor-pointer border-[1px] border-solid border-[#4f005f] bg-[#4f005f] py-1 px-4 text-white hover:border-[#741188] hover:bg-[#741188] focus:outline-none active:border-[#741188] active:bg-[#741188]"
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
