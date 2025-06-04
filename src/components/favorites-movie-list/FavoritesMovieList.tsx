import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import MovieCard from "../movie-list/components/movie-card/MovieCard";
import FeedbackFavorites from "../../feedback-to-user/FeedbackFavorites";
import "./favorites-movie-list.css";

export default function FavoritesMovieList() {
  const { theme } = useContext(GlobalContext);
  const { favorites } = useContext(GlobalContext);
  const FAVORITES_CLASS_NAME = favorites.length != 0 ? "movie-list" : "";
  return (
    <div
      id="favorites-movie-list-screen"
      style={{
        backgroundColor:
          theme === "light" ? "rgb(240, 240, 240)" : "rgb(80, 80, 80)",
      }}
    >
      <div className={FAVORITES_CLASS_NAME}>
        {favorites.length == 0 ? (
          <FeedbackFavorites />
        ) : (
          favorites.map((movie) => {
            return (
              <MovieCard
                adult={movie.adult}
                backdrop_path={movie.backdrop_path}
                genre_ids={movie.genre_ids}
                id={movie.id}
                original_language={movie.original_language}
                original_title={movie.original_title}
                overview={movie.overview}
                popularity={movie.popularity}
                poster_path={movie.poster_path}
                release_date={movie.release_date}
                title={movie.title}
                video={movie.video}
                vote_average={movie.vote_average}
                vote_count={movie.vote_count}
                key={movie.id}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
