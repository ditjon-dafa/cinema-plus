import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "antd";
import type { GetProps } from "antd";
import { GlobalContext } from "../../../context/GlobalContext";
import "./search-bar.css";

export default function SearchBar() {
  const nav = useNavigate();
  const [query, setQuery] = useState<string>("");
  const { setQueryGenreMovie } = useContext(GlobalContext);

  type SearchProps = GetProps<typeof Input.Search>;
  const { Search } = Input;

  function search() {
    setQueryGenreMovie(query);
    nav("/search");
  }

  const onSearch: SearchProps["onSearch"] = () => {
    search();
  };

  return (
    <div>
      <Search
        placeholder="Genre or Movie"
        allowClear
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onSearch={onSearch}
        id="search-input"
      />
    </div>
  );
}
