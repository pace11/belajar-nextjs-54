import { useCallback, useEffect, useState } from "react";

export const useQueries = (
  { prefixUrl = "" },
  callback = {
    onSuccess: () => {},
  }
) => {
  const { onSuccess = () => {} } = callback;
  const [data, setData] = useState({
    data: null,
    isLoading: true,
    isError: false,
  });

  const fetchingData = useCallback(
    async ({ url = "", method = "GET" } = {}) => {
      try {
        const response = await fetch(url, { method });
        const result = await response.json();
        setData({
          ...data,
          data: result,
          isLoading: false,
        });
        onSuccess(result);
      } catch (error) {
        setData({
          ...data,
          isError: true,
          isLoading: false,
        });
      }
    },
    []
  );

  useEffect(() => {
    if (prefixUrl) {
      fetchingData({ url: prefixUrl });
    }
  }, [prefixUrl]);

  return { ...data };
};
