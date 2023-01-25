import currency from 'currency.js';
import curry from 'lodash/curry';

export const multiply = (
  value: number,
  multiplier: number,
  precision = 0,
) => currency(value, { precision }).multiply(multiplier).value;

export const divide = (
  value: number,
  divider: number,
  precision = 0,
) => currency(value, { precision }).divide(divider).value;

export const add = (
  terms: (number | string)[],
  precision = 2,
) => terms.reduce(
  (acc: number, value: number | string) => currency(acc, { precision }).add(value).value,
  0,
);

export const subtract = (
  value: number,
  subtrahend: number,
  precision = 2,
) => currency(value, { precision }).subtract(subtrahend).value;

export const roundToDecimalPoint = curry((decimals: number, number: number) => {
  const divider = 10 ** decimals;
  return Math.round(number * divider) / divider;
});
