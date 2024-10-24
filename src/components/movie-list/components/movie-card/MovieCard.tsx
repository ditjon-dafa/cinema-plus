import "./movie-card.css";
import { useNavigate } from "react-router-dom";
import { getRatingFixed } from "../../../../utils";
import { HeartFilled, HeartOutlined, StarFilled } from "@ant-design/icons";
import { useContext } from "react";
import { GlobalContext } from "../../../../context/GlobalContext";

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
  release_date: Date;
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

  const { isLiked, setIsLiked } = useContext(GlobalContext);
  function handleSingleMovieNavigation() {
    nav(`/movie/${props.id}`);
  }

  function handleFavoriteMovie(id: number) {
    const favoriteMovie = {
      adult: props.adult,
      backdrop_path: props.backdrop_path,
      genre_ids: props.genre_ids,
      id: props.id,
      original_language: props.original_language,
      original_title: props.original_title,
      overview: props.overview,
      popularity: props.popularity,
      poster_path: props.poster_path,
      release_date: props.release_date,
      title: props.title,
      video: props.video,
      vote_average: props.vote_average,
      vote_count: props.vote_count,
    };

    setFavorites([...favorites, favoriteMovie]);
    setIsLiked(!isLiked);
  }

  function handleUnFavoriteMovie(id: number) {
    const onlyFavoriteMovies = favorites.filter(
      (movie) => movie.id != props.id
    );
    setFavorites(onlyFavoriteMovies);
    setIsLiked(!isLiked);
  }

  return (
    <div>
      <div className="heart" style={{ color: "red" }}>
        {isLiked ? (
          <HeartFilled onClick={() => handleUnFavoriteMovie(props.id)} />
        ) : (
          <HeartOutlined onClick={() => handleFavoriteMovie(props.id)} />
        )}
      </div>
      <article onClick={handleSingleMovieNavigation} className="movie-card">
        <img src={baseUrl + props.backdrop_path} alt="" />

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
