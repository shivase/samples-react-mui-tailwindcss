import { axios } from '../../../lib/axios';
import { Comment } from '../types';

export type GetCommentsDTO = {
  [key: string]: Omit<Comment, 'id'>;
};

export const getComments = (id: string): Promise<GetCommentsDTO> => {
  return axios.get(`/comments/${id}.json`);
};
