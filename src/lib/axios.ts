import Axios from 'axios';

export const axios = Axios.create({
  headers: { Accept: 'application/json' },
});

//axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  },
);
