import { compose, curry } from '@/utils/fp';
import {
  add,
  multiply, roundToDecimalPoint,
  subtractRight,
} from '@/helpers/number';
import { calculatePercentOfDifference } from '@/helpers/math/percents';
import { toAbsolute } from '@/utils/number';
import { Order } from '@/api/types/order';
import { isDateWithinCurrentDay, isDateWithinCurrentMonth, isDateWithinCurrentWeek } from '@/utils/date';
import { Maybe } from '@/utils/functors';
import {
  filter, getLength, map, reduce,
} from '@/utils/array';
import { isOrderOfType } from '@/helpers/orders';

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

export const calculateCommonPnlForPeriod = (
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
          dateFilter(order.modified) && isOrderOfType('limit', order)
        ),
        orders,
      )
    ))
    .map((orders: Order[]) => (
      map(
        (order: Order) => (
          calculatePnl(order.price, order.quantity, order.executed_price)
        ),
        orders,
      )
    ))
    .map((pnlList: number[]) => (
      reduce(
        (commonPnl: number, pnl: number) => add(commonPnl, pnl),
        0,
        pnlList,
      )
    ))
    .chain((commonPnl: number) => roundToDecimalPoint(2, commonPnl));
};

export const getSuccessOrdersAmount = (
  orders: Order[],
) => (
  Maybe.of(orders)
    .map((orders: Order[]) => (
      map(
        (order: Order) => (
          calculatePnl(order.price, order.quantity, order.executed_price)
        ),
        orders,
      )
    ))
    .chain((pnlList: number[]) => (
      compose(
        getLength,
        filter(
          (pnl: number) => pnl >= 0,
        ),
      )(pnlList)
    ))
);

export const getFailedOrdersLength = (
  orders: Order[],
) => (
  Maybe.of(orders)
    .map((orders: Order[]) => (
      map(
        (order: Order) => (
          calculatePnl(order.price, order.quantity, order.executed_price)
        ),
        orders,
      )
    ))
    .chain((pnlList: number[]) => (
      compose(
        getLength,
        filter(
          (pnl: number) => pnl < 0,
        ),
      )(pnlList)
    ))
);
