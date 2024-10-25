import { useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";

export default function SearchBar() {
  const { filteredMovieList, setFilteredMovieList } = useContext(GlobalContext);

  // function filterMovieListOnChange(e) {

  const [searchMovie, setSearchMovie] = useState<string>("");
  // console.log("you search for: ", searchMovie);

  // if (searchMovie === "") {
  //   setFilteredMovieList([]);
  // }

  // const filteredProducts = productContext.products.filter((item) => {
  //   if (item.product.name.toLowerCase().includes(searchMovie.toLowerCase()))
  //     return true;

  //   return false;
  // });

  // productContext.setProducts(filteredProducts);

  return (
    <input
      type="text"
      placeholder="Search for a movie"
      value={searchMovie}
      onChange={(e) => setSearchMovie(e.target.value)}
    />
  );
}
