import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { useParams } from "react-router-dom";
import Loading from "../../components/common/Loading";
import Error from "../../components/common/Error";
import useMoviesByAGenreFetch from "../../hooks/useMoviesByAGenreFetch";
import MovieCard from "../../components/movie-list/components/movie-card/MovieCard";
import "../../components/favorites-movie-list/favorites-movie-list.css";

export default function MoviesByAGenreList() {
  const params = useParams() as {
    id: string;
  };
  const { theme } = useContext(GlobalContext);
  const { data, loading, error } = useMoviesByAGenreFetch(params.id);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div
      className="movie-list-screen"
      style={{
        backgroundColor:
          theme === "light" ? "rgb(240, 240, 240)" : "rgb(80, 80, 80)",
      }}
    >
      <div className="movie-list">
        {data.length != 0 &&
          data.map((movie) => {
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
    </div>
  );
}
