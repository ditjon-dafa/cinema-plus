import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import MovieCard from "./components/movie-card/MovieCard";
import "./movie-list.css";
import useFetch from "../../hooks/useFetch";
import Loading from "../common/Loading";
import Error from "../common/Error";

export default function MovieList() {
  const { theme } = useContext(GlobalContext);

  const { data: movies, loading, error } = useFetch();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
      }}
      className="movie-list"
    >
      {movies.map((movie) => {
        return (
          <MovieCard
            backdrop_path={movie.backdrop_path}
            vote_average={movie.vote_average}
            title={movie.title}
            id={movie.id}
            key={movie.id}
          />
        );
      })}

      {/* <MovieCard />
      <MovieCard />
      <MovieCard /> */}
    </div>
  );
}
