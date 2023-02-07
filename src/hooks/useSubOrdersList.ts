import { computed, ref } from 'vue';
import {
  ActiveSubOrderRecord,
  ActiveSubOrdersTableProps,
  SubOrderTableItem,
  ClosedSubOrdersColumn,
  ActiveSubOrdersColumn,
} from '@/components/app/ordersList/subOrdersTable';
import { compose } from '@/utils/fp';
import {
  collectActiveSubOrderRecord,
  collectClosedSubOrderRecord,
} from '@/components/app/ordersList/subOrdersTable/collectTableRecord';
import { createEmptyRecord } from '@/components/core/table/helpers';

export const useSubOrdersList = (
  props: ActiveSubOrdersTableProps,
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
