import clsx from 'clsx';
import { FC } from 'react';
import Transition from 'react-transition-group/Transition';

import { Button } from '../Elements';

type modalProps = {
  show: boolean;
  closed?: () => void;
};

const animationTiming = {
  enter: 500,
  exit: 1000,
};

export const Modal: FC<modalProps> = (props) => {
  return (
    <>
      <Transition in={props.show} timeout={animationTiming} mountOnEnter unmountOnExit>
        {(state) => (
          <div
            className={clsx(
              state === 'entering'
                ? 'translate-y-[0%] opacity-100 duration-500 ease-out'
                : state === 'exiting'
                ? 'translate-y-[-100%] opacity-0 duration-1000 ease-out'
                : null,
              'fixed top-[30%] left-[25%] z-[200] box-border w-[50%] border-[1px] border-solid border-[#eee] bg-white p-2 text-center shadow-[0_2px_2px_#ccc]',
            )}>
            <h1>A Modal</h1>
            <Button type="button" onClick={props.closed}>
              Dismiss
            </Button>
          </div>
        )}
      </Transition>
    </>
  );
};
