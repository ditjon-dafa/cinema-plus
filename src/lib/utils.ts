import { MovieType } from "../types";

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

export function findMainGenreMoviePos(
  moviesData: Array<MovieType>,
  genreId: number
) {
  let moviePos = -1;

  switch (genreId) {
    case 12:
      moviePos = 0;
      break;

    case 14:
      moviePos = 1;
      break;

    case 16:
      moviePos = 0;
      break;

    case 18:
      moviePos = 1;
      break;

    case 27:
      moviePos = 0;
      break;

    case 28:
      moviePos = 0;
      break;

    case 35:
      moviePos = 0;
      break;

    case 36:
      moviePos = 0;
      break;

    case 37:
      moviePos = 0;
      break;

    case 53:
      moviePos = 1;
      break;

    case 80:
      moviePos = 0;
      break;

    case 878:
      moviePos = 0;
      break;

    case 9648:
      moviePos = 0;
      break;

    case 10402:
      moviePos = 0;
      break;

    case 10749:
      moviePos = 2;
      break;

    case 10751:
      moviePos = 1;
      break;

    case 10752:
      moviePos = 2;
      break;
  }

  return moviesData[moviePos];
}
