export const breakDownBigNumbers = (number) => {
  if (number < 1000) {
    return number;
  }

  let numberToString = parseFloat(number * 10 ** -3).toFixed(1) + "k";
  return numberToString;
};
