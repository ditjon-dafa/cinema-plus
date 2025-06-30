import { useContext, useState } from "react";
// import useSearchMovieFetch from "../../../hooks/useSearchMovieFetch";

// import { useContext } from "react";
// import { GlobalContext } from "../../../context/GlobalContext";
import { useNavigate } from "react-router-dom";
// import Loading from "../../common/Loading";
// import Error from "../../common/Error";

import { Input } from "antd";
import type { GetProps } from "antd";

import "./search-bar.css";
// import { moviesByGenre } from "../../../movies-by-genre";
// import { MoviesByGenre, MovieType, SearchGenreType } from "../../../types";
// import SearchMovie from "../../search-movie-list/search-movie/SearchMovie";
import SearchGenre from "../../search-movie-list/search-genre/SearchGenre";
import SearchGenreOrMovie from "../../../pages/SearchGenreOrMovie";
import { GlobalContext } from "../../../context/GlobalContext";

export default function SearchBar() {
  const nav = useNavigate();
  const [query, setQuery] = useState<string>("");
  const { setQueryGenreMovie } = useContext(GlobalContext);
  // const { setSearchGenre } = useContext(GlobalContext);
  //   const { setSearchMovie } = useContext(GlobalContext);
  // const { data: movies, loading, error } = useSearchMovieFetch(query);
  // const [genre, setGenre] = useState<MovieType>();
  // const found : MoviesByGenre = moviesByGenre.find((genre) => genre.genreName == query);
  // if(found)
  // setGenre(found);
  // if (genre) setGenre(genre);
  type SearchProps = GetProps<typeof Input.Search>;
  const { Search } = Input;

  // if (loading) {
  //   return <Loading />;
  // }

  // if (error) {
  //   return <Error />;
  // }

  function search() {
    // if (found) {
    //   setSearchGenre(found);
    // } else {
    //   setSearchGenre([]);
    // }
    // setSearchMovie(movies);
    // SearchGenre(query);

    // console.log("query", query);
    setQueryGenreMovie(query);
    nav("/search");
    // <SearchGenre queryGenre={query} />;
    // <SearchMovie queryMovie={query} />;
    // return (
    //   <>
    //     <SearchGenreOrMovie queryStr={query} />;
    //   </>
    // );
    // SearchMovie(query);
    // return query;
  }

  const onSearch: SearchProps["onSearch"] = () => {
    search();
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
