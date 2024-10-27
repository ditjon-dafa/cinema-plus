import { useState } from "react";
import useSearchMovieFetch from "../../../hooks/useSearchMovieFetch";

import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import { useNavigate } from "react-router-dom";
import Loading from "../../common/Loading";
import Error from "../../common/Error";

export default function SearchBar() {
  const nav = useNavigate();
  const [query, setQuery] = useState<string>("");
  const { setSearchMovie } = useContext(GlobalContext);
  const { data: movies, loading, error } = useSearchMovieFetch(query);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }
  function searchForMovie() {
    setSearchMovie(movies);
    nav("/search");
  }

  return (
    <div>
      {" "}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          searchForMovie();
        }}
      >
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
