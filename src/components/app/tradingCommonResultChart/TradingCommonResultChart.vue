<template>
  <BarChart
    :data="computedData"
    :bar-label-formatter="barLabelFormatter"
    :x-axis-label-formatter="xAxisLabelFormatter"
  />
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { storeToRefs } from 'pinia';
import BarChart from '@/components/core/barChart/BarChart.vue';
import { toPnlString } from '@/utils/style';
import { useMarketStore } from '@/stores/market';
import {
  addMonths, customFormatDate, DateValue, getDifferenceInMonths,
} from '@/utils/date';
import { filterOrdersByType } from '@/helpers/orders';
import { compose } from '@/utils/fp';
import { Order } from '@/api/types/order';
import {
  arrayOf,
  filter,
  getFirstElement,
  getLastElement,
  map,
  sortByKey,
} from '@/utils/array';
import { getValueByKey, groupBy, objectEntries } from '@/utils/object';
import { add, roundToDecimalPoint } from '@/utils/number';
import { calculateCommonPnl } from '@/helpers/math/formulas/pnl';
import { Maybe } from '@/utils/functors';
import { computed, watch } from 'vue';
import { BarChartData, BarChartDataElement } from '@/components/core/barChart/createBarChart';
import { isEqual } from '@/utils/boolean';

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

  const monthsDiff = compose(
    add(1),
    getDifferenceInMonths,
  )(latestDate, earliestDate);

  return Maybe.of(monthsDiff)
    .map(
      // create array of all months including missed
      arrayOf(
        (_, i) => compose(
          customFormatDate('YYYY-MM-01'),
          addMonths(i),
        )(earliestDate),
      ),
    )
    .chain(
      // map array to fill it with existing data
      map(
        (date: string) => (
          data.find(
            ([existingMonthDataDate]) => isEqual(existingMonthDataDate, date),
          ) || [date, 0]
        ),
      ),
    );
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

const barLabelFormatter = (
  value: number,
) => t('common.currencyAmount', {
  amount: toPnlString(value),
  currency: '$',
});

const xAxisLabelFormatter = (
  date: DateValue,
) => (date);
</script>
