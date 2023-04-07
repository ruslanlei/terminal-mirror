import { compose, curry } from '@/utils/fp';
import {
  add,
  multiply,
  subtractRight, toAbsolute,
} from '@/utils/number';
import { calculatePercentOfDifference } from '@/helpers/math/percents';
import { Order } from '@/api/types/order';
import { isDateWithinCurrentDay, isDateWithinCurrentMonth, isDateWithinCurrentWeek } from '@/utils/date';
import { Maybe } from '@/utils/functors';
import {
  filter, reduce,
} from '@/utils/array';
import { isOrderOfType } from '@/helpers/orders';
import { isLessThan, isMoreThanOrEqualTo } from '@/utils/boolean';

export const calculatePnl = curry((
  orderPrice: number,
  quantity: number,
  closePrice: number,
) => compose(
  subtractRight(
    multiply(orderPrice, quantity),
  ),
  multiply,
)(quantity, closePrice));

export const calculatePnlPercent = curry((
  orderPrice: number,
  quantity: number,
  pnl: number,
) => {
  const orderVolume = multiply(orderPrice, quantity);

  return compose(
    toAbsolute,
    calculatePercentOfDifference(orderVolume),
    add(orderVolume),
  )(pnl);
});

export const calculateCommonPnl = (
  orders: Order[],
) => (
  reduce(
    (commonPnl: number, order: Order) => add(
      commonPnl,
      calculatePnl(order.price, order.quantity, order.executed_price),
    ),
    0,
    orders,
  )
);

export const calculateCommonPnlPercent = (
  orders: Order[],
) => (
  reduce(
    (commonPnl: number, order: Order) => add(
      commonPnl,
      calculatePnlPercent(order.price, order.quantity, order.executed_price),
    ),
    0,
    orders,
  )
);

export const calculateCommonPnlForPeriod = curry(
  (
    period: 'day' | 'week' | 'month' | 'allTime',
    orders: Order[],
  ) => {
    const dateFilter = ({
      day: isDateWithinCurrentDay,
      week: isDateWithinCurrentWeek,
      month: isDateWithinCurrentMonth,
      allTime: () => true,
    }[period]);

    return Maybe.of(orders)
      .map((orders: Order[]) => (
        filter(
          (order: Order) => (
            dateFilter(order.executed_at) && isOrderOfType('limit', order)
          ),
          orders,
        )
      ))
      .chain(calculateCommonPnl);
  },
);

export const getSuccessOrders = (
  orders: Order[],
) => (
  compose(
    filter(
      (order: Order) => compose(
        isMoreThanOrEqualTo(0),
        calculatePnl,
      )(
        order.price,
        order.quantity,
        order.executed_price,
      ),
    ),
  )(orders)
);

export const getFailedOrders = (
  orders: Order[],
) => (
  compose(
    filter(
      (order: Order) => (
        compose(
          isLessThan(0),
          calculatePnl,
        )(
          order.price,
          order.quantity,
          order.executed_price,
        )
      ),
    ),
  )(orders)
);
