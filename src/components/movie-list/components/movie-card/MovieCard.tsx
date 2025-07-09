import { useNavigate } from "react-router-dom";
import { getRatingFixed } from "../../../../lib/utils";
import { HeartFilled, HeartOutlined, StarFilled } from "@ant-design/icons";
import { useContext } from "react";
import { GlobalContext } from "../../../../context/GlobalContext";
import img from "../../../../images/no-image-data.png";
import "./movie-card.css";

interface Props {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const baseUrl = "https://image.tmdb.org/t/p/w500/";

export default function MovieCard(props: Props) {
  const { theme } = useContext(GlobalContext);
  const rating = getRatingFixed(props.vote_average);
  const nav = useNavigate();

  const { favorites, setFavorites } = useContext(GlobalContext);
  const isMovieFavorite = favorites.find((movie) => movie.id === props.id);

  const starStyle = {
    color: theme === "light" ? "rgb(202, 202, 0)" : "yellow",
  };

  function handleSingleMovieNavigation() {
    nav(`/movie/${props.id}`);
  }

  function handleFavoriteMovie() {
    const favoriteMovie = { ...props };
    setFavorites([...favorites, favoriteMovie]);
  }

  function handleUnFavoriteMovie() {
    const onlyFavoriteMovies = favorites.filter(
      (movie) => movie.id != props.id
    );
    setFavorites(onlyFavoriteMovies);
  }

  return (
    <div
      className="card-background"
      style={{
        backgroundColor:
          theme === "light" ? "rgb(225, 225, 225)" : "rgb(70, 70, 70)",
        color: theme === "light" ? "black" : "white",
      }}
    >
      <div className="heart" style={{ color: "red" }}>
        {isMovieFavorite ? (
          <HeartFilled onClick={handleUnFavoriteMovie} />
        ) : (
          <HeartOutlined onClick={handleFavoriteMovie} />
        )}
      </div>
      <article onClick={handleSingleMovieNavigation} className="movie-card">
        <img
          src={
            props.backdrop_path == null ? img : baseUrl + props.backdrop_path
          }
          alt=""
        />

        <p>
          <span style={starStyle}>
            <StarFilled />
          </span>{" "}
          {rating}
        </p>
        <h3>{props.title}</h3>
      </article>
    </div>
  );
}
