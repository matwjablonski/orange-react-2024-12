import { useEffect, useState } from 'react';

type ReturnUseRequest<T> = {
  isLoading: boolean;
  data: T;
  error: Error | null;
}

export const useRequest = <T = []>(endpoint: string, fromLocal = false): ReturnUseRequest<T> => {
  const [data, setData] = useState<T>({} as T);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    setLoading(true)
    try {
      const url = fromLocal ? endpoint : `${process.env.REACT_APP_API_URL}/${endpoint}`;

      const response = await fetch(url);
      const data: T = await response.json();
      
      setData(data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error);
      } else {
        setError(new Error('An error occurred'));
      }
      
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchData()
  }, []);

  return {
    isLoading,
    error,
    data,
  }
}
