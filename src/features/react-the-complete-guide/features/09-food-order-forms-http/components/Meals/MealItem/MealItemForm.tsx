import { FC, useRef, useState } from 'react';

import Input from '../../UI/Input';

type MealItemFormProps = {
  id: string;
  onAddToCart: (num: number) => void;
};

const MealItemForm: FC<MealItemFormProps> = (props) => {
  const { id, onAddToCart } = props;
  const amountInputRef = useRef<HTMLInputElement>(null);
  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (amountInputRef.current) {
      const enteredAmount = amountInputRef.current.value;
      const amount = +enteredAmount;
      if (enteredAmount.trim().length === 0 || amount < 1 || amount > 5) {
        setAmountIsValid(false);

        return;
      }

      onAddToCart(amount);
    }
  };

  return (
    <form className="text-right" onSubmit={(e) => submitHandler(e)}>
      <Input
        ref={amountInputRef}
        label="Amount"
        id={`"amount_" + ${id}`}
        type="number"
        min="1"
        max="5"
        step="1"
        defaultValue="1"
      />
      <button
        type="submit"
        className="
        cursor-pointer rounded-2xl border-solid border-[#8a2b06]
        bg-[#8a2b06] py-1 px-8 font-bold text-white
        hover:border-[#641e03] hover:bg-[#641e03]
        active:border-[#641e03] active:bg-[#641e03]
        ">
        + Add
      </button>
      {!amountIsValid && <p>Please enter a valid amount(1-5).</p>}
    </form>
  );
};

export default MealItemForm;
