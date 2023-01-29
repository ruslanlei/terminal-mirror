import {
  compose, curry, isEqual, log,
} from '@/utils/fp';
import {
  add,
  divideRight,
  multiply,
  roundToDecimalPoint,
  subtractRight,
} from '@/math/float';

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

export const percentsToRoundedValue = curry((
  decimals: number,
  total: number,
  percents: number,
) => compose(
  roundToDecimalPoint(decimals),
  percentsToValue(total),
)(percents));

export const valueToPercents = curry((
  total: number,
  value: number,
) => divideRight(
  calculateOnePercent(total),
  value,
));

export const valueToRoundedPercents = curry((
  decimals: number,
  total: number,
  value: number,
) => compose(
  roundToDecimalPoint(decimals),
  valueToPercents(total),
)(value));

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

export const checkIsValueEqualToPercentOfTotal = curry((
  total: number,
  percents: number,
  comparisonValue: number,
) => compose(
  isEqual(comparisonValue),
  percentsToValue(total),
)(percents));

export const checkIsRoundedValueEqualToPercentOfTotal = curry((
  decimals: number,
  total: number,
  percents: number,
  comparisonValue: number,
) => compose(
  isEqual(comparisonValue),
  roundToDecimalPoint(decimals),
  percentsToValue(total),
)(percents));
