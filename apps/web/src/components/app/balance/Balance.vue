<template>
  <div :class="$style.balance">
    <UiAnimatedText
      :class="$style.label"
      :text="computedLabel"
    />
    <UiAnimatedText
      :class="$style.value"
      :text="balance"
      animation-type="verticalAuto"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { UiAnimatedText } from '@terminal/uikit/components/animatedText';
import { useMarketStore } from '@/stores/market';
import { useEmulatorStore } from '@/stores/emulator';
import { roundToDecimalPlaces } from '@/utils/number';

const { t } = useI18n();

const marketStore = useMarketStore();
const emulatorStore = useEmulatorStore();

const computedLabel = computed(() => ({
  emulator: t('market.type.emulator'),
  combat: t('market.type.combat'),
}[marketStore.marketType]));

const balance = computed(() => t('common.currencyAmount', {
  amount: roundToDecimalPlaces(2, emulatorStore.balance),
  currency: marketStore.activePairData?.quote,
}));
</script>

<style lang="scss" module>
@import "@terminal/uikit/assets/styles/utils";

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
