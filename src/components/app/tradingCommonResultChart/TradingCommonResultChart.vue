<template>
  <BarChart
    :data="computedData"
    :bar-label-formatter="labelFormatter"
  />
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { storeToRefs } from 'pinia';
import BarChart from '@/components/core/barChart/BarChart.vue';
import { toPnlString } from '@/utils/style';
import { useMarketStore } from '@/stores/market';
import { customFormatDate } from '@/utils/date';
import { filterOrdersByType } from '@/helpers/orders';
import { compose, log } from '@/utils/fp';
import { Order } from '@/api/types/order';
import { filter, map } from '@/utils/array';
import { groupBy, objectEntries } from '@/utils/object';
import { roundToDecimalPoint } from '@/utils/number';
import { calculateCommonPnl } from '@/helpers/math/formulas/pnl';
import { Maybe } from '@/utils/functors';
import { computed, watch } from 'vue';
import { BarChartData } from '@/components/core/barChart/createBarChart';

const { t } = useI18n();

const marketStore = useMarketStore();
const {
  closedOrders,
} = storeToRefs(marketStore);

const filterInappropriateOrders = (orders: Order[]) => (
    compose(
      filter((order: Order) => !!order?.modified),
      filterOrdersByType('limit'),
    )(orders) as Order[]
);

const groupPnlByMonths = (orders: Order[]) => (
  compose(
    map(
      ([
        monthNumber,
        monthOrders,
      ]: [string, Array<Order>]) => (
        [
          monthNumber,
          compose(
            roundToDecimalPoint(2),
            calculateCommonPnl,
          )(monthOrders),
        ]
      ),
    ),
    objectEntries,
    groupBy((order: Order) => (
      /* Day index is set to default "01" */
      /* to group orders by months and be */
      /* able to extract month later from */
      /* date string. */
      customFormatDate('YYYY-MM-01', order.modified)
    )),
  )(orders) as BarChartData
);

const fillMissedMonths = (
  data: BarChartData,
) => {
  // implement this
  console.log(data);

  return data;
};

const computedData = computed(() => (
  Maybe.of(closedOrders.value)
    .map<Order[]>(filterInappropriateOrders)
    .map<BarChartData>(groupPnlByMonths)
    .chain(fillMissedMonths)
));

watch(computedData, () => {
  console.log(computedData.value);
}, { immediate: true });

// customFormatDate('MMM' /* TODO: 'MMM YYYY' if jan */, order.executed_at)

const labelFormatter = (
  value: number,
) => t('common.currencyAmount', {
  amount: toPnlString(value),
  currency: '$',
});
</script>
