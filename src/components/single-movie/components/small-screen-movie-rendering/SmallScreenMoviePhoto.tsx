import { SingleMovieType } from "../../../../types";
interface Props {
  singleMovie: SingleMovieType;
}

const baseUrl = "https://image.tmdb.org/t/p/w500/";
export default function SmallScreenMoviePhoto(props: Props) {
  return (
    <div>
      <img
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "1.5em",
        }}
        src={baseUrl + props.singleMovie.backdrop_path}
        alt=""
      />
    </div>
  );
}
