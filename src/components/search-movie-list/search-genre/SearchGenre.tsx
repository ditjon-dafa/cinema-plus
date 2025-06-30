import GenreCard from "../../genres-list/components/GenreCard";

import useSingleGenresFetch from "../../../hooks/useSingleGenreFetch";
import Loading from "../../common/Loading";
import Error from "../../common/Error";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import "./../../movie-list/movie-list.css";
interface Props {
  queryGenre: string;
}

export default function SearchGenre(props: Props) {
  const { theme } = useContext(GlobalContext);
  const nav = useNavigate();

  const {
    data: searchedGenre,
    loading,
    error,
  } = useSingleGenresFetch(props.queryGenre);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }
  function handleGenresNavigation() {
    nav("/movies-by-genre");
  }
  if (searchedGenre) {
    return (
      <div
        style={{
          backgroundColor:
            theme === "light" ? "rgb(240, 240, 240)" : "rgb(80, 80, 80)",
          color: theme === "light" ? "black" : "white",
        }}
      >
        <p> Genre Search Result: </p>
        <div className="movie-list">
          <GenreCard
            key={searchedGenre.id}
            id={searchedGenre.id}
            name={searchedGenre.name}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div
        style={{
          backgroundColor:
            theme === "light" ? "rgb(240, 240, 240)" : "rgb(80, 80, 80)",
          color: theme === "light" ? "black" : "white",
        }}
      >
        <p> There are no results for: {props.queryGenre}! </p>
        <p>
          {" "}
          For a complete list of Cinema + genres, click{" "}
          <span onClick={handleGenresNavigation}> here! </span>
        </p>
      </div>
    );
  }
}
