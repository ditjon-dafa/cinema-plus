import { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { useParams } from "react-router-dom";
import Loading from "../common/Loading";
import Error from "../common/Error";
import useMoviesByAGenreFetch from "../../hooks/useMoviesByAGenreFetch";
import FeedbackMoviesByAGenre from "../../feedback-to-user/FeedbackMoviesByAGenre";
import MoviesByAGenreDisplay from "./components/display/MoviesByAGenreDisplay";
import "../favorites-movie-list/favorites-movie-list.css";
import "../movie-list/mobile-movies-list/mobile-movies-list.css";

import { Link } from "react-router-dom";

export default function MoviesByAGenreData() {
  const params = useParams() as {
    id: string;
  };
  const { theme } = useContext(GlobalContext);

  const [genrePage, setGenrePage] = useState(1);
  const { data, pagesLength, loading, error } = useMoviesByAGenreFetch(
    params.id,
    genrePage
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <>
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
          <div className="page-parts">
            <div
              onClick={() => {
                setGenrePage(1);
              }}
            >
              <Link
                to={`/movies-by-genre/${params.id}`}
                className={genrePage == 1 ? "page-part active" : "page-part"}
              >
                {" "}
                Page 1
              </Link>
            </div>
            <div
              onClick={() => {
                setGenrePage(2);
              }}
            >
              <Link
                to={`/movies-by-genre/${params.id}`}
                className={genrePage == 2 ? "page-part active" : "page-part"}
              >
                {" "}
                Page 2
              </Link>
            </div>
            <div
              onClick={() => {
                setGenrePage(3);
              }}
            >
              <Link
                to={`/movies-by-genre/${params.id}`}
                className={genrePage == 3 ? "page-part active" : "page-part"}
              >
                {" "}
                Page 3
              </Link>
            </div>
          </div>
        ) : (
          ""
        )}
        ;
      </div>
    </>
  );
}
