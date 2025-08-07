import { useContext } from "react";
import { GlobalContext } from "../../../../context/GlobalContext";
import { SingleMovieType } from "../../../../types";
import LargeScreenMoviePhoto from "./LargeScreenMoviePhoto";
import MovieGenresAndDescription from "../common-components/MovieGenresAndDescription";
import MovieHeader from "../common-components/MovieHeader";
import "../../single-movie.css";
import "../../../../App.css";
import BookAMovie from "../common-components/BookAMovie";

interface Props {
  singleMovie: SingleMovieType;
}
export default function LargeScreenMovieRendering(props: Props) {
  const { theme } = useContext(GlobalContext);
  const { setIsModalOpen } = useContext(GlobalContext);

  function handleBooking() {
    setIsModalOpen(true);
  }

  return (
    <div
      style={{
        backgroundColor:
          theme === "light" ? "rgb(240, 240, 240)" : "rgb(80, 80, 80)",
        color: theme === "light" ? "black" : "white",
      }}
      className="movie-and-book-button single-movie-content"
    >
      <div className="large-screen ">
        <LargeScreenMoviePhoto singleMovie={props.singleMovie} />
        <div className="movie-details">
          <MovieHeader singleMovie={props.singleMovie} />
          <MovieGenresAndDescription singleMovie={props.singleMovie} />
        </div>
      </div>
      <div>
        <button
          onClick={handleBooking}
          className="cinema-plus-buttons"
          style={{ color: theme === "light" ? "black" : "white" }}
        >
          {" "}
          Book this movie
        </button>
        <BookAMovie movieTitle={props.singleMovie.title} />
      </div>
    </div>
  );
}
