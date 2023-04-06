import {
  compose,
  curry, log,
} from '@/utils/fp';
import { Order, OrderStatus, SubOrder } from '@/api/types/order';
import { calculateVolumeDifference } from '@/helpers/math/formulas/order';
import { add, divideRight } from '@/helpers/number';
import {
  filter, getLength, isArray, reduce,
} from '@/utils/array';
import { calculateCommonPnlPercent, calculatePnl } from '@/helpers/math/formulas/pnl';

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

export const isOrderOfType = curry((
  orderType: Order['order_type'] | Array<Order['order_type']>,
  order: Order,
) => (
  isArray(orderType)
    ? orderType.includes(order.order_type)
    : order.order_type === orderType
));

export const filterOrdersByType = curry(
  (
    type: Order['order_type'],
    orders: Order[],
  ) => (
    filter(
      (order: Order) => (
        isOrderOfType(type, order)
      ),
      orders,
    )
  ),
);

export const calculateAverageIncome = (
  orders: Order[],
) => (
  compose(
    divideRight(
      getLength(orders),
    ),
    calculateCommonPnlPercent,
    filter(
      (order: Order) => (
        isOrderOfType('limit', order) && (
          calculatePnl(order.price, order.quantity, order.executed_price) >= 0
        )
      ),
    ),
  )(orders)
);

export const calculateAverageLoss = (
  orders: Order[],
) => (
  compose(
    divideRight(
      getLength(orders),
    ),
    calculateCommonPnlPercent,
    filter(
      (order: Order) => (
        isOrderOfType('limit', order) && (
          calculatePnl(order.price, order.quantity, order.executed_price) < 0
        )
      ),
    ),
  )(orders)
);
