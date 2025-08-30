import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalContext";
import MovieCard from "../components/movie-card/MovieCard";
import Loading from "../../common/Loading";
import Error from "../../common/Error";
import PaginationDesign from "../../../lib/PaginationDesign";
import "../movie-list.css";
import "../../../App.css";
import useAllMoviesPageFetch from "../../../hooks/useAllMoviesPageFetch";

export default function MobileMoviesList() {
  const { currentPage } = useContext(GlobalContext);
  const { pagePart, setPagePart } = useContext(GlobalContext);
  const { theme } = useContext(GlobalContext);

  const {
    data: movies,
    totalPages,
    loading,
    error,
  } = useAllMoviesPageFetch(currentPage, pagePart);

  const navItems = [
    {
      label: "Page Part 1",
      path: "/",
    },
    {
      label: "Page Part 2",
      path: "/",
    },
  ];

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
          backgroundColor:
            theme === "light" ? "rgb(240, 240, 240)" : "rgb(80, 80, 80)",
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
              key={movie.id}
            />
          );
        })}
      </div>
      <div className="page-parts">
        {navItems.map((item) => {
          const pagePartStr = item.label.substring(item.label.length - 1);
          return (
            <div key={item.label}>
              <Link
                onClick={() => {
                  setPagePart(parseInt(pagePartStr));
                }}
                to={item.path}
                className={
                  pagePartStr == pagePart.toString()
                    ? "page-part active"
                    : "page-part"
                }
              >
                {item.label}
              </Link>
            </div>
          );
        })}
      </div>

      <div>
        <PaginationDesign totalPages={totalPages} />
      </div>
    </>
  );
}
