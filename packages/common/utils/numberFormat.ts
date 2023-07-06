import numeral from 'numeral';
import { curry } from './fp';
import { divide } from './number';
import { repeat } from './array';

export const humanizeNumber = (
  number: number,
) => numeral(number).format('0.0a').toUpperCase();

export const percentFormat = curry((
  decimals: number,
  number: number,
) => numeral(
  divide(number, 100),
).format(decimals ? `0.${repeat('0', decimals)}%` : '0%').toUpperCase());
