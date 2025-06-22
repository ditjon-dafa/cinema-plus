import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { useParams } from "react-router-dom";
import Loading from "../common/Loading";
import Error from "../common/Error";
import useMoviesByAGenreFetch from "../../hooks/useMoviesByAGenreFetch";
import "../../components/favorites-movie-list/favorites-movie-list.css";
import FeedbackMoviesByAGenre from "../../feedback-to-user/FeedbackMoviesByAGenre";
import MoviesByAGenreDisplay from "./components/display/MoviesByAGenreDisplay";

export default function MoviesByAGenreData() {
  const params = useParams() as {
    id: string;
  };
  const { theme } = useContext(GlobalContext);
  const { data, loading, error } = useMoviesByAGenreFetch(params.id);

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
        {data.length == 0 ? (
          <FeedbackMoviesByAGenre />
        ) : (
          <MoviesByAGenreDisplay genreId={params.id} moviesData={data} />
        )}
      </div>
    </div>
  );
}
