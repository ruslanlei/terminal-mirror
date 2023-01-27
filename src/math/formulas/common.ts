import {
  add, divideRight, multiply, subtractRight,
} from '@/math/float';
import curry from 'lodash/curry';
import { compose } from '@/utils/fp';

export const calculateOnePercent = (
  balance: number,
) => divideRight(100, balance);

export const percentsToValue = curry((
  total: number,
  percents: number,
) => multiply(
  calculateOnePercent(total),
  percents,
));

export const valueToPercents = curry((
  total: number,
  value: number,
) => divideRight(
  calculateOnePercent(total),
  value,
));

export const calculateIncreasePercent = curry((
  total: number,
  value: number,
) => compose(
  divideRight(calculateOnePercent(total)),
  subtractRight(total),
)(value));

export const addPercents = curry((
  total: number,
  percentValue: number,
) => compose(
  add(total),
  multiply(calculateOnePercent(total)),
)(percentValue));
