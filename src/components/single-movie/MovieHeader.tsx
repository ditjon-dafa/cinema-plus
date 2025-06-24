import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { SingleMovieType } from "../../types";
import { convertDurationToHoursAndMinutes, getRatingFixed } from "../../utils";
import { StarFilled } from "@ant-design/icons";
interface Props {
  singleMovie: SingleMovieType;
}
export default function MovieHeader(props: Props) {
  const { theme } = useContext(GlobalContext);
  const duration = convertDurationToHoursAndMinutes(props.singleMovie.runtime);

  const starStyle = {
    color: theme === "light" ? "rgb(202, 202, 0)" : "yellow",
    fontSize: "110%",
    marginRight: "0.3em",
  };
  const rating = getRatingFixed(props.singleMovie.vote_average);
  return (
    <div className="single-movie-header">
      <div>
        <h2
          style={{
            textAlign: "left",
          }}
        >
          {props.singleMovie.title}
        </h2>
        <p
          style={{
            textAlign: "left",
          }}
        >
          {props.singleMovie.release_date.substring(0, 4)} - {duration.hours} h{" "}
          {duration.minutes} m
        </p>
      </div>
      <div>
        <p
          style={{
            textAlign: "right",
          }}
        >
          <span style={starStyle}>
            <StarFilled />
          </span>
          <b style={{ fontSize: "120%" }}>{rating}</b>/10
        </p>
      </div>
    </div>
  );
}
