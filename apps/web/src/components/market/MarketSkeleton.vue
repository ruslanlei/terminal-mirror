<template>
  <UiSkeletonContainer
    :style="computedStyles"
    :class="$style.marketSkeleton"
  >
    <UiSkeleton />
    <UiSkeleton />
    <div :class="$style.sideBar">
      <UiSkeleton />
      <UiSkeleton />
    </div>
  </UiSkeletonContainer>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { UiSkeleton } from '@terminal/uikit/components/skeleton';
import { UiSkeletonContainer } from '@terminal/uikit/components/skeletonContainer';
import { size } from '@terminal/uikit/enums/sizing';

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
