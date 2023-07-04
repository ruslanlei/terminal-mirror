import { computed, ref } from 'vue';
import {
  ActiveSubOrderRecord,
  SubOrderListProps,
  SubOrderTableItem,
} from 'src/components/app/orderList/subOrderList';
import { compose } from '@terminal/common/utils/fp';
import {
  collectActiveSubOrderRecord,
  collectClosedSubOrderRecord,
} from '@/components/app/orderList/subOrderList/collectTableRecord';
import { createEmptyRecord } from '@terminal/uikit/components/table/helpers';

export const useSubOrderList = (
  props: SubOrderListProps,
) => {
  const columns = ref([
    {
      label: '',
      slug: 'type',
      size: 1,
      align: 'center',
    },
    {
      label: '',
      slug: 'masterType',
      size: 1,
      align: 'center',
    },
    {
      label: '',
      slug: 'quantity',
      size: 2,
      align: 'center',
    },
    {
      label: '',
      slug: 'volume',
      size: 1.6,
      align: 'center',
    },
    {
      label: '',
      slug: 'date',
      size: 1.6,
      align: 'center',
    },
    ...(props.listType === 'active' ? [
      {
        label: '',
        slug: 'options',
        size: 1.6,
        align: 'center',
      },
    ] : []),
  ]);

  const activeOrderRecords = computed<ActiveSubOrderRecord[]>(() => props.orders.map((
    order: SubOrderTableItem,
  ) => compose(
    collectActiveSubOrderRecord({
      order,
      pairData: order.pairData,
      masterOrder: order.masterOrder,
    }),
    createEmptyRecord,
  )(order.id)));

  const closedOrderRecords = computed<ActiveSubOrderRecord[]>(() => props.orders.map((
    order: SubOrderTableItem,
  ) => compose(
    collectClosedSubOrderRecord({
      order,
      pairData: order.pairData,
      masterOrder: order.masterOrder,
    }),
    createEmptyRecord,
  )(order.id)));

  const records = computed(() => ({
    active: activeOrderRecords.value,
    closed: closedOrderRecords.value,
  }[props.listType]));

  return {
    columns,
    records,
  };
};
