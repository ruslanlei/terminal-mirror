<template>
  <ImageBackgroundBlock
    :srcset="illustrationSrcset"
    :content-class="$style.illustrationBlock"
  >
    <Picture
      :src="WalletWebp"
      :srcset="walletSrcset"
      :transition-duration="800"
    />
  </ImageBackgroundBlock>
</template>

<script setup lang="ts">
import ImageBackgroundBlock from '@/components/core/imageBackgroundBlock/ImageBackgroundBlock.vue';
import Picture from '@/components/core/picture/Picture.vue';
import { collectSrcSet } from '@/helpers/dom';

import BackgroundPng from '@/assets/images/auth/background.png';
import BackgroundWebp from '@/assets/images/auth/background.webp';
import BackgroundAvif from '@/assets/images/auth/background.avif';

import WalletPng from '@/assets/images/auth/wallet.png';
import WalletWebp from '@/assets/images/auth/wallet.webp';

const illustrationSrcset = collectSrcSet([
  BackgroundAvif,
  BackgroundWebp,
  BackgroundPng,
]);

const walletSrcset = collectSrcSet([
  WalletWebp,
  WalletPng,
]);
</script>

<style lang="scss" module>
.illustrationBlock {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
