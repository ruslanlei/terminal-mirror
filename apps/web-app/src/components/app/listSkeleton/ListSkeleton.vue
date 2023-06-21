<template>
  <SkeletonContainer>
    <Skeleton
      v-for="item in itemsAmount"
      :key="item"
      :class="$style.item"
    />
  </SkeletonContainer>
</template>

<script setup lang="ts">
import SkeletonContainer from '@/components/core/skeletonContainer/SkeletonContainer.vue';
import Skeleton from '@/components/core/skeleton/Skeleton.vue';
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
