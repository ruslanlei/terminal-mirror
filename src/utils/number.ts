import numeral from 'numeral';

export const roundToDecimalPoint = (num: number, decimals = 1) => {
  const divider = 10 ** decimals;
  return Math.round(num * divider) / divider;
};

export const humanizeNumber = (number: number) => numeral(number).format('0.0a').toUpperCase();
