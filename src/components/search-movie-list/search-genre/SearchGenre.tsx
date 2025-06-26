import GenreCard from "../../genres-list/components/GenreCard";

import useSingleGenresFetch from "../../../hooks/useSingleGenreFetch";
import Loading from "../../common/Loading";
import Error from "../../common/Error";
import { useNavigate } from "react-router-dom";

export default function SearchGenre(query: string) {
  const nav = useNavigate();

  const { data: searchedGenre, loading, error } = useSingleGenresFetch(query);

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
      <>
        <p> Genre Search Result: </p>

        <GenreCard
          key={searchedGenre.id}
          id={searchedGenre.id}
          name={searchedGenre.name}
        />
      </>
    );
  } else {
    return (
      <>
        <p> There are no results for: {query}! </p>
        <p>
          {" "}
          For a complete list of Cinema + genres, click{" "}
          <span onClick={handleGenresNavigation}> here! </span>
        </p>
      </>
    );
  }
}
