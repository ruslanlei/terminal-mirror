<template>
  <UiImageBackgroundBlock
    :srcset="illustrationSrcset"
    :content-class="$style.illustrationBlock"
  >
    <UiPicture
      :src="WalletWebp"
      :srcset="walletSrcset"
      :transition-duration="800"
      :class="$style.picture"
    />
  </UiImageBackgroundBlock>
</template>

<script setup lang="ts">
import { UiImageBackgroundBlock } from '@terminal/uikit/components/imageBackgroundBlock';
import { UiPicture } from '@terminal/uikit/components/picture';

import { collectSrcSet } from '@terminal/uikit/utils/dom';
import BackgroundPng from '@/assets/images/auth/background.png';
import BackgroundWebp from '@/assets/images/auth/background.webp';
import BackgroundAvif from '@/assets/images/auth/background.avif';

import WalletAvif from '@/assets/images/auth/wallet.avif';
import WalletPng from '@/assets/images/auth/wallet.png';
import WalletWebp from '@/assets/images/auth/wallet.webp';

const illustrationSrcset = collectSrcSet([
  BackgroundAvif,
  BackgroundWebp,
  BackgroundPng,
]);

const walletSrcset = collectSrcSet([
  WalletAvif,
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

.picture {
  width: 630px;
  height: 630px;
}
</style>
