<template>
  <ImageBackgroundBlock
    :src="BackgroundPng"
    :content-class="$style.ecoSystemCard"
  >
    <Typography
      :state="['accent1', 'bold', 'uppercase']"
      size="massive1"
    >
      {{ t('ecosystem.label') }}
    </Typography>
    <Typography
      :state="['accent1', 'medium']"
      size="massive5"
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
            <CourseLogo />
          </template>
        </EcosystemCard>
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
import BackgroundPng from './assets/spaceBackground.png';

const { t } = useI18n();

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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.cardsWrapper {
  display: flex;
  gap: 160px;
  margin-top: 110px;
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
