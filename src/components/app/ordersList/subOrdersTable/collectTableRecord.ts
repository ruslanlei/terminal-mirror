import { ActiveSubOrderRecord, SubOrderTableItem } from '@/components/app/ordersList/subOrdersTable/index';
import { compose, curry } from '@/utils/fp';
import { roundToDecimalPoint } from '@/math/float';
import { valueToPercents } from '@/math/percents';
import { humanizeDate } from '@/utils/date';
import { MasterOrder } from '@/api/types/order';
import { PairServerData } from '@/api/types/pairServerData';
import { collectTableRecord } from '@/components/core/table/helpers';

interface CollectRecordPayload {
  order: SubOrderTableItem,
  masterOrder: MasterOrder,
  pairData: PairServerData,
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

const volumeMixin = (
  { order, pairData }: CollectRecordPayload,
) => ({
  volume: {
    value: order.price,
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
  volumeMixin,
  quantityMixin,
  masterTypeMixin,
  orderTypeMixin,
], []);
