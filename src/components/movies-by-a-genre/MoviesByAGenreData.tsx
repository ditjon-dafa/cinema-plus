import { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { useParams } from "react-router-dom";
import Loading from "../common/Loading";
import Error from "../common/Error";
import useMoviesByAGenreFetch from "../../hooks/useMoviesByAGenreFetch";
import FeedbackMoviesByAGenre from "../../feedback-to-user/FeedbackMoviesByAGenre";
import MoviesByAGenreDisplay from "./components/display/MoviesByAGenreDisplay";
import "../favorites-movie-list/favorites-movie-list.css";
import "../../App.css";

import { Link } from "react-router-dom";

export default function MoviesByAGenreData() {
  const params = useParams() as {
    id: string;
  };
  const { theme } = useContext(GlobalContext);
  const linkStyles = {
    color: theme === "light" ? "black" : "white",
  };
  const [genrePage, setGenrePage] = useState(1);
  const { data, pagesLength, loading, error } = useMoviesByAGenreFetch(
    params.id,
    genrePage
  );

  const navItems = [
    {
      label: "Page 1",
      path: `/movies-by-genre/${params.id}`,
    },
    {
      label: "Page 2",
      path: `/movies-by-genre/${params.id}`,
    },
    {
      label: "Page 3",
      path: `/movies-by-genre/${params.id}`,
    },
  ];

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
      <div>
        {data == null ? (
          <FeedbackMoviesByAGenre />
        ) : (
          <>
            <MoviesByAGenreDisplay
              genreId={params.id}
              pageMoviesResults={data.results}
            />
          </>
        )}
      </div>
      {pagesLength == 3 ? (
        <div className="genre-movies-pages">
          {navItems.map((item) => {
            const genrePageStr = item.label.substring(item.label.length - 1);
            return (
              <div key={item.label}>
                <Link
                  onClick={() => {
                    setGenrePage(parseInt(genrePageStr));
                  }}
                  style={linkStyles}
                  to={item.path}
                  className={
                    genrePage == parseInt(genrePageStr)
                      ? "genre-movies-list active"
                      : "genre-movies-list"
                  }
                >
                  {" "}
                  {item.label}
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
      ;
    </div>
  );
}
