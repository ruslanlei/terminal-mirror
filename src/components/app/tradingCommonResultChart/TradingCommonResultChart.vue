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
import { addMonths, customFormatDate, getDifferenceInMonths } from '@/utils/date';
import { filterOrdersByType } from '@/helpers/orders';
import { compose, curry, log } from '@/utils/fp';
import { Order } from '@/api/types/order';
import {
  arrayOf,
  filter, getFirstElement, getLastElement, map, sortByKey,
} from '@/utils/array';
import { getValueByKey, groupBy, objectEntries } from '@/utils/object';
import { add, roundToDecimalPoint } from '@/utils/number';
import { calculateCommonPnl } from '@/helpers/math/formulas/pnl';
import { Maybe } from '@/utils/functors';
import { computed, watch } from 'vue';
import { BarChartData, BarChartDataElement } from '@/components/core/barChart/createBarChart';
import collect from 'collect.js';

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

const fillMissedMonths = (data: BarChartData) => {
  const earliestDate = compose(
    getValueByKey('0'),
    getFirstElement,
    sortByKey('0' as BarChartDataElement[0]),
  )(data);

  const latestDate = compose(
    getValueByKey('0'),
    getLastElement,
    sortByKey('0' as BarChartDataElement[0]),
  )(data);

  const monthsDiff = getDifferenceInMonths(
    latestDate,
    earliestDate,
  );

  const allMonths = arrayOf(
    (_, i) => compose(
      customFormatDate('YYYY-MM-01'),
      addMonths(i),
    )(earliestDate),
    add(monthsDiff, 1),
  );

  const filledData = collect(allMonths)
    .map((month) => {
      const existingMonthData = data.find((d) => d[0] === month);

      return existingMonthData || [month, 0];
    })
    .toArray();

  console.log('filledData', filledData);

  return filledData;
};

const computedData = computed(() => (
  Maybe.of(closedOrders.value)
    .map<Order[]>(filterInappropriateOrders)
    .map<BarChartData>(groupPnlByMonths)
    .chain(() => fillMissedMonths(
      [
        ['2023-02-01', 2194.84],
        ['2023-05-01', 613.6],
        ['2023-08-01', 1000.05],
      ],
    ))
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
