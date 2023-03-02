import clsx from 'clsx';
import { FC } from 'react';

type BackdropProps = {
  show: boolean;
};

export const Backdrop: FC<BackdropProps> = (props) => {
  const open = 'block';
  const closed = 'hidden';

  return (
    <div
      className={clsx(
        props.show && open,
        !props.show && closed,
        'fixed top-0 left-0 z-50 h-full w-full  bg-[rgba(0,0,0,0.8)]',
      )}
    />
  );
};
