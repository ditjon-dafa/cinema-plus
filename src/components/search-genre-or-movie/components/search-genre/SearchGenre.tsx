import GenreCard from "../../../genres-list/components/genre-card/GenreCard";

import useSingleGenreFetch from "../../../../hooks/useSingleGenreFetch";
import Loading from "../../../common/Loading";
import Error from "../../../common/Error";
import { useContext } from "react";
import { GlobalContext } from "../../../../context/GlobalContext";
import SearchGenreHeader from "./components/SearchGenreHeader";
import FeedbackSearchGenre from "../../../../feedback-to-user/FeedbackSearchGenre";
import "./../../search-genre-movie.css";
import "../../components/search-movie/search-movie-list.css";
interface Props {
  queryGenre: string;
}

export default function SearchGenre(props: Props) {
  const { theme } = useContext(GlobalContext);

  const {
    data: searchedGenre,
    loading,
    error,
  } = useSingleGenreFetch(props.queryGenre);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  if (searchedGenre == undefined) {
    return <FeedbackSearchGenre />;
  } else {
    return (
      <div
        style={{
          backgroundColor:
            theme === "light" ? "rgb(240, 240, 240)" : "rgb(80, 80, 80)",
          color: theme === "light" ? "black" : "white",
        }}
        className="search-movie-list-screen"
      >
        <SearchGenreHeader />
        <div className="search-genre-result">
          <GenreCard
            key={searchedGenre.id}
            id={searchedGenre.id}
            name={searchedGenre.name}
          />
        </div>
      </div>
    );
  }
}
