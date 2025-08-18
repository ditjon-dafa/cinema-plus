import FeedbackSearchMovie from "../../../../../feedback-to-user/FeedbackSearchMovie";
import useSearchMovieFetch from "../../../../../hooks/useSearchMovieFetch";
import Loading from "../../../../common/Loading";
import Error from "../../../../common/Error";
import SearchMovieListData from "../components/data/SearchMovieListData";
import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../../../../context/GlobalContext";
import "../../../../movie-list/mobile-movies-list/mobile-movies-list.css";

interface Props {
  queryMovie: string;
}

export default function MobileSearchMovieList(props: Props) {
  const { theme } = useContext(GlobalContext);
  const linkStyles = {
    color: theme === "light" ? "black" : "white",
  };
  const [part, setPart] = useState(1);
  const {
    data: movies,
    loading,
    error,
  } = useSearchMovieFetch(props.queryMovie, part);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <>
      {movies.length == 0 ? (
        <FeedbackSearchMovie />
      ) : (
        <div
          style={{
            backgroundColor:
              theme === "light" ? "rgb(240, 240, 240)" : "rgb(80, 80, 80)",
            color: theme === "light" ? "black" : "white",
          }}
        >
          <SearchMovieListData movieList={movies} />
          <div className="search-movie-parts">
            <div
              onClick={() => {
                setPart(1);
              }}
            >
              <Link
                style={linkStyles}
                to="/search"
                className={
                  part == 1 ? "search-movie-part active" : "search-movie-part"
                }
              >
                {" "}
                Part 1
              </Link>
            </div>
            <div
              onClick={() => {
                setPart(2);
              }}
            >
              <Link
                style={linkStyles}
                to="/search"
                className={
                  part == 2 ? "search-movie-part active" : "search-movie-part"
                }
              >
                {" "}
                Part 2
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
