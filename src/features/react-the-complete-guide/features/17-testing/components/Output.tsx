import { FC } from 'react';

type OutputProps = {
  children: React.ReactNode;
};

export const Output: FC<OutputProps> = (props) => {
  return <p>{props.children}</p>;
};
