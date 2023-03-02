import { useEffect, useRef } from 'react';

import { Cart } from '../components/Cart/Cart';
import { Layout } from '../components/Layout/Layout';
import { Products } from '../components/Shop/Products';
import { usePutCart, useGetCart } from '../hooks/useCart';
import { useCartStore } from '../stores/cart';

export const StateManagementAdvanced = () => {
  const { items, replaceCart } = useCartStore();
  const putCartMutation = usePutCart();
  const cart = useGetCart();
  const refFirstRef = useRef(true);

  useEffect(() => {
    if (cart.data) {
      replaceCart(cart.data);
    }
  }, [cart.data, replaceCart]);

  useEffect(() => {
    const syncCart = async () => {
      await putCartMutation.mutateAsync.call(undefined, {
        cart: items,
      });
    };
    if (refFirstRef.current) {
      refFirstRef.current = false;

      return;
    }
    syncCart();
  }, [items, putCartMutation.mutateAsync]);

  return (
    <div className="fixed z-30 h-full w-full bg-[#3f3f3f]">
      <Layout>
        <Cart />
        <Products />
      </Layout>
    </div>
  );
};
