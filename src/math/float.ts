import { curry } from '@/utils/fp';
import numeral from 'numeral';

export const multiply = curry((
  value: number,
  multiplier: number,
) => numeral(value).multiply(multiplier)._value);

export const divide = curry((
  value: number,
  divider: number,
) => numeral(value).divide(divider)._value);

export const divideRight = curry((
  divider: number,
  value: number,
) => divide(value, divider));

export const add = curry((
  term1: number,
  term2: number,
) => numeral(term1).add(term2)._value);

export const subtract = curry((
  value: number,
  subtrahend: number,
) => numeral(value).subtract(subtrahend)._value);

export const subtractRight = curry((
  subtrahend: number,
  value: number,
) => numeral(value).subtract(subtrahend)._value);

export const roundToDecimalPoint = curry(
  (decimals: number, number: number) => {
    const divider = 10 ** decimals;
    return Math.round(number * divider) / divider;
  },
);
