export function convertDurationToHoursAndMinutes(duration: number) {
  // const durationAsNumber = parseInt(duration);
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;

  return {
    hours,
    minutes,
  };
}

export function getRatingFixed(rating: number) {
  if (!rating) return 5;
  const ratingFixedString = rating.toFixed(1);

  const ratingFixedNumber = parseFloat(ratingFixedString);

  return ratingFixedNumber;
}
