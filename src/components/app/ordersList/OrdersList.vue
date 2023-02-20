<template>
  <div :class="$style.ordersListWrapper">
    <transition
      name="skeletonTransition"
      mode="out-in"
    >
      <ListSkeleton
        v-if="isLoading"
        :class="$style.skeleton"
      />
      <Table
        v-else
        :columns="columns"
        :records="records"
        :state="['ordersListColor', 'defaultSize']"
        :class="$style.ordersList"
        :is-rows-clickable="true"
        @record-click="onRecordClick"
      >
        <template #cell(pair)="{ data: { base } }">
          <div :class="$style.pairCell">
            <CoinLogo :coin="base" />
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
                <template v-if="listType === 'active'">
                  {{ t('ordersList.column.prices.current') }}
                </template>
                <template v-if="listType === 'closed'">
                  {{ t('ordersList.column.prices.close') }}
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
          {{ t('ordersList.column.results') }}
        </template>
        <template #cell(results)="{ data: { pnlPercent, pnl: { value: pnl, currency } } }">
          <div :class="$style.resultsWrapper">
            <div :class="$style.results">
              <Typography
                :text="t('common.percents', { value: pnlPercent })"
                :state="[
                  isPositive(pnlPercent)
                    ? 'success'
                    : 'danger',
                  'semiBold',
                ]"
                size="title2"
              />
              <Typography
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
          <i18n-t keypath="ordersList.column.pnl">
            <template #value>
              <InlineSpace />
              <Typography
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
                    <AnimatedText
                      :text="commonPnl"
                      animation-type="verticalAuto"
                    >
                      {{ commonPnl }}
                    </AnimatedText>
                  </template>
                  <template #currency>
                    <InlineSpace />
                    {{ '$' }}
                  </template>
                </i18n-t>
              </Typography>
            </template>
          </i18n-t>
        </template>
        <template #cell(pnl)="{ data: { value, currency } }">
          <Badge
            v-if="value !== null"
            :state="isPositive(value) ? 'success' : 'danger'"
            size="sm"
          >
            <AnimatedText
              :text="value"
              animation-type="verticalAuto"
            >
              {{ t('common.currencyAmount', { amount: value, currency }) }}
            </AnimatedText>
          </Badge>
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
            {{ t('ordersList.column.date') }}
          </div>
          <i18n-t
            v-if="listType === 'closed'"
            tag="span"
            keypath="ordersList.column.dateOpenClose.open"
          >
            <template #close>
              <span :class="$style.dateClose">
                {{ t('ordersList.column.dateOpenClose.close') }}
              </span>
            </template>
          </i18n-t>
        </template>
        <template #cell(date)="{ data }">
          <div
            :class="$style.date"
          >
            <template v-if="listType === 'active'">
              {{ data }}
            </template>
            <template v-if="listType === 'closed'">
              {{ data.open }}
              <InlineSpace />
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
            <Icon icon="textAlignLeft" />
          </button>
        </template>

        <template #column(options)="{ label }">
          <span>
            <template v-if="listType === 'closed'">
              {{ label }}
            </template>
          </span>
        </template>
        <template #cell(options)="{ data: { order, takeProfits } }">
          <button
            v-if="listType === 'closed'"
            type="button"
            :class="$style.commentButton"
          >
            <Icon icon="textAlignLeft" />
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
            <button
              type="button"
              :class="$style.deleteButton"
              @click="deleteOrder(order, takeProfits)"
            >
              <Icon icon="cross" />
            </button>
          </div>
        </template>

        <template #recordChildren="{ children }">
          <SubOrdersTable
            :list-type="listType"
            :orders="children"
          />
        </template>
      </Table>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import Table from '@/components/core/table/Table.vue';
import InlineSpace from '@/components/core/inlineSpace/InlineSpace.vue';
import CoinLogo from '@/components/core/coinLogo/CoinLogo.vue';
import ListSkeleton from '@/components/app/listSkeleton/ListSkeleton.vue';
import Icon from '@/components/core/icon/Icon.vue';
import { isPositive } from '@/helpers/number';
import Badge from '@/components/core/badge/Badge.vue';
import AnimatedText from '@/components/core/animatedText/AnimatedText.vue';
import { onActivated, onBeforeUnmount, onDeactivated } from 'vue';
import SubOrdersTable from '@/components/app/ordersList/subOrdersTable/SubOrdersTable.vue';
import { useOrdersList } from '@/hooks/useOrdersList';
import Typography from '@/components/app/typography/Typography.vue';
import { ActiveOrdersTableRecord, ClosedOrdersTableRecord, OrdersListProps } from './index';

const props = withDefaults(
  defineProps<OrdersListProps>(),
  {
    listType: 'active',
  },
);

const { t } = useI18n();

const {
  columns,
  orders,
  records,
  isLoading,
  getList,
  commonPnl,
  clearSubscriptions,
  deleteOrder,
  onRecordClick,
} = useOrdersList(props);

onActivated(() => {
  const showLoading = !orders.value?.length;
  getList(showLoading);
});

onDeactivated(clearSubscriptions);
onBeforeUnmount(clearSubscriptions);
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.ordersListWrapper {
  display: flex;
}

.ordersList, .skeleton {
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
}

.orderOptions {
  display: flex;
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
</style>

<style lang="scss">
@import "@/assets/styles/transitions.scss";
</style>
