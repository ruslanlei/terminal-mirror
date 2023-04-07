<template>
  <MarketOrderStatisticsContainer>
    <template #commonAmountOfOrders>
      {{ commonAmountOfTransactions }}
    </template>
    <template #commonAmountOfOrdersLabel>
      {{ t('statistics.orders.commonAmountLabel') }}
    </template>
    <template #successRate>
      <Typography
        :state="successRateTextState"
        is-inline
      >
        {{ displaySuccessRate }}
      </Typography>
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
import { useMarketStore } from '@/stores/market';
import MarketOrderStatisticsContainer
  from '@/containers/marketOrderStatisticsContainer/MarketOrderStatisticsContainer.vue';
import StatisticsSuccessOrders from '@/components/app/statisticsSuccessOrders/StatisticsSuccessOrders.vue';
import StatisticsFailedOrders
  from '@/components/app/statisticsFailedOrders/StatisticsFailedOrders.vue';
import StatisticsTurnover from '@/components/app/statisticsTurnover/StatisticsTurnover.vue';
import { calculateSuccessRate } from '@/helpers/orders';
import { toCssPercentValue } from '@/utils/style';
import Typography from '@/components/app/typography/Typography.vue';
import { isMoreThanOrEqualTo } from '@/utils/boolean';
import { TypographyState } from '@/components/app/typography';

const { t } = useI18n();

const marketStore = useMarketStore();
const {
  closedOrders,
} = storeToRefs(marketStore);

const commonAmountOfTransactions = computed(() => (
  closedOrders.value.length
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
