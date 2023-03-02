import { useMutation } from '@tanstack/react-query';

import { MutationConfig } from '@/lib/react-query';

import { useNotificationStore } from '../../../stores/notifications';
import { createOrder } from '../api';

type QueryFnType = typeof createOrder;

type UseCreateOrderOptions = {
  config?: MutationConfig<QueryFnType>;
};

export const useCreateOrder = ({ config }: UseCreateOrderOptions = {}) => {
  const { addNotification } = useNotificationStore();

  return useMutation({
    ...config,
    mutationFn: createOrder,
    onSuccess: () => {
      addNotification({
        type: 'success',
        title: 'Order Succeeded',
      });
    },
  });
};
