import { useEffect, useState } from 'react';

export const useFetch = (fetchFunction, params) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const stringParams = params ? new URLSearchParams(params).toString() : ''; //Преобразовывваем в строку

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const result = await fetchFunction(params);
        setData(result);
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })(); //самовызывающаяся ф-я
  }, [fetchFunction, stringParams]); //строку сравнивать легче чем объекта

  return { data, isLoading, error };
};
