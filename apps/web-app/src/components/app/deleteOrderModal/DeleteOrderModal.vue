<template>
  <UiModal :class="$style.deleteOrderModal">
    <Picture
      :class="$style.illustration"
      :srcset="illustrationSrcSet"
    />
    <Typography
      size="title1"
      :state="['accent1', 'bold']"
      :class="$style.label"
    >
      {{ t('deleteOrder.label') }}
    </Typography>
    <transition name="orderModalPnlTransition">
      <Typography
        v-if="isOrderFilled"
        size="title1"
        :state="['accent1', 'medium']"
        :class="$style.pnl"
      >
        <i18n-t
          tag="span"
          keypath="deleteOrder.pnl"
        >
          <template #pnl>
            <Typography
              :is-inline="true"
              :state="[
                isPositive(pnl)
                  ? 'success'
                  : 'danger'
              ]"
            >
              {{ t('common.currencyAmount', { amount: pnl, currency: orderCurrency }) }}
            </Typography>
          </template>
        </i18n-t>
      </Typography>
    </transition>
    <div :class="$style.controls">
      <UiButton
        :class="$style.control"
        state="successColor"
        size="md"
        @click="close"
      >
        {{ t('common.no') }}
      </UiButton>
      <UiButton
        :class="$style.control"
        state="dangerColor"
        size="md"
        :is-loading="isDeleting"
        @click="handleDelete"
      >
        {{ t('common.yes') }}
      </UiButton>
    </div>
  </UiModal>
</template>

<script setup lang="ts">
import {
  ref,
  computed,
  onBeforeUnmount,
} from 'vue';
import { useI18n } from 'vue-i18n';
import { UiButton } from '@terminal/uikit/components/button';
import { UiModal } from '@terminal/uikit/components/modal';
import Picture from '@/components/core/picture/Picture.vue';
import Typography from '@/components/app/typography/Typography.vue';
import { Order, TakeProfit } from '@/api/types/order';
import { reduceTakeProfitsToQuantitiesSum } from '@/helpers/math/formulas/takeProfit';
import { calculateCurrentPnl } from '@/helpers/math/formulas/pnl';
import { isPositive, subtractRight } from '@/utils/number';
import { useMarketStore } from '@/stores/market';
import { useEmulatorStore } from '@/stores/emulator';
import { compose } from '@/utils/fp';
import { cloneDeep } from '@/utils/object';
import { filter } from '@/utils/array';
import { useChartDataStore } from '@/stores/chartData';
import { collectSrcSet } from '@/utils/dom';
import { DeleteOrderModalEmits, DeleteOrderModalProps } from './index';

import IllustrationPng from './assets/illustration.png';
import IllustrationWebp from './assets/illustration.webp';

const props = defineProps<DeleteOrderModalProps>();

const emit = defineEmits<DeleteOrderModalEmits>();

const illustrationSrcSet = collectSrcSet([
  IllustrationWebp,
  IllustrationPng,
]);

const { t } = useI18n();

const marketStore = useMarketStore();
const chartDataStore = useChartDataStore();
const emulatorStore = useEmulatorStore();

const close = () => {
  emit('close');
};

const order = ref(cloneDeep(props.order));

const isOrderFilled = computed(() => order.value.status === 'filled');

const orderCurrency = computed(() => marketStore.pairsMap[order.value.pair].quote);

const takeProfits = ref<TakeProfit[]>([]);
const setTakeProfits = (updatedTakeProfits: TakeProfit[]) => {
  takeProfits.value = compose(
    cloneDeep,
    filter(
      (takeProfit: TakeProfit) => takeProfit.status === 'executed',
      updatedTakeProfits,
    ),
  )();
};

const takeProfitsQuantitySum = computed(
  () => reduceTakeProfitsToQuantitiesSum(takeProfits.value || []),
);

const pnl = computed(() => {
  const quantity = subtractRight(
    takeProfitsQuantitySum.value,
    props.order.quantity,
  );

  return calculateCurrentPnl(
    props.order.price,
    quantity,
    chartDataStore.currentPrice || 0,
  );
});

const onEmulatorEvent = (updatedOrder: Order) => {
  if (updatedOrder.id === order.value.id) {
    order.value = cloneDeep(updatedOrder);
    return;
  }

  const takeProfitIndex = takeProfits.value.findIndex(
    (takeProfit) => takeProfit.id === order.value.id,
  );

  if (takeProfitIndex !== -1) {
    takeProfits.value[takeProfitIndex] = updatedOrder as TakeProfit;
  }
};

if (props.takeProfits) {
  setTakeProfits(props.takeProfits);
}

const simulateEventSubscription = emulatorStore.subscribeSimulateEvent(onEmulatorEvent);

const isDeleting = ref(false);
const handleDelete = async () => {
  isDeleting.value = true;

  const {
    result,
  } = await marketStore.removeOrder(order.value);

  isDeleting.value = false;

  if (result) {
    close();
  }
};

onBeforeUnmount(simulateEventSubscription.unsubscribe);
</script>

<style lang="scss" module>
.deleteOrderModal {
  padding: 46px;
  position: relative;
}

.illustration {
  width: 250px;
  height: 250px;
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-15%) translateX(8%);
}

.label {
  max-width: 50%;
  font-size: 24px;
}

.pnl {
  margin-top: 20px;
  & + .controls {
    margin-top: 64px;
  }
}

.controls {
  margin-top: 104px;
  display: flex;
  gap: 20px;
}

.control {
  padding: 12px;
}
</style>

<style lang="scss">
.orderModalPnlTransition {
  &-enter-active,
  &-leave-active {
    transition: opacity 200ms, transform 200ms;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: translateY(10%);
  }
}
</style>
