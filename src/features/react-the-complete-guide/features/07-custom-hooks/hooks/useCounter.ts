import { useState, useEffect } from 'react';

const useCounter = (counterUpdateFn: (num: number) => number) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => counterUpdateFn(prev));
    }, 1000);

    return () => clearInterval(interval);
  }, [counterUpdateFn]);

  return counter;
};

export default useCounter;
