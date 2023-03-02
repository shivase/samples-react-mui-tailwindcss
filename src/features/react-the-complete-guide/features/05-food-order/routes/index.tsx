import { useState } from 'react';

import Cart from '../components/Cart/Cart';
import Header from '../components/Layout/Header';
import Meals from '../components/Meals/Meals';
import { CartProvider } from '../store/cart-context';

export const FoodOrder = () => {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <div className="font-NotoSansJP">
      <CartProvider>
        {showCart && <Cart onCloseClick={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <main>
          <Meals />
        </main>
      </CartProvider>
    </div>
  );
};
