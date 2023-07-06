<template>
  <div :class="$style.cardWrapper">
    <div :class="$style.logoContainer">
      <slot name="logo" />
    </div>
    <div :class="$style.card">
      <UiTypography
        :state="['background1', 'bold']"
        size="massive2sm"
      >
        {{ card.label }}
      </UiTypography>
      <UiTypography
        :class="$style.cardSubheading"
        :state="['accent2', 'medium', 'alignCenter']"
        size="text"
      >
        {{ card.description }}
      </UiTypography>
      <UiQrCode
        :size="150"
        :text="card.link"
        :class="$style.qr"
      />
      <Link
        :to="card.link"
        state="accent2"
        :class="$style.button"
      >
        {{ t('common.followLink') }}
        <UiIcon icon="arrowRight" />
      </Link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { UiIcon } from '@terminal/uikit/components/icon';
import { UiTypography } from '@terminal/uikit/components/typography';
import { UiQrCode } from '@terminal/uikit/components/qrCode';
import Link from '@/components/link/Link.vue';
import { EcosystemCardProps } from './index';

const props = defineProps<EcosystemCardProps>();

const { t } = useI18n();
</script>

<style lang="scss" module>
.cardWrapper {
  position: relative;
  display: flex;
  justify-content: center;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 65px 40px 0 40px;
  width: 270px;
  height: 415px;
  border-radius: 10px;
  background-color: rgb(var(--color-accent-1));
}

.cardWrapper {
}

.subheading {
  margin-top: 15px;
}

.cardSubheading {
  margin-top: 5px;
}

.qr {
  margin-top: 40px;
}

.button {
  margin-top: 24px;
  display: flex;
  align-items: center;
  gap: 5px;
}

.arrowIcon {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.logoContainer {
  position: absolute;
  top: 0;
  transform: translateY(-50%);
}
</style>
