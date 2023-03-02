import clsx from 'clsx';
import React, { FC } from 'react';

const variants = {
  primary: 'bg-blue-600 text-white active:bg-blue-500 hover:bg-blue-500',
  inverse: 'bg-white text-blue-600',
  danger: 'bg-red-600 text-white active:bg-red-500 hover:bg-red-500',
};

const sizes = {
  sm: 'py-2 px-4 text-sm',
  md: 'py-2 px-6 text-md',
  lg: 'py-3 px-8 text-lg',
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
};

export const Button: FC<ButtonProps> = ({
  type = 'button',
  className = '',
  variant = 'primary',
  size = 'md',
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={props.onClick}
      className={clsx(
        'cursor-pointer rounded-md border-[1px] border-solid py-2 px-6',
        variants[variant],
        sizes[size],
        className,
      )}>
      {props.children}
    </button>
  );
};
