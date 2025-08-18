import Header from "../components/header/Header";
import SearchGenre from "../components/search-genre-or-movie/components/search-genre/SearchGenre";

import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

import GeneralSearchMovieList from "../components/search-genre-or-movie/components/search-movie/GeneralSearchMovieList";

export default function SearchGenreOrMovie() {
  const { queryGenreMovie } = useContext(GlobalContext);
  return (
    <>
      <Header />
      <SearchGenre queryGenre={queryGenreMovie} />
      <GeneralSearchMovieList queryMovie={queryGenreMovie} />
    </>
  );
}
