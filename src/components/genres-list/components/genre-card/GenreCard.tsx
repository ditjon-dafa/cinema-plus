import { useContext } from "react";
import { GlobalContext } from "../../../../context/GlobalContext";
import { useNavigate } from "react-router-dom";
import genre_sample_img from "../../../../images/genre-sample-data.png";
import useMoviesByAGenreFetch from "../../../../hooks/useMoviesByAGenreFetch";
import {
  findMainGenreMoviePos,
  getAverageRating,
  getGenreMoviesLength,
} from "../../../../lib/utils";
import { StarFilled } from "@ant-design/icons";
import "./genre-card.css";
import "../../../movie-list/components/movie-card/movie-card.css";

interface Props {
  id: number;
  name: string;
}
const baseUrl = "https://image.tmdb.org/t/p/w500";
export default function GenreCard(props: Props) {
  const { theme } = useContext(GlobalContext);
  const nav = useNavigate();
  const starStyle = {
    color: theme === "light" ? "rgb(202, 202, 0)" : "yellow",
  };

  let genreIdString: string = props.id.toString();

  const { allPagesMovies } = useMoviesByAGenreFetch(genreIdString, 1);

  const averageRating: number = getAverageRating(allPagesMovies);

  const moviePos = findMainGenreMoviePos(allPagesMovies, props.id);
  let posterPath = moviePos ? moviePos.backdrop_path : null;

  const genreMoviesLength = getGenreMoviesLength(allPagesMovies);

  function handleMoviesByGenreNavigation() {
    nav(`/movies-by-genre/${props.id}`);
  }

  return (
    <div
      className="card-background card"
      style={{
        backgroundColor:
          theme === "light" ? "rgb(225, 225, 225)" : "rgb(70, 70, 70)",
        color: theme === "light" ? "black" : "white",
      }}
      onClick={handleMoviesByGenreNavigation}
    >
      <img
        src={
          allPagesMovies.length == 0 || posterPath == null
            ? genre_sample_img
            : baseUrl + posterPath
        }
        alt=""
      />
      <h3> {props.name} </h3>
      <div className="genre-info">
        <div>Total number of movies: {genreMoviesLength}</div>
        <div>
          {" "}
          <p>
            <span className="star-rate" style={starStyle}>
              <StarFilled />
            </span>

            {averageRating}
          </p>
        </div>
      </div>
    </div>
  );
}
