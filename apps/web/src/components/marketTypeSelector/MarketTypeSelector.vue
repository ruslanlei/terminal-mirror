<template>
  <UiSelector
    v-model="marketType"
    :options="marketVariants"
    :state="['primaryColor', 'defaultSize']"
    :is-disabled="true"
  >
    <template #option="{ option: { icon, label } }">
      <UiIcon
        :icon="icon"
        :size="24"
      />
      <span :class="$style.optionLabel">
        {{ label }}
      </span>
    </template>
  </UiSelector>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { storeToRefs } from 'pinia';
import { UiIcon } from '@terminal/uikit/components/icon';
import { UiSelector } from '@terminal/uikit/components/selector';
import { useMarketStore } from '@/stores/market';
import { MarketTypeSelectorOption } from './index';

const { t } = useI18n();

const marketStore = useMarketStore();
const {
  marketType,
} = storeToRefs(marketStore);

const marketVariants = computed<MarketTypeSelectorOption[]>(() => [
  {
    label: t('market.type.emulator'),
    value: 'emulator',
    icon: 'cube',
  },
  {
    label: t('market.type.combat'),
    value: 'combat',
    icon: 'sword',
  },
]);
</script>

<style lang="scss" module>
.optionLabel {
  margin-left: 3px;
}
</style>
