import { createContext } from "react";
import {
  ThemeType,
  PageType,
  FavoritesType,
  SearchMovieType,
  QueryGenreMovieType,
  PagePartType,
  SearchPagePartType,
  ModalType,
} from "../types";

const defaultValue: {
  theme: ThemeType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
  currentPage: PageType;
  setCurrentPage: React.Dispatch<React.SetStateAction<PageType>>;
  pagePart: PagePartType;
  setPagePart: React.Dispatch<React.SetStateAction<PagePartType>>;
  searchPagePart: SearchPagePartType;
  setSearchPagePart: React.Dispatch<React.SetStateAction<SearchPagePartType>>;
  favorites: FavoritesType;
  setFavorites: React.Dispatch<React.SetStateAction<FavoritesType>>;
  searchMovie: SearchMovieType;
  setSearchMovie: React.Dispatch<React.SetStateAction<SearchMovieType>>;
  queryGenreMovie: QueryGenreMovieType;
  setQueryGenreMovie: React.Dispatch<React.SetStateAction<QueryGenreMovieType>>;
  isModalOpen: ModalType;
  setIsModalOpen: React.Dispatch<React.SetStateAction<ModalType>>;
} = {
  theme: "dark", // is overided in App.tsx:  const [theme, setTheme] = useState<ThemeType>("dark");
  setTheme: () => {},
  currentPage: 1,
  setCurrentPage: () => {},
  pagePart: 1,
  setPagePart: () => {},
  searchPagePart: 1,
  setSearchPagePart: () => {},
  favorites: [],
  setFavorites: () => {},
  searchMovie: [],
  setSearchMovie: () => {},
  queryGenreMovie: "",
  setQueryGenreMovie: () => {},
  isModalOpen: false,
  setIsModalOpen: () => {},
};
export const GlobalContext = createContext(defaultValue);
