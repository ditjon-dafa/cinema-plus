import Header from "../components/header/Header";
import SearchGenre from "../components/search-genre-or-movie/components/search-genre/SearchGenre";

import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import SearchMovieList from "../components/search-genre-or-movie/components/search-movie/SearchMovieList";

export default function SearchGenreOrMovie() {
  const { queryGenreMovie } = useContext(GlobalContext);
  return (
    <>
      <Header />
      <SearchGenre queryGenre={queryGenreMovie} />
      <SearchMovieList queryMovie={queryGenreMovie} />
    </>
  );
}
