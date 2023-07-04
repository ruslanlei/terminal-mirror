<template>
  <StatisticsResultRow>
    <template #prepend>
      <UiTypography
        size="h3"
        :state="['success', 'bold']"
      >
        {{ successOrdersAmount }}
      </UiTypography>
    </template>
    <template #primaryInfoTop>
      <UiTypography
        :state="['success', 'bold']"
        size="title5"
      >
        {{ t('statistics.orders.success.label') }}
      </UiTypography>
    </template>
    <template #primaryInfoBottom>
      <UiTypography
        size="title7"
        :state="['accent2', 'medium']"
      >
        <i18n-t keypath="statistics.orders.success.averageIncome">
          <template #value>
            <UiTypography
              is-inline
              state="accent1"
            >
              {{ t('common.currencyAmount', { amount: averageIncome, currency: '$' }) }}
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
          {{ t('statistics.orders.success.popularCoin') }}
        </UiTypography>
        <UiCoinLogo :coin="mostFrequentCoin" />
      </div>
    </template>
  </StatisticsResultRow>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { storeToRefs } from 'pinia';
import { UiCoinLogo } from '@terminal/uikit/components/coinLogo';
import { UiTypography } from '@terminal/uikit/components/typography';
import StatisticsResultRow from '@/containers/statisticsResultRow/StatisticsResultRow.vue';
import { useMarketStore } from '@/stores/market';
import { compose } from '@terminal/common/utils/fp';
import { calculateAverageIncome, findMostFrequentCoin } from '@terminal/common/helpers/orders';
import { getSuccessOrders } from '@terminal/common/helpers/math/formulas/pnl';
import { roundToDecimalPlaces } from '@terminal/common/utils/number';
import { getLength } from '@terminal/common/utils/array';

const { t } = useI18n();

const marketStore = useMarketStore();
const {
  closedOrders,
} = storeToRefs(marketStore);

const successOrdersAmount = computed(() => (
  compose(
    getLength,
    getSuccessOrders,
  )(closedOrders.value)
));

const averageIncome = computed(() => (
  compose(
    roundToDecimalPlaces(0),
    calculateAverageIncome,
  )(closedOrders.value)
));

const mostFrequentCoin = computed(() => (
  compose(
    findMostFrequentCoin(marketStore.pairsMap),
    getSuccessOrders,
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
