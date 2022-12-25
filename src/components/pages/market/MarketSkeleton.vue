<template>
  <div
    :style="computedStyles"
    :class="$style.marketSkeleton"
  >
    <Skeleton />
    <Skeleton />
    <div :class="$style.sideBar">
      <Skeleton />
      <Skeleton />
    </div>
  </div>
</template>

<script setup lang="ts">
import Skeleton from '@/components/core/skeleton/Skeleton.vue';
import { computed } from 'vue';
import { size } from '@/enums/sizing';

const computedStyles = computed(() => ({
  height: `calc(100 * var(--vh) - ${size.HEADER}px)`,
}));
</script>

<style lang="scss" module>
.marketSkeleton {
  height: 100vh;
  display: grid;
  grid-template-columns: 50px 1fr 320px;
  gap: 20px;
  padding: 0 20px 20px 20px;
  opacity: 0.4;
}

.sideBar {
  display: grid;
  grid-template-rows: 1fr 152px;
  gap: 20px;
}
</style>
