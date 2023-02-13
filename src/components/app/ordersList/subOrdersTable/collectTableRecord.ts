import {
  ActiveSubOrderRecord,
  ClosedSubOrdersRecord,
  SubOrderTableItem,
} from '@/components/app/ordersList/subOrdersTable/index';
import { compose, curry } from '@/utils/fp';
import { roundToDecimalPoint } from '@/helpers/number';
import { valueToPercents } from '@/helpers/math/percents';
import { humanizeDate } from '@/utils/date';
import { MasterOrder } from '@/api/types/order';
import { PairData } from '@/api/types/pair';
import { collectTableRecord } from '@/components/core/table/helpers';

interface CollectRecordPayload {
  order: SubOrderTableItem,
  masterOrder: MasterOrder,
  pairData: PairData,
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
    value: order.quantity,
    percent: compose(
      roundToDecimalPoint(2),
      valueToPercents,
    )(masterOrder.quantity, order.quantity),
  },
});

const activeOrderVolumeMixin = (
  { order, pairData }: CollectRecordPayload,
) => ({
  volume: {
    value: order.price,
    currency: pairData.quote,
  },
});

const closedOrderVolumeMixin = (
  { order, pairData }: CollectRecordPayload,
) => ({
  volume: {
    orderType: order.order_type,
    value: order.status === 'executed' ? order.price : null,
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

export const collectActiveSubOrderRecord = curry(collectTableRecord<
  ActiveSubOrderRecord,
  CollectRecordPayload
>)([
  optionsMixin,
  dateMixin,
  activeOrderVolumeMixin,
  quantityMixin,
  masterTypeMixin,
  orderTypeMixin,
], [], []);

export const collectClosedSubOrderRecord = curry(collectTableRecord<
  ClosedSubOrdersRecord,
  CollectRecordPayload
>)([
  dateMixin,
  closedOrderVolumeMixin,
  quantityMixin,
  masterTypeMixin,
  orderTypeMixin,
], [], []);
