<template>
  <div :class="$style.currencyStats">
    <CurrencyLogo
      state="square"
      :currency="stats.currency"
    />
    <div :class="$style.stats">
      <CurrencyStatsColumn
        v-for="(statsColumn, index) in computedCurrencyStats"
        :key="index"
        :column-data="statsColumn"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import CurrencyLogo from '@/components/core/currencyLogo/CurrencyLogo.vue';
import CurrencyStatsColumn from '@/components/app/currencyStatsColumn/CurrencyStatsColumn.vue';
import { CurrencyStatsProps } from '@/components/core/currencyStats/index';
import { CurrencyStat } from '@/components/app/currencyStatsColumn';

const props = defineProps<CurrencyStatsProps>();

const computedCurrencyStats = computed<Array<CurrencyStat[]>>(() => [
  [
    {
      label: 'Price',
      value: props.stats.price,
      valueState: 'positive',
    },
    {
      label: 'Amount',
      value: props.stats.amount,
      valueState: 'default',
    },
  ],
  [
    {
      label: 'Change',
      value: props.stats.change,
      valueState: 'negative',
    },
    {
      label: 'for 24h',
      value: props.stats.changePercents,
      valueState: 'default',
    },
  ],
  [
    {
      label: 'Max',
      value: props.stats.max,
      valueState: 'default',
    },
    {
      label: 'Min',
      value: props.stats.min,
      valueState: 'default',
    },
  ],
]);
</script>

<style lang="scss" module>
.currencyStats {
  display: flex;
}

.stats {
  display: flex;
  gap: 20px;
  margin-left: 20px;
}
</style>
