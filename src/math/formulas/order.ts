import { compose, curry, toAbsolute } from '@/utils/fp';
import {
  divideRight,
  multiply,
  roundToDecimalPoint, subtract,
} from '@/math/float';

export const calculateRisk = curry((
  originalPrice: number,
  quantity: number,
  comparingPrice: number,
) => subtract(
  multiply(originalPrice, quantity),
  multiply(comparingPrice, quantity),
));

export const calculateVolumeDifference = curry((
  originalPrice: number,
  quantity: number,
  comparingPrice: number,
) => compose(
  toAbsolute,
  calculateRisk,
)(
  originalPrice,
  quantity,
  comparingPrice,
));

export const calculateOrderPriceByRiskAmount = curry((
  orderPrice: number,
  orderQuantity: number,
  riskAmount: number,
) => ((orderPrice * orderQuantity) - riskAmount) / orderQuantity);

export const calculatePledge = curry((
  orderPrice: number,
  orderQuantity: number,
  leverage: number,
) => compose(
  divideRight(leverage),
  multiply(orderPrice),
)(orderQuantity));
export const calculateAndRoundPledge = curry((
  orderPrice: number,
  orderQuantity: number,
  leverage: number,
  decimals: number,
) => compose(
  roundToDecimalPoint(decimals),
  calculatePledge,
)(
  orderPrice,
  orderQuantity,
  leverage,
));

export const calculateLiquidationPrice = curry((
  orderPrice: number,
  orderQuantity: number,
  leverage: number,
) => compose(
  divideRight(orderQuantity),
  calculatePledge,
)(orderPrice, orderQuantity, leverage));

export const calculateAndRoundLiquidationPrice = curry((
  orderPrice: number,
  orderQuantity: number,
  leverage: number,
  decimals: number,
) => compose(
  roundToDecimalPoint(decimals),
  calculateLiquidationPrice,
)(orderPrice, orderQuantity, leverage));
