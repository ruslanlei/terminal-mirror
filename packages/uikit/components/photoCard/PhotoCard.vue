<template>
  <ImageBackgroundBlock
    :srcset="cardData.imageSrcSet"
    :class="$style.photoCard"
    :interactive="true"
  >
    <div :class="$style.content">
      <Typography
        :state="['accent1', 'bold']"
        size="h2"
        :class="$style.label"
      >
        {{ cardData.label }}
      </Typography>
      <Typography
        :state="['accent2', 'medium']"
        size="textLg"
        :class="$style.description"
      >
        {{ cardData.description }}
      </Typography>
    </div>
  </ImageBackgroundBlock>
</template>

<script setup lang="ts">
import ImageBackgroundBlock from '../imageBackgroundBlock/ImageBackgroundBlock.vue';
import Typography from '../typography/Typography.vue';
import { PhotoCardProps } from './index';

defineProps<PhotoCardProps>();
</script>

<style lang="scss" module>
.photoCard {
  border-radius: 10px;
  box-sizing: border-box;
}
.description {
  line-height: 29px;
  margin-top: 15px;
}
.content {
  padding: 40px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>
