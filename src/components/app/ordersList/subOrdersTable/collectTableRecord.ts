import { computed } from 'vue';
import { ActiveSubOrdersRecord, SubOrderTableItem } from '@/components/app/ordersList/subOrdersTable/index';
import { compose } from '@/utils/fp';
import { roundToDecimalPoint } from '@/math/float';
import { valueToPercents } from '@/math/helpers/percents';
import { humanizeDate } from '@/utils/date';
import { Order } from '@/api/types/order';
import { setDataToTableRecord } from '@/components/core/table/helpers';
import { DeepPartial } from '@/utils/typescript';

interface CollectRecordPayload {
    order: Order,
}

type AccumulatingRecord = DeepPartial<ActiveSubOrdersRecord>;

const setOrderTypeData = (
  payload: CollectRecordPayload,
  record: AccumulatingRecord,
) => setDataToTableRecord(
  record,
  {
    type: {
      value: payload.order.order_type,
      // label: ({ // TODO: move to view
      //   tp: t('ordersList.subOrder.type.takeProfit', { index: payload.order.orderIndex }),
      //   sl: t('ordersList.subOrder.type.stopLoss'),
      // }[payload.order.order_type]),
    },
  },
);

const records = computed<ActiveSubOrdersRecord[]>(
  () => props.orders.map((order: SubOrderTableItem) => {
    const label = ({
      tp: t('ordersList.subOrder.type.takeProfit', { index: order.orderIndex }),
      sl: t('ordersList.subOrder.type.stopLoss'),
    }[order.order_type]);

    const masterType = ({
      limit: t('ordersList.subOrder.masterType.limit'),
    }.limit);

    const percentOfMasterQuantity = compose(
      roundToDecimalPoint(2),
      valueToPercents,
    )(order.masterData.quantity, order.quantity);

    const percentOfMasterQuantityLabel = t(
      'ordersList.subOrder.quantityPercent',
      {
        percent: t(
          'common.percents',
          {
            value: percentOfMasterQuantity,
          },
        ),
      },
    );

    const date = humanizeDate(order.created);

    return {
      id: order.id,
      data: {
        type: {
          value: order.order_type,
          label,
        },
        masterType,
        quantity: {
          value: order.quantity,
          percent: percentOfMasterQuantityLabel,
        },
        volume: {
          value: order.price,
          currency: order.pairData.quote,
        },
        date,
        options: {},
      },
    };
  }),
);
