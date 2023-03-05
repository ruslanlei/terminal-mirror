import numeral from 'numeral';
import { curry } from '@/utils/fp';

export const humanizeNumber = (
  number: number,
) => numeral(number).format('0.0a').toUpperCase();

export const percentFormat = (
  number: number,
) => numeral(number).format('0.00%').toUpperCase();

export const { abs: toAbsolute, round: roundNumber } = Math;

export const max = curry((
  firstNumber: number,
  secondNumber: number,
) => Math.max(firstNumber, secondNumber));
