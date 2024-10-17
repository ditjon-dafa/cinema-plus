import "./movie-card.css";
// import img1 from "../../../../src/images/movie-sample.jpg";
interface Props {
  backdrop_path: string;
  vote_average: number;
  title: string;
  id: number;
}

const baseUrl = "https://image.tmdb.org/t/p/w500/";

export default function MovieCard(props: Props) {
  return (
    <article className="movie-card">
      <img src={baseUrl + props.backdrop_path} alt="" />
      {/* <img src={img1} alt="Sample" /> */}

      <p>Rating: {props.vote_average}</p>
      {/* <p> Rating: movie rating</p> */}

      <h3>{props.title}</h3>
      {/* <h3> Movie title</h3> */}
    </article>
  );
}
