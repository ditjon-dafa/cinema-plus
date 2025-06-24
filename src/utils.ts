import { MovieType } from "./types";

export function convertDurationToHoursAndMinutes(duration: number) {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;

  return {
    hours,
    minutes,
  };
}

export function getRatingFixed(rating: number) {
  if (!rating) return 0;
  const ratingFixedString = rating.toFixed(1);

  const ratingFixedNumber = parseFloat(ratingFixedString);

  return ratingFixedNumber;
}

export function getAverageRating(moviesData: Array<MovieType>) {
  let averageRating: number = 0;
  moviesData.forEach((movie) => {
    averageRating += parseFloat(movie.vote_average.toFixed(1));
  });

  if (moviesData.length == 0) {
    averageRating = 0;
  } else {
    averageRating = averageRating / moviesData.length;
    const averageRatingString: string = averageRating.toFixed(1);
    averageRating = parseFloat(averageRatingString);
  }

  return averageRating;
}
