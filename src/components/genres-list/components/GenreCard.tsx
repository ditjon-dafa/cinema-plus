import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import { useNavigate } from "react-router-dom";
import genre_sample_img from "../../../images/genre-sample-data.png";

interface Props {
  id: number;
  name: string;
}

export default function GenreCard(props: Props) {
  const { theme } = useContext(GlobalContext);
  const nav = useNavigate();

  function handleMoviesByGenreNavigation() {
    nav(`/movies-by-genre/${props.id}`);
  }

  return (
    <div
      className="card-background"
      style={{
        backgroundColor:
          theme === "light" ? "rgb(225, 225, 225)" : "rgb(70, 70, 70)",
        color: theme === "light" ? "black" : "white",
      }}
      onClick={handleMoviesByGenreNavigation}
    >
      <img src={genre_sample_img} alt="" />
      <p> {props.name} </p>
    </div>
  );
}
