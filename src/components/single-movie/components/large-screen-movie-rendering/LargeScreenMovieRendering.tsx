import { useContext } from "react";
import { GlobalContext } from "../../../../context/GlobalContext";
import { SingleMovieType } from "../../../../types";
import LargeScreenMoviePhoto from "./LargeScreenMoviePhoto";
import MovieGenresAndDescription from "../common-components/MovieGenresAndDescription";
import MovieHeader from "../common-components/MovieHeader";
import "../../single-movie.css";

interface Props {
  singleMovie: SingleMovieType;
}
export default function LargeScreenMovieRendering(props: Props) {
  const { theme } = useContext(GlobalContext);
  return (
    <div
      className="single-movie-content large-screen"
      style={{
        backgroundColor:
          theme === "light" ? "rgb(240, 240, 240)" : "rgb(80, 80, 80)",
        color: theme === "light" ? "black" : "white",
      }}
    >
      <LargeScreenMoviePhoto singleMovie={props.singleMovie} />
      <div className="movie-details">
        <MovieHeader singleMovie={props.singleMovie} />
        <MovieGenresAndDescription singleMovie={props.singleMovie} />
      </div>
    </div>
  );
}
