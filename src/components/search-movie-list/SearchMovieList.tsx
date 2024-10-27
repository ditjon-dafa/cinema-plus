import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import MovieCard from "../movie-list/components/movie-card/MovieCard";
import FeedbackSearchMovie from "../../feedback-to-user/FeedbackSearchMovie";

export default function SearchMovieList() {
  const { theme } = useContext(GlobalContext);
  const { searchMovie } = useContext(GlobalContext);

  return (
    <>
      <div
        style={{
          backgroundColor: theme === "light" ? "white" : "black",
        }}
        className="movie-list"
      >
        {searchMovie.map((movie) => {
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
        })}
      </div>
      {searchMovie.length == 0 ? <FeedbackSearchMovie /> : null}
    </>
  );
}
