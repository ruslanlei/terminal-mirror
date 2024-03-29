import { compose, curry } from '@terminal/common/utils/fp';
import {
  divideRight,
  multiply,
  subtract,
} from '@terminal/common/utils/number';
import { calculateVolumeDifference } from './order';
import { calculateOnePercent } from '../percents';

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
