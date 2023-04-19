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

export const roundToDecimalPlaces = curry(
  (
    decimalPlaces: number,
    number: number,
  ) => {
    const divider = 10 ** decimalPlaces;
    return Math.round(number * divider) / divider;
  },
);

export const floorToDecimalPlaces = curry(
  (
    decimalPlaces: number,
    num: number,
  ): number => (
    Math.floor(num * 10 ** decimalPlaces) / 10 ** decimalPlaces
  ),
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

export const {
  abs: toAbsolute,
  round: roundNumber,
  ceil,
} = Math;

export const toNegative = (number: number) => -toAbsolute(number);
