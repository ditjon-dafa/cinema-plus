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
