import Header from "../components/header/Header";
import SearchGenre from "../components/search-movie-list/search-genre/SearchGenre";
import SearchMovie from "../components/search-movie-list/search-movie/SearchMovie";

export default function SearchGenreOrMovie() {
  return (
    <>
      <Header />
      <SearchGenre />
      <SearchMovie />
    </>
  );
}
