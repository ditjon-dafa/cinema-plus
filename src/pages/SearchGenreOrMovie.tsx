import Header from "../components/header/Header";
import SearchGenre from "../components/search-movie-list/search-genre/SearchGenre";
import SearchMovie from "../components/search-movie-list/search-movie/SearchMovie";
import query from "../components/header/components/SearchBar";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
// interface Props {
//   queryStr: string;
// }

export default function SearchGenreOrMovie() {
  const { queryGenreMovie } = useContext(GlobalContext);
  return (
    <>
      <Header />

      <SearchGenre queryGenre={queryGenreMovie} />
      {/* <SearchMovie queryMovie={queryGenreMovie} /> */}
    </>
  );
}
