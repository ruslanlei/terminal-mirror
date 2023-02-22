<template>
  <ImageBackgroundBlock
    :class="$style.terminalLandingWelcomeScreen"
    :srcset="illustrationSrcset"
    :content-class="$style.content"
  >
    test
  </ImageBackgroundBlock>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import ImageBackgroundBlock from '@/components/core/imageBackgroundBlock/ImageBackgroundBlock.vue';
import { collectSrcSet } from '@/helpers/dom';
import BackgroundPng from '@/assets/images/auth/background.png';
import BackgroundWebp from '@/assets/images/auth/background.webp';
import BackgroundAvif from '@/assets/images/auth/background.avif';

const illustrationSrcset = computed(() => collectSrcSet([
  BackgroundAvif,
  BackgroundWebp,
  BackgroundPng,
]));
</script>

<style lang="scss" module>
.terminalLandingWelcomeScreen {
  height: calc(100 * var(--vh));
}

.content {
  background-color: rgba(var(--color-background-1), 0.8);
  padding-top: 126px;
}
</style>
