<template>
  <transition
    name="skeletonTransition"
    mode="out-in"
  >
    <ListSkeleton v-if="isLoading" />
    <Table
      v-else
      :columns="columns"
      :records="records"
      :state="['ordersListColor', 'defaultSize']"
      :class="$style.ordersList"
    >
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
      <template #cell(volume)="{ data }">
        {{ data }}
      </template>

      <template #cell(coins)="{ data }">
        {{ data }}
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

      <template #cell(sl)="{ data: stopLossPercent }">
        <div
          v-if="stopLossPercent !== null"
          :class="$style.stopLossPercent"
        >
          {{ t('common.percents', { value: -Math.abs(stopLossPercent) }) }}
        </div>
        <div
          v-else
          :class="$style.emptyValue"
        >
          {{ '-' }}
        </div>
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
      <template #cell(pnl)="{ data }">
        {{ data }}
      </template>

      <template #cell(tp)="{ data: commonTakeProfitPercent }">
        <div
          v-if="commonTakeProfitPercent"
          :class="$style.commonTakeProfit"
        >
          {{ t('common.percents', { value: commonTakeProfitPercent }) }}
        </div>
        <div
          v-else
          :class="$style.emptyValue"
        >
          {{ '-' }}
        </div>
      </template>

      <template #cell(date)="{ data }">
        {{ data }}
      </template>
      <template #cell(comment)>
        <button
          type="button"
          :class="$style.commentButton"
        >
          <Icon icon="textAlignLeft" />
        </button>
      </template>
      <template #cell(options)>
        <div :class="$style.orderOptions">
          <button
            type="button"
            :class="$style.swapButton"
          >
            <Icon icon="swap" />
          </button>
          <button
            type="button"
            :class="$style.deleteButton"
          >
            <Icon icon="cross" />
          </button>
        </div>
      </template>
      <template #recordChildren="{ data: subOrders }">
        <SubOrdersTable :orders="subOrders" />
      </template>
    </Table>
  </transition>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import Table from '@/components/core/table/Table.vue';
import InlineSpace from '@/components/core/inlineSpace/InlineSpace.vue';
import CurrencyLogo from '@/components/core/currencyLogo/CurrencyLogo.vue';
import { useActiveOrdersList } from '@/hooks/useActiveOrdersList';
import SubOrdersTable from '@/components/app/activeOrdersList/subOrdersTable/SubOrdersTable.vue';
import ListSkeleton from '@/components/app/listSkeleton/ListSkeleton.vue';
import Icon from '@/components/core/icon/Icon.vue';

const { t } = useI18n();

const {
  columns,
  records,
  isLoading,
  getList,
} = useActiveOrdersList();

getList();
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

.emptyValue {
  color: rgb(var(--color-accent-1));
  @include title2;
  font-weight: 600;
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
    color: rgb(var(--color-success));
  }
}

.pricesCell {
  display: flex;
}

.pricesCellCurrent {
  margin-left: 5px;
  color: rgb(var(--color-accent-2));
}

.stopLossPercent {
  color: rgb(var(--color-danger-2));
  @include title2;
  font-weight: 600;
}

.commonTakeProfit {
  color: rgb(var(--color-primary-1));
  @include title2;
  font-weight: 600;
}

.commentButton {
  color: rgb(var(--color-accent-2));
}

.orderOptions {
  display: flex;
  gap: 10px;
}

.swapButton {
  color: rgb(var(--color-accent-2));
}

.deleteButton {
  color: rgb(var(--color-danger));
}
</style>

<style lang="scss">
@import "@/assets/styles/transitions.scss";
</style>
