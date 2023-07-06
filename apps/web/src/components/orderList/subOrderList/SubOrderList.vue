<template>
  <UiTable
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
        keypath="orderList.subOrder.quantity"
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
                'orderList.subOrder.quantityPercent',
                { percent: t('common.percents', { value: percent }) },
              )
            }}
          </span>
        </template>
      </i18n-t>
    </template>
    <template #cell(volume)="{ data: { value, currency, orderType } }">
      <UiTypography
        v-if="value"
        size="title2"
        :state="[
          'semiBold',
          listType === 'active' && 'accent1',
          (listType === 'closed' && orderType === 'tp') && 'success',
          (listType === 'closed' && orderType === 'sl') && 'danger',
        ]"
      >
        <i18n-t
          keypath="orderList.subOrder.volume"
          tag="span"
        >
          <template #volume>
            {{ value }}
          </template>
          <template #currency>
            <UiTypography
              :is-inline="true"
              :class="$style.volumeCurrency"
              state="medium"
            >
              {{ currency }}
            </UiTypography>
          </template>
        </i18n-t>
      </UiTypography>
      <UiTypography
        v-else
        size="title3"
        :state="['accent2', 'bold']"
      >
        {{ t('order.status.canceled') }}
      </UiTypography>
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
      <!--      TODO: return after new method on backend -->
      <!--      <button :class="$style.editButton"> -->
      <!--        {{ t('orderList.edit') }} -->
      <!--      </button> -->
    </template>
  </UiTable>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { UiTypography } from '@terminal/uikit/components/typography';
import { UiTable } from '@terminal/uikit/components/table';
import { useSubOrderList } from '@/hooks/useSubOrderList';
import {
  SubOrderListProps,
} from './index';

const props = defineProps<SubOrderListProps>();

const { t } = useI18n();

const {
  columns,
  records,
} = useSubOrderList(props);

const orderLabelMap = {
  tp: 'orderList.subOrder.type.takeProfit',
  sl: 'orderList.subOrder.type.stopLoss',
  limit: 'orderList.subOrder.masterType.limit',
};
</script>

<style lang="scss" module>
@import "@terminal/uikit/assets/styles/utils";

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
