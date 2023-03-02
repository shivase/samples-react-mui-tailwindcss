import { FC } from 'react';

import type { Comment } from '../../types';

import { CommentItem } from './CommentItem';

type CommentsListProps = {
  comments: Comment[];
};

export const CommentsList: FC<CommentsListProps> = (props) => {
  return (
    <ul className="my-10 mx-0 list-none p-0">
      {props.comments.map((comment) => (
        <CommentItem key={comment.id} text={comment.text} />
      ))}
    </ul>
  );
};
