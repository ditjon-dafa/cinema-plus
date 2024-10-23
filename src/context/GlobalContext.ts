import { createContext } from "react";
// import { ThemeType, FavoritesType } from "../types";
import { ThemeType, FavoritesType, LikeType } from "../types";

const defaultValue: {
  theme: ThemeType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
  isLiked: LikeType;
  setIsLiked: React.Dispatch<React.SetStateAction<LikeType>>;
  favorites: FavoritesType;
  setFavorites: React.Dispatch<React.SetStateAction<FavoritesType>>;
} = {
  theme: "light",
  setTheme: () => {},
  isLiked: false,
  setIsLiked: () => {},
  favorites: [],
  setFavorites: () => {},
};
export const GlobalContext = createContext(defaultValue);
