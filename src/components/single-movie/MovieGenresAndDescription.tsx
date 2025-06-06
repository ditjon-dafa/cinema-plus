import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { SingleMovieType } from "../../types";

interface Props {
  singleMovie: SingleMovieType;
}
export default function MovieGenresAndDescription(props: Props) {
  const { theme } = useContext(GlobalContext);

  const movieGenres = props.singleMovie.genres;
  return (
    <div>
      <p>
        {movieGenres.map((genre) => {
          return (
            <span
              key={genre.id}
              className="genres"
              style={{
                border:
                  theme === "light" ? "0.1em solid black" : "0.1em solid white",
              }}
            >
              {genre.name}
            </span>
          );
        })}
      </p>
      <br />
      <p> {props.singleMovie.overview}</p>
    </div>
  );
}
