import create from 'zustand';

type CounterStore = {
  counter: number;
  showCounter: boolean;
  increment: () => void;
  increase: (val: number) => void;
  decrement: () => void;
  toggleCounter: () => void;
};

export const useCounterStore = create<CounterStore>((set) => ({
  counter: 0,
  showCounter: true,
  increment: () =>
    set((state) => {
      return { counter: state.counter + 1 };
    }),
  increase: (value) =>
    set((state) => {
      return { counter: state.counter + value };
    }),
  decrement: () =>
    set((state) => {
      return { counter: state.counter - 1 };
    }),
  toggleCounter: () =>
    set((state) => {
      return { showCounter: !state.showCounter };
    }),
}));
