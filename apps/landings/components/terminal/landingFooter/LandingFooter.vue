<template>
  <div :class="$style.landingFooter">
    <div :class="$style.container">
      <UiTypography
        size="massive4"
        :state="['accent1', 'bold']"
      >
        {{ t('terminalLanding.footer.label') }}
      </UiTypography>
      <div :class="$style.imageContainer">
        <UiPicture
          :class="$style.image"
          :srcset="walletSrcset"
        />
      </div>
      <Link
        :state="null"
        :size="null"
        :to="runtimeConfig.public.appLink"
      >
        <UiButton
          size="xl"
          state="backgroundAccent1"
        >
          {{ t('terminalLanding.footer.followButton') }}
        </UiButton>
      </Link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { UiButton } from '@terminal/uikit/components/button';
import { UiTypography } from '@terminal/uikit/components/typography';
import { UiPicture } from '@terminal/uikit/components/picture';

import WalletAvif from '@terminal/uikit/assets/images/auth/wallet.avif';
import WalletWebp from '@terminal/uikit/assets/images/auth/wallet.webp';
import WalletPng from '@terminal/uikit/assets/images/auth/wallet.png';
import { collectSrcSet } from '@terminal/uikit/utils/dom';
import { useRuntimeConfig } from '#imports';
import Link from '~/components/common/link/Link.vue';

const runtimeConfig = useRuntimeConfig();

const { t } = useI18n();

const walletSrcset = collectSrcSet([
  WalletAvif,
  WalletWebp,
  WalletPng,
]);
</script>

<style lang="scss" module>
.landingFooter {
  background: var(--color-main-gradient);
  padding: 82px 0;
  display: flex;
  justify-content: center;
}

.container {
  width: 100%;
  max-width: 1240px;
  display: grid;
  grid-template-columns: 2fr 380px 1fr;
}

.imageContainer {
  position: relative;
  margin-top: -82px;
  margin-bottom: -82px;
}

.image {
  position: absolute;
  bottom: 0;
  width: 380px;
  height: 380px;
}
</style>
