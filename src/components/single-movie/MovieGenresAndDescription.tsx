import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { SingleMovieType } from "../../types";
import { useNavigate } from "react-router-dom";
import "./single-movie.css";

interface Props {
  singleMovie: SingleMovieType;
}

export default function MovieGenresAndDescription(props: Props) {
  const { theme } = useContext(GlobalContext);
  const nav = useNavigate();
  const movieGenres = props.singleMovie.genres;

  function handleMovieGenre(genreId: number) {
    nav(`/movies-by-genre/${genreId}`);
  }
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
              onClick={() => handleMovieGenre(genre.id)}
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
