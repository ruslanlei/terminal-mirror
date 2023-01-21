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
          <InlineSpace />
          <span :class="$style.quoteCurrency">
            {{ 'USDT' }}
          </span>
        </template>
      </i18n-t>
    </template>
    <template #column(prices)>
      <i18n-t keypath="ordersList.column.prices.order">
        <template #current>
          <span :class="$style.priceLabelCurrent">
            {{ t('ordersList.column.prices.current') }}
          </span>
        </template>
      </i18n-t>
    </template>
    <template #column(pnl)>
      <i18n-t keypath="ordersList.column.pnl">
        <template #value>
          <InlineSpace />
          <span :class="$style.pnlColumnValue">
            {{ '+32.331%' }}
          </span>
        </template>
      </i18n-t>
    </template>
  </Table>
</template>

<script async setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import Table from '@/components/core/table/Table.vue';
import InlineSpace from '@/components/core/inlineSpace/InlineSpace.vue';
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

.quoteCurrency {
  color: rgb(var(--color-accent-2));
}

.priceLabelCurrent {
  color: rgb(var(--color-accent-2));
}

.pnlColumnValue {
  color: rgb(var(--color-success));
  font-weight: 600;
}
</style>
