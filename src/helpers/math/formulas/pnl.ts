import { compose, curry } from '@/utils/fp';
import { multiply, subtractRight } from '@/helpers/math/float';

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
