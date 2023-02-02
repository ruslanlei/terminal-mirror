<template>
  <div :class="$style.avatar">
    <Picture :src="src" />
  </div>
</template>

<script setup lang="ts">
import Picture from '@/components/core/picture/Picture.vue';
import { AvatarProps } from './index';

defineProps<AvatarProps>();
</script>

<style lang="scss" module>
.avatar {
  width: 40px;
  min-width: 40px;
  height: 40px;
  min-height: 40px;
  border-radius: 50%;
  transition: transform 160ms;
  user-select: none;
  object-fit: cover;
  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.95);
  }
}
</style>
