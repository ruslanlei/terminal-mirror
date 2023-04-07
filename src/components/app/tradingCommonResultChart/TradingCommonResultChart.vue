<template>
  <BarChart
    :data="demoData"
    :bar-label-formatter="labelFormatter"
  />
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { storeToRefs } from 'pinia';
import BarChart from '@/components/core/barChart/BarChart.vue';
import { toPnlString } from '@/utils/style';
import { useMarketStore } from '@/stores/market';
import { getMonthIndex } from '@/utils/date';
import { filterOrdersByType } from '@/helpers/orders';
import { compose } from '@/utils/fp';
import { Order } from '@/api/types/order';
import { filter, map } from '@/utils/array';
import { groupBy, objectEntries } from '@/utils/object';
import { roundToDecimalPoint } from '@/utils/number';
import { calculateCommonPnl } from '@/helpers/math/formulas/pnl';
import { Maybe } from '@/utils/functors';

const { t } = useI18n();

const marketStore = useMarketStore();
const {
  closedOrders,
} = storeToRefs(marketStore);

const demoData = [
  ['jan', -4000],
  ['feb', -231],
  ['mar', -779],
  ['apr', 1479],
  ['may', 2512],
  ['jun', 1267],
  ['jul', 800],
  ['aug', 495],
  ['sep', 23],
  ['oct', 597],
  ['nov', 100],
  ['dec', 4788],
];

const calculatePnlByMonths = (orders: Order[]) => (
  compose(
    map(
      ([
        monthNumber,
        monthOrders,
      ]: [string, Array<Order>]) => (
        [
          Number(monthNumber),
          compose(
            roundToDecimalPoint(2),
            calculateCommonPnl,
          )(monthOrders),
        ]
      ),
    ),
    objectEntries,
    groupBy((order: Order) => (
      getMonthIndex(order.modified)
    )),
  )(orders)
);

console.log(
  Maybe.of(closedOrders.value)
    .map<Order[]>((orders: Order[]) => (
      compose(
        filter((order: Order) => !!order?.modified),
        filterOrdersByType('limit'),
      )(orders) as Order[]
    ))
    .chain(calculatePnlByMonths),
);

// customFormatDate('MMM' /* TODO: 'MMM YYYY' if jan */, order.executed_at)

const labelFormatter = (
  value: number,
) => t('common.currencyAmount', {
  amount: toPnlString(value),
  currency: '$',
});
</script>
