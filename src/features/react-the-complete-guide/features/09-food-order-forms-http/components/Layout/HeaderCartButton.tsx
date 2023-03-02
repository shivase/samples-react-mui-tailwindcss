import { FC, useContext, useEffect, useState } from 'react';

import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';

type HeaderCartButtonProps = {
  onClick: () => void;
};

const HeaderCartButton: FC<HeaderCartButtonProps> = (props) => {
  const { onClick } = props;
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce(
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands, @typescript-eslint/no-unsafe-return
    (current, item): number => current + item.amount,
    0,
  );

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    // eslint-disable-next-line consistent-return
    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${btnIsHighlighted ? 'animate-bump' : ''}
      flex cursor-pointer
      items-center justify-around rounded-3xl border-none
      bg-[#4d1601] py-3 px-12 font-bold
      text-white hover:bg-[#2c0d00]
      active:bg-[#2c0d00]
      `}>
      <span className="mr-2 h-6 w-6">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span
        className="
        ml-4 rounded-3xl bg-[#b94517] py-1 px-4 font-bold
        hover:bg-[#92320c] active:bg-[#92320c]
        ">
        {numberOfCartItems}
      </span>
    </button>
  );
};

export default HeaderCartButton;
