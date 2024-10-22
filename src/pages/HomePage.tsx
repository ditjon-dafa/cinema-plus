import BasicInfo from "../components/basic-info/BasicInfo";
import Header from "../components/header/Header";
import MovieList from "../components/movie-list/MovieList";

export default function HomePage() {
  return (
    <>
      <Header />
      <BasicInfo />
      <MovieList />
      {/* <BasicInfo />
      
        <AdditionalInfo />
        <Footer /> */}
    </>
  );
}
