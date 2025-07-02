import { MovieType } from "../../../../../../../types";
import MovieCard from "../../../../../../movie-list/components/movie-card/MovieCard";
import { useContext } from "react";
import { GlobalContext } from "../../../../../../../context/GlobalContext";
import "../../../search-movie-list.css";
import "../../../../../../movie-list/movie-list.css";

interface Props {
  searchMovieList: Array<MovieType>;
}

export default function SearchMovieListDisplay(props: Props) {
  const { theme } = useContext(GlobalContext);
  return (
    <div
      style={{
        backgroundColor:
          theme === "light" ? "rgb(240, 240, 240)" : "rgb(80, 80, 80)",
      }}
      className="search-movie-list-screen movie-list"
    >
      {props.searchMovieList.map((movie) => {
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
