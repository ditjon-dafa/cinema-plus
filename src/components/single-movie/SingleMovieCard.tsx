import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { SingleMovieType } from "../../types";
import { convertDurationToHoursAndMinutes, getRatingFixed } from "../../utils";
import "./single-movie.css";
import { StarFilled } from "@ant-design/icons";
interface Props {
  movie: SingleMovieType;
}

const baseUrl = "https://image.tmdb.org/t/p/w500/";

export default function SingleMovieCard(props: Props) {
  const { theme } = useContext(GlobalContext);

  const duration = convertDurationToHoursAndMinutes(props.movie.runtime);
  const rating = getRatingFixed(props.movie.vote_average);

  const movieGenres = props.movie.genres;

  const starStyle = {
    color: theme === "light" ? "rgb(202, 202, 0)" : "yellow",
    fontSize: "150%",
    marginRight: "8px",
  };

  return (
    <div
      className="single-movie-content"
      style={{
        padding: 24,
        backgroundColor:
          theme === "light" ? "rgb(240, 240, 240)" : "rgb(80, 80, 80)",
        color: theme === "light" ? "black" : "white",
      }}
    >
      <div className="single-movie-header">
        <div>
          <h1
            style={{
              textAlign: "left",
            }}
          >
            {props.movie.title}{" "}
          </h1>
          <p
            style={{
              textAlign: "left",
            }}
          >
            {props.movie.release_date.substring(0, 4)} - {duration.hours} h{" "}
            {duration.minutes} m
          </p>
        </div>
        <div>
          <p
            style={{
              textAlign: "right",
            }}
          >
            {" "}
            <span style={starStyle}>
              <StarFilled />
            </span>
            <b style={{ fontSize: "150%" }}>{rating}</b>/10
          </p>
        </div>
      </div>

      <img
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "24px",
        }}
        src={baseUrl + props.movie.backdrop_path}
        alt=""
      />
      <div>
        <p>
          {movieGenres.map((genre) => {
            return (
              <span
                key={genre.id}
                className="genres"
                style={{
                  border:
                    theme === "light" ? "1px solid black" : "1px solid white",
                }}
              >
                {genre.name}
              </span>
            );
          })}
        </p>
        <br />
        <p> {props.movie.overview}</p>
      </div>
    </div>
  );
}
