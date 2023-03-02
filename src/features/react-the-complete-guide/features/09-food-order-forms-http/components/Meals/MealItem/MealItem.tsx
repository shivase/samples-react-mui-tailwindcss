import { FC, useContext } from 'react';

import CartContext from '../../../store/cart-context';

import MealItemForm from './MealItemForm';

export type Meal = {
  id: string;
  name: string;
  description: string;
  price: number;
};

type MealItemProps = {
  meal: Meal;
};

const MealItem: FC<MealItemProps> = (props) => {
  const { meal } = props;
  const price = `$${meal.price.toFixed(2)}`;
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount: number) => {
    cartCtx.addItem({
      id: meal.id,
      name: meal.name,
      amount,
      price: meal.price,
    });
  };

  return (
    <li className="m-4 flex justify-between border-b border-solid border-b-[#ccc] pb-4">
      <div>
        <h3 className="m-0 mb-1">{meal.name}</h3>
        <div className="italic">{meal.description}</div>
        <div className="mt-1 text-xl font-bold text-[#ad5502]">{price}</div>
      </div>
      <div>
        <MealItemForm id={meal.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
