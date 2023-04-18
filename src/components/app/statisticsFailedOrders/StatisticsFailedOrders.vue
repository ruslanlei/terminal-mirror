<template>
  <StatisticsResultRow>
    <template #prepend>
      <Typography
        size="h3"
        :state="['danger', 'bold']"
      >
        {{ failedOrdersAmount }}
      </Typography>
    </template>
    <template #primaryInfoTop>
      <Typography
        :state="['danger', 'bold']"
        size="title5"
      >
        {{ t('statistics.orders.failed.label') }}
      </Typography>
    </template>
    <template #primaryInfoBottom>
      <Typography
        size="title7"
        :state="['accent2', 'medium']"
      >
        <i18n-t keypath="statistics.orders.failed.averageIncome">
          <template #value>
            <Typography
              is-inline
              state="accent1"
            >
              {{ t('common.currencyAmount', { amount: averageLoss, currency: '$' }) }}
            </Typography>
          </template>
        </i18n-t>
      </Typography>
    </template>
    <template #append>
      <div :class="$style.popularCoin">
        <Typography
          size="title7"
          :state="['accent2', 'medium', 'alignRight']"
          :class="$style.popularCoinLabel"
        >
          {{ t('statistics.orders.failed.popularCoin') }}
        </Typography>
        <CoinLogo :coin="mostFrequentCoin" />
      </div>
    </template>
  </StatisticsResultRow>
</template>

<script setup lang="ts">
import StatisticsResultRow from '@/containers/statisticsResultRow/StatisticsResultRow.vue';
import { useI18n } from 'vue-i18n';
import Typography from '@/components/app/typography/Typography.vue';
import CoinLogo from '@/components/core/coinLogo/CoinLogo.vue';
import { computed } from 'vue';
import { compose } from '@/utils/fp';
import { roundToDecimalPlaces } from '@/utils/number';
import { calculateAverageLoss, filterOrdersByType, findMostFrequentCoin } from '@/helpers/orders';
import { useMarketStore } from '@/stores/market';
import { storeToRefs } from 'pinia';
import { getFailedOrders } from '@/helpers/math/formulas/pnl';
import { getLength } from '@/utils/array';

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
