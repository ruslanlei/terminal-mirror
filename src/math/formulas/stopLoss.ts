import {
  multiply,
  roundToDecimalPoint,
  subtract,
} from '@/math/float';
import { compose, curry } from '@/utils/fp';

export const calculateStopLossRisk = curry((
  orderPrice: number,
  orderQuantity: number,
  stopLossPrice: number,
) => subtract(
  multiply(orderPrice, orderQuantity),
  multiply(orderQuantity, stopLossPrice),
));

export const calculateAndRoundStopLossRisk = curry((
  orderPrice: number,
  orderQuantity: number,
  stopLossPrice: number,
  decimals: number,
) => compose(
  roundToDecimalPoint(decimals),
  calculateStopLossRisk(orderPrice, orderQuantity),
)(stopLossPrice));
