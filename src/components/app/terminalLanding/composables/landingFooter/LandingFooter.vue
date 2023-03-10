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
      <Button
        size="xl"
        state="backgroundAccent1"
      >
        {{ t('terminalLanding.footer.followButton') }}
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

import WalletPng from '@/assets/images/auth/wallet.png';
import WalletWebp from '@/assets/images/auth/wallet.webp';

const { t } = useI18n();

const walletSrcset = collectSrcSet([
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
