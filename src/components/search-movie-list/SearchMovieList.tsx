import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import MovieCard from "../movie-list/components/movie-card/MovieCard";
import FeedbackSearchMovie from "../../feedback-to-user/FeedbackSearchMovie";
import "./search-movie-list.css";

export default function SearchMovieList() {
  const { theme } = useContext(GlobalContext);
  const { searchMovie } = useContext(GlobalContext);
  const searchClassName = searchMovie.length != 0 ? "movie-list" : "";
  return (
    <div
      id="search-movie-list-screen"
      style={{
        backgroundColor:
          theme === "light" ? "rgb(240, 240, 240)" : "rgb(80, 80, 80)",
      }}
      className={searchClassName}
    >
      {searchMovie.length == 0 ? (
        <FeedbackSearchMovie />
      ) : (
        searchMovie.map((movie) => {
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
  );
}
