import { useContext } from "react";
import { GlobalContext } from "../../../../context/GlobalContext";
import MovieCard from "../../../movie-list/components/movie-card/MovieCard";
import FeedbackSearchMovie from "../../../../feedback-to-user/FeedbackSearchMovie";
import "./search-movie-list.css";
import useSearchMovieFetch from "../../../../hooks/useSearchMovieFetch";
import Loading from "../../../common/Loading";
import Error from "../../../common/Error";

interface Props {
  queryMovie: string;
}

export default function SearchMovieList(props: Props) {
  const { theme } = useContext(GlobalContext);

  const {
    data: movies,
    loading,
    error,
  } = useSearchMovieFetch(props.queryMovie);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const searchClassName = movies.length != 0 ? "movie-list" : "";
  return (
    <div
      id="search-movie-list-screen"
      style={{
        backgroundColor:
          theme === "light" ? "rgb(240, 240, 240)" : "rgb(80, 80, 80)",
      }}
      className={searchClassName}
    >
      {movies.length == 0 ? (
        <FeedbackSearchMovie />
      ) : (
        movies.map((movie) => {
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
