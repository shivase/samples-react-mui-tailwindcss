import MuiButton from '@mui/material/Button';
import { FC } from 'react';

type ButtonProps = {
  children: React.ReactNode;
};

export const Button: FC<ButtonProps> = ({ children }) => {
  return (
    <MuiButton className="rounded-[8px] bg-[#777FEB] py-[20px] px-[60px] font-montserrat text-[16px] font-bold capitalize leading-[20px] text-[#ffffff] hover:bg-[#646ab0]">
      {children}
    </MuiButton>
  );
};
