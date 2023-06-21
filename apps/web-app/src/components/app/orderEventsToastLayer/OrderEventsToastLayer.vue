<template>
  <div :class="$style.orderEventsToastLayer">
    <div
      v-for="order in orders"
      :id="collectOrderToastWrapperId(order.id)"
      :key="order.id"
      :class="$style.toastWrapper"
    >
      <OrderEventToast
        :id="collectOrderToastId(order.id)"
        :order="order"
        @close="removeOrder(order.id)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref } from 'vue';
import OrderEventToast from '@/components/core/orderEventToast/OrderEventToast.vue';
import { useEmulatorStore } from '@/stores/emulator';
import { Order } from '@/api/types/order';
import { collectOrderToastId, collectOrderToastWrapperId } from '@/components/app/orderEventsToastLayer/index';
import { playAnimation } from '@/utils/animation';
import { addCssProperty, getRect } from '@/utils/dom';
import { compose } from '@/utils/fp';
import { roundToDecimalPlaces } from '@/utils/number';
import { useMarketStore } from '@/stores/market';
import { awaitTimeout } from '@/utils/promise';
import { toCssPxValue, toIdSelector } from '@/utils/style';
import { findAndDelete } from '@/utils/array';

const marketStore = useMarketStore();
const emulatorStore = useEmulatorStore();

const orders = ref<Order[]>([]);

const HIDE_ANIMATION_DURATION = 300;

const hideOrder = async (orderId: Order['id']) => {
  const toastWrapper = document.getElementById(collectOrderToastWrapperId(orderId));

  if (!toastWrapper || !toastWrapper?.firstChild) return;

  const toast = toastWrapper.firstChild as HTMLElement;

  const toastRect = getRect(toast);

  compose(
    addCssProperty(['zIndex', 2]),
    addCssProperty([
      'width',
      compose(
        toCssPxValue,
        roundToDecimalPlaces(2),
      )(toastRect.width),
    ]),
    addCssProperty([
      'height',
      compose(
        toCssPxValue,
        roundToDecimalPlaces(2),
      )(toastRect.height),
    ]),
  )(toastWrapper);

  addCssProperty(['position', 'absolute'], toast);

  playAnimation({
    targets: toast,
    scale: [1, 0.5],
    translateY: [0, 50],
    easing: 'easeInOutQuart',
    duration: HIDE_ANIMATION_DURATION,
  });

  await playAnimation({
    targets: toastWrapper,
    opacity: 0,
    height: 0,
    marginTop: 0,
    easing: 'easeInOutQuart',
    duration: HIDE_ANIMATION_DURATION,
  });
};

const removeOrder = async (
  orderId: Order['id'],
) => {
  await hideOrder(orderId);

  findAndDelete(
    (iterableOrder: Order) => iterableOrder.id === orderId,
    orders.value,
  );
};

const onOrderEvent = async (order: Order) => {
  if (
    orders.value.some((iterableOrder) => iterableOrder.id === order.id)
  ) {
    await removeOrder(order.id);
    await awaitTimeout(100);
  }

  orders.value.push(order);

  await nextTick();

  const selector = compose(
    toIdSelector,
    collectOrderToastId,
  )(order.id);

  await playAnimation({
    targets: selector,
    translateY: [-90, 0],
    duration: 700,
  });
};

const simulateEventSubscription = emulatorStore.subscribeSimulateEvent(onOrderEvent);
onBeforeUnmount(() => {
  simulateEventSubscription.unsubscribe();
});

const orderCreatedSubscription = marketStore.subscribeOrderCreated(onOrderEvent);
onBeforeUnmount(() => {
  orderCreatedSubscription.unsubscribe();
});

const orderDeleteSubscription = marketStore.subscribeOrderDelete(onOrderEvent);
onBeforeUnmount(() => {
  orderDeleteSubscription.unsubscribe();
});
</script>

<style lang="scss" module>
.orderEventsToastLayer {
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px;
  pointer-events: none;
  * {
    pointer-events: all;
  }
}

.toastWrapper {
  width: 100%;
  max-width: 344px;
  position: relative;
  z-index: 4;
  display: flex;
  align-items: center;
  margin-top: 10px;
  & > * {
    width: 100%;
  }
}
</style>
