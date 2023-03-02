import { useQuery } from '@tanstack/react-query';

import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';

import { getMeals } from '../api';

type QueryFnType = typeof getMeals;

type UseMealsOptions = {
  config?: QueryConfig<QueryFnType>;
};

export const useMeals = ({ config }: UseMealsOptions = {}) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['meals'],
    queryFn: () => getMeals(),
  });
};
