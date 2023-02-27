import {
  compose,
  curry,
} from '@/utils/fp';
import {
  divideRight,
  multiply,
  roundToDecimalPoint,
  subtract,
  subtractRight,
} from '@/helpers/number';
import { toAbsolute } from '@/utils/number';

export const calculateRisk = curry((
  originalPrice: number,
  quantity: number,
  comparingPrice: number,
) => subtract(
  multiply(originalPrice, quantity),
  multiply(comparingPrice, quantity),
));

export const calculateVolumeDifference = curry((
  quantity: number,
  originalPrice: number,
  comparingPrice: number,
): number => compose(
  toAbsolute,
  calculateRisk,
)(
  originalPrice,
  quantity,
  comparingPrice,
));

export const calculateOriginalPriceByVolumeDifference = curry((
  originalPrice: number,
  quantity: number,
  volumeDifference: number,
) => compose(
  divideRight(quantity),
  subtractRight(volumeDifference),
  multiply,
)(originalPrice, quantity));

export const calculatePledge = curry((
  orderPrice: number,
  orderQuantity: number,
  leverage: number,
) => compose(
  divideRight(leverage),
  multiply(orderPrice),
)(orderQuantity));

export const calculateLiquidationPrice = curry((
  orderPrice: number,
  orderQuantity: number,
  leverage: number,
) => compose(
  divideRight(orderQuantity),
  calculatePledge,
)(orderPrice, orderQuantity, leverage));
