<template>
  <UiTabs
    v-model="activeTab"
    :tabs="tabs"
    :class="[$style.orderForm, isDisabled && $style.disabled]"
  >
    <template #tab(orders)>
      <OrderForm />
    </template>
    <template #tab(couples)>
      <PairSelect />
    </template>
  </UiTabs>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { storeToRefs } from 'pinia';
import { UiTabs, TabsProps } from '@terminal/uikit/components/tabs';
import OrderForm from '@/components/app/orderForm/OrderForm.vue';
import PairSelect from '@/components/app/pairSelect/PairSelect.vue';
import { useChartDataStore } from '@/stores/chartData';
import { useEmulatorStore } from '@/stores/emulator';

const { t } = useI18n();

const chartDataStore = useChartDataStore();
const {
  isFetchingCandles,
} = storeToRefs(chartDataStore);

const emulatorStore = useEmulatorStore();
const {
  isRewinding,
} = storeToRefs(emulatorStore);

const activeTab = ref('orders');

const tabs = computed<TabsProps['tabs']>(() => [
  {
    label: t('order.tab.orders'),
    value: 'orders',
  },
  {
    label: t('order.tab.pairs'),
    value: 'couples',
  },
]);

const isDisabled = computed(() => [
  isRewinding.value,
  isFetchingCandles.value,
].some(Boolean));
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.orderForm {
  height: 100%;
  border-radius: 10px;
  @include transparentOnDisabled;
}
</style>
