import { compose } from '@/utils/fp';
import { PairServerData } from '@/api/types/pairServerData';
import { Order, SubOrder } from '@/api/types/order';
import { multiply, roundToDecimalPoint } from '@/math/float';
import { calculatePercentOfDifference } from '@/math/helpers/percents';
import { calculatePnl } from '@/math/formulas/pnl';
import { calculateCommonTakeProfitPercent } from '@/math/formulas/takeProfit';
import { humanizeDate } from '@/utils/date';
import { ActiveOrdersTableRecord, ClosedOrdersTableRecord } from '@/components/app/ordersList';
import { SubOrderTableItem } from '@/components/app/ordersList/subOrdersTable';
import {
  collectTableRecord,
  setChildrenToTableRecord,
  setDataToTableRecord,
} from '@/components/core/table/helpers';
import { DeepPartial } from '@/utils/typescript';

const setChildrenToRecord = setChildrenToTableRecord<
    ActiveOrdersTableRecord
    | ClosedOrdersTableRecord
>;

interface CollectRecordPayload {
    pairData: PairServerData,
    pairPrice: number,
    order: Order,
    takeProfits: SubOrder[] | undefined,
    stopLoss: SubOrder | undefined,
}

type AccumulatingRecord = DeepPartial<ActiveOrdersTableRecord>;

const setCommonData = (
  payload: CollectRecordPayload,
  record: AccumulatingRecord,
): AccumulatingRecord => setDataToTableRecord(
  record,
  {
    pair: payload.pairData.base,
    type: payload.order.side,
    coins: payload.order.quantity,
    options: payload.order,
  },
);

const setOrderVolumeData = (
  payload: CollectRecordPayload,
  record: AccumulatingRecord,
): AccumulatingRecord => setDataToTableRecord(
  record,
  {
    volume: compose(
      roundToDecimalPoint(6), /* TODO: change to base currency decimals */
      multiply,
    )(payload.order.quantity, payload.order.price),
  },
);

const setActiveOrderPricesData = (
  payload: CollectRecordPayload,
  record: AccumulatingRecord,
) => setDataToTableRecord(
  record,
  {
    prices: {
      order: payload.order.price,
      current: payload.pairPrice,
    },
  },
);

const setClosedOrderPricesData = (
  payload: CollectRecordPayload,
  record: AccumulatingRecord,
) => setDataToTableRecord(
  record,
  {
    prices: {
      order: payload.order.price,
      close: 17000,
    },
  },
);

const setClosedOrderResultsData = (
  payload: CollectRecordPayload,
  record: AccumulatingRecord,
) => setDataToTableRecord(
  record,
  {
    results: {
      pnl: {
        value: 231,
        currency: payload.pairData.quote,
      },
      pnlPercent: 0.5,
    },
  },
);

const setStopLossData = (
  payload: CollectRecordPayload,
  record: AccumulatingRecord,
) => setDataToTableRecord(
  record,
  {
    ...(payload.stopLoss ? {
      sl: compose(
        roundToDecimalPoint(2),
        calculatePercentOfDifference,
      )(payload.order.price, payload.stopLoss.price),
    } : {
      sl: null,
    }),
  },
);

const setPnlData = (
  payload: CollectRecordPayload,
  record: AccumulatingRecord,
) => setDataToTableRecord(
  record,
  {
    pnl: {
      currency: payload.pairData.quote,
      value: compose(
        roundToDecimalPoint(2),
        calculatePnl,
      )(
        payload.order.price,
        payload.order.quantity,
        payload.pairPrice,
      ),
    },
  },
);

const setTakeProfitData = (
  payload: CollectRecordPayload,
  record: AccumulatingRecord,
) => setDataToTableRecord(
  record,
  {
    ...(payload.takeProfits?.length ? {
      tp: compose(
        roundToDecimalPoint(2),
        calculateCommonTakeProfitPercent,
      )(
        payload.order.price,
        payload.order.quantity,
        payload.takeProfits,
      ),
    } : {
      tp: null,
    }),
  },
);

const setActiveOrderDateData = (
  payload: CollectRecordPayload,
  record: AccumulatingRecord,
) => setDataToTableRecord(
  record,
  {
    date: humanizeDate(payload.order.created),
  },
);

const setCloseOrderDateData = (
  payload: CollectRecordPayload,
  record: AccumulatingRecord,
) => setDataToTableRecord(
  record,
  {
    date: {
      open: humanizeDate(payload.order.created),
      close: humanizeDate(payload.order.created),
    },
  },
);

const setCommentData = (
  payload: CollectRecordPayload,
  record: AccumulatingRecord,
) => setDataToTableRecord(
  record,
  {
    comment: payload.order,
  },
);

const setTakeProfitChildren = (
  payload: CollectRecordPayload,
  record: AccumulatingRecord,
) => setChildrenToRecord(
  record,
  [
    ...(payload.takeProfits?.length
      ? payload.takeProfits.map((subOrder: Order, index: number) => ({
        ...subOrder,
        pairData: payload.pairData,
        masterData: payload.order,
        orderIndex: (payload.takeProfits?.length || 0) - index,
      })) as SubOrderTableItem[]
      : []),
  ],
);

const setStopLossChildren = (
  payload: CollectRecordPayload,
  record: AccumulatingRecord,
) => setChildrenToRecord(
  record,
  [
    ...(payload.stopLoss ? [{
      ...payload.stopLoss,
      pairData: payload.pairData,
      masterData: payload.order,
    }] : []),
  ],
);

export const collectActiveOrderRecord = collectTableRecord([
  setStopLossChildren,
  setTakeProfitChildren,
  setCommentData,
  setActiveOrderDateData,
  setTakeProfitData,
  setPnlData,
  setStopLossData,
  setActiveOrderPricesData,
  setOrderVolumeData,
  setCommonData,
]);

export const collectClosedOrderRecord = collectTableRecord([
  setStopLossChildren,
  setTakeProfitChildren,
  setCloseOrderDateData,
  setClosedOrderPricesData,
  setClosedOrderResultsData,
  setOrderVolumeData,
  setCommonData,
]);
