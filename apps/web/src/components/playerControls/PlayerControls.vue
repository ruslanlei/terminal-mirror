<template>
  <UiCard
    :class="[
      $style.playerSettings,
      isDisabledAll && $style.disabled,
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
        :block-calendar="isDisabledCalendar"
        @trigger-click="onDatepickerClick"
      />
    </header>
    <div :class="$style.controls">
      <PlayButton
        v-model="isPlaying"
        :class="$style.playButton"
        :is-disabled="isDisabledControls"
      />
      <RewindButton
        :is-disabled="isPlaying || isDisabledControls"
        :class="$style.rewindButton"
        @click="emulatorStore.rewind"
      />
      <UiRangeSlider
        v-model="candlesPerSecond"
        :class="$style.speedSlider"
        :min="1"
        :max="6"
      />
      <UiAnimatedText
        :text="displaySpeed"
        :class="$style.displaySpeed"
        animation-type="verticalAuto"
      />
    </div>
    <UiButton
      :state="['accent3Color', 'interactive']"
      size="md"
      :class="$style.prematureResultButton"
      :is-loading="isCalculatingResult"
      :is-disabled="isDisabledCalculateResultButton"
      :hide-loader-on-hover="true"
      @click="onCalculateResult"
    >
      <UiAnimatedText
        animation-type="verticalForward"
        :text="calculateResultButtonText"
      />
    </UiButton>
  </UiCard>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { storeToRefs } from 'pinia';
import { UiAnimatedText } from '@terminal/uikit/components/animatedText';
import { UiButton } from '@terminal/uikit/components/button';
import { UiCard } from '@terminal/uikit/components/card';
import { UiRangeSlider } from '@terminal/uikit/components/rangeSlider';
import Datepicker from '@/components/datepicker/Datepicker.vue';

import { useEmulatorStore } from '@/stores/emulator';
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
  isCalculateResultAbortionQueued,
} = storeToRefs(emulatorStore);

const displaySpeed = computed(() => t(
  'emulator.player.candlesPerSecond',
  { value: candlesPerSecond.value },
));

const isDisabledAll = computed(() => [
  isRewinding.value,
  isFetchingCandles.value,
].some(Boolean));

const isDisabledControls = computed(() => [
  isDisabledAll.value,
  !isActiveOrdersForCurrentPairExists.value,
  isCalculatingResult.value,
].some(Boolean));

const isDisabledCalendar = computed(() => [
  isDisabledAll.value,
  isActiveOrdersForCurrentPairExists.value,
  isCalculatingResult.value,
].some(Boolean));

const isDisabledCalculateResultButton = computed(() => [
  isDisabledAll.value,
  !isActiveOrdersForCurrentPairExists.value,
  isCalculateResultAbortionQueued.value,
].some(Boolean));

const calculateResultButtonText = computed(() => (isCalculatingResult.value
  ? t('common.cancel')
  : t('emulator.player.calculateResult')));

const onCalculateResult = () => {
  if (isCalculatingResult.value) {
    emulatorStore.abortCalculateResult();
  } else {
    emulatorStore.calculateResult();
  }
};

const onDatepickerClick = () => {
  if (isDisabledControls.value) return;

  modalStore.showModal({
    type: modalType.CHANGE_PLAYER_DATE_ALERT,
  });
};
</script>

<style lang="scss" module>
@import "@terminal/uikit/assets/styles/utils";

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
  min-width: 76px;
  text-align: right;
  white-space: nowrap;
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
