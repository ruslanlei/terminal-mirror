<template>
  <div :class="$style.marketLayout">
    <OrderEventsToastLayer :class="$style.orderEventsToastLayer" />
    <div :class="$style.header">
      <MarketHeader />
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import MarketHeader from '@/components/marketHeader/MarketHeader.vue';
import OrderEventsToastLayer from '@/components/orderEventsToastLayer/OrderEventsToastLayer.vue';
</script>

<style lang="scss" module>
.marketLayout {}

.header {
  position: sticky;
  top: 0;
  background-color: rgb(var(--color-background-1));
  z-index: 100;
  height: 102px;
}

.orderEventsToastLayer {
  position: fixed;
  inset: 0;
  z-index: 6000;
}
</style>
