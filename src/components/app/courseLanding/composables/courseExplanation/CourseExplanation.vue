<template>
  <ImageBackgroundBlock
    :content-class="$style.courseLandingWelcomeScreen"
    :srcset="backgroundSrcset"
  >
    <Card
      :class="$style.card"
      state="background2"
    >
      <ImagesStack />
      <div :class="$style.infoWrapper">
        <Typography
          :state="['accent1', 'bold']"
          size="massive2"
          :class="$style.cardHeading"
        >
          {{ t('courseLanding.courseExplanationCard.heading') }}
        </Typography>
        <Typography
          :state="['accent1']"
          size="textLg"
          :class="$style.cardText"
        >
          {{ t('courseLanding.courseExplanationCard.cardText.ourCourse') }}
        </Typography>
        <Typography
          :state="['accent1']"
          size="textLg"
          :class="$style.cardText"
        >
          {{ t('courseLanding.courseExplanationCard.cardText.inAddition') }}
        </Typography>
        <Typography
          :state="['accent1']"
          size="textLg"
          :class="$style.cardText"
        >
          {{ t('courseLanding.courseExplanationCard.cardText.avoidMistakes') }}
        </Typography>
        <Typography
          :state="['accent1']"
          size="textLg"
          :class="$style.cardText"
        >
          {{ t('courseLanding.courseExplanationCard.cardText.weExplain') }}
        </Typography>
      </div>
    </Card>
    <Button
      state="blueGradientColor"
      size="xl"
      :is-wide="false"
      :class="$style.button"
      @click="onClickSignUp"
    >
      {{ t('courseLanding.courseExplanationCard.signUpForCourse') }}
    </Button>
  </ImageBackgroundBlock>
</template>

<script setup lang="ts">
import Typography from '@/components/app/typography/Typography.vue';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { collectSrcSet } from '@/helpers/dom';
import Button from '@/components/core/button/Button.vue';
import Card from '@/components/core/card/Card.vue';

import ImageBackgroundBlock from '@/components/core/imageBackgroundBlock/ImageBackgroundBlock.vue';
import ImagesStack from '@/components/app/courseLanding/composables/courseExplanation/imagesStack/ImagesStack.vue';
import { CourseExplanationEmits } from '@/components/app/courseLanding/composables/courseExplanation/index';
import BackgroundPng from './imagesStack/assets/courseExplanationBackground.png';

const { t } = useI18n();

const emit = defineEmits<CourseExplanationEmits>();

const backgroundSrcset = computed(() => collectSrcSet([
  BackgroundPng,
]));

const onClickSignUp = () => {
  emit('clickSignUp');
};
</script>

<style lang="scss" module>
.courseLandingWelcomeScreen {
  height: 1067px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.card {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1660px;
  padding: 60px 0;
  width: 100%;
  border-radius: 40px;
  overflow: hidden;
  gap: 50px;
}

.infoWrapper {
  max-width: 655px;
}
.cardText {
  margin-top: 28px;
}
.button {
  position: absolute;
  bottom: 125px;
  padding: 20px 60px;
}
</style>
