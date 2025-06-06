import { SingleMovieType } from "../../types";

interface Props {
  singleMovie: SingleMovieType;
}

const baseUrl = "https://image.tmdb.org/t/p/w500/";
export default function LargeScreenMoviePhoto(props: Props) {
  return (
    <div className="photo-space">
      <img src={baseUrl + props.singleMovie.backdrop_path} alt="" />
    </div>
  );
}
