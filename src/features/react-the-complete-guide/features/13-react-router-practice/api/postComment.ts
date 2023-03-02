import { axios } from '../../../lib/axios';
import { Comment } from '../types';

export type PostCommentDTO = {
  quoteId: string;
  comment: Omit<Comment, 'id'>;
};

export const postComment = ({ quoteId, comment }: PostCommentDTO): Promise<{ name: string }> => {
  return axios.post(`/comments/${quoteId}.json`, comment);
};
