<template>
  <div :class="[$style.skeleton, skeletonClass.DEFAULT]" />
</template>

<script setup lang="ts">
import { skeletonClass } from './index';
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
