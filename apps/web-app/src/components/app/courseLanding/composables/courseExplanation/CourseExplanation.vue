<template>
  <UiImageBackgroundBlock
    :content-class="$style.courseLandingWelcomeScreen"
    :srcset="backgroundSrcset"
  >
    <UiCard
      :class="$style.card"
      state="background2"
    >
      <ImagesStack />
      <div :class="$style.infoWrapper">
        <UiTypography
          :state="['accent1', 'bold']"
          size="massive2"
          :class="$style.cardHeading"
        >
          {{ t('courseLanding.courseExplanationCard.heading') }}
        </UiTypography>
        <UiTypography
          :state="['accent2']"
          size="textLg"
          :class="$style.cardText"
        >
          {{ t('courseLanding.courseExplanationCard.cardText.ourCourse') }}
        </UiTypography>
        <UiTypography
          :state="['accent2']"
          size="textLg"
          :class="$style.cardText"
        >
          {{ t('courseLanding.courseExplanationCard.cardText.inAddition') }}
        </UiTypography>
        <UiTypography
          :state="['accent2']"
          size="textLg"
          :class="$style.cardText"
        >
          {{ t('courseLanding.courseExplanationCard.cardText.avoidMistakes.0') }}
          <UiTypography
            is-inline
            :state="['accent1']"
          >
            {{ t('courseLanding.courseExplanationCard.cardText.avoidMistakes.1') }}
          </UiTypography>
        </UiTypography>
        <UiTypography
          :state="['accent2']"
          size="textLg"
          :class="$style.cardText"
        >
          {{ t('courseLanding.courseExplanationCard.cardText.weExplain') }}
        </UiTypography>
      </div>
    </UiCard>
    <UiButton
      state="blueGradientColor"
      size="xl"
      :is-wide="false"
      :class="$style.button"
      @click="onClickSignUp"
    >
      {{ t('courseLanding.courseExplanationCard.signUpForCourse') }}
    </UiButton>
  </UiImageBackgroundBlock>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { UiButton } from '@terminal/uikit/components/button';
import { UiCard } from '@terminal/uikit/components/card';
import { UiTypography } from '@terminal/uikit/components/typography';
import { UiImageBackgroundBlock } from '@terminal/uikit/components/imageBackgroundBlock';
import { collectSrcSet } from '@terminal/uikit/utils/dom';

import ImagesStack from '@/components/app/courseLanding/composables/courseExplanation/imagesStack/ImagesStack.vue';
import { CourseExplanationEmits } from '@/components/app/courseLanding/composables/courseExplanation/index';
import BackgroundPng from './assets/courseExplanationBackground.png';
import BackgroundWebp from './assets/courseExplanationBackground.webp';

const { t } = useI18n();

const emit = defineEmits<CourseExplanationEmits>();

const backgroundSrcset = computed(() => collectSrcSet([
  BackgroundWebp,
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
