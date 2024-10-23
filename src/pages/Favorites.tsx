import Header from "../components/header/Header";

import FavoritesMovieList from "../components/favorites-movie-list/FavoritesMovieList";

export default function Favorites() {
  return (
    <>
      <Header />
      <FavoritesMovieList />
    </>
    //   <div
    //     style={{
    //       backgroundColor: theme === "light" ? "white" : "black",
    //     }}
    //     className="movie-list"
    //   ></div>
    // </div>
  );
}
