<template>
  <Table
    :columns="columns"
    :records="records"
    :state="['ordersListColor', 'defaultSize']"
    :class="$style.ordersList"
  >
    <template #column(volume)>
      <i18n-t keypath="ordersList.column.volume">
        <template #currencyName>
          {{ 'USDT' }}
        </template>
      </i18n-t>
    </template>
    <template #column(prices)>
      <i18n-t keypath="ordersList.column.prices.order">
        <template #current>
          {{ t('ordersList.column.prices.current') }}
        </template>
      </i18n-t>
    </template>
    <template #column(pnl)>
      <i18n-t keypath="ordersList.column.pnl">
        <template #value>
          {{ '+32.331%' }}
        </template>
      </i18n-t>
    </template>
  </Table>
</template>

<script async setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import Table from '@/components/core/table/Table.vue';
import { CurrentOrdersTableColumn, CurrentOrdersTableRecord } from './index';

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
  },
  {
    label: t('ordersList.column.sl'),
    slug: 'sl',
    size: 0.5,
    align: 'center',
  },
  {
    label: '',
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

const records = computed<CurrentOrdersTableRecord[]>(() => []);
</script>

<style lang="scss" module>
.ordersList {}
</style>
