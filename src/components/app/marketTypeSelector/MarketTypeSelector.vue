<template>
  <Selector
    v-model="marketType"
    :options="marketVariants"
    :state="['primaryColor', 'defaultSize']"
  >
    <template #option="{ option: { icon, label } }">
      <Icon
        :icon="icon"
        :size="24"
      />
      <span :class="$style.optionLabel">
        {{ label }}
      </span>
    </template>
  </Selector>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import Selector from '@/components/core/selector/Selector.vue';
import Icon from '@/components/core/icon/Icon.vue';
import { useMarketStore } from '@/stores/market';
import { storeToRefs } from 'pinia';
import { MarketTypeSelectorOption } from './index';

const { t } = useI18n();

const marketStore = useMarketStore();
const {
  marketType,
} = storeToRefs(marketStore);

const marketVariants = computed<MarketTypeSelectorOption[]>(() => [
  {
    label: t('marketType.emulator'),
    value: 'emulator',
    icon: 'cube',
  },
  {
    label: t('marketType.real'),
    value: 'real',
    icon: 'sword',
  },
]);
</script>

<style lang="scss" module>
.optionLabel {
  margin-left: 3px;
}
</style>
