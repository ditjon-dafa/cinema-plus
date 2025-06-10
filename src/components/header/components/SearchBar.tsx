import { useState } from "react";
import useSearchMovieFetch from "../../../hooks/useSearchMovieFetch";

import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import { useNavigate } from "react-router-dom";
import Loading from "../../common/Loading";
import Error from "../../common/Error";

import { Input } from "antd";
import type { GetProps } from "antd";

import "./search-bar.css";

export default function SearchBar() {
  const nav = useNavigate();
  const [query, setQuery] = useState<string>("");
  const { setSearchMovie } = useContext(GlobalContext);
  const { data: movies, loading, error } = useSearchMovieFetch(query);

  type SearchProps = GetProps<typeof Input.Search>;
  const { Search } = Input;

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

  const onSearch: SearchProps["onSearch"] = () => {
    searchForMovie();
  };
  return (
    <div>
      <Search
        placeholder="Search for a movie..."
        allowClear
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onSearch={onSearch}
        id="search-input"
      />
    </div>
  );
}
