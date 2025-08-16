import axios from "axios";
import { useEffect, useState } from "react";
import { Genre } from "../types";

function useSingleGenreFetch(name: string) {
  const [data, setData] = useState<Genre>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  async function getData() {
    const url =
      "https://api.themoviedb.org/3/genre/movie/list?api_key=1d1d8844ae1e746c459e7be85c15c840";
    try {
      const { data } = await axios.get(url);

      const searchedGenre = data.genres.find(
        (genre: Genre) => genre.name == name || genre.name.toLowerCase() == name
      );

      if (searchedGenre) setData(searchedGenre);
      else setData(undefined);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, [name]);

  return {
    data,
    loading,
    error,
  };
}

export default useSingleGenreFetch;
