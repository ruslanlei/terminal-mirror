<template>
  <div
    :class="$style.wrapper"
  >
    <Picture
      :class="$style.backgroundImage"
      :src="src"
      :srcset="srcset"
      alt=""
      :transition-duration="1400"
    />
    <div :class="[contentClass, $style.content]">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import Picture from '@/components/core/picture/Picture.vue';
import { ImageBackgroundBlockProps } from './index';

defineProps<ImageBackgroundBlockProps>();
</script>

<style lang="scss" module>
.wrapper {
  height: 100%;
  position: relative;
  overflow: hidden;
  display: block;
}

.backgroundImage {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.content {
  position: absolute;
  inset: 0;
}
</style>
