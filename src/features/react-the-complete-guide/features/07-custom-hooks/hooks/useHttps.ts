import { useState, useCallback } from 'react';

export const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const sendRequest = useCallback(
    async <T = any>(input: RequestInfo, init: RequestInit, setData: (data: T) => void) => {
      setIsLoading(true);
      setError('');

      const response = await fetch(input, init);

      if (!response.ok) {
        throw new Error('Request failed!');
      }
      const data: T = await response.json();
      setData(data);
      setIsLoading(false);
    },
    [],
  );

  return {
    isLoading,
    error,
    sendRequest,
  };
};
