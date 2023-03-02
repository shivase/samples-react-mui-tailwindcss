import { FC } from 'react';

import { Button } from '../../../../components/Elements/Button/Button';
import { useCartStore } from '../../stores/cart';
import { CartItem } from '../../types';

type CartItemProps = {
  item: CartItem;
};

export const CartItemView: FC<CartItemProps> = (props) => {
  const { title, quantity, total, price } = props.item;
  const { addCart, delCart } = useCartStore();

  return (
    <li className="my-4 mx-0 bg-[#575757] p-4">
      <header className="flex items-center justify-between">
        <h3 className="m-0 mb-2 text-3xl">{title}</h3>
        <div className="text-2xl font-bold">
          ${total.toFixed(2)}{' '}
          <span className="text-base font-normal italic">(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className="flex items-center justify-between">
        <div>
          x <span className="text-2xl font-bold">{quantity}</span>
        </div>
        <div className="my-2 mx-0 flex justify-end">
          <Button size="sm" onClick={() => delCart(props.item)}>
            -
          </Button>
          <Button size="sm" onClick={() => addCart(props.item)}>
            +
          </Button>
        </div>
      </div>
    </li>
  );
};
