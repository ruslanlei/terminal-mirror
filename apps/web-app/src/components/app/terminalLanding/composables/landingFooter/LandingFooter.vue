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
        <Picture
          :class="$style.image"
          :srcset="walletSrcset"
        />
      </div>
      <Link
        :state="null"
        :size="null"
        :to="{ name: 'index' }"
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

import Picture from '@/components/core/picture/Picture.vue';
import Link from '@/components/core/link/Link.vue';

import WalletAvif from '@/assets/images/auth/wallet.avif';
import WalletWebp from '@/assets/images/auth/wallet.webp';
import WalletPng from '@/assets/images/auth/wallet.png';
import { collectSrcSet } from '@/utils/dom';

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
