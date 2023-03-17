<template>
  <div :class="$style.landingFooter">
    <div :class="$style.container">
      <Typography
        size="massive4"
        :state="['accent1', 'bold']"
      >
        {{ t('courseLanding.buyCourseBadge.heading') }}
      </Typography>
      <div :class="$style.imageContainer">
        <Picture
          :class="$style.image"
          :srcset="franklinSrcSet"
        />
      </div>
      <Button
        size="xl"
        state="backgroundAccent1"
      >
        {{ t('courseLanding.buyCourseBadge.button') }}
      </Button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { collectSrcSet } from '@/helpers/dom';
import Typography from '@/components/app/typography/Typography.vue';
import Picture from '@/components/core/picture/Picture.vue';
import Button from '@/components/core/button/Button.vue';

import BenjaminPng from './assets/benjaminFranklin.png';
import BenjaminWebp from './assets/benjaminFranklin.webp';
import BenjaminAvif from './assets/benjaminFranklin.avif';

const franklinSrcSet = collectSrcSet([
  BenjaminAvif,
  BenjaminWebp,
  BenjaminPng,
]);

const { t } = useI18n();
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
