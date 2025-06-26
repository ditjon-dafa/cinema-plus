import { createContext } from "react";
import {
  ThemeType,
  FavoritesType,
  SearchMovieType,
  // SearchGenreType,
} from "../types";

const defaultValue: {
  theme: ThemeType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
  favorites: FavoritesType;
  setFavorites: React.Dispatch<React.SetStateAction<FavoritesType>>;
  searchMovie: SearchMovieType;
  setSearchMovie: React.Dispatch<React.SetStateAction<SearchMovieType>>;
  // searchGenre: SearchGenreType;
  // setSearchGenre: React.Dispatch<React.SetStateAction<SearchGenreType>>;
} = {
  theme: "dark", // is overided in App.tsx:  const [theme, setTheme] = useState<ThemeType>("dark");
  setTheme: () => {},
  favorites: [],
  setFavorites: () => {},
  searchMovie: [],
  setSearchMovie: () => {},
  // searchGenre: [],
  // setSearchGenre: () => {},
};
export const GlobalContext = createContext(defaultValue);
