<template>
  <StatisticsResultRow>
    <template #prepend>
      <Typography
        size="h3"
        :state="['success', 'bold']"
      >
        {{ successOrdersAmount }}
      </Typography>
    </template>
    <template #primaryInfoTop>
      <Typography
        :state="['success', 'bold']"
        size="title5"
      >
        {{ t('statistics.orders.success.label') }}
      </Typography>
    </template>
    <template #primaryInfoBottom>
      <Typography
        size="title7"
        :state="['accent2', 'medium']"
      >
        <i18n-t keypath="statistics.orders.success.averageIncome">
          <template #value>
            <Typography
              is-inline
              state="accent1"
            >
              {{ averageIncome }}
            </Typography>
          </template>
        </i18n-t>
      </Typography>
    </template>
    <template #secondaryInfoTop>
      <Typography
        size="title5"
        :state="['accent2', 'medium', 'alignRight']"
        :class="$style.popularCoinLabel"
      >
        {{ t('statistics.orders.success.popularCoin') }}
      </Typography>
    </template>
    <template #append>
      <CoinLogo :coin="mostFrequentCoin" />
    </template>
  </StatisticsResultRow>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { storeToRefs } from 'pinia';
import StatisticsResultRow from '@/containers/statisticsResultRow/StatisticsResultRow.vue';
import Typography from '@/components/app/typography/Typography.vue';
import CoinLogo from '@/components/core/coinLogo/CoinLogo.vue';
import { useMarketStore } from '@/stores/market';
import { compose } from '@/utils/fp';
import { calculateAverageIncome, filterOrdersByType, findMostFrequentCoin } from '@/helpers/orders';
import { getSuccessOrders } from '@/helpers/math/formulas/pnl';
import { toCssPercentValue } from '@/utils/dom';
import { roundToDecimalPoint } from '@/helpers/number';
import { getLength } from '@/utils/array';

const { t } = useI18n();

const marketStore = useMarketStore();
const {
  closedOrders,
} = storeToRefs(marketStore);

const successOrdersAmount = computed(() => (
  compose(
    getLength,
    getSuccessOrders,
    filterOrdersByType('limit'),
  )(closedOrders.value)
));

const averageIncome = computed(() => (
  compose(
    toCssPercentValue,
    roundToDecimalPoint(0),
    calculateAverageIncome,
  )(closedOrders.value)
));

const mostFrequentCoin = computed(() => (
  compose(
    findMostFrequentCoin(marketStore.pairsMap),
    getSuccessOrders,
    filterOrdersByType('limit'),
  )(closedOrders.value)
));
</script>

<style lang="scss" module>
.popularCoinLabel {
  max-width: 95px;
  line-height: 14px;
}
</style>
