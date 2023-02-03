<template>
  <div :class="$style.ordersList">
    <div :class="$style.header">
      <Selector
        v-model="activeTab"
        :options="mainSelectorOptions"
        :state="['simpleColor', 'lgSize']"
      />
      <div :class="$style.additionalTab">
        <transition
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
        </transition>
      </div>
    </div>
    <div :class="$style.content">
      <transition
        name="orderAndStatisticsTabContent"
        mode="out-in"
      >
        <KeepAlive>
          <OrdersList
            v-if="activeTab === 'orders' && ordersListType === 'current'"
            list-type="active"
            :class="$style.ordersList"
          />
        </KeepAlive>
      </transition>
      <transition
        name="orderAndStatisticsTabContent"
        mode="out-in"
      >
        <KeepAlive>
          <OrdersList
            v-if="activeTab === 'orders' && ordersListType === 'closed'"
            list-type="closed"
            :class="$style.ordersList"
          />
        </KeepAlive>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import Selector from '@/components/core/selector/Selector.vue';
import OrdersList from '@/components/app/ordersList/OrdersList.vue';
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

const mainSelectorOptions = computed<MainSelectorOptions>(() => [
  {
    label: t('ordersAndStatistics.ordersLabel'),
    value: 'orders',
  },
  {
    label: t('ordersAndStatistics.statisticsLabel'),
    value: 'statistics',
  },
]);

const ordersListType = ref<OrdersSelectorOptionValue>('current');
const orderListOptions = computed<OrdersSelectorOptions>(() => [
  {
    label: t('ordersAndStatistics.ordersTab.current'),
    value: 'current',
  },
  {
    label: t('ordersAndStatistics.ordersTab.closed'),
    value: 'closed',
  },
]);

const statisticsActiveTab = ref<StatisticsSelectorOptionValue>('common');
const statisticsTabs = computed<StatisticsSelectorOptions>(() => [
  {
    label: t('ordersAndStatistics.statisticsTab.common'),
    value: 'common',
  },
  {
    label: t('ordersAndStatistics.statisticsTab.orders'),
    value: 'orders',
  },
]);
</script>

<style lang="scss" module>
.ordersList {}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.additionalTab {}

.ordersList {
  margin-top: 20px;
}
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
    transition: opacity 160ms, transform 160ms;
  }

  &-enter-from {
    opacity: 0;
  }
  &-leave-to {
    opacity: 0;
  }
}
</style>
