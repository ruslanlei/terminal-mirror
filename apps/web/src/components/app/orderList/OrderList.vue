<template>
  <UiTable
    :columns="columns"
    :records="records"
    :state="['orderListColor', 'defaultSize']"
    :class="$style.orderList"
    :is-rows-clickable="true"
    @record-click="onRecordClick"
  >
    <template #cell(pair)="{ data: { base }, record }">
      <div :class="$style.pairCell">
        <UiCoinLogo :coin="base" />
        <span :class="$style.pairName">
          {{ base }}
        </span>
      </div>
    </template>

    <template #cell(type)="{ data: orderDirection }">
      <span :class="[$style.orderDirection, $style[orderDirection]]">
        {{ t(`order.direction.${ ({ sell: 'short', buy: 'long' }[orderDirection]) }`) }}
      </span>
    </template>

    <template #column(volume)>
      <i18n-t keypath="orderList.column.volume">
        <template #currencyName>
          <UiInlineSpace />
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
      <i18n-t keypath="orderList.column.prices.order">
        <template #current>
          <span :class="$style.priceLabelCurrent">
            <template v-if="listType === 'active'">
              {{ t('orderList.column.prices.current') }}
            </template>
            <template v-if="listType === 'closed'">
              {{ t('orderList.column.prices.close') }}
            </template>
          </span>
        </template>
      </i18n-t>
    </template>
    <template #cell(prices)="{ data }">
      <div :class="$style.pricesCell">
        <span>
          {{ data.order }}
        </span>
        <span :class="$style.pricesCellCurrent">
          {{ '/' }}
          <template v-if="listType === 'active'">
            <template v-if="data.current">
              {{ data.current }}
            </template>
            <template v-else>
              {{ '-' }}
            </template>
          </template>
          <template v-if="listType === 'closed'">
            {{ data.close }}
          </template>
        </span>
      </div>
    </template>

    <template #column(results)>
      {{ t('orderList.column.results') }}
    </template>
    <template
      #cell(results)="{
        data: {
          pnlPercent,
          pnl: { value: pnl, currency },
          isPositive,
          isCancelled,
          orderStatus,
        }
      }"
    >
      <div :class="$style.resultsWrapper">
        <div :class="$style.results">
          <UiTypography
            :state="[
              (isPositive && !isCancelled)
                ? 'success'
                : 'danger',
              'semiBold',
            ]"
            size="title2"
          >
            <template v-if="isCancelled">
              {{ t(`order.status.${orderStatus}`) }}
            </template>
            <template v-else>
              {{
                t('common.percents', {
                  value: isPositive
                    ? toPositiveNumberString(pnlPercent)
                    : toNegative(pnlPercent)
                })
              }}
            </template>
          </UiTypography>
          <UiTypography
            v-if="!isCancelled"
            size="title4"
            :text="t('common.currencyAmount', { amount: pnl, currency })"
            :state="['accent2']"
          />
        </div>
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
      <i18n-t keypath="orderList.column.pnl">
        <template #value>
          <UiInlineSpace />
          <UiTypography
            :state="[
              'semiBold',
              isPositive(commonPnl)
                ? 'success'
                : 'danger',
            ]"
          >
            <i18n-t
              :class="$style.pnlColumnValue"
              tag="span"
              keypath="common.currencyAmount"
            >
              <template #amount>
                <UiAnimatedText
                  :text="commonPnl"
                  animation-type="verticalAuto"
                >
                  {{ commonPnl }}
                </UiAnimatedText>
              </template>
              <template #currency>
                <UiInlineSpace />
                {{ '$' }}
              </template>
            </i18n-t>
          </UiTypography>
        </template>
      </i18n-t>
    </template>
    <template #cell(pnl)="{ data: { value, currency } }">
      <UiBadge
        v-if="value !== null"
        :state="isPositive(value) ? 'success' : 'danger'"
        size="sm"
      >
        <UiAnimatedText
          :text="value"
          animation-type="verticalAuto"
        >
          {{ t('common.currencyAmount', { amount: value, currency }) }}
        </UiAnimatedText>
      </UiBadge>
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

    <template #column(date)>
      <div v-if="listType === 'active'">
        {{ t('orderList.column.date') }}
      </div>
      <i18n-t
        v-if="listType === 'closed'"
        tag="span"
        keypath="orderList.column.dateOpenClose.open"
      >
        <template #close>
          <span :class="$style.dateClose">
            {{ t('orderList.column.dateOpenClose.close') }}
          </span>
        </template>
      </i18n-t>
    </template>
    <template #cell(date)="{ data }">
      <div :class="$style.date">
        <template v-if="listType === 'active'">
          {{ data }}
        </template>
        <template v-if="listType === 'closed'">
          {{ data.open }}
          <span :class="$style.dateClose">
            {{ data.close }}
          </span>
        </template>
      </div>
    </template>

    <template #cell(comment)>
      <button
        type="button"
        :class="$style.commentButton"
      >
        <UiIcon icon="textAlignLeft" />
      </button>
    </template>

    <template #column(options)="{ label }">
      <span>
        <template v-if="listType === 'closed'">
          {{ label }}
        </template>
      </span>
    </template>
    <template #cell(options)="{ data: { order } }">
      <button
        v-if="listType === 'closed'"
        type="button"
        :class="$style.commentButton"
      >
        <UiIcon icon="textAlignLeft" />
      </button>
      <div
        v-if="listType === 'active'"
        :class="$style.orderOptions"
      >
        <!--          <button-->
        <!--            type="button"-->
        <!--            :class="$style.swapButton"-->
        <!--          >-->
        <!--            <Icon icon="swap" />-->
        <!--          </button>-->
        <CloseOrderButton @delete="deleteOrder(order)" />
      </div>
    </template>

    <template #recordChildren="{ children }">
      <SubOrderList
        :list-type="listType"
        :orders="children"
      />
    </template>

    <template #placeholder>
      <OrderListPlaceholder :class="$style.placeHolder" />
    </template>
  </UiTable>
</template>

<script setup lang="ts">
import {
  computed,
  toRefs, watch,
} from 'vue';
import { useI18n } from 'vue-i18n';
import { UiBadge } from '@terminal/uikit/components/badge';
import { UiAnimatedText } from '@terminal/uikit/components/animatedText';
import { UiTable } from '@terminal/uikit/components/table';
import { UiInlineSpace } from '@terminal/uikit/components/inlineSpace';
import { UiCoinLogo } from '@terminal/uikit/components/coinLogo';
import { UiIcon } from '@terminal/uikit/components/icon';
import { UiTypography } from '@terminal/uikit/components/typography';
import SubOrderList from '@/components/app/orderList/subOrderList/SubOrderList.vue';
import OrderListPlaceholder from '@/components/app/orderList/OrderListPlaceholder.vue';
import CloseOrderButton from '@/components/app/closeOrderButton/CloseOrderButton.vue';
import { toPositiveNumberString } from '@terminal/uikit/utils/style';
import { createEmptyRecord } from '@terminal/uikit/components/table/helpers';
import { compose } from '@terminal/common/utils/fp';
import {
  add, ceil, divideRight,
  isPositive, multiply,
  roundToDecimalPlaces, subtract, toNegative,
} from '@terminal/common/utils/number';
import {
  MasterOrder,
  Order,
  StopLoss,
  TakeProfit,
} from '@terminal/common/types/order';
import {
  collectActiveOrderRecord,
  collectClosedOrderRecord,
} from '@/components/app/orderList/collectTableRecord';
import { useChartDataStore } from '@/stores/chartData';
import { useLocalValue } from '@terminal/uikit/hooks/useLocalValue';
import { getLength, sort } from '@terminal/common/utils/array';
import { isDateBefore } from '@terminal/common/utils/date';
import {
  ActiveOrdersTableRecord,
  ClosedOrdersTableRecord,
  OrderListProps,
  OrderListEmits,
} from './index';

const props = withDefaults(
  defineProps<OrderListProps>(),
  {
    listType: 'active',
  },
);
const {
  listType,
  orders,
  pairsMap,
} = toRefs(props);

const emit = defineEmits<OrderListEmits>();

const { t } = useI18n();

const chartDataStore = useChartDataStore();

const columns = computed(() => [
  {
    label: t('orderList.column.pair'),
    slug: 'pair',
    size: 1,
  },
  {
    label: t('orderList.column.type'),
    slug: 'type',
    size: 0.7,
  },
  {
    label: '',
    slug: 'volume',
    size: 1.1,
  },
  {
    label: t('orderList.column.coins'),
    slug: 'coins',
    size: 1,
  },
  {
    label: '',
    slug: 'prices',
    size: 1.4,
  },
  ...(props.listType === 'active' ? [
    {
      label: t('orderList.column.sl'),
      slug: 'sl',
      size: 0.7,
      align: 'center',
    },
    {
      label: '',
      slug: 'pnl',
      size: 1,
      align: 'center',
    },
    {
      label: t('orderList.column.tp'),
      slug: 'tp',
      size: 0.7,
      align: 'center',
    },
  ] : []),
  ...(props.listType === 'closed' ? [
    {
      label: '',
      slug: 'results',
      size: 1,
    },
  ] : []),
  {
    label: '',
    slug: 'date',
    size: 1,
  },
  ...(props.listType === 'active' ? [
    {
      label: t('orderList.column.comment'),
      slug: 'comment',
      size: 0.7,
      align: 'center',
    },
  ] : []),
  {
    label: t('orderList.column.parameters'),
    slug: 'options',
    size: 0.7,
    align: 'center',
    isClickable: true,
  },
]);

interface GroupedOrder {
  order: MasterOrder,
  takeProfits: TakeProfit[],
  stopLoss: StopLoss | undefined,
}

const groupOrders = (
  orders: Order[],
): GroupedOrder[] => (
  orders.filter((order: Order) => order.order_type === 'limit') as MasterOrder[]
)
  .map((order: MasterOrder) => {
    const relatedTakeProfits = (
      orders.filter(
        (targetOrder: Order) => targetOrder.order_type === 'tp' && targetOrder.master === order.id,
      ) as TakeProfit[]
    ).sort((orderA: TakeProfit, orderB: TakeProfit) => orderB.price - orderA.price);

    const relatedStopLoss = orders.filter(
      (targetOrder: Order) => targetOrder.order_type === 'sl' && targetOrder.master === order.id,
    )[0] as StopLoss | undefined;

    return {
      order,
      takeProfits: relatedTakeProfits,
      stopLoss: relatedStopLoss,
    };
  });

const mapOrdersToActiveOrderTableRecords = (
  orders: GroupedOrder[],
) => orders
  .map(({ order, takeProfits, stopLoss }: GroupedOrder) => {
    const pairData = pairsMap.value?.[order.pair];

    if (!pairData) {
      throw new Error('[Orders list]: pair data not found');
    }

    return compose(
      collectActiveOrderRecord({
        pairData,
        pairPrice: chartDataStore.getCurrentPriceByPairId(pairData.id),
        takeProfits,
        stopLoss,
        order,
      }),
      createEmptyRecord,
    )(order.id);
  });

const mapOrdersToClosedOrderTableRecords = (
  orders: GroupedOrder[],
) => orders
  .map(({ order, takeProfits, stopLoss }: GroupedOrder) => {
    const pairData = pairsMap.value?.[order.pair];

    if (!pairData) {
      throw new Error('[Orders list]: pair data not found');
    }

    return compose(
      collectClosedOrderRecord({
        pairData,
        takeProfits,
        stopLoss,
        order,
        pairPrice: 0,
      }),
      createEmptyRecord,
    )(order.id);
  });

const allRecords = computed<GroupedOrder[]>(() => (
  compose(
    (listType.value === 'active'
      ? mapOrdersToActiveOrderTableRecords
      : mapOrdersToClosedOrderTableRecords),
    sort((
      orderA: GroupedOrder,
      orderB: GroupedOrder,
    ) => (
      isDateBefore(
        orderA.order.modified,
        orderB.order?.modified,
      ) ? 1 : -1
    )),
    groupOrders,
  )(orders.value) as GroupedOrder[]
));

/* <--
FIXME: all logic that controls pagination
  should no be here, but for now its
  easier to place here, bc raw order
  list on the level above is ungrouped.
  Move this logic to component above after
  backend update.
*/
const page = useLocalValue<number>(props, emit, 'page');

const perPage = useLocalValue<number>(props, emit, 'perPage');

const totalPages = useLocalValue<number>(props, emit, 'totalPages');

watch(allRecords, () => {
  totalPages.value = compose(
    ceil,
    divideRight(perPage.value),
    getLength,
  )(allRecords.value);
}, { immediate: true });

const records = computed(() => {
  const lastElementIndex = multiply(perPage.value, page.value);
  const firstElementIndex = subtract(lastElementIndex, perPage.value);

  return allRecords.value.slice(firstElementIndex, lastElementIndex);
});
/* --> */

const calculateCommonPnl = (
  records: ActiveOrdersTableRecord[],
) => records.reduce((
  commonPnl: number,
  record: ActiveOrdersTableRecord,
) => compose(
  roundToDecimalPlaces(2),
  add,
)(commonPnl, (record.data.pnl.value || 0)), 0);

const commonPnl = computed(() => (
  listType.value === 'active'
    ? calculateCommonPnl(records.value as ActiveOrdersTableRecord[])
    : 0
));

const deleteOrder = (
  order: Order,
) => emit('deleteOrder', order);

const onRecordClick = (
  record: ActiveOrdersTableRecord | ClosedOrdersTableRecord,
) => emit('recordClick', record);
</script>

<style lang="scss" module>
@import "@terminal/uikit/assets/styles/utils";

.orderList {
  width: 100%;
  flex-grow: 1;
}

.quoteCurrency {
  color: rgb(var(--color-accent-2));
}

.priceLabelCurrent {
  color: rgb(var(--color-accent-2));
}

.pnlColumnValue {
  font-weight: 600;
  display: flex;
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

.resultsWrapper {
  max-height: 20px;
  display: flex;
  align-items: center;
}
.results {}

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

.date {
  color: rgb(var(--color-accent-1));
  @include title2;
  font-weight: 600 !important;
  display: flex;
  gap: 10px;
}

.orderOptions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.swapButton {
  color: rgb(var(--color-accent-2));
}

.dateClose {
  color: rgb(var(--color-accent-2));
}

.deleteButton {
  color: rgb(var(--color-danger));
}

.placeHolder {
  width: 100%;
}
</style>

<style lang="scss">
@import "@terminal/uikit/assets/styles/transitions.scss";
</style>
