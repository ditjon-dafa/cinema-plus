import { MovieType } from "../../../../../../types";
import SearchMovieListDisplay from "./components/SearchMovieListDisplay";
import SearchMovieListHeader from "./components/SearchMovieListHeader";
import { useContext } from "react";
import { GlobalContext } from "../../../../../../context/GlobalContext";
import "../../search-movie-list.css";
interface Props {
  movieList: Array<MovieType>;
}

export default function SearchMovieListData(props: Props) {
  const { theme } = useContext(GlobalContext);
  return (
    <div
      style={{
        backgroundColor:
          theme === "light" ? "rgb(240, 240, 240)" : "rgb(80, 80, 80)",
        color: theme === "light" ? "black" : "white",
      }}
      className="search-movie-list-screen "
    >
      <SearchMovieListHeader />
      <SearchMovieListDisplay searchMovieList={props.movieList} />
    </div>
  );
}
