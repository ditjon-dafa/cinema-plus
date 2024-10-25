import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import MovieCard from "./components/movie-card/MovieCard";
import "./movie-list.css";
import useFetch from "../../hooks/useFetch";
import Loading from "../common/Loading";
import Error from "../common/Error";
import MoviePages from "../../MoviePages";

// interface Props {
//   moviePage: Pagination;
// }

export default function MovieList() {
  const { theme } = useContext(GlobalContext);
  // const totalPages = 485;
  const { data: movies, loading, error } = useFetch();
  // const isFavoriteMovie = false;
  const { isLiked, setIsLiked } = useContext(GlobalContext);

  const { favorites, setFavorites } = useContext(GlobalContext);

  // setIsLiked(false);
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <>
      <div
        style={{
          backgroundColor: theme === "light" ? "white" : "black",
        }}
        className="movie-list"
      >
        {movies.map((movie) => {
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
              favorite={false}
              key={movie.id}
            />
          );
        })}
        {/* {updatedMoviesList.length === 0 ? (
          <p> Sorry, your search doesn't match any movies!</p>
        ) : null} */}
        {/* <Pagination align="center" /> */}
        {/* <Pagination
          align="center"
          total={85}
          showTotal={(total) => `Total ${total} items`}
          defaultPageSize={20}
          defaultCurrent={1}
        /> */}
      </div>
      <div>
        {" "}
        <MoviePages />{" "}
      </div>
    </>
  );
}
