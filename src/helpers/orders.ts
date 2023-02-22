import {
  compose,
  curry,
} from '@/utils/fp';
import { Order, OrderStatus, SubOrder } from '@/api/types/order';
import { calculateVolumeDifference } from '@/helpers/math/formulas/order';
import { add } from '@/helpers/number';
import { filter, reduce } from '@/utils/array';

export const reduceSubOrderListToCommonPnl = curry((
  order: Order,
  subOrders: SubOrder[],
) => reduce(
  (commonPnl: number, subOrder: Order) => compose(
    calculateVolumeDifference(
      order.quantity,
      order.price,
    ),
    add(commonPnl),
  )(subOrder.price),
  0,
  subOrders,
));

export const getOrdersWithStatus = curry((
  status: OrderStatus,
  orders: Order[],
) => filter(
  (order: Order) => order.status === status,
  orders,
));

export const isExactOrder = curry((
  orderType: Order['order_type'],
  orderStatus: Order['status'],
  order: Order,
) => order.order_type === orderType && order.status === orderStatus);
