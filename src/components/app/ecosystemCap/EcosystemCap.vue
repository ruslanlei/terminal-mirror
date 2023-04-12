<template>
  <ImageBackgroundBlock
    :src="computedBackground"
    :content-class="$style.ecoSystemCard"
  >
    <template #picture>
      <SpaceBackground />
    </template>
    <div :class="$style.ecoSystemCardContent">
      <Typography
        :state="['accent1', 'bold', 'uppercase']"
        size="massive1"
      >
        {{ t('ecosystem.label') }}
      </Typography>
      <Typography
        :state="['accent1', 'medium']"
        size="h1"
        :class="$style.subheading"
      >
        {{ t('ecosystem.description') }}
      </Typography>
      <div :class="$style.cardsWrapper">
        <div :class="$style.cardWrapper">
          <EcosystemCard :card="terminalCard">
            <template #logo>
              <Logo
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
              <CourseLogo
                type="slim"
                state="xlThickBorder"
                :size="null"
              />
            </template>
          </EcosystemCard>
        </div>
      </div>
    </div>
  </ImageBackgroundBlock>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import Typography from '@/components/app/typography/Typography.vue';
import ImageBackgroundBlock from '@/components/core/imageBackgroundBlock/ImageBackgroundBlock.vue';
import EcosystemCard from '@/components/app/ecosystemCap/ecosystemCard/EcosystemCard.vue';
import Logo from '@/components/core/logo/Logo.vue';
import { computed } from 'vue';
import { IEcosystemCard } from '@/components/app/ecosystemCap/ecosystemCard';
import CourseLogo from '@/components/core/courseLogo/CourseLogo.vue';
import SpaceBackground from '@/components/app/ecosystemCap/spaceBackground/SpaceBackground.vue';
import BackgroundPurplePng from './assets/spaceBackgroundPurple.png';
import BackgroundBluePng from './assets/spaceBackgroundBlue.png';
import { EcosystemCapProps } from './index';

const { t } = useI18n();

const props = withDefaults(
  defineProps<EcosystemCapProps>(),
  {
    state: 'purple',
  },
);

const computedBackground = computed(() => ({
  purple: BackgroundPurplePng,
  blue: BackgroundBluePng,
}[props.state]));

const terminalCard = computed<IEcosystemCard>(() => ({
  label: t('ecosystem.terminal.label'),
  description: t('ecosystem.terminal.description'),
  link: 'https://www.youtube.com/',
}));

const courseCard = computed<IEcosystemCard>(() => ({
  label: t('ecosystem.course.label'),
  description: t('ecosystem.course.description'),
  link: 'https://www.youtube.com/',
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
