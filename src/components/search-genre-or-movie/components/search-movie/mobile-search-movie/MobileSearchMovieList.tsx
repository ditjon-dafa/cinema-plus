import FeedbackSearchMovie from "../../../../../feedback-to-user/FeedbackSearchMovie";
import useSearchMovieFetch from "../../../../../hooks/useSearchMovieFetch";
import Loading from "../../../../common/Loading";
import Error from "../../../../common/Error";
import SearchMovieListData from "../components/data/SearchMovieListData";

import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../../../../context/GlobalContext";
import "../../../../../App.css";

interface Props {
  queryMovie: string;
}

export default function MobileSearchMovieList(props: Props) {
  const { theme } = useContext(GlobalContext);
  const linkStyles = {
    color: theme === "light" ? "black" : "white",
  };

  const { searchPagePart, setSearchPagePart } = useContext(GlobalContext);

  const {
    data: movies,
    loading,
    error,
  } = useSearchMovieFetch(props.queryMovie, searchPagePart);

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
            <div>
              <Link
                onClick={() => {
                  setSearchPagePart(1);
                }}
                style={linkStyles}
                to="/search"
                className={
                  searchPagePart == 1
                    ? "search-movie-part active"
                    : "search-movie-part"
                }
              >
                {" "}
                Part 1
              </Link>
            </div>
            <div>
              <Link
                onClick={() => {
                  setSearchPagePart(2);
                }}
                style={linkStyles}
                to="/search"
                className={
                  searchPagePart == 2
                    ? "search-movie-part active"
                    : "search-movie-part"
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
