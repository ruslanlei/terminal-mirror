<template>
  <BarChart
    :data="demoData"
    :bar-label-formatter="labelFormatter"
  />
</template>

<script setup lang="ts">
import BarChart from '@/components/core/barChart/BarChart.vue';
import { toPnlString } from '@/utils/style';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const demoData = [
  ['jan', -4000],
  ['feb', -231],
  ['mar', -779],
  ['apr', 1479],
  ['may', 2512],
  ['jun', 1267],
  ['jul', 800],
  ['aug', 495],
  ['sep', 23],
  ['oct', 597],
  ['nov', 100],
  ['dec', 4788],
];

const labelFormatter = (
  value: number,
) => t('common.currencyAmount', {
  amount: toPnlString(value),
  currency: '$',
});
</script>
