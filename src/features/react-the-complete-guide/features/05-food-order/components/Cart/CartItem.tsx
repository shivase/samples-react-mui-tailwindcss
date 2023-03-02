import { FC } from 'react';

import type { Item } from '../..//store/cart-context';

type CartItemProps = {
  item: Item;
  onRemove: (item: Item) => void;
  onAdd: (item: Item) => void;
};

const CartItem: FC<CartItemProps> = (props) => {
  const { item, onRemove, onAdd } = props;

  return (
    <li>
      <div className="my-4 mx-0 flex items-center justify-between border-b-2 border-solid border-[#8a2b06] py-4 px-0">
        <h2 className="mx-0 mt-0 mb-2 text-[#363636]">{item.name}</h2>
        <div className="flex w-40 items-center justify-between">
          <span className="font-bold text-[#8a2b06]">${item.price.toFixed(2)}</span>
          <span className="rounded-md border-[1px] border-solid border-[#ccc] py-1 px-3 font-bold text-[#363636]">
            x {item.amount}
          </span>
        </div>
        <div className="flex flex-col md:flex-row">
          <button
            type="button"
            onClick={() => onRemove(item)}
            className="
              m-1 ml-4 w-12 cursor-pointer rounded-md border-[1px]
              border-solid border-[#8a2b06] bg-transparent
              text-center text-sm font-bold text-[#8a2b06]
              hover:bg-[#8a2b06] hover:text-white
              active:bg-[#8a2b06] active:text-white
              ">
            -
          </button>
          <button
            type="button"
            onClick={() => onAdd(item)}
            className="
              m-1 ml-4 w-12 cursor-pointer rounded-md border-[1px]
              border-solid border-[#8a2b06] bg-transparent
              text-center text-sm font-bold text-[#8a2b06]
              hover:bg-[#8a2b06] hover:text-white
              active:bg-[#8a2b06] active:text-white
              ">
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
