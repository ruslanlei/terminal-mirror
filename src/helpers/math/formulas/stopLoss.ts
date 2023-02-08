import { compose, curry } from '@/utils/fp';
import {
  divideRight,
  multiply,
  subtract,
} from '@/helpers/number';
import { calculateVolumeDifference } from '@/helpers/math/formulas/order';
import { calculateOnePercent } from '@/helpers/math/percents';

export const calculateVolumeDifferenceInPercentsOfDeposit = curry((
  quantity: number,
  originalPrice: number,
  comparingPrice: number,
  balance: number,
) => compose(
  multiply(100),
  divideRight(balance),
  calculateVolumeDifference,
)(
  quantity,
  originalPrice,
  comparingPrice,
));

// FORMULA:
// (orderVolume - (balance * percentOfDeposit / 100)) / order quantity
export const calculatePriceByPercentOfDeposit = curry((
  quantity: number,
  originalPrice: number,
  balance: number,
  percentOfDeposit: number,
) => compose(
  divideRight(quantity),
  subtract(
    multiply(originalPrice, quantity),
  ),
  multiply(balance),
  calculateOnePercent,
)(percentOfDeposit));
