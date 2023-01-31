import { compose, curry } from '@/utils/fp';
import { multiply, subtractRight } from '@/math/float';

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
