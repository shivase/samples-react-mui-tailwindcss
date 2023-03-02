import { FC } from 'react';

type CommentItemProps = {
  text: string;
};

export const CommentItem: FC<CommentItemProps> = (props) => {
  return (
    <li className="my-4 mx-0 border-2 border-solid border-teal-500 pb-2 text-xl text-[#4a5555]">
      <p>{props.text}</p>
    </li>
  );
};
