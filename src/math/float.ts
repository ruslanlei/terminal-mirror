import { compose, curry } from '@/utils/fp';
import numeral from 'numeral';

export const multiply = curry<number, number, number>((
  value: number,
  multiplier: number,
) => numeral(value).multiply(multiplier).value() || 0);

export const divide = curry<number, number, number>((
  value: number,
  divider: number,
) => numeral(value).divide(divider).value() || 0);

export const divideRight = curry<number, number, number>((
  divider: number,
  value: number,
) => divide(value, divider));

export const add = curry<number, number, number>((
  term1: number,
  term2: number,
) => numeral(term1).add(term2).value() || 0);

export const subtract = curry<number, number, number>((
  value: number,
  subtrahend: number,
) => numeral(value).subtract(subtrahend).value() || 0);

export const subtractRight = curry<number, number, number>((
  subtrahend: number,
  value: number,
) => numeral(value).subtract(subtrahend).value() || 0);

export const roundToDecimalPoint = curry<number, number, number>(
  (decimals: number, number: number) => {
    const divider = 10 ** decimals;
    return Math.round(number * divider) / divider;
  },
);