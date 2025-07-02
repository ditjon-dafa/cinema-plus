import { createContext } from "react";
import {
  ThemeType,
  FavoritesType,
  SearchMovieType,
  QueryGenreMovieType,
} from "../types";

const defaultValue: {
  theme: ThemeType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
  favorites: FavoritesType;
  setFavorites: React.Dispatch<React.SetStateAction<FavoritesType>>;
  searchMovie: SearchMovieType;
  setSearchMovie: React.Dispatch<React.SetStateAction<SearchMovieType>>;
  queryGenreMovie: QueryGenreMovieType;
  setQueryGenreMovie: React.Dispatch<React.SetStateAction<QueryGenreMovieType>>;
} = {
  theme: "dark", // is overided in App.tsx:  const [theme, setTheme] = useState<ThemeType>("dark");
  setTheme: () => {},
  favorites: [],
  setFavorites: () => {},
  searchMovie: [],
  setSearchMovie: () => {},
  queryGenreMovie: "",
  setQueryGenreMovie: () => {},
};
export const GlobalContext = createContext(defaultValue);
