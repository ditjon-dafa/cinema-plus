import axios from "axios";
import { useEffect, useState } from "react";
import { MovieType } from "../types";

function useSearchMovieFetch(query: string, part: number) {
  let searchMoviesData: Array<MovieType> = [];
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
      if (part == 0) setData(data.results);
      else {
        if (part == 1) {
          for (let index = 0; index < data.results.length / 2; index++) {
            searchMoviesData.push(data.results[index]);
          }
        } else if (part == 2) {
          for (
            let index = data.results.length / 2;
            index < data.results.length;
            index++
          ) {
            searchMoviesData.push(data.results[index]);
          }
        }
        setData(searchMoviesData);
      }

      searchMoviesData = [];
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, [query, part]);

  return {
    data,
    loading,
    error,
  };
}

export default useSearchMovieFetch;
