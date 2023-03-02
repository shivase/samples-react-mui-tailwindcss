import clsx from 'clsx';
import { FC } from 'react';
import { Link } from 'react-router-dom';

type LinkButtonProps = {
  to: string;
  flat?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

export const LinkButton: FC<LinkButtonProps> = (props) => {
  const nonFlat =
    'cursor-pointer rounded-md border-[1px] border-solid border-teal-500 bg-teal-500 py-3 px-6 text-white no-underline' +
    ' hover:border-[#11acac] hover:bg-[#11acac]' +
    ' active:border-[#11acac] active:bg-[#11acac]';
  const flat =
    'cursor-pointer rounded-md border-none bg-none py-3 px-6 text-inherit text-teal-500 no-underline' +
    ' hover:bg-teal-500 hover:text-white' +
    ' active:bg-teal-500 active:text-white';

  return (
    <Link
      className={clsx(props.flat && flat, !props.flat && nonFlat, props.className)}
      onClick={props.onClick}
      to={props.to}>
      {props.children}
    </Link>
  );
};
