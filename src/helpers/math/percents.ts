import {
  compose,
  curry,
} from '@/utils/fp';
import {
  add,
  divideRight,
  multiply,
  roundToDecimalPoint, subtract,
  subtractRight,
} from '@/utils/number';
import { isEqual } from '@/utils/boolean';
import { percentFormat } from '@/utils/numberFormat';

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

export const calculatePercentageOfTotal = curry((
  total: number,
  comparingNumber: number,
) => compose(
  subtract(100),
  multiply(100),
  divideRight(total),
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

  return isEqual(comparisonValue, roundToDecimalPoint(decimals, percentsInValue));
});

export const humanizePercents = (
  percents: number,
) => compose(
  percentFormat(2),
  roundToDecimalPoint(2),
)(percents);
