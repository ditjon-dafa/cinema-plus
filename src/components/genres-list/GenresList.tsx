import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import useGenresFetch from "../../hooks/useGenresFetch";
import Loading from "../common/Loading";
import Error from "../common/Error";
import GenreCard from "./components/genre-card/GenreCard";
import "./genre-list.css";

export default function GenresList() {
  const { theme } = useContext(GlobalContext);
  const { data: genres, loading, error } = useGenresFetch();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div
      style={{
        backgroundColor:
          theme === "light" ? "rgb(240, 240, 240)" : "rgb(80, 80, 80)",
      }}
      className="genre-padding"
    >
      <div className="movie-list">
        {genres.map((genre) => {
          return <GenreCard key={genre.id} id={genre.id} name={genre.name} />;
        })}
      </div>
    </div>
  );
}
