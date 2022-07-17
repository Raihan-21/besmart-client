import { useState, useEffect } from "react";
import axios from "axios";
const useFetch = (api) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(api);
        // const resData = await res.json();
        setData(res.data.data);
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
