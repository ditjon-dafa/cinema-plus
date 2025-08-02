import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FloatButton } from "antd";
import { useState, useEffect } from "react";
import { GlobalContext } from "./context/GlobalContext";
import {
  FavoritesType,
  ThemeType,
  SearchMovieType,
  QueryGenreMovieType,
  PageType,
  PagePartType,
} from "./types";

import HomePage from "./pages/HomePage";
import Favorites from "./pages/Favorites";
import SingleMovie from "./pages/SingleMovie";
import MoviesByGenre from "./pages/MoviesByGenre";
import MoviesByAGenre from "./pages/MoviesByAGenre";
import SearchGenreOrMovie from "./pages/SearchGenreOrMovie";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/movies-by-genre",
      element: <MoviesByGenre />,
    },
    {
      path: "/movies-by-genre/:id",
      element: <MoviesByAGenre />,
    },
    {
      path: "/favorites",
      element: <Favorites />,
    },
    {
      path: "/movie/:id", //calling dynamically a movie with an id
      element: <SingleMovie />,
    },

    {
      path: "/search",
      element: <SearchGenreOrMovie />,
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
  const [currentPage, setCurrentPage] = useState<PageType>(1);
  const [pagePart, setPagePart] = useState<PagePartType>(1);
  const [favorites, setFavorites] = useState<FavoritesType>(
    favoritesFromLocalStorage
  );
  const [searchMovie, setSearchMovie] = useState<SearchMovieType>([]);
  const [queryGenreMovie, setQueryGenreMovie] =
    useState<QueryGenreMovieType>("");

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <GlobalContext.Provider
      value={{
        theme,
        setTheme,
        currentPage,
        setCurrentPage,
        pagePart,
        setPagePart,
        favorites,
        setFavorites,
        searchMovie,
        setSearchMovie,
        queryGenreMovie,
        setQueryGenreMovie,
      }}
    >
      <FloatButton.BackTop />
      <RouterProvider router={router} />
    </GlobalContext.Provider>
  );
}

export default App;
