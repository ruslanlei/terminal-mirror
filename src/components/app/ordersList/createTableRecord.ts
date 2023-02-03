import { compose, curry } from '@/utils/fp';
import { PairServerData } from '@/api/types/pairServerData';
import { Order, SubOrder } from '@/api/types/order';
import { multiply, roundToDecimalPoint } from '@/math/float';
import { calculatePercentOfDifference } from '@/math/helpers/percents';
import { calculatePnl } from '@/math/formulas/pnl';
import { calculateCommonTakeProfitPercent } from '@/math/formulas/takeProfit';
import { humanizeDate } from '@/utils/date';
import { ActiveSubOrderTableItem } from '@/components/app/activeOrdersList/activeSubOrdersTable';
import { TableRecord } from '@/components/core/table';
import { uuid } from '@/utils/uuid';
import { ActiveOrdersTableRecord, ClosedOrdersTableRecord } from '@/components/app/ordersList';

type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;

const createEmptyRecord = (id?: string | number): TableRecord => ({
  id: id || uuid(),
  data: {},
});

const setDataToRecord2 = <TR extends TableRecord>(
  record: DeepPartial<TR>,
  data: DeepPartial<TR>['data'],
): DeepPartial<TR> => ({
    ...record,
    data: {
      ...record.data,
      ...data,
    },
  });

const setChildrenToRecord2 = <TR extends TableRecord>(
  record: DeepPartial<TR>,
  children: DeepPartial<TR>['children'],
) => ({
    ...record,
    children: [
      ...(record?.children ? record.children : []),
      ...children,
    ],
  });

const setDataToRecord = setDataToRecord2<ActiveOrdersTableRecord | ClosedOrdersTableRecord>;
const setChildrenToRecord = setChildrenToRecord2<ActiveOrdersTableRecord | ClosedOrdersTableRecord>;
type AccumulatingRecord = ReturnType<typeof setDataToRecord>;

const setCommonData = curry((
  pairData: PairServerData,
  order: Order,
  record: AccumulatingRecord,
): AccumulatingRecord => setDataToRecord(
  record,
  {
    pair: pairData.base,
    type: order.side,
    coins: order.quantity,
    options: order,
  },
));

const setOrderVolumeData = curry((
  order: Order,
  record: AccumulatingRecord,
): AccumulatingRecord => setDataToRecord(
  record,
  {
    volume: compose(
      roundToDecimalPoint(6), /* TODO: change to base currency decimals */
      multiply,
    )(order.quantity, order.price),
  },
));

const setActiveOrderPricesData = curry((
  currentPrice: number,
  order: Order,
  record: AccumulatingRecord,
) => setDataToRecord(
  record,
  {
    prices: {
      order: order.price,
      current: currentPrice,
    },
  },
));

const setClosedOrderPricesData = curry((
  order: Order,
  record: AccumulatingRecord,
) => setDataToRecord(
  record,
  {
    prices: {
      order: order.price,
      close: 0,
    },
  },
));

const setClosedOrderResultsData = curry((
  record: AccumulatingRecord,
) => setDataToRecord(
  record,
  {
    results: {
      pnl: 0,
      pnlPercent: 0,
    },
  },
));

const setStopLossData = curry((
  order: Order,
  stopLoss: SubOrder | undefined,
  record: AccumulatingRecord,
) => setDataToRecord(
  record,
  {
    ...(stopLoss ? {
      sl: compose(
        roundToDecimalPoint(2),
        calculatePercentOfDifference,
      )(order.price, stopLoss.price),
    } : {
      sl: null,
    }),
  },
));

const setPnlData = curry((
  pairData: PairServerData,
  pairPrice: number,
  order: Order,
  record: AccumulatingRecord,
) => setDataToRecord(
  record,
  {
    pnl: {
      currency: pairData.quote,
      value: compose(
        roundToDecimalPoint(2),
        calculatePnl,
      )(
        order.price,
        order.quantity,
        pairPrice,
      ),
    },
  },
));

const setTakeProfitData = curry((
  order: Order,
  takeProfits: SubOrder[] | undefined,
  record: AccumulatingRecord,
) => setDataToRecord(
  record,
  {
    ...(takeProfits?.length ? {
      tp: compose(
        roundToDecimalPoint(2),
        calculateCommonTakeProfitPercent,
      )(
        order.price,
        order.quantity,
        takeProfits,
      ),
    } : {
      tp: null,
    }),
  },
));

const setActiveOrderDateData = curry((
  order: Order,
  record: AccumulatingRecord,
) => setDataToRecord(
  record,
  {
    date: humanizeDate(order.created),
  },
));

const setCloseOrderDateData = curry((
  order: Order,
  record: AccumulatingRecord,
) => setDataToRecord(
  record,
  {
    date: {
      open: humanizeDate(order.created),
      close: humanizeDate(order.created),
    },
  },
));

const setCommentData = curry((
  order: Order,
  record: AccumulatingRecord,
) => setDataToRecord(
  record,
  {
    comment: order,
  },
));

const setTakeProfitChildren = curry((
  pairData: PairServerData,
  order: Order,
  takeProfits: SubOrder[] | undefined,
  record: AccumulatingRecord,
) => setChildrenToRecord(
  record,
  [
    ...(takeProfits?.length
      ? takeProfits.map((subOrder: Order, index: number) => ({
        ...subOrder,
        pairData,
        masterData: order,
        orderIndex: takeProfits.length - index,
      })) as ActiveSubOrderTableItem[]
      : []),
  ],
));

const setStopLossChildren = curry((
  pairData: PairServerData,
  order: Order,
  stopLoss: SubOrder | undefined,
  record: AccumulatingRecord,
) => setChildrenToRecord(
  record,
  [
    ...(stopLoss ? [{
      ...stopLoss,
      pairData,
      masterData: order,
    }] : []),
  ],
));

export const createActiveOrderRecord = (
  pairData: PairServerData,
  pairPrice: number,
  takeProfits: SubOrder[] | undefined,
  stopLoss: SubOrder | undefined,
  order: Order,
) => compose(
  setStopLossChildren(pairData, order, stopLoss),
  setTakeProfitChildren(pairData, order, takeProfits),
  setCommentData(order),
  setActiveOrderDateData(order),
  setTakeProfitData(order, takeProfits),
  setPnlData(pairData, pairPrice, order),
  setStopLossData(order, stopLoss),
  setActiveOrderPricesData(pairPrice, order),
  setOrderVolumeData(order),
  setCommonData(pairData, order),
  createEmptyRecord,
)(order.id);

export const createClosedOrderRecord = (
  pairData: PairServerData,
  takeProfits: SubOrder[] | undefined,
  stopLoss: SubOrder | undefined,
  order: Order,
) => compose(
  setStopLossChildren(pairData, order, stopLoss),
  setTakeProfitChildren(pairData, order, takeProfits),
  setCloseOrderDateData(order),
  setClosedOrderPricesData(order),
  setClosedOrderResultsData,
  setOrderVolumeData(order),
  setCommonData(pairData, order),
  createEmptyRecord,
)(order.id);
