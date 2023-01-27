import { divideRight, multiply, roundToDecimalPoint } from '@/math/float';
import { compose } from '@/utils/fp';
import curry from 'lodash/curry';

export const calculateOnePercent = (
  balance: number,
) => divideRight(100, balance);

export const percentsToValue = curry((
  decimals: number,
  onePercentAmount: number,
  percents: number,
) => compose(
  roundToDecimalPoint(decimals),
  multiply(onePercentAmount),
)(percents));

export const valueToPercents = curry((
  decimals: number,
  onePercentOfBalance: number,
  value: number,
) => compose(
  roundToDecimalPoint(decimals),
  divideRight(onePercentOfBalance),
)(value));
