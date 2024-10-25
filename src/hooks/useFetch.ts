import axios from "axios";
import { useEffect, useState } from "react";
import { MovieType } from "../types";

function useFetch() {
  const [data, setData] = useState<MovieType[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  async function getData() {
    const url =
      "https://api.themoviedb.org/3/movie/top_rated?api_key=1d1d8844ae1e746c459e7be85c15c840";
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
  }, []);

  return {
    data,
    loading,
    error,
  };
}

export default useFetch;
