import BasicInfo from "../components/basic-info/BasicInfo";
import Header from "../components/header/Header";
import GeneraMoviesList from "../components/movie-list/GeneralMoviesList";

export default function HomePage() {
  return (
    <>
      <Header />
      <BasicInfo />
      <GeneraMoviesList />
    </>
  );
}
