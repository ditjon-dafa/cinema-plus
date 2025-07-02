import { MovieType } from "../../../../../types";
import MovieCard from "../../../../movie-list/components/movie-card/MovieCard";
import "../../../../movie-list/movie-list.css";
interface Props {
  moviesData: Array<MovieType>;
}

export default function MoviesByAGenreList(props: Props) {
  return (
    <div className="movie-list">
      {props.moviesData.map((movie) => {
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
  );
}
