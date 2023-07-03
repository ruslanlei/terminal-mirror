<template>
  <UiImageBackgroundBlock :content-class="$style.creatorsTeamInfo">
    <UiTypography
      :state="['accent1', 'bold', 'alignCenter']"
      size="massive2"
      :class="$style.heading"
    >
      {{ t('courseLanding.creatorsTeamInfo.heading') }}
    </UiTypography>
    <div :class="$style.mainContent">
      <UiCard
        :class="$style.card"
        state="background1"
      >
        <UiTypography
          :state="['accent1', 'alignCenter']"
          size="h2"
        >
          <template
            v-for="(_, textIndex) in 3"
            :key="textIndex"
          >
            <template v-if="textIndex">
              <br
                v-for="br in 2"
                :key="br"
              >
            </template>
            <UiTypography
              is-inline
              :state="[textIndex !== 2 ? 'accent2' : 'accent1']"
            >
              {{ t(`courseLanding.creatorsTeamInfo.text.${textIndex}`) }}
            </UiTypography>
          </template>
        </UiTypography>
      </UiCard>
      <div :class="$style.bubblesContainer">
        <ImageBubbles />
        <DiscordLink :class="$style.discordLink" />
      </div>
    </div>
  </UiImageBackgroundBlock>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { UiCard } from '@terminal/uikit/components/card';
import { UiTypography } from '@terminal/uikit/components/typography';
import { UiImageBackgroundBlock } from '@terminal/uikit/components/imageBackgroundBlock';

import ImageBubbles from './imageBubbles/ImageBubbles.vue';
import DiscordLink from './discordLink/DiscordLink.vue';

const { t } = useI18n();
</script>

<style lang="scss" module>
@import "@terminal/uikit/assets/styles/utils";

.creatorsTeamInfo {
  height: 1067px;
  background: rgb(var(--color-background-3));
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.heading {
  max-width: 1000px;
}

.mainContent {
  height: 711px;
  margin-top: 80px;
  gap: 70px;
  display: flex;
  align-items: center;
}

.card {
  padding: 40px;
  max-width: 610px;
  height: fit-content;
}

.bubblesContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.discordLink {
  position: absolute;
  bottom: 0;
}

.imagesWrapper {
  position: relative;
  width: 500px;
  height: 711px;
}

.hamsterNft {
  position: absolute;
  left: 100px;
  top: 15px;
}

.etheriumNft {
  position: absolute;
  left: 225px;
}

.pixelArtNft {
  position: absolute;
  right: 0;
  top: 50px;
}

.monkeyNft {
  position: absolute;
  left: 0;
  top: 116px;
}

.pepeFrogImg {
  position: absolute;
  right: 25px;
  top: 195px;
}

.girlImg {
  position: absolute;
  left: 5px;
  bottom: 140px;
}

.yodaImg {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
