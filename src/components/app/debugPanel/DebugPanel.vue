<template>
  <div :class="$style.debugPanel">
    <NumberInput
      v-model="emulatorStore.compressionFactor"
      :min="1"
      :max="20"
      label="Candles request interval (seconds)"
    />
    <div style="margin-top: 20px;">
      <NumberInput
        v-model="marketStore.activePairPrice"
        :min="1"
        label="Active pair price"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useEmulatorStore } from '@/stores/emulator';
import NumberInput from '@/components/core/numberInput/NumberInput.vue';
import { useMarketStore } from '@/stores/market';

const emulatorStore = useEmulatorStore();
const marketStore = useMarketStore();
</script>

<style lang="scss" module>
.debugPanel {
  background-color: rgb(var(--color-background-3));
  padding: 30px;
  border-radius: 0 0 10px 10px;
}
</style>
