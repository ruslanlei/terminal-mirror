<template>
  <div
    :class="[$style.wrapper, interactive && $style.interactive]"
  >
    <div :class="$style.backgroundImageContainer">
      <slot name="picture">
        <Picture
          :class="$style.backgroundImage"
          :src="src"
          :srcset="srcset"
          alt=""
          :transition-duration="1400"
        />
      </slot>
    </div>
    <div :class="[contentClass, $style.content]">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import Picture from '@/components/picture/Picture.vue';
import { ImageBackgroundBlockProps } from './index';

defineProps<ImageBackgroundBlockProps>();
</script>

<style lang="scss" module>
.wrapper {
  height: 100%;
  position: relative;
  overflow: hidden;
  display: block;
  &.interactive {
    .backgroundImageContainer {
      transition: transform 200ms;
    }
    &:hover {
      .backgroundImageContainer {
        transform: scale(1.2);
      }
    }
  }
}

.backgroundImageContainer {
  height: 100%;
  width: 100%;
  position: absolute;
  inset: 0;
}

.backgroundImage {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.content {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 2;
}
</style>
