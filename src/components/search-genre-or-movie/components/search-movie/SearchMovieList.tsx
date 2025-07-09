import FeedbackSearchMovie from "../../../../feedback-to-user/FeedbackSearchMovie";
import useSearchMovieFetch from "../../../../hooks/useSearchMovieFetch";
import Loading from "../../../common/Loading";
import Error from "../../../common/Error";
import SearchMovieListData from "./components/data/SearchMovieListData";

interface Props {
  queryMovie: string;
}

export default function SearchMovieList(props: Props) {
  const {
    data: movies,
    loading,
    error,
  } = useSearchMovieFetch(props.queryMovie);

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
        <SearchMovieListData movieList={movies} />
      )}
    </>
  );
}
