import { useCallback, useState } from 'react';

// 외부 의존성 문제 때문에 sendRequest 함수에서 파라미터를 받아서 사용하도록 변경
const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(
    async ({ url, method = 'GET', headers = {}, body }, applyData) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(url, {
          method,
          headers,
          body: body ? JSON.stringify(body) : null,
        });

        if (!response.ok) {
          throw new Error('Request failed!');
        }

        const data = await response.json();
        applyData(data);
      } catch (err) {
        console.log(err);
        setError(err.message || 'Something went wrong!');
      }
      setIsLoading(false);
    },
    []
  );

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
