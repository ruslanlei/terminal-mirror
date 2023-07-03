<template>
  <div :class="$style.landingFooter">
    <div :class="$style.container">
      <UiTypography
        size="massive4"
        :state="['accent1', 'bold']"
      >
        {{ t('courseLanding.buyCourseBadge.heading') }}
      </UiTypography>
      <div :class="$style.imageContainer">
        <UiPicture
          :class="$style.image"
          :srcset="franklinSrcSet"
        />
      </div>
      <UiButton
        size="xl"
        state="backgroundAccent1"
        @click="onClickBuy"
      >
        {{ t('courseLanding.buyCourseBadge.button') }}
      </UiButton>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { UiButton } from '@terminal/uikit/components/button';
import { UiTypography } from '@terminal/uikit/components/typography';
import { UiPicture } from '@terminal/uikit/components/picture';
import { collectSrcSet } from '@terminal/uikit/utils/dom';

import { LandingFooterEmits } from './index';
import BenjaminPng from './assets/benjaminFranklin.png';
import BenjaminWebp from './assets/benjaminFranklin.webp';
import BenjaminAvif from './assets/benjaminFranklin.avif';

const emit = defineEmits<LandingFooterEmits>();

const { t } = useI18n();

const franklinSrcSet = collectSrcSet([
  BenjaminAvif,
  BenjaminWebp,
  BenjaminPng,
]);

const onClickBuy = () => {
  emit('clickBuy');
};
</script>

<style lang="scss" module>
.landingFooter {
  background: var(--color-blue-gradient);
  padding: 82px 0;
  display: flex;
  justify-content: center;
}

.container {
  width: 100%;
  max-width: 1240px;
  display: grid;
  grid-template-columns: 1.5fr 450px 1fr;
}

.imageContainer {
  position: relative;
  margin-top: -82px;
  margin-bottom: -82px;
}

.image {
  position: absolute;
  bottom: 0;
  width: 392px;
}
</style>
