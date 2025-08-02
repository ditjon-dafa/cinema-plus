import useWindowResize from "../../hooks/useWindowResize";
import MobileMoviesList from "./mobile-movies-list/MobileMoviesList";
import MovieList from "./MovieList";
export default function GeneraMoviesList() {
  const screenWidthBreakpoint = 1000;
  const isSmallScreenSize = useWindowResize(screenWidthBreakpoint);

  return <>{isSmallScreenSize ? <MobileMoviesList /> : <MovieList />}</>;
}
