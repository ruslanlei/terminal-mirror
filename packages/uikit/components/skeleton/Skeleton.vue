<template>
  <div
    :class="$style.skeleton"
    :data-skeleton-id="containerId"
  />
</template>

<script setup lang="ts">
import { inject } from 'vue';
import { SkeletonContainerIdInjectionKey } from '../skeletonContainer';

const containerId = inject(SkeletonContainerIdInjectionKey);
</script>

<style lang="scss" module>
.skeleton {
  background-color: rgb(var(--color-background-2));
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
