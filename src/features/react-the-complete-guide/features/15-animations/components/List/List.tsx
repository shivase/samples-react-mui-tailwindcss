/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import TransitionGroup from 'react-transition-group/TransitionGroup';

import { Button } from '../Elements';

export const List = () => {
  const [items, setItems] = useState([1, 2, 3]);

  const addItemHandler = () => {
    setItems(items.concat(items.length + 1));
  };

  const removeItemHandler = (selIndex: number) => {
    setItems(items.filter((item, index) => index !== selIndex));
  };

  const listItems = items.map((item, index) => (
    <CSSTransition
      key={index}
      classNames={{
        enter: 'opacity-0',
        enterActive: 'opacity-100 transition-opacity duration-300 ease-out',
        exit: 'opacity-100',
        exitActive: 'opacity-0 transition-opacity duration-300 ease-out',
      }}
      timeout={300}>
      <li
        className="m-0  box-border w-full cursor-pointer border-[1px] border-solid border-[#521751] bg-white p-[10px] text-center hover:bg-[#ccc] active:bg-[#ccc]"
        onClick={() => removeItemHandler(index)}>
        {item}
      </li>
    </CSSTransition>
  ));

  return (
    <div>
      <Button type="button" onClick={addItemHandler}>
        Add Item
      </Button>
      <p>Click Item to Remove.</p>
      <TransitionGroup component="ul" className="my-0 mx-auto w-[280px] list-none p-0">
        {listItems}
      </TransitionGroup>
    </div>
  );
};
