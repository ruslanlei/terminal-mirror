<template>
  <div :class="$style.marketLayout">
    <div :class="$style.header">
      <MarketHeader />
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import MarketHeader from '@/components/app/marketHeader/MarketHeader.vue';
</script>

<style lang="scss" module>
.marketLayout {}

.header {
  position: sticky;
  top: 0;
  background-color: rgb(var(--color-background-1));
  z-index: 3;
}
</style>
