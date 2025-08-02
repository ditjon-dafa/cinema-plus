import axios from "axios";
import { useEffect, useState } from "react";
import { MovieType } from "../types";

function useMobileAllMoviesPageFetch(pageNr: number, pagePart: number) {
  let moviesData: Array<MovieType> = [];
  const [movies, setMovies] = useState<MovieType[]>(moviesData);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);

  async function getData() {
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=1d1d8844ae1e746c459e7be85c15c840&page=${pageNr}`;
    try {
      const { data } = await axios.get(url);
      if (pagePart == 1) {
        for (let index = 0; index < data.results.length / 2; index++) {
          moviesData.push(data.results[index]);
        }
      } else if (pagePart == 2) {
        for (
          let index = data.results.length / 2;
          index < data.results.length;
          index++
        ) {
          moviesData.push(data.results[index]);
        }
      }

      setMovies(moviesData);
      moviesData = [];
      setTotalPages(data.total_pages);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, [pageNr, pagePart]);

  return {
    movies,
    totalPages,
    loading,
    error,
  };
}

export default useMobileAllMoviesPageFetch;
