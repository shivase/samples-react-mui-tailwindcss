import { FC, useContext } from 'react';

import CartContext, { Item } from '../../store/cart-context';
import Modal from '../UI/Modal';

import CartItem from './CartItem';

type CartProps = {
  onCloseClick: () => void;
  onOrderClick?: () => void;
};

const Cart: FC<CartProps> = (props) => {
  const { onCloseClick, onOrderClick } = props;
  const cartCtx = useContext(CartContext);
  const cartItems = cartCtx.items;

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (item: Item) => {
    cartCtx.removeItem({
      id: item.id,
      name: item.name,
      amount: 1,
      price: item.price,
    });
  };

  const cartItemAddHandler = (item: Item) => {
    cartCtx.addItem({
      id: item.id,
      name: item.name,
      amount: 1,
      price: item.price,
    });
  };

  return (
    <Modal>
      <ul className="m-0 max-h-[20rem] list-none overflow-scroll p-0">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onRemove={cartItemRemoveHandler}
            onAdd={cartItemAddHandler}
          />
        ))}
      </ul>
      <div className="my-4 mx-0 flex items-center justify-between text-2xl font-bold">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className="text-right">
        <button
          type="button"
          onClick={onCloseClick}
          className="ml-4 cursor-pointer
          rounded-3xl border-[1px]
          border-[#8a2b06] py-2 px-8 text-[#8a2b06]
          hover:border-[#5a1a01] hover:bg-[#5a1a01] hover:text-white
          active:border-[#5a1a01] active:bg-[#5a1a01] active:text-white">
          Close
        </button>
        {hasItems && (
          <button
            type="button"
            onClick={onOrderClick}
            className="ml-4 cursor-pointer rounded-3xl border-solid
          border-[#8a2b06] bg-[#8a2b06] py-2 px-8
          hover:border-[#5a1a01] hover:bg-[#5a1a01] hover:text-white
          active:border-[#5a1a01] active:bg-[#5a1a01] active:text-white
          ">
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
