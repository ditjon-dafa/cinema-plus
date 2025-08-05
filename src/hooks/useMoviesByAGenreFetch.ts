import { useEffect, useState } from "react";
import { PageMovies } from "../types";
import { moviesByGenre } from "../lib/movies-by-genre";

export default function useMoviesByAGenreFetch(id: string, pageNr: number) {
  const [data, setData] = useState<PageMovies>();
  const [pagesLength, setPagesLength] = useState<number>(0);
  const [allPagesMovies, setAllPagesMovies] = useState<Array<PageMovies>>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const intId = parseInt(id);

  async function getData() {
    try {
      const data = moviesByGenre.find(
        (moviesByAGenre) => moviesByAGenre.genreId == intId
      );
      if (data) {
        const pagesLength = data?.allPagesMovies.length;
        setPagesLength(pagesLength);
        setAllPagesMovies(data.allPagesMovies);
      }
      if (data) {
        const pageMovies = data.allPagesMovies.find(
          (allMovies) => allMovies.pageNr == pageNr
        );
        if (pageMovies) setData(pageMovies);
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
  }, [id, pageNr]);

  return {
    data,
    pagesLength,
    allPagesMovies,
    loading,
    error,
  };
}
