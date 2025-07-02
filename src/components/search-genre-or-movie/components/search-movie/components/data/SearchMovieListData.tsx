import { MovieType } from "../../../../../../types";
import SearchMovieListDisplay from "./components/SearchMovieListDisplay";
import SearchMovieListHeader from "./components/SearchMovieListHeader";

interface Props {
  movieList: Array<MovieType>;
}

export default function SearchMovieListData(props: Props) {
  return (
    <>
      <SearchMovieListHeader />
      <SearchMovieListDisplay searchMovieList={props.movieList} />
    </>
  );
}
