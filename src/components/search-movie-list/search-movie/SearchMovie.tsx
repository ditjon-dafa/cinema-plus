import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import useSearchMovieFetch from "../../../hooks/useSearchMovieFetch";
import Loading from "../../common/Loading";
import Error from "../../common/Error";
import SearchMovieList from "../SearchMovieList";

interface Props {
  queryMovie: string;
}

export default function SearchMovie(props: Props) {
  const { setSearchMovie } = useContext(GlobalContext);

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

  setSearchMovie(movies);
  return (
    <>
      {/* <p> Movie Search Results: </p> */}
      <SearchMovieList />
    </>
  );
}
