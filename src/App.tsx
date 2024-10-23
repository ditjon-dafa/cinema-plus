// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";
import { GlobalContext } from "./context/GlobalContext";
import { FavoritesType, LikeType, ThemeType } from "./types";

import HomePage from "./pages/HomePage";
import Favorites from "./pages/Favorites";
import SingleMovie from "./pages/SingleMovie";

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
  ]);

  const [theme, setTheme] = useState<ThemeType>("dark");
  const [favorites, setFavorites] = useState<FavoritesType>([]);
  const [isLiked, setIsLiked] = useState<LikeType>(false);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <GlobalContext.Provider
      value={{ theme, setTheme, favorites, setFavorites, isLiked, setIsLiked }}
    >
      <RouterProvider router={router} />
    </GlobalContext.Provider>
  );
}

export default App;
