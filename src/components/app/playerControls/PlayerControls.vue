<template>
  <Card
    :class="[$style.playerSettings, isRewinding && $style.disabled]"
    state="background3"
  >
    <header :class="$style.header">
      <div :class="$style.label">
        {{ t('emulator.player.label') }}
      </div>
      <Datepicker v-model="emulatorDate" />
    </header>
    <div :class="$style.controls">
      <PlayButton
        v-model="isPlaying"
        :class="$style.playButton"
      />
      <RewindButton
        :is-disabled="isPlaying"
        :class="$style.rewindButton"
        @click="rewind"
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
      :state="['mdSize', 'secondary1Color', 'interactive']"
      :class="$style.prematureResultButton"
    >
      {{ t('emulator.player.prematureResult') }}
    </Button>
  </Card>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import Card from '@/components/core/card/Card.vue';
import Datepicker from '@/components/core/datepicker/Datepicker.vue';
import RangeSlider from '@/components/core/rangeSlider/RangeSlider.vue';
import Button from '@/components/core/button/Button.vue';
import AnimatedText from '@/components/core/animatedText/AnimatedText.vue';

import { useEmulatorStore } from '@/stores/emulator';
import { storeToRefs } from 'pinia';
import PlayButton from './playButton/PlayButton.vue';
import RewindButton from './rewindButton/RewindButton.vue';

const { t } = useI18n();

const emulatorStore = useEmulatorStore();
const { emulatorDate, candlesPerSecond, isPlaying } = storeToRefs(emulatorStore);

const displaySpeed = computed(() => `CPS: ${candlesPerSecond.value}`);

const isRewinding = ref(false);
const rewind = async () => {
  isRewinding.value = true;
  await emulatorStore.playTimeframe(1);
  isRewinding.value = false;
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
