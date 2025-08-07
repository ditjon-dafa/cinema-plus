export type ThemeType = "light" | "dark";

export type PageType = number;

export type PagePartType = 1 | 2;

export type FavoritesType = Array<MovieType> | [];

export type SearchMovieType = Array<MovieType> | [];

export type QueryGenreMovieType = string | "";

export type ModalType = boolean;

export type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type SingleMovieType = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: object;
  budget: number;
  genres: Array<SingleMovieGenres>;
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: Array<string>;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Array<object>;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Array<object>;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type SingleMovieGenres = {
  id: number;
  name: string;
};

export type Genre = {
  id: number;
  name: string;
};

export type MoviesByGenreType = {
  genreId: number;
  genreName: string;
  allPagesMovies: Array<PageMovies>;
};

export type PageMovies = {
  pageNr: number;
  results: Array<MovieType>;
};
