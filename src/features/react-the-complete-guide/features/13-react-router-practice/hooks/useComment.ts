import { useMutation, useQuery } from '@tanstack/react-query';

import { ExtractFnReturnType, MutationConfig, queryClient, QueryConfig } from '@/lib/react-query';

import { useNotificationStore } from '../../../stores/notifications';
import { getComments, GetCommentsDTO, postComment } from '../api';

type PostCommentQueryFnType = typeof postComment;
type GetCommentsQueryFnType = typeof getComments;

type UsePostCommentOptions = {
  config?: MutationConfig<PostCommentQueryFnType>;
};

type UseGetCommentsOptions = {
  id: string;
  config?: QueryConfig<GetCommentsQueryFnType>;
};

export const usePostComment = ({ config }: UsePostCommentOptions = {}) => {
  const { addNotification } = useNotificationStore();

  return useMutation({
    ...config,
    onSuccess: async (result, variables) => {
      const newComment = {
        [result.name]: {
          text: variables.comment.text,
        },
      };
      await queryClient.cancelQueries(['comments']);

      const prevCOmments = queryClient.getQueryData<GetCommentsDTO>(['comments']) ?? {};
      queryClient.setQueryData(['comments'], {
        ...prevCOmments,
        ...newComment,
      });

      addNotification({
        type: 'success',
        title: 'Comment Added',
        autoClose: 3000,
      });

      return { prevCOmments };
    },
    mutationFn: postComment,
  });
};

export const useGetComments = ({ id, config }: UseGetCommentsOptions) => {
  return useQuery<ExtractFnReturnType<GetCommentsQueryFnType>>({
    ...config,
    queryKey: ['comments'],
    queryFn: () => getComments(id),
  });
};
