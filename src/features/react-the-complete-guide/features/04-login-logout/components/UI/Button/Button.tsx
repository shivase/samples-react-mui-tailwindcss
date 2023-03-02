/* eslint-disable react/button-has-type */
import { FC, ReactNode } from 'react';

type ButtonProps = {
  type: 'button' | 'submit' | 'reset';
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

const Button: FC<ButtonProps> = (props) => {
  const { type, className = '', children, onClick, disabled } = props;

  return (
    <button
      type={type || 'button'}
      className={`${className} rounded-[30px] border-[1px]
      border-solid border-[#4f005f] bg-[#4f005f] px-14 py-3
        text-white hover:border-[#741188] hover:bg-[#741188]
        focus:outline-none active:border-[#741188] active:bg-[#741188]
        disabled:cursor-not-allowed disabled:border-[#ccc] disabled:bg-[#ccc]
        disabled:text-[#666]
        hover:disabled:cursor-not-allowed hover:disabled:border-[#666] hover:disabled:text-[#666]
        focus:disabled:cursor-not-allowed focus:disabled:border-[#666] focus:disabled:text-[#666]
        active:disabled:cursor-not-allowed active:disabled:border-[#666] active:disabled:text-[#666]
        `}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
