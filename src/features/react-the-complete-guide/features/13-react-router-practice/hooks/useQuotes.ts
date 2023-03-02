import { useMutation, useQuery } from '@tanstack/react-query';

import { ExtractFnReturnType, MutationConfig, queryClient, QueryConfig } from '@/lib/react-query';

import { useNotificationStore } from '../../../stores/notifications';
import { postQuote, getQuotes, getSingleQuote, GetQuotesDTO } from '../api';

type PostQuoteQueryFnType = typeof postQuote;
type GetQuotesQueryFnType = typeof getQuotes;
type GetSingleQuoteQueryFnType = typeof getSingleQuote;

type UsePostQuoteOptions = {
  config?: MutationConfig<PostQuoteQueryFnType>;
};

type UseGetQuotesOptions = {
  config?: QueryConfig<GetQuotesQueryFnType>;
};

type UseGetSingleQuoteOptions = {
  id: string;
  config?: QueryConfig<GetSingleQuoteQueryFnType>;
};

export const usePostQuote = ({ config }: UsePostQuoteOptions = {}) => {
  const { addNotification } = useNotificationStore();

  return useMutation({
    ...config,
    onMutate: async (newQuote) => {
      await queryClient.cancelQueries(['quotes']);

      const prevQuotes = queryClient.getQueryData<GetQuotesDTO>(['quotes']) ?? {};
      queryClient.setQueryData(['quotes'], { ...prevQuotes, newQuote });

      return { prevQuotes };
    },
    onError: (_, __, context: any) => {
      if (context?.prevQuotes) {
        queryClient.setQueryData(['quotes'], context.prevQuotes);
      }
    },
    onSuccess: () => {
      addNotification({
        type: 'success',
        title: 'Quote Added',
        autoClose: 3000,
      });
    },
    mutationFn: postQuote,
  });
};

export const useGetQuotes = ({ config }: UseGetQuotesOptions = {}) => {
  return useQuery<ExtractFnReturnType<GetQuotesQueryFnType>>({
    ...config,
    queryKey: ['quotes'],
    queryFn: () => getQuotes(),
  });
};

export const useGetSingleQuote = ({ id, config }: UseGetSingleQuoteOptions) => {
  return useQuery<ExtractFnReturnType<GetSingleQuoteQueryFnType>>({
    ...config,
    queryKey: ['quote'],
    queryFn: () => getSingleQuote(id),
  });
};
