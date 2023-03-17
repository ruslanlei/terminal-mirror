<template>
  <div :class="$style.landingFooter">
    <div :class="$style.container">
      <Typography
        size="massive4"
        :state="['accent1', 'bold']"
      >
        {{ t('terminalLanding.footer.label') }}
      </Typography>
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
        <Button
          size="xl"
          state="backgroundAccent1"
        >
          {{ t('terminalLanding.footer.followButton') }}
        </Button>
      </Link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { collectSrcSet } from '@/helpers/dom';
import Typography from '@/components/app/typography/Typography.vue';
import Picture from '@/components/core/picture/Picture.vue';
import Button from '@/components/core/button/Button.vue';
import Link from '@/components/core/link/Link.vue';

import WalletAvif from '@/assets/images/auth/wallet.avif';
import WalletWebp from '@/assets/images/auth/wallet.webp';
import WalletPng from '@/assets/images/auth/wallet.png';

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
