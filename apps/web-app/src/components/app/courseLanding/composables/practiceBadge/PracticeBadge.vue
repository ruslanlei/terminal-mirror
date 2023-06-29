<template>
  <div :class="$style.practiceBadge">
    <div :class="$style.text">
      <Typography
        size="massive3"
        :state="['accent1', 'bold']"
      >
        {{ t('courseLanding.practiceBadge.heading') }}
      </Typography>
      <Typography
        size="title1"
        :state="['accent15','medium']"
        :class="$style.description"
      >
        {{ t('courseLanding.practiceBadge.description') }}
      </Typography>
    </div>
    <div :class="$style.illustrationContainer">
      <Picture
        :class="$style.illustrationPicture"
        :srcset="illustrationSrcSet"
      />
    </div>
    <div :class="$style.buttonContainer">
      <Link
        :size="null"
        :state="null"
        :to="{ name: 'index' }"
      >
        <UiButton
          size="xl"
          :state="['background2']"
          :is-wide="false"
          :class="$style.button"
        >
          {{ t('courseLanding.practiceBadge.goToTerminal') }}
        </UiButton>
      </Link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { UiButton } from '@terminal/uikit/components/button';
import Typography from '@/components/app/typography/Typography.vue';
import Picture from '@/components/core/picture/Picture.vue';
import Link from '@/components/core/link/Link.vue';
import { collectSrcSet } from '@/utils/dom';
import LaptopPng from './assets/laptop.png';
import LaptopWebp from './assets/laptop.webp';
import LaptopAvif from './assets/laptop.avif';

const illustrationSrcSet = collectSrcSet([
  LaptopAvif,
  LaptopWebp,
  LaptopPng,
]);

const { t } = useI18n();
</script>

<style lang="scss" module>
.practiceBadge {
  background: var(--color-main-gradient);
  border-radius: 15px;
  display: grid;
  grid-template-columns: 1.7fr 524px 1fr;
  align-items: center;
}

.text {
  padding: 60px 0 60px 105px;
}

.description {
  margin-top: 15px;
}

.illustrationContainer {
  position: relative;
  display: flex;
  justify-content: center;
  height: 100%;
}

.illustrationPicture {
  position: absolute;
  bottom: 0;
  max-width: 524px;
}

.buttonContainer {
  display: flex;
}

.button {
  padding: 20px 56px;
}
</style>
