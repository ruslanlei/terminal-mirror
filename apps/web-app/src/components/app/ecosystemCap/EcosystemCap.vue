<template>
  <UiImageBackgroundBlock
    :content-class="$style.ecoSystemCard"
  >
    <template #picture>
      <SpaceBackground />
    </template>
    <div :class="$style.ecoSystemCardContent">
      <UiTypography
        :state="['accent1', 'bold', 'uppercase']"
        size="massive1"
      >
        {{ t('ecosystem.label') }}
      </UiTypography>
      <UiTypography
        :state="['accent1', 'medium']"
        size="h1"
        :class="$style.subheading"
      >
        {{ t('ecosystem.description') }}
      </UiTypography>
      <div :class="$style.cardsWrapper">
        <div :class="$style.cardWrapper">
          <EcosystemCard :card="terminalCard">
            <template #logo>
              <UiLogo
                type="slim"
                :size="null"
                state="xlThickBorder"
              />
            </template>
          </EcosystemCard>
        </div>
        <div :class="$style.cardWrapper">
          <EcosystemCard :card="courseCard">
            <template #logo>
              <UiCourseLogo
                type="slim"
                state="xlThickBorder"
                :size="null"
              />
            </template>
          </EcosystemCard>
        </div>
      </div>
    </div>
  </UiImageBackgroundBlock>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { UiCourseLogo } from '@terminal/uikit/components/courseLogo';
import { UiImageBackgroundBlock } from '@terminal/uikit/components/imageBackgroundBlock';
import { UiLogo } from '@terminal/uikit/components/logo';
import { UiTypography } from '@terminal/uikit/components/typography';
import EcosystemCard from '@/components/app/ecosystemCap/ecosystemCard/EcosystemCard.vue';
import { IEcosystemCard } from '@/components/app/ecosystemCap/ecosystemCard';
import SpaceBackground from '@/components/app/ecosystemCap/spaceBackground/SpaceBackground.vue';
import { getUrlForRelativePath } from '@/utils/window';
import { EcosystemCapProps } from './index';

const { t } = useI18n();

const props = withDefaults(
  defineProps<EcosystemCapProps>(),
  {
    state: 'purple',
  },
);

const terminalCard = computed<IEcosystemCard>(() => ({
  label: t('ecosystem.terminal.label'),
  description: t('ecosystem.terminal.description'),
  link: getUrlForRelativePath('/about/terminal'),
}));

const courseCard = computed<IEcosystemCard>(() => ({
  label: t('ecosystem.about.label'),
  description: t('ecosystem.about.description'),
  link: getUrlForRelativePath('/about/about'),
}));
</script>

<style lang="scss" module>
.ecoSystemCard {
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    pointer-events: none;
    height: calc(40 * var(--vh));
    width: 100%;
    background:
      linear-gradient(
        to bottom,
        rgb(var(--color-background-1)),
        rgba(var(--color-background-1), 0)
      );
  }
  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    pointer-events: none;
    height: calc(40 * var(--vh));
    width: 100%;
    background:
      linear-gradient(
        to top,
        rgb(var(--color-background-1)),
        rgba(var(--color-background-1), 0)
      );
  }
}

.ecoSystemCardContent {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.cardsWrapper {
  display: flex;
  gap: 160px;
  margin-top: 110px;
  position: relative;
  z-index: 2;
}

.cardWrapper {
  position: relative;
  display: flex;
  justify-content: center;
}

.subheading {
  margin-top: 10px;
}
</style>
