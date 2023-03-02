import clsx from 'clsx';
import { useState } from 'react';
import Transition from 'react-transition-group/Transition';

import { Backdrop } from '../components/Backdrop/Backdrop';
import { Button } from '../components/Elements';
import { List } from '../components/List/List';
import { Modal } from '../components/Modal/Modal';

export const Animation = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showBlock, setShowBlock] = useState(false);

  const showModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="text-center">
      <h1>React Animations</h1>
      <Button type="button" onClick={() => setShowBlock(!showBlock)}>
        Toggle
      </Button>
      <br />
      <Transition in={showBlock} timeout={300} mountOnEnter unmountOnExit>
        {(state) => (
          <div
            className={clsx(
              'm-auto h-[100px] w-[100px] bg-red-500',
              'transition-opacity duration-1000 ease-out',
              state === 'exited' ? 'opacity-0' : 'opacity-100',
            )}
          />
        )}
      </Transition>
      <Modal show={modalIsOpen} closed={closeModal} />
      {modalIsOpen ? <Backdrop show /> : null}
      <Button type="button" onClick={showModal}>
        Open Modal
      </Button>
      <h3>Animating Lists</h3>
      <List />
    </div>
  );
};
