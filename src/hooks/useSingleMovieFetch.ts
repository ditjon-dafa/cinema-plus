import axios from "axios";
import { useEffect, useState } from "react";
import { SingleMovieType } from "../types";

function useSingleMovieFetch(id: string) {
  const [data, setData] = useState<SingleMovieType | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  async function getData() {
    try {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/movie/" +
          id +
          "?api_key=1d1d8844ae1e746c459e7be85c15c840"
      );
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, [id]);

  return {
    data,
    loading,
    error,
  };
}

export default useSingleMovieFetch;
