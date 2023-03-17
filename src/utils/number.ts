import numeral from 'numeral';
import { curry } from '@/utils/fp';
import isNumber from 'lodash/isNumber';
import { divide } from '@/helpers/number';
import { repeat } from '@/utils/array';

export { isNumber };

export const humanizeNumber = (
  number: number,
) => numeral(number).format('0.0a').toUpperCase();

export const percentFormat = curry((
  decimals: number,
  number: number,
) => numeral(
  divide(number, 100),
).format(decimals ? `0.${repeat('0', decimals)}%` : '0%').toUpperCase());

export const percentFormatShort = (
  number: number,
) => numeral(
  divide(number, 100),
).format('0%').toUpperCase();

export const { abs: toAbsolute, round: roundNumber } = Math;

export const max = curry((
  firstNumber: number,
  secondNumber: number,
) => Math.max(firstNumber, secondNumber));

export const min = curry((
  firstNumber: number,
  secondNumber: number,
) => Math.min(firstNumber, secondNumber));

export const toNegative = (number: number) => (number < 0 ? number : -number);
