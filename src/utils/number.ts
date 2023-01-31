import numeral from 'numeral';

export const humanizeNumber = (
  number: number,
) => numeral(number).format('0.0a').toUpperCase();
