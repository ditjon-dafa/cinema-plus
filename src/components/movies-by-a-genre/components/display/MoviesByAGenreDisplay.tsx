import { MovieType } from "../../../../types";
import GenreInfo from "./components/GenreInfo";
import MoviesByAGenreList from "./components/MoviesByAGenreList";

interface Props {
  genreId: string;
  moviesData: Array<MovieType>;
}

export default function MoviesByAGenreDisplay(props: Props) {
  return (
    <>
      <GenreInfo genreId={props.genreId} />
      <MoviesByAGenreList moviesData={props.moviesData} />
    </>
  );
}
