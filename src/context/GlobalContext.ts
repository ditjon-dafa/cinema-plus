import { createContext } from "react";
// import { ThemeType, FavoritesType } from "../types";
import { ThemeType, FavoritesType, LikeType, SearchMovieType } from "../types";

const defaultValue: {
  theme: ThemeType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
  isLiked: LikeType;
  setIsLiked: React.Dispatch<React.SetStateAction<LikeType>>;
  favorites: FavoritesType;
  setFavorites: React.Dispatch<React.SetStateAction<FavoritesType>>;
  searchMovie: SearchMovieType;
  setSearchMovie: React.Dispatch<React.SetStateAction<SearchMovieType>>;
} = {
  theme: "light",
  setTheme: () => {},
  isLiked: false,
  setIsLiked: () => {},
  favorites: [],
  setFavorites: () => {},
  searchMovie: [],
  setSearchMovie: () => {},
};
export const GlobalContext = createContext(defaultValue);
