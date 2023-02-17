import {
  compose,
  curry,
} from '@/utils/fp';
import { PairData } from '@/api/types/pair';
import {
  MasterOrder,
  TakeProfit,
  StopLoss,
  Order,
} from '@/api/types/order';
import { multiply, roundToDecimalPoint } from '@/helpers/number';
import { calculatePercentOfDifference } from '@/helpers/math/percents';
import { calculatePnl, calculatePnlPercent } from '@/helpers/math/formulas/pnl';
import { calculateCommonTakeProfitPercent } from '@/helpers/math/formulas/takeProfit';
import { humanizeDate } from '@/utils/date';
import { ActiveOrdersTableRecord, ClosedOrdersTableRecord } from '@/components/app/ordersList';
import { SubOrderTableItem } from '@/components/app/ordersList/subOrdersTable';
import { collectTableRecord } from '@/components/core/table/helpers';
import { getOrdersWithStatus, reduceSubOrderListToCommonPnl } from '@/helpers/orders';
import { TableRowState } from '@/components/core/table/tableRow';
import { toAbsolute } from '@/utils/number';

interface CollectRecordPayload {
    pairData: PairData,
    pairPrice: number | null,
    order: MasterOrder,
    takeProfits: TakeProfit[] | undefined,
    stopLoss: StopLoss | undefined,
}

const commonDataMixin = (
  {
    pairData,
    order,
    takeProfits,
  }: CollectRecordPayload,
) => ({
  pair: pairData.base,
  type: order.side,
  coins: order.quantity,
  options: {
    order,
    takeProfits,
  },
});

const orderVolumeMixin = (
  payload: CollectRecordPayload,
) => ({
  volume: compose(
    roundToDecimalPoint(6), /* TODO: change to base currency decimals */
    multiply,
  )(payload.order.quantity, payload.order.price),
});

const activeOrderPricesMixin = (
  payload: CollectRecordPayload,
) => ({
  prices: {
    order: payload.order.price,
    current: payload.pairPrice,
  },
});

const closedOrderPricesMixin = (
  { order }: CollectRecordPayload,
) => ({
  prices: {
    order: order.price,
    close: 17000,
  },
});

const closedOrderResultsMixin = (
  {
    order, pairData, takeProfits, stopLoss,
  }: CollectRecordPayload,
) => ({
  results: {
    pnl: {
      value: compose(
        roundToDecimalPoint(2),
        reduceSubOrderListToCommonPnl(order),
        getOrdersWithStatus('executed'),
      )([
        ...(takeProfits || []),
        ...(stopLoss ? [stopLoss] : []),
      ]),
      currency: pairData.quote,
    },
    pnlPercent: compose(
      roundToDecimalPoint(2),
      calculatePnlPercent(order.price, order.quantity),
      reduceSubOrderListToCommonPnl(order),
      getOrdersWithStatus('executed'),
    )([
      ...(takeProfits || []),
      ...(stopLoss ? [stopLoss] : []),
    ]),
  },
});

const stopLossDataMixin = (
  payload: CollectRecordPayload,
) => ({
  ...(payload.stopLoss ? {
    sl: compose(
      roundToDecimalPoint(2),
      toAbsolute,
      calculatePercentOfDifference,
    )(payload.order.price, payload.stopLoss.price),
  } : {
    sl: null,
  }),
});

const pnlMixin = (
  {
    order,
    pairData,
    pairPrice,
  }: CollectRecordPayload,
) => ({
  pnl: {
    currency: pairData.quote,
    ...(order.status !== 'new' && pairPrice
      ? {
        value: compose(
          roundToDecimalPoint(6),
          calculatePnl(
            order.price,
            order.position,
          ),
        )(pairPrice),
      }
      : {
        value: null,
      }),
  },
});

const takeProfitDataMixin = (
  payload: CollectRecordPayload,
) => ({
  ...(payload.takeProfits?.length ? {
    tp: compose(
      roundToDecimalPoint(6),
      calculateCommonTakeProfitPercent,
    )(
      payload.order.price,
      payload.order.quantity,
      payload.takeProfits,
    ),
  } : {
    tp: null,
  }),
});

const activeOrderDateMixin = (
  payload: CollectRecordPayload,
) => ({
  date: humanizeDate(payload.order.created),
});

const closedOrderDateMixin = (
  payload: CollectRecordPayload,
) => ({
  date: {
    open: humanizeDate(payload.order.created),
    close: humanizeDate(payload.order.created),
  },
});

const commentMixin = (
  payload: CollectRecordPayload,
) => ({
  comment: payload.order,
});

const takeProfitChildrenMixin = (
  payload: CollectRecordPayload,
) => [
  ...(payload.takeProfits?.length
    ? payload.takeProfits.map((subOrder: Order, index: number) => ({
      ...subOrder,
      pairData: payload.pairData,
      masterOrder: payload.order,
      orderIndex: (payload.takeProfits?.length || 0) - index,
    })) as SubOrderTableItem[]
    : []),
];

const stopLossChildrenMixin = (
  payload: CollectRecordPayload,
) => [
  ...(payload.stopLoss ? [{
    ...payload.stopLoss,
    pairData: payload.pairData,
    masterOrder: payload.order,
  }] : []),
];

const notFilledOrderStateMixin = (
  { order }: CollectRecordPayload,
): TableRowState[] => [
  ...(order.status === 'new' ? ['semiTransparent'] : []) as TableRowState[],
];

export const collectActiveOrderRecord = curry(collectTableRecord<
  ActiveOrdersTableRecord,
  CollectRecordPayload
>)({
  data: [
    commentMixin,
    activeOrderDateMixin,
    takeProfitDataMixin,
    pnlMixin,
    stopLossDataMixin,
    activeOrderPricesMixin,
    orderVolumeMixin,
    commonDataMixin,
  ],
  state: [
    notFilledOrderStateMixin,
  ],
  children: [
    stopLossChildrenMixin,
    takeProfitChildrenMixin,
  ],
});

export const collectClosedOrderRecord = curry(collectTableRecord<
  ClosedOrdersTableRecord,
  CollectRecordPayload
>)({
  data: [
    closedOrderDateMixin,
    closedOrderPricesMixin,
    closedOrderResultsMixin,
    orderVolumeMixin,
    commonDataMixin,
  ],
  children: [
    stopLossChildrenMixin,
    takeProfitChildrenMixin,
  ],
});
