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
    <template #cell(pair)="{ data: currency }">
      <div :class="$style.pairCell">
        <CurrencyLogo :currency="currency" />
        <span :class="$style.pairName">
          {{ currency }}
        </span>
      </div>
    </template>
    <template #cell(type)="{ data: orderDirection }">
      <span :class="[$style.orderDirection, $style[orderDirection]]">
        {{ t(`order.direction.${ ({ sell: 'short', buy: 'long' }[orderDirection]) }`) }}
      </span>
    </template>
    <template #cell(volume)="{ data }">
      {{ data }}
    </template>
    <template #cell(coins)="{ data }">
      {{ data }}
    </template>
    <template #cell(prices)="{ data }">
      <div :class="$style.pricesCell">
        <span>
          {{ data.orderPrice }}
        </span>
        <span :class="$style.pricesCellCurrent">
          {{ data.current }}
        </span>
      </div>
    </template>
    <template #cell(sl)="{ data }">
      {{ data }}
    </template>
    <template #cell(pnl)="{ data }">
      {{ data }}
    </template>
    <template #cell(tp)="{ data }">
      {{ data }}
    </template>
    <template #cell(date)="{ data }">
      {{ data }}
    </template>
    <template #cell(comment)>
      comment
    </template>
    <template #cell(options)>
      options
    </template>
  </Table>
</template>

<script async setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import Table from '@/components/core/table/Table.vue';
import InlineSpace from '@/components/core/inlineSpace/InlineSpace.vue';
import CurrencyLogo from '@/components/core/currencyLogo/CurrencyLogo.vue';
import { currency } from '@/api/types/currency';
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

const records = computed<CurrentOrdersTableRecord[]>(() => [
  {
    id: 1,
    data: {
      pair: currency.BTC,
      type: 'sell',
      volume: 0,
      coins: 0,
      prices: {
        orderPrice: 8000,
        current: 7000,
      },
      sl: 0,
      pnl: 0,
      tp: 0,
      date: 0,
      comment: {},
      options: {},
    },
  },
]);
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

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

.pairCell {
  display: flex;
  align-items: center;
}

.pairName {
  color: rgb(var(--color-accent-2));
  @include title2;
  font-weight: 600;
  margin-left: 10px;
}

.orderDirection {
  font-weight: 600;
  @include title3;
  &.sell {
    color: rgb(var(--color-danger));
  }
  &.buy {
    color: var(--color-success);
  }
}

.pricesCell {
  display: flex;
}

.pricesCellCurrent {
  margin-left: 5px;
  color: rgb(var(--color-accent-2));
}
</style>
