// import { useState } from "react";
// import { useContext } from "react";
// import { GlobalContext } from "../../../context/GlobalContext";

// export default function SearchBar() {
//   const { filteredMovieList, setFilteredMovieList } = useContext(GlobalContext);

//   // function filterMovieListOnChange(e) {

//   const [searchMovie, setSearchMovie] = useState<string>("");
//   // console.log("you search for: ", searchMovie);

//   // if (searchMovie === "") {
//   //   setFilteredMovieList([]);
//   // }

//   // const filteredProducts = productContext.products.filter((item) => {
//   //   if (item.product.name.toLowerCase().includes(searchMovie.toLowerCase()))
//   //     return true;

//   //   return false;
//   // });

//   // productContext.setProducts(filteredProducts);

//   return (
//     <input
//       type="text"
//       placeholder="Search for a movie"
//       value={searchMovie}
//       onChange={(e) => setSearchMovie(e.target.value)}
//     />
//   );
// }

// import React, { useState } from "react";
// import axios from "axios";
// const MovieSearch = () => {
//   const [query, setQuery] = useState("");
//   const [movies, setMovies] = useState([]);
//   const searchMovies = async (e) => {
//     e.preventDefault();
//     if (!query) return;
//     const response = await axios.get(
//       `https://api.themoviedb.org/3/search/movie?api_key=1d1d8844ae1e746c459e7be85c15c840&query=${query}`
//     );

//     // search example:
//     //https://api.themoviedb.org/3/search/movie?api_key=1d1d8844ae1e746c459e7be85c15c840&query=Robot
//     setMovies(response.data.results);
//   };
//   return (
//     <div>
//       {" "}
//       <form onSubmit={searchMovies}>
//         <input
//           type="text"
//           placeholder="Search for a movie..."
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//         />
//         <button type="submit">Search</button>
//       </form>
//     </div>
//   );
// };
// export default MovieSearch;

import React, { useState } from "react";
import axios from "axios";
import useSearchMovieFetch from "../../../hooks/useSearchMovieFetch";

import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";

export default function SearchBar() {
  const [query, setQuery] = useState<string>("");

  const { data: movies, loading, error } = useSearchMovieFetch(query);

  const { searchMovie, setSearchMovie } = useContext(GlobalContext);

  setSearchMovie(movies.results);

  return (
    <div>
      {" "}
      <form onSubmit={searchMovies}>
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
