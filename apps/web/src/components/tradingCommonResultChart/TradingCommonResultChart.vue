<template>
  <UiBarChart
    :data="computedData"
    :bar-label-formatter="barLabelFormatter"
    :x-axis-label-formatter="xAxisLabelFormatter"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { storeToRefs } from 'pinia';
import { UiBarChart } from '@terminal/uikit/components/barChart';
import { toPnlString } from '@terminal/uikit/utils/style';
import {
  addMonths,
  customFormatDate,
  DateValue,
  getDifferenceInMonths,
  getMonthIndex,
  subtractMonths,
} from '@terminal/common/utils/date';
import { compose } from '@terminal/common/utils/fp';
import {
  arrayOf,
  filter,
  getFirstElement,
  getLastElement,
  map,
  sortByKey,
} from '@terminal/common/utils/array';
import { getValueByKey, groupBy, objectEntries } from '@terminal/common/utils/object';
import { add, roundToDecimalPlaces, subtract } from '@terminal/common/utils/number';
import { Maybe } from '@terminal/common/utils/functors';
import { ensureOrFallback, isEqual, isMoreThanOrEqualTo } from '@terminal/common/utils/boolean';
import { calculateCommonClosePnl } from '@/helpers/math/formulas/pnl';
import { Order } from '@/api/types/order';
import { filterOrdersByType } from '@/helpers/orders';
import { BarChartData, BarChartDataElement } from '@/components/core/barChart/createBarChart';
import { useMarketStore } from '@/stores/market';

const { t } = useI18n();

const marketStore = useMarketStore();
const {
  closedOrders,
} = storeToRefs(marketStore);

const barLabelFormatter = (
  value: number,
) => t('common.currencyAmount', {
  amount: toPnlString(value),
  currency: '$',
});

const xAxisLabelFormatter = (
  date: DateValue,
  index: number,
) => {
  const isJanuary = isEqual(
    getMonthIndex(date),
    0,
  );

  const isFirstMonthInList = isEqual(index, 0);

  const dateFormat = (isJanuary || isFirstMonthInList)
    ? 'MMM YYYY'
    : 'MMM';

  return customFormatDate(dateFormat, date);
};

const filterInappropriateOrders = (orders: Order[]) => (
    compose(
      filter((order: Order) => !!order?.modified),
      filterOrdersByType('limit'),
    )(orders) as Order[]
);

const groupPnlByMonths = (orders: Order[]): BarChartData => (
  compose(
    map(
      ([
        monthNumber,
        monthOrders,
      ]: [string, Array<Order>]) => (
        [
          monthNumber,
          compose(
            roundToDecimalPlaces(2),
            calculateCommonClosePnl,
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

const fillMissedMonths = (data: BarChartData): BarChartData => {
  const latestDate = compose(
    getValueByKey('0'),
    getLastElement,
    sortByKey('0' as BarChartDataElement[0]),
  )(data);

  const earliestDate = compose(
    ensureOrFallback(
      /* if difference in months less than 12 */
      /* add additional empty months to fill. */
      (date: DateValue) => compose(
        isMoreThanOrEqualTo(12),
        getDifferenceInMonths,
      )(date, latestDate),
      (date: DateValue) => subtractMonths(
        subtract(12, getDifferenceInMonths(latestDate, date)),
        date,
      ),
    ),
    getValueByKey('0'),
    getFirstElement,
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

const collectChartData = (
  orders: Order[],
) => (
  Maybe.of(orders)
    .map<Order[]>(filterInappropriateOrders)
    .map<BarChartData>(groupPnlByMonths)
    .chain<BarChartData>(fillMissedMonths)
);

const computedData = computed<BarChartData>(() => (
  collectChartData(closedOrders.value)
));
</script>
