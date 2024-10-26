// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";
import { GlobalContext } from "./context/GlobalContext";
import { FavoritesType, LikeType, ThemeType, SearchMovieType } from "./types";

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
      path: "movie/:id", //it needs api(movie id) to receive a single movie
      element: <SingleMovie />,
    },

    {
      path: "/search",
      element: <SearchMovie />,
    },
  ]);

  const [theme, setTheme] = useState<ThemeType>("dark");
  const [favorites, setFavorites] = useState<FavoritesType>([]);
  const [isLiked, setIsLiked] = useState<LikeType>(false);
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
        isLiked,
        setIsLiked,
        searchMovie,
        setSearchMovie,
      }}
    >
      <RouterProvider router={router} />
    </GlobalContext.Provider>
  );
}

export default App;
