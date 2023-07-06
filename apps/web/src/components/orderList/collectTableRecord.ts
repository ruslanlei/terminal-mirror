import {
  compose,
  curry,
} from '@terminal/common/utils/fp';
import {
  isPositive,
  multiply,
  roundToDecimalPlaces,
  toAbsolute,
} from '@terminal/common/utils/number';
import { humanizeDate } from '@terminal/common/utils/date';
import { ActiveOrdersTableRecord, ClosedOrdersTableRecord } from '@/components/orderList/index';
import { SubOrderTableItem } from '@/components/orderList/subOrderList';
import { collectTableRecord } from '@terminal/uikit/components/table/helpers';
import { TableRowState } from '@terminal/uikit/components/table/tableRow';
import { calculateCommonTakeProfitPercent } from '@/helpers/math/formulas/takeProfit';
import {
  // calculateClosePnl,
  calculateCommonClosePnl,
  calculateCurrentPnl,
  calculatePnlPercent,
} from '@/helpers/math/formulas/pnl';
import { calculatePercentageOfTotal } from '@/helpers/math/percents';
import {
  MasterOrder,
  TakeProfit,
  StopLoss,
  Order,
} from '@/api/types/order';
import { Pair } from '@/api/types/pair';

interface CollectRecordPayload {
  pairData: Pair,
  pairPrice: number | null,
  order: MasterOrder,
  takeProfits?: TakeProfit[],
  stopLoss?: StopLoss,
}

const commonDataMixin = (
  {
    pairData,
    order,
    takeProfits,
  }: CollectRecordPayload,
) => ({
  pair: pairData,
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
    roundToDecimalPlaces(2),
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
    close: order.executed_price,
  },
});

const closedOrderResultsMixin = (
  {
    order,
    pairData,
    takeProfits,
    stopLoss,
  }: CollectRecordPayload,
) => {
  const rawPnl = calculateCommonClosePnl([
    order,
    ...(takeProfits || []),
    ...(stopLoss ? [stopLoss] : []),
  ]);

  return {
    results: {
      pnl: {
        value: roundToDecimalPlaces(2, rawPnl),
        currency: pairData.quote,
      },
      pnlPercent: compose(
        roundToDecimalPlaces(2),
        calculatePnlPercent(order.price, order.quantity),
      )(rawPnl),
      isPositive: isPositive(rawPnl),
      isCancelled: order.status === 'canceled',
      orderStatus: order.status,
    },
  };
};

const stopLossDataMixin = (
  payload: CollectRecordPayload,
) => ({
  ...(payload.stopLoss ? {
    sl: compose(
      roundToDecimalPlaces(2),
      toAbsolute,
      calculatePercentageOfTotal,
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
          roundToDecimalPlaces(2),
          calculateCurrentPnl(order.price, order.quantity),
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
      roundToDecimalPlaces(2),
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
    close: humanizeDate(payload.order.modified),
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
