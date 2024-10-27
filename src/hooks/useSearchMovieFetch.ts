import axios from "axios";
import { useEffect, useState } from "react";
import { MovieType } from "../types";

function useSearchMovieFetch(query: string) {
  const [data, setData] = useState<MovieType[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const queryArr = query.split(" ");
  let queryStr = "";
  if (queryArr.length >= 2) queryStr = queryArr.join("%20");
  else queryStr = query;

  async function getData() {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=1d1d8844ae1e746c459e7be85c15c840&query=${queryStr}`;
    try {
      const { data } = await axios.get(url);
      setData(data.results);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, [query]);

  return {
    data,
    loading,
    error,
  };
}

export default useSearchMovieFetch;
