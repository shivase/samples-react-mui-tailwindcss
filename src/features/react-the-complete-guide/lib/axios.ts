import Axios from 'axios';

import { API_URL } from '@/config';

import { useNotificationStore } from '../stores/notifications';

export const axios = Axios.create({
  baseURL: API_URL,
  headers: { Accept: 'application/json' },
});

//axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;
    useNotificationStore.getState().addNotification({
      type: 'error',
      title: 'Error',
      message,
    });

    return Promise.reject(error);
  },
);
