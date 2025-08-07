import { useContext } from "react";
import { GlobalContext } from "../../../../context/GlobalContext";
import { SingleMovieType } from "../../../../types";
import MovieGenresAndDescription from "../common-components/MovieGenresAndDescription";
import MovieHeader from "../common-components/MovieHeader";
import SmallScreenMoviePhoto from "./SmallScreenMoviePhoto";
import "../../single-movie.css";
import "../../../../App.css";
import BookAMovie from "../common-components/BookAMovie";
interface Props {
  singleMovie: SingleMovieType;
}
export default function SmallScreenMovieRendering(props: Props) {
  const { theme } = useContext(GlobalContext);
  const { setIsModalOpen } = useContext(GlobalContext);

  function handleBooking() {
    setIsModalOpen(true);
  }

  return (
    <div
      className="single-movie-content movie-and-book-button"
      style={{
        backgroundColor:
          theme === "light" ? "rgb(240, 240, 240)" : "rgb(80, 80, 80)",
        color: theme === "light" ? "black" : "white",
      }}
    >
      <div>
        <MovieHeader singleMovie={props.singleMovie} />
        <SmallScreenMoviePhoto singleMovie={props.singleMovie} />
        <MovieGenresAndDescription singleMovie={props.singleMovie} />
      </div>
      <div style={{ padding: 25 }}>
        <button onClick={handleBooking} className="cinema-plus-buttons">
          {" "}
          Book this movie
        </button>
        <BookAMovie movieTitle={props.singleMovie.title} />
      </div>
    </div>
  );
}
