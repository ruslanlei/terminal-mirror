<template>
  <Table
    :columns="columns"
    :records="records"
    :is-head-visible="false"
    :state="['smSize', 'subOrdersColor']"
  >
    <template #cell(type)="{ data: { value: type, label } }">
      <div :class="[$style.orderType, $style[type]]">
        {{ label }}
      </div>
    </template>
    <template #cell(masterType)="{ data: masterType }">
      {{ masterType }}
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
            {{ percent }}
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
import { computed, ref } from 'vue';
import Table from '@/components/core/table/Table.vue';
import { useI18n } from 'vue-i18n';
import { humanizeDate } from '@/utils/date';
import { compose } from '@/utils/fp';
import { roundToDecimalPoint } from '@/math/float';
import { valueToPercents } from '@/math/helpers/percents';
import {
  ActiveSubOrdersColumn,
  ActiveSubOrdersRecord,
  ActiveSubOrdersTableProps,
  SubOrderTableItem,
} from './index';

const props = defineProps<ActiveSubOrdersTableProps>();

const { t } = useI18n();

const columns = ref<ActiveSubOrdersColumn[]>([
  {
    label: '',
    slug: 'type',
    size: 1,
    align: 'center',
  },
  {
    label: '',
    slug: 'masterType',
    size: 1,
    align: 'center',
  },
  {
    label: '',
    slug: 'quantity',
    size: 2,
    align: 'center',
  },
  {
    label: '',
    slug: 'volume',
    size: 1.6,
    align: 'center',
  },
  {
    label: '',
    slug: 'date',
    size: 1.6,
    align: 'center',
  },
  {
    label: '',
    slug: 'options',
    size: 1.6,
    align: 'center',
  },
]);

const records = computed<ActiveSubOrdersRecord[]>(
  () => props.orders.map((order: SubOrderTableItem) => {
    const label = ({
      tp: t('ordersList.subOrder.type.takeProfit', { index: order.orderIndex }),
      sl: t('ordersList.subOrder.type.stopLoss'),
    }[order.order_type]);

    const masterType = ({
      limit: t('ordersList.subOrder.masterType.limit'),
    }.limit);

    const percentOfMasterQuantity = compose(
      roundToDecimalPoint(2),
      valueToPercents,
    )(order.masterData.quantity, order.quantity);

    const percentOfMasterQuantityLabel = t(
      'ordersList.subOrder.quantityPercent',
      {
        percent: t(
          'common.percents',
          {
            value: percentOfMasterQuantity,
          },
        ),
      },
    );

    const date = humanizeDate(order.created);

    return {
      id: order.id,
      data: {
        type: {
          value: order.order_type,
          label,
        },
        masterType,
        quantity: {
          value: order.quantity,
          percent: percentOfMasterQuantityLabel,
        },
        volume: {
          value: order.price,
          currency: order.pairData.quote,
        },
        date,
        options: {},
      },
    };
  }),
);
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
