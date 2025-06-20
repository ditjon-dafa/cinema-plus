import { useEffect, useState } from "react";
import { MovieType } from "../types";
import { moviesByGenre } from "../movies-by-genre";

export default function useMoviesByAGenreFetch(id: string) {
  const [data, setData] = useState<MovieType[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const intId = parseInt(id);

  async function getData() {
    try {
      const data = moviesByGenre.find(
        (moviesByAGenre) => moviesByAGenre.genreId == intId
      );
      if (data) {
        setData(data.allPagesMovies.results);
      }

      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
      console.log(error);
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
