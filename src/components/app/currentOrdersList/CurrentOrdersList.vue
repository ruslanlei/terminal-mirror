<template>
  <div :class="$style.ordersList">
    <Table
      :columns="columns"
      :records="records"
    />
  </div>
</template>

<script async setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import Table from '@/components/core/table/Table.vue';
import { CurrentOrdersTableColumn } from '@/components/app/currentOrdersList/index';

const { t } = useI18n();

const columns = computed<CurrentOrdersTableColumn[]>(() => [
  {
    label: t('ordersList.column.pair'),
    slug: 'pair',
    size: 1,
  },
  {
    label: t('ordersList.column.type'),
    slug: 'type',
    size: 0.7,
  },
  {
    label: '',
    data: {
      quoteCurrencyName: '', /* active pair quote */
      labelI18nKey: 'ordersList.column.volume',
    },
    slug: 'volume',
    size: 1.1,
  },
  {
    label: t('ordersList.column.coins'),
    slug: 'coins',
    size: 1,
  },
  {
    label: '',
    slug: 'prices',
    size: 1.7,
    data: {
      labelI18nKeys: {
        order: 'ordersList.column.prices.order',
        current: 'ordersList.column.prices.current',
      },
    },
  },
  {
    label: t('ordersList.column.sl'),
    slug: 'sl',
    size: 0.5,
    align: 'center',
  },
  {
    label: '',
    data: {
      labelI18nKey: 'ordersList.column.pnl',
      value: '+32.331%' /* TODO: calculate it */,
    },
    slug: 'pnl',
    size: 1.5,
    align: 'center',
  },
  {
    label: t('ordersList.column.tp'),
    slug: 'tp',
    size: 0.5,
    align: 'center',
  },
  {
    label: t('ordersList.column.date'),
    slug: 'date',
    size: 1,
  },
  {
    label: t('ordersList.column.comment'),
    slug: 'comment',
    size: 0.5,
    align: 'center',
  },
  {
    label: '',
    slug: 'options',
    size: 0.7,
  },
]);

const records = computed(() => []);
</script>

<style lang="scss" module>
.ordersList {}
</style>
