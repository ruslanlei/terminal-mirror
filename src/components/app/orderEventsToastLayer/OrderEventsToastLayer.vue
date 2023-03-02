<template>
  <div :class="$style.orderEventsToastLayer">
    <div
      v-for="order in orders"
      :key="order.id"
      :class="$style.toastWrapper"
    >
      <OrderEventToast
        :order="order"
        @close="removeOrder(order.id)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import OrderEventToast from '@/components/core/orderEventToast/OrderEventToast.vue';
import { useEmulatorStore } from '@/stores/emulator';
import { onBeforeUnmount, ref } from 'vue';
import { Order } from '@/api/types/order';
import { findAndDelete } from '@/helpers/array';

const emulatorStore = useEmulatorStore();

const orders = ref<Order[]>([]);

const removeOrder = (
  orderId: Order['id'],
) => {
  findAndDelete(
    (iterableOrder: Order) => iterableOrder.id === orderId,
    orders.value,
  );
};

const unsubscribeSimulateEvent = emulatorStore.subscribeSimulateEvent((order: Order) => {
  orders.value.push(order);
});

onBeforeUnmount(unsubscribeSimulateEvent);
</script>

<style lang="scss" module>
.orderEventsToastLayer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 12px 20px;
  pointer-events: none;
  gap: 20px;
  * {
    pointer-events: all;
  }
}

.toastWrapper {
  width: 100%;
  max-width: 344px;
}
</style>
