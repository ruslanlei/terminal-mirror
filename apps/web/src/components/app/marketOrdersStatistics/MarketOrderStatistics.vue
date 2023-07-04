<template>
  <MarketOrderStatisticsContainer>
    <template #commonAmountOfOrders>
      {{ commonAmountOfTransactions }}
    </template>
    <template #commonAmountOfOrdersLabel>
      {{ t('statistics.orders.commonAmountLabel') }}
    </template>
    <template #successRate>
      <UiTypography
        :state="successRateTextState"
        is-inline
      >
        {{ displaySuccessRate }}
      </UiTypography>
    </template>
    <template #successRateLabel>
      {{ t('statistics.orders.successRateLabel') }}
    </template>
    <template #successOrders>
      <StatisticsSuccessOrders />
    </template>
    <template #unsuccessfulOrders>
      <StatisticsFailedOrders />
    </template>
    <template #ordersTurnover>
      <StatisticsTurnover />
    </template>
  </MarketOrderStatisticsContainer>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { storeToRefs } from 'pinia';
import { UiTypography, TypographyState } from '@terminal/uikit/components/typography';
import { toCssPercentValue } from '@terminal/uikit/utils/style';
import { isMoreThanOrEqualTo } from '@terminal/common/utils/boolean';
import { compose } from '@terminal/common/utils/fp';
import { filter, getLength } from '@terminal/common/utils/array';
import { calculateSuccessRate, isExactOrder } from '@/helpers/orders';
import { useMarketStore } from '@/stores/market';
import MarketOrderStatisticsContainer
  from '@/containers/marketOrderStatisticsContainer/MarketOrderStatisticsContainer.vue';
import StatisticsSuccessOrders from '@/components/app/statisticsSuccessOrders/StatisticsSuccessOrders.vue';
import StatisticsFailedOrders
  from '@/components/app/statisticsFailedOrders/StatisticsFailedOrders.vue';
import StatisticsTurnover from '@/components/app/statisticsTurnover/StatisticsTurnover.vue';

const { t } = useI18n();

const marketStore = useMarketStore();
const {
  closedOrders,
} = storeToRefs(marketStore);

const commonAmountOfTransactions = computed(() => (
  compose(
    getLength,
    filter(isExactOrder('limit', 'executed')),
  )(closedOrders.value)
));

const successRate = computed(() => (
  calculateSuccessRate(closedOrders.value)
));

const displaySuccessRate = computed(() => (
  toCssPercentValue(successRate.value)
));

const successRateTextState = computed<TypographyState>(() => (
  isMoreThanOrEqualTo(50, successRate.value) /* right to left */
    ? 'success'
    : 'danger'
));
</script>
