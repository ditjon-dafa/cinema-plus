import { useContext } from "react";
import { GlobalContext } from "../../../../../context/GlobalContext";
import useGenresFetch from "../../../../../hooks/useGenresFetch";
import Error from "../../../../common/Error";
import Loading from "../../../../common/Loading";
import "../../../../basic-info/basic-info.css";

interface Props {
  genreId: string;
}
export default function GenreInfo(props: Props) {
  const { theme } = useContext(GlobalContext);
  const { data: genres, loading, error } = useGenresFetch();
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const propsGenreIdInt = parseInt(props.genreId);

  const genre = genres.find((genre) => genre.id == propsGenreIdInt);

  return (
    <div
      style={{
        backgroundColor:
          theme === "light" ? "rgb(240, 240, 240)" : "rgb(80, 80, 80)",
        color: theme === "light" ? "black" : "white",
      }}
    >
      <p className="intro">
        <b> Movies genre: </b>
        {genre?.name}
      </p>
    </div>
  );
}
