<template>
  <Card
    :class="$style.playerSettings"
    state="background3"
  >
    <header :class="$style.header">
      <div :class="$style.label">
        {{ t('emulator.player.label') }}
      </div>
      <Datepicker v-model="date" />
    </header>
    <div :class="$style.controls">
      <PlayButton
        v-model="isPlaying"
        :class="$style.playButton"
      />
      <RewindButton
        :is-disabled="isPlaying"
        :class="$style.rewindButton"
      />
      <RangeSlider
        v-model="speed"
        :class="$style.speedSlider"
        :max="4"
      />
      <div :class="$style.displaySpeed">
        {{ displaySpeed }}
      </div>
    </div>
    <Button
      state="secondary1"
      size="md"
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

import PlayButton from './playButton/PlayButton.vue';
import RewindButton from './rewindButton/RewindButton.vue';

const { t } = useI18n();

const date = ref(new Date().toISOString());

const isPlaying = ref(false);

const speed = ref<0 | 1 | 2 | 3 | 4>(0);
const displaySpeed = computed(() => ({
  0: 'x1',
  1: 'x2',
  2: 'x10',
  3: 'x100',
  4: 'x1000',
}[speed.value]));
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.playerSettings {
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
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
