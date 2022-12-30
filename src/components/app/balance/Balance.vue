<template>
  <div :class="$style.balance">
    <div :class="$style.label">
      {{ computedLabel }}
    </div>
    <div :class="$style.value">
      {{ balance }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useProfileStore } from '@/stores/profile';
import { useMarketStore } from '@/stores/market';

const { t } = useI18n();

const profileStore = useProfileStore();
const marketStore = useMarketStore();

const computedLabel = computed(() => ({
  emulator: t('market.type.emulator'),
  real: t('market.type.real'),
}[marketStore.marketType]));

const balance = computed(() => `$ ${profileStore.balance}`);
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
