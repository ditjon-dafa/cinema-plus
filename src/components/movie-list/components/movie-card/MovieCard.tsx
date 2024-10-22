import "./movie-card.css";
import { useNavigate } from "react-router-dom";
import { getRatingFixed } from "../../../../utils";
import { StarFilled } from "@ant-design/icons";

interface Props {
  backdrop_path: string;
  vote_average: number;
  title: string;
  id: number;
}

const baseUrl = "https://image.tmdb.org/t/p/w500/";

export default function MovieCard(props: Props) {
  const rating = getRatingFixed(props.vote_average);
  const nav = useNavigate();

  function handleSingleMovieNavigation() {
    nav(`/movie/${props.id}`);
  }

  return (
    <article onClick={handleSingleMovieNavigation} className="movie-card">
      <img src={baseUrl + props.backdrop_path} alt="" />
      {/* <img src={img1} alt="Sample" /> */}

      <p>
        <span style={{ color: "yellow" }}>
          <StarFilled />
        </span>{" "}
        {rating}
      </p>
      {/* <p> Rating: movie rating</p> */}

      <h3>{props.title}</h3>
      {/* <h3> Movie title</h3> */}
    </article>
  );
}
