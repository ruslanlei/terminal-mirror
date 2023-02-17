import { compose, curry } from '@/utils/fp';
import {
  add,
  multiply,
  subtractRight,
} from '@/helpers/number';
import { calculatePercentOfDifference } from '@/helpers/math/percents';
import { toAbsolute } from '@/utils/number';

export const calculatePnl = curry((
  orderPrice: number,
  quantity: number,
  currentPrice: number,
) => compose(
  subtractRight(
    multiply(orderPrice, quantity),
  ),
  multiply,
)(quantity, currentPrice));

export const calculatePnlPercent = curry((
  orderPrice: number,
  quantity: number,
  pnl: number,
) => {
  const orderVolume = multiply(orderPrice, quantity);

  return compose(
    toAbsolute,
    calculatePercentOfDifference(orderVolume),
    add(orderVolume),
  )(pnl);
});
