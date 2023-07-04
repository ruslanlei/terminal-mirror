import { compose, curry } from '@terminal/common/utils/fp';

import {
  add,
  multiply,
  subtractRight, toAbsolute,
} from '@terminal/common/utils/number';

import {
  isDateWithinCurrentDay,
  isDateWithinCurrentMonth,
  isDateWithinCurrentWeek,
} from '@terminal/common/utils/date';

import { Maybe } from '@terminal/common/utils/functors';

import {
  filter,
  find,
  reduce,
} from '@terminal/common/utils/array';
import { isEqual, isLessThanLeft, isMoreThanOrEqualTo } from '@terminal/common/utils/boolean';

import { isExactOrder, isOrderOfType } from '../../orders';
import { calculatePercentageOfTotal } from '../percents';
import { Order } from '../../../types';

export const calculateCurrentPnl = curry((
  orderPrice: number,
  quantity: number,
  currentPrice: number,
) => compose(
  subtractRight(
    multiply(orderPrice, quantity),
  ),
  multiply,
)(quantity, currentPrice));

export const calculateClosePnl = (
  relatedOrders: Order[],
) => {
  const limitOrder = find(isOrderOfType('limit'), relatedOrders);

  if (!limitOrder) throw Error('["calculateClosePnl" function]: limit order not found');

  const executedOrders = filter(
    isExactOrder(['tp', 'sl'], 'executed'),
    relatedOrders,
  );

  const returnedMoney = reduce(
    (
      sum: number,
      order: Order,
    ) => compose(
      add(sum),
      multiply,
    )(order.price, order.quantity),
    0,
    executedOrders,
  );

  return compose(
    subtractRight(
      multiply(
        limitOrder.price as number,
        limitOrder.quantity,
      ),
    ),
  )(returnedMoney);
};

export const calculatePnlPercent = curry((
  orderPrice: number,
  quantity: number,
  pnl: number,
) => {
  const orderVolume = multiply(orderPrice, quantity);

  return compose(
    toAbsolute,
    calculatePercentageOfTotal(orderVolume),
    add(orderVolume),
  )(pnl);
});

export const calculateCommonClosePnl = (
  orders: Order[],
) => compose(
  reduce(
    (commonPnl: number, order: Order) => {
      const relatedOrders = filter(
        (maybeRelatedOrder: Order) => isEqual(maybeRelatedOrder.master, order.id),
        orders,
      );

      return compose(
        add(commonPnl),
        calculateClosePnl,
      )([order, ...relatedOrders]);
    },
    0,
  ),
  filter(isOrderOfType('limit')),
)(orders);

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
          (order: Order) => dateFilter(order.modified),
          orders,
        )
      ))
      .chain(calculateCommonClosePnl);
  },
);

export const getSuccessOrders = (
  orders: Order[],
) => (
  compose(
    filter(
      (order: Order) => {
        const relatedOrders = filter(
          (maybeRelatedOrder: Order) => isEqual(maybeRelatedOrder.master, order.id),
          orders,
        );

        return compose(
          isMoreThanOrEqualTo(0),
          calculateClosePnl,
        )([order, ...relatedOrders]);
      },
    ),
    filter(isOrderOfType('limit')),
  )(orders)
);

export const getFailedOrders = (
  orders: Order[],
) => (
  compose(
    filter(
      (order: Order) => {
        const relatedOrders = filter(
          (maybeRelatedOrder: Order) => isEqual(maybeRelatedOrder.master, order.id),
          orders,
        );

        return compose(
          isLessThanLeft(0),
          calculateClosePnl,
        )([order, ...relatedOrders]);
      },
    ),
  )(orders)
);
