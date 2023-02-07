import {
  compose, curry, filter, reduce,
} from '@/utils/fp';
import { Order, OrderStatus, SubOrder } from '@/api/types/order';
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

export const getOrdersWithStatus = curry((
  status: OrderStatus,
  orders: Order[],
) => filter(
  orders,
  (order: Order) => order.status === status,
));
