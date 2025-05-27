import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";
import { GlobalContext } from "./context/GlobalContext";
import { FavoritesType, ThemeType, SearchMovieType } from "./types";

import HomePage from "./pages/HomePage";
import Favorites from "./pages/Favorites";
import SingleMovie from "./pages/SingleMovie";
import SearchMovie from "./pages/SearchMovie";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/favorites",
      element: <Favorites />,
    },
    {
      path: "movie/:id", //calling dynamically a movie with an id
      element: <SingleMovie />,
    },

    {
      path: "/search",
      element: <SearchMovie />,
    },
  ]);

  const favoritesFromLocalStorage = (() => {
    const storedFavorites = localStorage.getItem("favorites");
    try {
      return storedFavorites ? JSON.parse(storedFavorites) : [];
    } catch (error) {
      console.error("Error parsing favorites from localStorage:", error);
      return [];
    }
  })();
  //getting favorites movies for the first time results in an empty array
  //when there is a movie in favorites(from local storage), at least an object
  //of "MovieType" type will be in constant "favorites"

  const [theme, setTheme] = useState<ThemeType>("dark");
  const [favorites, setFavorites] = useState<FavoritesType>(
    favoritesFromLocalStorage
  );

  const [searchMovie, setSearchMovie] = useState<SearchMovieType>([]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <GlobalContext.Provider
      value={{
        theme,
        setTheme,
        favorites,
        setFavorites,
        searchMovie,
        setSearchMovie,
      }}
    >
      <RouterProvider router={router} />
    </GlobalContext.Provider>
  );
}

export default App;
