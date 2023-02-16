<template>
  <div :class="$style.balance">
    <AnimatedText
      :class="$style.label"
      :text="computedLabel"
    />
    <div :class="$style.value">
      {{ balance }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useMarketStore } from '@/stores/market';
import AnimatedText from '@/components/core/animatedText/AnimatedText.vue';
import { useEmulatorStore } from '@/stores/emulator';
import { roundToDecimalPoint } from '@/helpers/number';

const { t } = useI18n();

const marketStore = useMarketStore();
const emulatorStore = useEmulatorStore();

const computedLabel = computed(() => ({
  emulator: t('market.type.emulator'),
  real: t('market.type.real'),
}[marketStore.marketType]));

const balance = computed(() => `$ ${roundToDecimalPoint(2, emulatorStore.balance)}`);
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.balance {}

.label {
  @include title4;
  font-weight: 500;
  color: rgb(var(--color-accent-2));
}

.value {
  @include title3;
  font-weight: 600;
  color: rgb(var(--color-accent-1));
}
</style>
