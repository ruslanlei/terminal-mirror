export const roundToDecimalPoint = (num: number, decimals = 1) => {
  const divider = 10 ** decimals;
  return Math.round(num * divider) / divider;
};
