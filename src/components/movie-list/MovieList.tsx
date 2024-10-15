import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import MovieCard from "./components/MovieCard";
import "./movie-list.css";
export default function MovieList() {
  const { theme } = useContext(GlobalContext);

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
      }}
      className="movie-list"
    >
      {/* {
            movies.map((movie) => {
              return <MovieCard rt_score={movie.rt_score} description={movie.description} id={movie.id} imageUrl={movie.movie_banner} title={movie.title} rating={movie.rt_score} key={movie.id} />
            })
          } */}
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </div>
  );
}
