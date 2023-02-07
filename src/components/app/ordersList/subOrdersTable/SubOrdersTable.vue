<template>
  <Table
    :columns="columns"
    :records="records"
    :is-head-visible="false"
    :state="['smSize', 'subOrdersColor']"
  >
    <template #cell(type)="{ data: { value: type, index } }">
      <div :class="[$style.orderType, $style[type]]">
        {{ t(orderLabelMap[type], { index }) }}
      </div>
    </template>
    <template #cell(masterType)="{ data: masterType }">
      {{ t(orderLabelMap[masterType]) }}
    </template>
    <template #cell(quantity)="{ data: { value, percent } }">
      <i18n-t
        keypath="ordersList.subOrder.quantity"
        tag="div"
        :class="$style.quantity"
      >
        <template #coins>
          {{ value }}
        </template>
        <template #percentage>
          <span :class="$style.quantityPercent">
            {{
              t(
                'ordersList.subOrder.quantityPercent',
                { percent: t('common.percents', { value: percent }) },
              )
            }}
          </span>
        </template>
      </i18n-t>
    </template>
    <template #cell(volume)="{ data: { value, currency } }">
      <i18n-t
        keypath="ordersList.subOrder.volume"
        tag="div"
        :class="$style.volume"
      >
        <template #volume>
          {{ value }}
        </template>
        <template #currency>
          <span :class="$style.volumeCurrency">
            {{ currency }}
          </span>
        </template>
      </i18n-t>
    </template>
    <template #cell(date)="{ data: date }">
      <div :class="$style.date">
        {{ date }}
      </div>
    </template>
    <template
      v-if="listType === 'active'"
      #cell(options)
    >
      <button :class="$style.editButton">
        {{ t('ordersList.edit') }}
      </button>
    </template>
  </Table>
</template>

<script setup lang="ts">
import Table from '@/components/core/table/Table.vue';
import { useI18n } from 'vue-i18n';
import { useSubOrdersList } from '@/hooks/useSubOrdersList';
import {
  ActiveSubOrdersTableProps,
} from './index';

const props = defineProps<ActiveSubOrdersTableProps>();

const { t } = useI18n();

const {
  columns,
  records,
} = useSubOrdersList(props);

const orderLabelMap = {
  tp: 'ordersList.subOrder.type.takeProfit',
  sl: 'ordersList.subOrder.type.stopLoss',
  limit: 'ordersList.subOrder.masterType.limit',
};
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.orderType {
  @include title2;
  font-weight: 600;
  &.tp {
    color: rgb(var(--color-primary-1));
  }
  &.sl {
    color: rgb(var(--color-danger-2));
  }
}

.quantity {
  @include title2;
  font-weight: 600;
  color: rgb(var(--color-accent-1));
}

.quantityPercent {
  color: rgb(var(--color-accent-2));
}

.volume {
  @include title2;
  font-weight: 600;
  color: rgb(var(--color-accent-1));
}

.volumeCurrency {
  color: rgb(var(--color-accent-2));
  font-weight: 500;
}

.date {
  @include title2;
  font-weight: 600;
  color: rgb(var(--color-accent-1));
}

.editButton {
  color: rgb(var(--color-accent-2));
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
}
</style>
