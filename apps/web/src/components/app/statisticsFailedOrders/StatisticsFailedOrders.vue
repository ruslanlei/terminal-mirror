<template>
  <StatisticsResultRow>
    <template #prepend>
      <UiTypography
        size="h3"
        :state="['danger', 'bold']"
      >
        {{ failedOrdersAmount }}
      </UiTypography>
    </template>
    <template #primaryInfoTop>
      <UiTypography
        :state="['danger', 'bold']"
        size="title5"
      >
        {{ t('statistics.orders.failed.label') }}
      </UiTypography>
    </template>
    <template #primaryInfoBottom>
      <UiTypography
        size="title7"
        :state="['accent2', 'medium']"
      >
        <i18n-t keypath="statistics.orders.failed.averageIncome">
          <template #value>
            <UiTypography
              is-inline
              state="accent1"
            >
              {{ t('common.currencyAmount', { amount: averageLoss, currency: '$' }) }}
            </UiTypography>
          </template>
        </i18n-t>
      </UiTypography>
    </template>
    <template #append>
      <div :class="$style.popularCoin">
        <UiTypography
          size="title7"
          :state="['accent2', 'medium', 'alignRight']"
          :class="$style.popularCoinLabel"
        >
          {{ t('statistics.orders.failed.popularCoin') }}
        </UiTypography>
        <UiCoinLogo :coin="mostFrequentCoin" />
      </div>
    </template>
  </StatisticsResultRow>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { UiCoinLogo } from '@terminal/uikit/components/coinLogo';
import { UiTypography } from '@terminal/uikit/components/typography';
import StatisticsResultRow from '@/containers/statisticsResultRow/StatisticsResultRow.vue';
import { compose, log } from '@terminal/common/utils/fp';
import { roundToDecimalPlaces } from '@terminal/common/utils/number';
import { calculateAverageLoss, filterOrdersByType, findMostFrequentCoin } from '@/helpers/orders';
import { useMarketStore } from '@/stores/market';
import { getFailedOrders } from '@/helpers/math/formulas/pnl';
import { getLength } from '@terminal/common/utils/array';

const { t } = useI18n();

const marketStore = useMarketStore();
const {
  closedOrders,
} = storeToRefs(marketStore);

const failedOrdersAmount = computed(() => (
  compose(
    getLength,
    getFailedOrders,
    filterOrdersByType('limit'),
  )(closedOrders.value)
));

const averageLoss = computed(() => (
  compose(
    roundToDecimalPlaces(0),
    calculateAverageLoss,
  )(closedOrders.value)
));

const mostFrequentCoin = computed(() => (
  compose(
    findMostFrequentCoin(marketStore.pairsMap),
    getFailedOrders,
    filterOrdersByType('limit'),
  )(closedOrders.value)
));
</script>

<style lang="scss" module>
.popularCoin {
  display: flex;
  align-items: center;
  gap: 10px;
}

.popularCoinLabel {
  max-width: 95px;
  line-height: 14px;
}
</style>
