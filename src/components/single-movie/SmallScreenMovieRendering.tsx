import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { SingleMovieType } from "../../types";
import MovieGenresAndDescription from "./MovieGenresAndDescription";
import MovieHeader from "./MovieHeader";
import SmallScreenMoviePhoto from "./SmallScreenMoviePhoto";

interface Props {
  singleMovie: SingleMovieType;
}
export default function SmallScreenMovieRendering(props: Props) {
  const { theme } = useContext(GlobalContext);
  return (
    <div
      className="single-movie-content"
      style={{
        backgroundColor:
          theme === "light" ? "rgb(240, 240, 240)" : "rgb(80, 80, 80)",
        color: theme === "light" ? "black" : "white",
      }}
    >
      <MovieHeader singleMovie={props.singleMovie} />
      <SmallScreenMoviePhoto singleMovie={props.singleMovie} />
      <MovieGenresAndDescription singleMovie={props.singleMovie} />
    </div>
  );
}
