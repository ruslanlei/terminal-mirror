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
import { useI18n } from 'vue-i18n';
import CurrencyLogo from '@/components/core/currencyLogo/CurrencyLogo.vue';
import CurrencyStatsColumn from '@/components/app/currencyStatsColumn/CurrencyStatsColumn.vue';
import { CurrencyStatsProps } from '@/components/core/currencyStats/index';
import { CurrencyStat } from '@/components/app/currencyStatsColumn';

const props = defineProps<CurrencyStatsProps>();

const { t } = useI18n();

const computedCurrencyStats = computed<Array<CurrencyStat[]>>(() => [
  [
    {
      label: t('currencyStats.price'),
      value: props.stats.price,
      valueState: 'positive',
    },
    {
      label: t('currencyStats.amount'),
      value: props.stats.amount,
      valueState: 'default',
    },
  ],
  [
    {
      label: t('currencyStats.change'),
      value: props.stats.change,
      valueState: 'negative',
    },
    {
      label: t('currencyStats.in24hours'),
      value: props.stats.changePercents,
      valueState: 'default',
    },
  ],
  [
    {
      label: t('currencyStats.max'),
      value: props.stats.max,
      valueState: 'default',
    },
    {
      label: t('currencyStats.min'),
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
