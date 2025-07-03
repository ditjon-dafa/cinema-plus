import { useContext } from "react";
import { GlobalContext } from "../../../../context/GlobalContext";
import { useNavigate } from "react-router-dom";
import genre_sample_img from "../../../../images/genre-sample-data.png";
import useMoviesByAGenreFetch from "../../../../hooks/useMoviesByAGenreFetch";
import { findMainGenreMoviePos, getAverageRating } from "../../../../lib/utils";
import { StarFilled } from "@ant-design/icons";
import "./genre-card.css";

interface Props {
  id: number;
  name: string;
}
const baseUrl = "https://image.tmdb.org/t/p/w500";
export default function GenreCard(props: Props) {
  const { theme } = useContext(GlobalContext);
  const nav = useNavigate();
  const starStyle = {
    color: theme === "light" ? "rgb(202, 202, 0)" : "yellow",
  };

  let genreIdString: string = props.id.toString();

  const { data: moviesData } = useMoviesByAGenreFetch(genreIdString);

  const averageRating: number = getAverageRating(moviesData);

  const moviePos = findMainGenreMoviePos(moviesData, props.id);

  function handleMoviesByGenreNavigation() {
    nav(`/movies-by-genre/${props.id}`);
  }

  return (
    <div
      className="card-background card"
      style={{
        backgroundColor:
          theme === "light" ? "rgb(225, 225, 225)" : "rgb(70, 70, 70)",
        color: theme === "light" ? "black" : "white",
      }}
      onClick={handleMoviesByGenreNavigation}
    >
      <img
        src={
          moviesData.length == 0 || moviePos.backdrop_path == null
            ? genre_sample_img
            : baseUrl + moviePos.backdrop_path
        }
        alt=""
      />
      <h3> {props.name} </h3>
      <div className="genre-info">
        <div>Total number of movies: {moviesData.length}</div>
        <div>
          {" "}
          <p>
            <span className="star-rate" style={starStyle}>
              <StarFilled />
            </span>

            {averageRating}
          </p>
        </div>
      </div>
    </div>
  );
}
