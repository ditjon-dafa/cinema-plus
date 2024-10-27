import "./movie-card.css";
import { useNavigate } from "react-router-dom";
import { getRatingFixed } from "../../../../utils";
import { HeartFilled, HeartOutlined, StarFilled } from "@ant-design/icons";
import { useContext } from "react";
import { GlobalContext } from "../../../../context/GlobalContext";
import img from "../../../../images/no-image-data.png";

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
  const rating = getRatingFixed(props.vote_average);
  const nav = useNavigate();

  const { favorites, setFavorites } = useContext(GlobalContext);
  const isMovieFavorite = favorites.find((movie) => movie.id === props.id);
  console.log("isMovie favorite: ", isMovieFavorite);

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
    <div>
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
          <span style={{ color: "yellow" }}>
            <StarFilled />
          </span>{" "}
          {rating}
        </p>
        <h3>{props.title}</h3>
      </article>
    </div>
  );
}
