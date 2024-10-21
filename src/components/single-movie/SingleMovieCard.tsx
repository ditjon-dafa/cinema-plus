import { SingleMovieType } from "../../types";
import { convertDurationToHoursAndMinutes, getRatingFixed } from "../../utils";

interface Props {
  movie: SingleMovieType;
}

export default function SingleMovieCard(props: Props) {
  const duration = convertDurationToHoursAndMinutes(props.movie.runtime);
  const rating = getRatingFixed(props.movie.vote_average);
  const genres = props.movie.genres;
  console.log("genres ->", genres);

  return (
    <div
      style={{
        padding: 24,
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
            {props.movie.release_date.getFullYear()} - {duration.hours} h{" "}
            {duration.minutes} m
          </p>
        </div>
        <div>
          <h3
            style={{
              textAlign: "right",
            }}
          >
            {" "}
            {rating}/10
          </h3>
        </div>
      </div>
      {/* <p
        style={{
          textAlign: "center",
        }}
      >
        {props.movie.description}
      </p> */}
      <img
        style={{
          marginLeft: "auto",
          marginRight: "auto",
        }}
        src={props.movie.backdrop_path}
        alt=""
      />
      <div>
        <p>
          {/* {genres.map((genre) => {
          return (
            <span>{genre.name}</span>
          )
        }
      )
      } */}
          {/* {genres.forEach((genre) => 
      return (
        <span>{genre.name}</span>
      )
          )
          } */}

          {/* for (let index = 0; index < genres.length; index++) {
            const element = genres[index];
          
          } */}
        </p>
        {/* <p>Producer: {props.movie.producer}</p> */}
        {/* <p>
          Duration: {duration.hours} hour, {duration.minutes} minutes
        </p> */}
      </div>
    </div>
  );
}
