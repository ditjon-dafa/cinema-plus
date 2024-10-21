export type ThemeType = "light" | "dark";

// export type LocalesType = "en" | "fr" | "sq";

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
  release_date: Date;
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
  genres: Array<object>;
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
  release_date: Date;
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
