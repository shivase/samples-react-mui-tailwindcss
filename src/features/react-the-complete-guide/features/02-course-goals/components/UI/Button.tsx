import { FC, ReactNode } from 'react';

type ButtonProps = {
  buttonType: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  children?: ReactNode;
};

const Button: FC<ButtonProps> = (props) => {
  const { buttonType, onClick, children } = props;

  return (
    <button
      className="w-full cursor-pointer border-[#8b005d] bg-[#8b005d] py-2 px-6 text-white shadow-[0_0_4px_rgba(0,0,0,0.26)] hover:border-[#ac0e77] hover:bg-[#ac0e77] hover:shadow-[0_0_8px_rgba(0,0,0,0.26)] focus:outline-none active:border-[#ac0e77] active:bg-[#ac0e77] active:shadow-[0_0_8px_rgba(0,0,0,0.26)] md:w-auto"
      // eslint-disable-next-line react/button-has-type
      type={buttonType}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
