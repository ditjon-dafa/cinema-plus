import { SingleMovieType } from "../../types";
import SmallScreenMovieRendering from "./SmallScreenMovieRendering";
import LargeScreenMovieRendering from "./LargeScreenMovieRendering";
import "./single-movie.css";
import useWindowResize from "../../hooks/useWindowResize";

interface Props {
  movie: SingleMovieType;
}

export default function SingleMovieCard(props: Props) {
  const screenWidthBreakpoint = 1000;
  const isSmallScreenSize = useWindowResize(screenWidthBreakpoint);

  return (
    <>
      {isSmallScreenSize ? (
        <SmallScreenMovieRendering singleMovie={props.movie} />
      ) : (
        <LargeScreenMovieRendering singleMovie={props.movie} />
      )}
    </>
  );
}
