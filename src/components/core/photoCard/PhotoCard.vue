<template>
  <ImageBackgroundBlock
    :srcset="cardData.imageSrcSet"
    :class="$style.photoCard"
  >
    photoCard
  </ImageBackgroundBlock>
</template>

<script setup lang="ts">
import ImageBackgroundBlock from '@/components/core/imageBackgroundBlock/ImageBackgroundBlock.vue';
import { PhotoCardProps } from './index';

defineProps<PhotoCardProps>();
</script>

<style lang="scss" module>
.photoCard {
  border-radius: 10px;
}
</style>
