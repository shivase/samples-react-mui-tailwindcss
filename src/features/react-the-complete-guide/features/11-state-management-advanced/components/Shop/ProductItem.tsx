import { FC } from 'react';

import { Button } from '../../../../components/Elements/Button/Button';
import { useNotificationStore } from '../../../../stores/notifications';
import { useCartStore } from '../../stores/cart';
import { Product } from '../../types';
import { Card } from '../UI/Card';

type ProductItemProps = Product;

export const ProductItem: FC<ProductItemProps> = (props) => {
  const { addNotification } = useNotificationStore();
  const { title, price, description } = props;
  const { addCart } = useCartStore();

  const addCartHandler = () => {
    addCart(props);
    addNotification({
      type: 'success',
      title: 'cart added',
      autoClose: 1000,
    });
  };

  return (
    <li>
      <Card>
        <header className="flex items-baseline justify-between">
          <h3 className="my-2 mx-0 text-lg font-bold">{title}</h3>
          <div className="rounded-[30px] bg-[#3a3a3a] py-1 px-6 text-base text-white">
            ${price.toFixed(2)}
          </div>
        </header>
        <p className="text-[#3a3a3a]">{description}</p>
        <div className="flex justify-end">
          <Button onClick={addCartHandler}>Add to Cart</Button>
        </div>
      </Card>
    </li>
  );
};
