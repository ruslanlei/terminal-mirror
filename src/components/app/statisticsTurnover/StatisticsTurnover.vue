<template>
  <StatisticsResultRow>
    <template #prepend>
      <Typography
        size="h3"
        :state="['accent1', 'bold']"
      >
        {{ t('common.currencyAmount', { amount: turnover, currency: '$' }) }}
      </Typography>
    </template>
    <template #primaryInfoTop>
      <Typography
        size="title5"
        :state="['accent1', 'semiBold']"
      >
        {{ t('statistics.turnover.label') }}
      </Typography>
    </template>
    <template #primaryInfoBottom>
      <Typography
        size="title7"
        :state="['accent2', 'semiBold']"
      >
        <i18n-t keypath="statistics.orders.success.averageIncome">
          <template #value>
            <Typography
              is-inline
              state="accent1"
            >
              {{ t('common.currencyAmount', { amount: averageIncome, currency: '$' }) }}
            </Typography>
          </template>
        </i18n-t>
      </Typography>
    </template>
  </StatisticsResultRow>
</template>

<script setup lang="ts">
import StatisticsResultRow from '@/containers/statisticsResultRow/StatisticsResultRow.vue';
import Typography from '@/components/app/typography/Typography.vue';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import { compose } from '@/utils/fp';
import { add, multiply, roundToDecimalPlaces } from '@/utils/number';
import { calculateAverageIncome } from '@/helpers/orders';
import { useMarketStore } from '@/stores/market';
import { storeToRefs } from 'pinia';
import { reduce } from '@/utils/array';
import { Order } from '@/api/types/order';

const { t } = useI18n();

const marketStore = useMarketStore();
const {
  closedOrders,
} = storeToRefs(marketStore);

const turnover = computed(() => (
  compose(
    roundToDecimalPlaces(2),
    reduce(
      (commonVolume: number, order: Order) => (
        compose(
          add(commonVolume),
          multiply,
        )(order.price, order.quantity)
      ),
      0,
    ),
  )(closedOrders.value)
));

const averageIncome = computed(() => (
  compose(
    roundToDecimalPlaces(0),
    calculateAverageIncome,
  )(closedOrders.value)
));
</script>
