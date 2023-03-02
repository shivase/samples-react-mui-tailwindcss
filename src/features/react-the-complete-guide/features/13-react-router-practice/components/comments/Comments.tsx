import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { Spinner } from '../../../../components/Elements/Spinner';
import { PostCommentDTO } from '../../api';
import { useGetComments, usePostComment } from '../../hooks/useComment';
import { Comment, CommentFormInput } from '../../types';
import { LinkButton } from '../Elements/LinkButton';

import { CommentsList } from './CommentsList';
import { NewCommentForm } from './NewCommentForm';

export const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const postCommentMutation = usePostComment();
  const params = useParams();
  const { quoteId = '' } = params;
  const comments = useGetComments({ id: quoteId });

  const res: Comment[] = [];
  if (comments.data) {
    Object.keys(comments.data).forEach((key) => {
      res.push({
        id: key,
        text: comments.data[key].text,
      });
    });
  }

  if (comments.isLoading) {
    return (
      <div className="flex h-48 w-full items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addCommentHandler = async (input: CommentFormInput) => {
    const data: PostCommentDTO = {
      quoteId: quoteId,
      comment: input,
    };
    await postCommentMutation.mutateAsync(data);
    setIsAddingComment(false);
  };

  return (
    <section className="text-center">
      <h2>User Comments</h2>
      {!isAddingComment && (
        <div className="my-8">
          <LinkButton to="." onClick={startAddCommentHandler}>
            Add a Comment
          </LinkButton>
        </div>
      )}
      {isAddingComment && <NewCommentForm onAddedComment={addCommentHandler} />}
      {comments.isSuccess && res.length > 0 && <CommentsList comments={res} />}
      {comments.isSuccess && res.length === 0 && <p>No Comment</p>}
    </section>
  );
};
