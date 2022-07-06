import { useState, useEffect } from "react";

const useFetch = (api) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(api);
        const resData = await res.json();
        setData(resData.data);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [api]);
  return [data, isLoading];
};

export default useFetch;
