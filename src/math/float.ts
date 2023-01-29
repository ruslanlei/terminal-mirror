import currency from 'currency.js';
import { curry } from '@/utils/fp';

export const multiply = curry<number, number, number>((
  value: number,
  multiplier: number,
) => currency(value, { precision: 30 }).multiply(multiplier).value);

export const divide = curry<number, number, number>((
  value: number,
  divider: number,
) => currency(value, { precision: 30 }).divide(divider).value);

export const divideRight = curry((
  divider: number,
  value: number,
) => divide(value, divider));

export const add = curry<number, number, number>((
  term1: number,
  term2: number,
) => currency(term1, { precision: 30 }).add(term2).value);

export const subtract = curry<number, number, number>((
  value: number,
  subtrahend: number,
) => currency(value, { precision: 30 }).subtract(subtrahend).value);

export const subtractRight = curry<number, number, number>((
  subtrahend: number,
  value: number,
) => currency(value, { precision: 30 }).subtract(subtrahend).value);

export const roundToDecimalPoint = curry<number, number, number>(
  (decimals: number, number: number) => {
    const divider = 10 ** decimals;
    return Math.round(number * divider) / divider;
  },
);
