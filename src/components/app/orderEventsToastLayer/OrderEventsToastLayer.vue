<template>
  <div :class="$style.orderEventsToastLayer">
    <div :class="$style.toastWrapper">
      <OrderEventToast :order="{ pair: 1, quantity: 0.001, price: 16400 }" />
    </div>
  </div>
</template>

<script setup lang="ts">
import OrderEventToast from '@/components/core/orderEventToast/OrderEventToast.vue';
</script>

<style lang="scss" module>
.orderEventsToastLayer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 12px 20px;
  pointer-events: none;
  * {
    pointer-events: all;
  }
}

.toastWrapper {
  width: 100%;
  max-width: 344px;
}
</style>
