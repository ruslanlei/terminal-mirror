<template>
  <UiSkeletonContainer>
    <UiSkeleton
      v-for="item in itemsAmount"
      :key="item"
      :class="$style.item"
    />
  </UiSkeletonContainer>
</template>

<script setup lang="ts">
import { UiSkeleton } from '@terminal/uikit/components/skeleton';
import { UiSkeletonContainer } from '@terminal/uikit/components/skeletonContainer';
import { ListSkeletonProps } from './index';

const props = withDefaults(
  defineProps<ListSkeletonProps>(),
  {
    itemsAmount: 5,
  },
);
</script>

<style lang="scss" module>
.item {
  height: 50px;
  &:not(:first-child) {
    margin-top: 10px;
  }
}
</style>
