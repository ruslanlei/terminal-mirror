<template>
  <ImageBackgroundBlock
    :srcset="cardData.imageSrcSet"
    :class="$style.photoCard"
    :interactive="true"
  >
    <div :class="$style.content">
      <UiTypography
        :state="['accent1', 'bold']"
        size="h2"
        :class="$style.label"
      >
        {{ cardData.label }}
      </UiTypography>
      <UiTypography
        :state="['accent2', 'medium']"
        size="textLg"
        :class="$style.description"
      >
        {{ cardData.description }}
      </UiTypography>
    </div>
  </ImageBackgroundBlock>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { UiTypography } from '@terminal/uikit/components/typography';
import ImageBackgroundBlock from '@/components/core/imageBackgroundBlock/ImageBackgroundBlock.vue';
import { PhotoCardProps } from './index';

const { t } = useI18n();
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
