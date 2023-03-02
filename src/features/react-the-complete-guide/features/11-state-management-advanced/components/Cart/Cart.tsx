import { useCartStore } from '../../stores/cart';
import { Card } from '../UI/Card';

import { CartItemView } from './CartItemView';

export const Cart = () => {
  const { items, visible } = useCartStore();

  return (
    <>
      {visible && (
        <Card className="max-w-[30rem] bg-[#313131] text-white">
          <h2 className="my-2 mx-0 text-xl">Your Shopping Cart</h2>
          {items && (
            <ul className="m-0 list-none p-0">
              {items.map((item) => (
                <CartItemView key={item.id} item={item} />
              ))}
            </ul>
          )}
          {!items && <p className="my-2 mx-0 text-center font-bold text-white">No cart item</p>}
        </Card>
      )}
    </>
  );
};
