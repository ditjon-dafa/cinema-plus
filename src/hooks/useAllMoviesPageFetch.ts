import axios from "axios";
import { useEffect, useState } from "react";
import { MovieType } from "../types";

function useAllMoviesPageFetch(pageNr: number) {
  const [data, setData] = useState<MovieType[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);

  async function getData() {
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=1d1d8844ae1e746c459e7be85c15c840&page=${pageNr}`;
    try {
      const { data } = await axios.get(url);

      setData(data.results);
      setTotalPages(data.total_pages);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, [pageNr]);

  return {
    data,
    totalPages,
    loading,
    error,
  };
}

export default useAllMoviesPageFetch;
