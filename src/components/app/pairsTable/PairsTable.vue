<template>
  <Table
    :columns="columns"
    :records="computedRecords"
  >
    <template></template>
  </Table>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import Table from '@/components/core/table/Table.vue';
import {
  PairsTableColumn,
  PairsTableProps,
  PairsTableRecord,
} from '@/components/app/pairsTable/index';
import { Pair } from '@/api/endpoints/marketdata/stats';

const props = defineProps<PairsTableProps>();

const { t } = useI18n();

const columns = computed<PairsTableColumn[]>(() => [
  {
    label: t('pairs.table.pairs'),
    slug: 'pairs',
  },
  {
    label: t('pairs.table.priceAndVolume'),
    slug: 'priceAndVolume',
  },
]);

const computedRecords = computed<PairsTableRecord[]>(
  () => props.pairs.map((pair: Pair) => ({
    id: pair.id,
    data: {
      pairs: {
        base: pair.base,
        quote: pair.quote,
      },
      priceAndVolume: {
        totalTrades: pair.total_trades,
      },
    },
  })),
);
</script>

<style lang="scss" module>
</style>
