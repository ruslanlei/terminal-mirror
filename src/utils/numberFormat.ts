import numeral from 'numeral';
import { curry } from '@/utils/fp';
import { divide } from '@/utils/number';
import { repeat } from '@/utils/array';

export const humanizeNumber = (
  number: number,
) => numeral(number).format('0.0a').toUpperCase();

export const percentFormat = curry((
  decimals: number,
  number: number,
) => numeral(
  divide(number, 100),
).format(decimals ? `0.${repeat('0', decimals)}%` : '0%').toUpperCase());
