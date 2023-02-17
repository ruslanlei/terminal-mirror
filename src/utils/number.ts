import numeral from 'numeral';

export const humanizeNumber = (
  number: number,
) => numeral(number).format('0.0a').toUpperCase();

export const percentFormat = (
  number: number,
) => numeral(number).format('0.00%').toUpperCase();

export const { abs: toAbsolute } = Math;
