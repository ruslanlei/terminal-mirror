<template>
  <div :class="$style.debugPanel">
    <NumberInput
      v-model="emulatorStore.compression"
      :min="1"
      :max="20"
      label="Candles request interval (seconds)"
    />
  </div>
</template>

<script setup lang="ts">
import { useEmulatorStore } from '@/stores/emulator';
import NumberInput from '@/components/core/numberInput/NumberInput.vue';

const emulatorStore = useEmulatorStore();
</script>

<style lang="scss" module>
.debugPanel {
  background-color: rgb(var(--color-background-3));
  padding: 30px;
  border-radius: 0 0 10px 10px;
}
</style>
