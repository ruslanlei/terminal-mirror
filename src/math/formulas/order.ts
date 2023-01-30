import { compose, curry } from '@/utils/fp';
import {
  divideRight,
  multiply,
  roundToDecimalPoint,
} from '@/math/float';

export const calculatePercentOfOrderPrice = curry((
  orderPrice: number,
  price: number,
) => 100 - (price / orderPrice) * 100);

export const calculatePriceByPercentOfOrderPrice = curry((
  price: number,
  percent: number,
) => price - (percent * (price / 100)));

export const calculateAmountOfRisk = curry((
  orderPrice: number,
  orderQuantity: number,
  price: number,
) => (orderPrice * orderQuantity) - (price * orderQuantity));

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
