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

  const navItems = [
    {
      label: "Part 1",
      path: "/",
    },
    {
      label: "Part 2",
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
            {navItems.map((item) => {
              const pagePartStr = item.label.substring(item.label.length - 1);
              return (
                <div key={item.label}>
                  <Link
                    onClick={() => {
                      setSearchPagePart(parseInt(pagePartStr));
                    }}
                    style={linkStyles}
                    to="/search"
                    className={
                      searchPagePart == parseInt(pagePartStr)
                        ? "search-movie-part active"
                        : "search-movie-part"
                    }
                  >
                    {item.label}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
