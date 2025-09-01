import useWindowResize from "../../../../hooks/useWindowResize";
import MobileSearchMovieList from "./mobile-search-movie/MobileSearchMovieList";
import SearchMovieList from "./SearchMovieList";
interface Props {
  queryMovie: string;
}

export default function GeneralSearchMovieList(props: Props) {
  const screenWidthBreakpoint = 1000;
  const isSmallScreenSize = useWindowResize(screenWidthBreakpoint);

  return (
    <>
      {isSmallScreenSize ? (
        <MobileSearchMovieList queryMovie={props.queryMovie} />
      ) : (
        <SearchMovieList queryMovie={props.queryMovie} />
      )}
    </>
  );
}
