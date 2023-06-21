import {
  compose,
  curry,
} from '@/utils/fp';
import { Order } from '@/api/types/order';
import {
  divideRight,
  multiply,
  roundToDecimalPlaces,
} from '@/utils/number';
import {
  countBy,
  filter,
  getLength,
  isArray,
  map,
} from '@/utils/array';
import {
  calculateClosePnl,
  calculateCommonClosePnl,
  getSuccessOrders,
} from '@/helpers/math/formulas/pnl';
import { PairsMap } from '@/hooks/usePairs';
import { getKeyWithBiggestValue } from '@/utils/object';
import { Maybe } from '@/utils/functors';
import { isEqual } from '@/utils/boolean';

export const isExactOrder = curry((
  orderType: Order['order_type'] | Array<Order['order_type']>,
  orderStatus: Order['status'] | Array<Order['status']>,
  order: Order,
) => (
  Array.isArray(orderType)
    ? orderType.includes(order.order_type)
    : order.order_type === orderType
) && (
  Array.isArray(orderStatus)
    ? orderStatus.includes(order.status)
    : order.status === orderStatus
));

export const isOrderOfType = curry((
  orderType: Order['order_type'] | Array<Order['order_type']>,
  order: Order,
) => (
  isArray(orderType)
    ? orderType.includes(order.order_type)
    : order.order_type === orderType
));

export const isOrderOfStatus = curry((
  orderStatus: Order['status'] | Array<Order['status']>,
  order: Order,
) => (
  isArray(orderStatus)
    ? orderStatus.includes(order.status)
    : order.status === orderStatus
));

export const filterOrdersByType = curry(
  (
    type: Order['order_type'],
    orders: Order[],
  ) => (
    filter(
      (order: Order) => isOrderOfType(type, order),
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
    calculateCommonClosePnl,
    filter(
      (order: Order) => {
        const relatedOrders = filter(
          (maybeRelatedOrder: Order) => isEqual(maybeRelatedOrder.master, order.id),
          orders,
        );

        return isOrderOfType('limit', order)
          ? isOrderOfStatus('executed', order) && calculateClosePnl([order, ...relatedOrders]) >= 0
          : true;
      },
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
    calculateCommonClosePnl,
    filter(
      (order: Order) => {
        const relatedOrders = filter(
          (maybeRelatedOrder: Order) => isEqual(maybeRelatedOrder.master, order.id),
          orders,
        );

        return isOrderOfType('limit', order)
          ? isOrderOfStatus('executed', order) && calculateClosePnl([order, ...relatedOrders]) < 0
          : true;
      },
    ),
  )(orders)
);

export const
  findMostFrequentCoin = curry(
    (
      pairsMap: PairsMap,
      orders: Order[],
    ) => (
      compose(
        getKeyWithBiggestValue,
        countBy('base'),
        map(
          (order: Order) => (
            pairsMap[order.pair]
          ),
        ),
      )(orders)
    ),
  );

export const calculateSuccessRate = (
  orders: Order[],
): number => Maybe.of(orders)
  .map(
    compose(
      getLength,
      getSuccessOrders,
    ),
  )
  .chain(
    compose(
      roundToDecimalPlaces(2),
      multiply(100),
      divideRight(
        compose(
          getLength,
          filterOrdersByType('limit'),
        )(orders),
      ),
    ),
  );
