<template>
  <OrdersAndStatisticsContainer>
    <template #mainTabSelect>
      <Selector
        v-model="activeTab"
        :options="mainSelectorOptions"
        :state="['simpleColor', 'lgSize']"
      />
    </template>
    <template #additionalTabSelect>
      <Transition
        name="orderAndStatisticsTabs"
        mode="out-in"
      >
        <Selector
          v-if="activeTab === 'orders'"
          v-model="ordersListType"
          :options="orderListOptions"
          :state="['secondaryColor2', 'mdSize']"
        />
        <Selector
          v-else-if="activeTab === 'statistics'"
          v-model="statisticsActiveTab"
          :options="statisticsTabs"
          :state="['secondaryColor2', 'mdSize']"
        />
      </Transition>
    </template>
    <template #content>
      <Transition
        name="orderAndStatisticsTabContent"
        mode="out-in"
      >
        <KeepAlive>
          <ActiveOrderList
            v-if="isOrdersVisible"
            :key="activeTab"
            :list-type="ordersListType"
          />
          <MarketStatistics
            v-else-if="isStatisticsVisible"
            :key="activeTab"
            v-model:active-chapter="statisticsActiveTab"
          />
        </KeepAlive>
      </Transition>
    </template>
  </OrdersAndStatisticsContainer>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import Selector from '@/components/core/selector/Selector.vue';
import OrdersList from '@/components/app/ordersList/OrdersList.vue';
import OrdersAndStatisticsContainer from '@/containers/ordersAndStatisticsContainer/OrdersAndStatisticsContainer.vue';
import MarketOrderStatistics from '@/components/app/marketOrdersStatistics/MarketOrderStatistics.vue';
import MarketStatistics from '@/components/app/marketStatistics/MarketStatistics.vue';
import ActiveOrderList from '@/components/app/activeOrderList/ActiveOrderList.vue';
import {
  MainSelectorOptions,
  MainSelectorOptionValue,
  OrdersSelectorOptions,
  StatisticsSelectorOptions,
  StatisticsSelectorOptionValue,
  OrdersSelectorOptionValue,
} from './index';

const { t } = useI18n();

const activeTab = ref<MainSelectorOptionValue>('orders');

const mainSelectorOptions = computed<MainSelectorOptions>(
  () => [
    {
      label: t('ordersAndStatistics.ordersLabel'),
      value: 'orders',
    },
    {
      label: t('ordersAndStatistics.statisticsLabel'),
      value: 'statistics',
    },
  ],
);

const ordersListType = ref<OrdersSelectorOptionValue>('active');
const orderListOptions = computed<OrdersSelectorOptions>(
  () => [
    {
      label: t('ordersAndStatistics.ordersTab.current'),
      value: 'active',
    },
    {
      label: t('ordersAndStatistics.ordersTab.closed'),
      value: 'closed',
    },
  ],
);

const statisticsActiveTab = ref<StatisticsSelectorOptionValue>('common');
const statisticsTabs = computed<StatisticsSelectorOptions>(
  () => [
    {
      label: t('ordersAndStatistics.statisticsTab.common'),
      value: 'common',
    },
    {
      label: t('ordersAndStatistics.statisticsTab.orders'),
      value: 'orders',
    },
  ],
);

const isOrdersVisible = computed(() => activeTab.value === 'orders');
const isStatisticsVisible = computed(() => activeTab.value === 'statistics');
</script>

<style lang="scss" module>
.ordersAndStatistics {
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.content {
  flex-grow: 1;
  display: flex;
  padding-top: 20px;
  & > * {
    width: 100%;
    flex-grow: 1;
  }
}

.additionalTab {}
</style>

<style lang="scss">
.orderAndStatisticsTabs {
  &-enter-active,
  &-leave-active {
    transition: opacity 160ms, transform 160ms;
  }

  &-enter-from {
    opacity: 0;
    transform: translateY(10px);
  }
  &-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
}

.orderAndStatisticsTabContent {
  &-enter-active,
  &-leave-active {
    transition: opacity 200ms, transform 200ms;
  }

  &-enter-from {
    opacity: 0;
    transform: scale(1.05);

  }
  &-leave-to {
    opacity: 0;
    transform: scale(0.95);
  }
}
</style>
