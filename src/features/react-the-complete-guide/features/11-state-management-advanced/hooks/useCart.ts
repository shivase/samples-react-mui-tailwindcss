import { useMutation, useQuery } from '@tanstack/react-query';

import { ExtractFnReturnType, MutationConfig, QueryConfig } from '@/lib/react-query';

import { putCart, getCart } from '../api';

type PutCartQueryFnType = typeof putCart;
type GetCartQueryFnType = typeof getCart;

type UsePutCartOptions = {
  config?: MutationConfig<PutCartQueryFnType>;
};

type UseGetCartOptions = {
  config?: QueryConfig<GetCartQueryFnType>;
};

export const usePutCart = ({ config }: UsePutCartOptions = {}) => {
  return useMutation({
    ...config,
    mutationFn: putCart,
    onSuccess: () => {},
  });
};

export const useGetCart = ({ config }: UseGetCartOptions = {}) => {
  return useQuery<ExtractFnReturnType<GetCartQueryFnType>>({
    ...config,
    queryKey: ['cart'],
    queryFn: () => getCart(),
  });
};
