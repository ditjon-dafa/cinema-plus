import "./movie-card.css";
import img1 from "../../../images/movie-sample.jpg";
export default function MovieCard() {
  return (
    <article className="movie-card">
      {/* <img src={props.imageUrl} alt='' /> */}
      <img src={img1} alt="Sample" />

      {/* <h3>{props.title}</h3> */}
      <h3> Movie title</h3>
      {/* <p>Rating: {props.rating}</p> */}
      <p> Rating: movie rating</p>
    </article>
  );
}
