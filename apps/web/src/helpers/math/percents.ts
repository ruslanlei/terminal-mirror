import {
  compose,
  curry,
} from '@terminal/common/utils/fp';
import {
  add,
  divideRight,
  multiply,
  roundToDecimalPlaces, subtract,
  subtractRight,
} from '@terminal/common/utils/number';
import { isEqual } from '@/utils/boolean';
import { percentFormat } from '@terminal/common/utils/numberFormat';

export const calculateOnePercent = (
  total: number,
) => divideRight(100, total);

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
  roundToDecimalPlaces(decimals),
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
  roundToDecimalPlaces(decimals),
  valueToPercents(total),
)(value));

export const calculatePercentageOfTotal = curry((
  total: number,
  comparingNumber: number,
) => compose(
  multiply(100),
  divideRight(total),
  subtractRight(total),
)(comparingNumber));

export const calculateIncreasePercent = curry((
  total: number,
  value: number,
) => compose(
  divideRight(calculateOnePercent(total)),
  subtractRight(total),
)(value));

export const calculateDecreasePercent = curry((
  total: number,
  value: number,
) => compose(
  divideRight(calculateOnePercent(total)),
  subtract(total),
)(value));

export const addPercents = curry((
  total: number,
  percentValue: number,
) => compose(
  add(total),
  multiply(calculateOnePercent(total)),
)(percentValue));

export const subtractPercents = curry((
  total: number,
  percentValue: number,
) => compose(
  subtract(total),
  multiply(calculateOnePercent(total)),
)(percentValue));

export const checkIsRoundedValueEqualToPercentOfTotal = curry((
  decimals: number,
  total: number,
  percents: number,
  comparisonValue: number,
) => {
  const percentsInValue = percentsToValue(total, percents);

  if (percentsInValue === 0) return false;

  return isEqual(comparisonValue, roundToDecimalPlaces(decimals, percentsInValue));
});

export const humanizePercents = (
  percents: number,
) => compose(
  percentFormat(2),
  roundToDecimalPlaces(2),
)(percents);
