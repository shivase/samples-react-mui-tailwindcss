import { Button } from '../../..//components/Elements/Button/Button';
import { useCounterStore } from '../stores/counter';

export const Counter = () => {
  const { counter, showCounter, increment, increase, decrement, toggleCounter } = useCounterStore();
  const toggleCounterHandler = () => {
    toggleCounter();
  };

  return (
    <>
      <main className="my-20 mx-auto w-[40rem] rounded-lg bg-[#f4f0fa] p-4 text-center shadow-[0_1px_8px_rgba(0,0,0,0.2)]">
        <h1 className="m-0 text-base uppercase text-[#575757]">zustand Counter</h1>
        {showCounter && (
          <div className="my-8 mx-0 text-4xl font-bold text-[#3c0080]">{counter}</div>
        )}
        <div className="m-4">
          <Button type="button" onClick={increment}>
            Increment
          </Button>
          <Button type="button" onClick={() => increase(5)}>
            Increase by 5
          </Button>
          <Button type="button" onClick={decrement}>
            Decrement
          </Button>
        </div>
        <Button type="button" onClick={toggleCounterHandler}>
          Toggle Counter
        </Button>
      </main>
    </>
  );
};
