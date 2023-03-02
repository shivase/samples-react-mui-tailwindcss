import useCounter from '../hooks/useCounter';

import Card from './Card';

const BackwardCounter = () => {
  const cntFn = (num: number): number => num - 1;
  const counter = useCounter(cntFn);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
