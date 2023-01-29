import currency from 'currency.js';
import { curry } from '@/utils/fp';

export const multiply = curry((
  value: number,
  multiplier: number,
) => currency(value, { precision: 30 }).multiply(multiplier).value);

export const divide = curry((
  value: number,
  divider: number,
) => currency(value, { precision: 30 }).divide(divider).value);

export const divideRight = curry((
  divider: number,
  value: number,
) => divide(value, divider));

export const add = curry((
  term1: number,
  term2: number,
) => currency(term1, { precision: 30 }).add(term2).value);

export const subtract = curry((
  value: number,
  subtrahend: number,
) => currency(value, { precision: 30 }).subtract(subtrahend).value);

export const subtractRight = curry((
  subtrahend: number,
  value: number,
) => currency(value, { precision: 30 }).subtract(subtrahend).value);

export const roundToDecimalPoint = curry(
  (decimals: number, number: number) => {
    const divider = 10 ** decimals;
    return Math.round(number * divider) / divider;
  },
);
