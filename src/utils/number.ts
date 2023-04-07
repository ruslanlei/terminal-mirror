import { curry } from '@/utils/fp';
import numeral from 'numeral';

export const multiply = curry((
  value: number,
  multiplier: number,
) => numeral(value).multiply(multiplier).value() || 0);

export const divide = curry((
  value: number,
  divider: number,
) => numeral(value).divide(divider).value() || 0);

export const divideRight = curry((
  divider: number,
  value: number,
) => divide(value, divider));

export const add = curry((
  term1: number,
  term2: number,
) => numeral(term1).add(term2).value() || 0);

export const subtract = curry((
  value: number,
  subtrahend: number,
) => numeral(value).subtract(subtrahend).value() || 0);

export const subtractRight = curry((
  subtrahend: number,
  value: number,
) => numeral(value).subtract(subtrahend).value() || 0);

export const roundToDecimalPoint = curry(
  (decimals: number, number: number) => {
    const divider = 10 ** decimals;
    return Math.round(number * divider) / divider;
  },
);

export const isPositive = (number: number): boolean => number >= 0;

export const max = curry((
  firstNumber: number,
  secondNumber: number,
) => Math.max(firstNumber, secondNumber));

export const min = curry((
  firstNumber: number,
  secondNumber: number,
) => Math.min(firstNumber, secondNumber));

export const toNegative = (number: number) => (number < 0 ? number : -number);

export const {
  abs: toAbsolute,
  round: roundNumber,
} = Math;
