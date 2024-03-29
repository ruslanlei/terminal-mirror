import { compose, curry } from '@terminal/common/utils/fp';
import { roundToDecimalPlaces } from '@terminal/common/utils/number';
import { humanizeDate } from '@terminal/common/utils/date';
import { collectTableRecord } from '@terminal/uikit/components/table/helpers';
import { TableRowState } from '@terminal/uikit/components/table/tableRow';
import { valueToPercents } from '@/helpers/math/percents';
import { MasterOrder } from '@/api/types/order';
import { Pair } from '@/api/types/pair';
import {
  ActiveSubOrderRecord,
  ClosedSubOrdersRecord,
  SubOrderTableItem,
} from '@/components/orderList/subOrderList/index';

interface CollectRecordPayload {
  order: SubOrderTableItem,
  masterOrder: MasterOrder,
  pairData: Pair,
}

const orderTypeMixin = (
  { order }: CollectRecordPayload,
) => ({
  type: {
    value: order.order_type,
    index: order.orderIndex,
  },
});

const masterTypeMixin = (
  { masterOrder }: CollectRecordPayload,
) => ({
  masterType: masterOrder.order_type,
});

const quantityMixin = (
  { order, masterOrder }: CollectRecordPayload,
) => ({
  quantity: {
    value: roundToDecimalPlaces(2, order.quantity),
    percent: compose(
      roundToDecimalPlaces(2),
      valueToPercents,
    )(masterOrder.quantity, order.quantity),
  },
});

const activeOrderVolumeMixin = (
  { order, pairData }: CollectRecordPayload,
) => ({
  volume: {
    value: roundToDecimalPlaces(2, order.price),
    currency: pairData.quote,
  },
});

const closedOrderVolumeMixin = (
  { order, pairData }: CollectRecordPayload,
) => ({
  volume: {
    orderType: order.order_type,
    value: order.status === 'executed' ? roundToDecimalPlaces(2, order.price) : null,
    currency: pairData.quote,
  },
});

const dateMixin = (
  { order }: CollectRecordPayload,
) => ({
  date: humanizeDate(order.created),
});

const optionsMixin = (
  { order }: CollectRecordPayload,
) => ({
  options: order,
});

const notFilledOrderStateMixin = (
  { order }: CollectRecordPayload,
): TableRowState[] => [
  ...(order.status === 'new' ? ['semiTransparent'] : []) as TableRowState[],
];

export const collectActiveSubOrderRecord = curry(collectTableRecord<
  ActiveSubOrderRecord,
  CollectRecordPayload
>)({
  data: [
    optionsMixin,
    dateMixin,
    activeOrderVolumeMixin,
    quantityMixin,
    masterTypeMixin,
    orderTypeMixin,
  ],
  state: [
    notFilledOrderStateMixin,
  ],
});

export const collectClosedSubOrderRecord = curry(collectTableRecord<
  ClosedSubOrdersRecord,
  CollectRecordPayload
>)({
  data: [
    dateMixin,
    closedOrderVolumeMixin,
    quantityMixin,
    masterTypeMixin,
    orderTypeMixin,
  ],
});
