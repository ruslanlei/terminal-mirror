import { divideRight, multiply } from '@/math/float';
import curry from 'lodash/curry';

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
