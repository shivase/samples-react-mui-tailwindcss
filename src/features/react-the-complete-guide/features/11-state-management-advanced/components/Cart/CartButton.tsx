import { Button } from '../../../../components/Elements/Button/Button';
import { useCartStore } from '../../stores/cart';

export const CartButton = () => {
  const { items, toggleVisible } = useCartStore();

  return (
    <Button
      onClick={toggleVisible}
      className="border-[1px] border-solid border-[#1ad1b9] bg-transparent text-[#1ad1b9] hover:text-white active:text-white ">
      <span className="my-0 mx-2">My Cart</span>
      <span className="rounded-3xl bg-[#1ad1b9] py-1 px-5 text-[#1d1d1d]">
        {items ? items.reduce((acc, item): number => acc + item.quantity, 0) : 0}
      </span>
    </Button>
  );
};
