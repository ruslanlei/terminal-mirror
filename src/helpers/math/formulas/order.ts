import {
  compose,
  curry,
} from '@/utils/fp';
import {
  add,
  divide,
  divideRight,
  multiply,
  subtract,
  subtractRight,
  toAbsolute,
} from '@/utils/number';

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

export const calculateOriginalPriceByVolumeDecrease = curry((
  originalPrice: number,
  quantity: number,
  volumeDifference: number,
) => compose(
  divideRight(quantity),
  subtractRight(volumeDifference),
  multiply,
)(originalPrice, quantity));

export const calculateOriginalPriceByVolumeIncrease = curry((
  originalPrice: number,
  quantity: number,
  volumeDifference: number,
) => compose(
  divideRight(quantity),
  add(volumeDifference),
  multiply,
)(originalPrice, quantity));

// (price * quantity) / leverage
export const calculatePledge = curry((
  orderPrice: number,
  orderQuantity: number,
  leverage: number,
) => compose(
  divideRight(leverage),
  multiply(orderQuantity),
)(orderPrice));

// price * (1 - balance / (price * quantity)
export const calculateLiquidationPrice = curry(
  (
    price: number,
    quantity: number,
    leverage: number,
    balance: number,
  ): number => compose(
    multiply(price),
    subtract(1),
    divide(balance),
    multiply(quantity),
  )(price),
);
