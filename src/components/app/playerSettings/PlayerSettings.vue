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
    </div>
  </Card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import Card from '@/components/core/card/Card.vue';
import Datepicker from '@/components/core/datepicker/Datepicker.vue';
import PlayButton from '@/components/core/playButton/PlayButton.vue';

const date = ref(new Date().toISOString());

const isPlaying = ref(false);

const { t } = useI18n();
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.playerSettings {
  height: 100%;
  padding: 20px;
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
}

.playButton {
  color: rgb(var(--color-accent-1));
}
</style>
