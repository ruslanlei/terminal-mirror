import { compose, curry, reduce } from '@/utils/fp';
import { Order, SubOrder } from '@/api/types/order';
import { calculateVolumeDifference } from '@/helpers/math/formulas/order';
import { add } from '@/helpers/math/float';

export const reduceSubOrderListToCommonPnl = curry((
  order: Order,
  subOrders: SubOrder[],
) => reduce(
  subOrders,
  (commonPnl: number, subOrder: Order) => compose(
    calculateVolumeDifference(
      order.quantity,
      order.price,
    ),
    add(commonPnl),
  )(subOrder.price),
  0,
));
