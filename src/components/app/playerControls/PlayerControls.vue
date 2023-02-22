<template>
  <Card
    :class="[
      $style.playerSettings,
      isDisabled && $style.disabled,
    ]"
    state="background3"
  >
    <header :class="$style.header">
      <div :class="$style.label">
        {{ t('emulator.player.label') }}
      </div>
      <Datepicker
        v-model="emulatorDate"
        :max-date="activePairData?.to_date"
        :min-date="activePairData?.from_date"
        :block-calendar="isActiveOrdersForCurrentPairExists"
        @trigger-click="onDatepickerClick"
      />
    </header>
    <div :class="$style.controls">
      <PlayButton
        v-model="isPlaying"
        :class="$style.playButton"
      />
      <RewindButton
        :is-disabled="isPlaying"
        :class="$style.rewindButton"
        @click="emulatorStore.rewind"
      />
      <RangeSlider
        v-model="candlesPerSecond"
        :class="$style.speedSlider"
        :min="1"
        :max="6"
      />
      <AnimatedText
        :text="displaySpeed"
        :class="$style.displaySpeed"
        animation-type="verticalAuto"
      />
    </div>
    <Button
      :state="['secondary1Color', 'interactive']"
      size="md"
      :class="$style.prematureResultButton"
      :is-loading="isCalculatingResult"
      @click="emulatorStore.calculateResult"
    >
      {{ t('emulator.player.prematureResult') }}
    </Button>
  </Card>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import Card from '@/components/core/card/Card.vue';
import Datepicker from '@/components/core/datepicker/Datepicker.vue';
import RangeSlider from '@/components/core/rangeSlider/RangeSlider.vue';
import Button from '@/components/core/button/Button.vue';
import AnimatedText from '@/components/core/animatedText/AnimatedText.vue';

import { useEmulatorStore } from '@/stores/emulator';
import { storeToRefs } from 'pinia';
import { useChartDataStore } from '@/stores/chartData';
import { useMarketStore } from '@/stores/market';
import { modalType, useModalStore } from '@/stores/modals';
import PlayButton from './playButton/PlayButton.vue';
import RewindButton from './rewindButton/RewindButton.vue';

const { t } = useI18n();

const modalStore = useModalStore();

const marketStore = useMarketStore();
const {
  activePairData,
  isActiveOrdersForCurrentPairExists,
} = storeToRefs(marketStore);

const chartDataStore = useChartDataStore();
const { isFetchingCandles } = storeToRefs(chartDataStore);

const emulatorStore = useEmulatorStore();
const {
  emulatorDate,
  candlesPerSecond,
  isPlaying,
  isRewinding,
  isCalculatingResult,
} = storeToRefs(emulatorStore);

const displaySpeed = computed(() => `CPS: ${candlesPerSecond.value}`);

const isDisabled = computed(() => [
  isRewinding.value,
  isFetchingCandles.value,
  isCalculatingResult.value,
].some(Boolean));

const onDatepickerClick = () => {
  if (!isActiveOrdersForCurrentPairExists.value) return;

  modalStore.showModal({
    type: modalType.CHANGE_PLAYER_DATE_ALERT,
  });
};
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.playerSettings {
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  @include transparentOnDisabled;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.label {
  @include title4;
  font-weight: 600;
  color: rgb(var(--color-accent-1));
}

.controls {
  margin-top: 14px;
  display: flex;
  align-items: center;
}

.playButton {
  color: rgb(var(--color-accent-1));
}

.rewindButton {
  margin-left: 5px;
}

.speedSlider {
  margin-left: 12px;
}

.displaySpeed {
  width: 110px;
  text-align: right;
  @include title3;
  color: rgb(var(--color-accent-1));
  font-weight: 600;
}

.prematureResultButton {
  margin-top: auto;
}
</style>

<style lang="scss">
.playerSpeedTransition {
  &-enter-active,
  &-leave-active {
    transition: transform 160ms, opacity 160ms;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
  }

  &-enter-from {
    transform: translateY(6px);
  }
  &-leave-to {
    transform: translateY(-6px);
  }
}
</style>
