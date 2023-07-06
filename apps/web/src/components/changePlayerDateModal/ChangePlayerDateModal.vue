<template>
  <UiModal :class="$style.changePlayerDateModal">
    <UiTypography
      :size="['h1']"
      :state="['accent1', 'bold']"
    >
      {{ t('changePlayerDateModal.label') }}
    </UiTypography>
    <div :class="$style.controls">
      <UiButton
        size="md"
        :state="['successColor']"
        :class="$style.control"
        @click="close"
      >
        {{ t('common.cancel') }}
      </UiButton>
      <UiButton
        size="md"
        :state="['dangerColor']"
        :class="$style.control"
        :is-loading="isLoading"
        @click="submit"
      >
        {{ t('changePlayerDateModal.submitText') }}
      </UiButton>
    </div>
  </UiModal>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { UiButton } from '@terminal/uikit/components/button';
import { UiModal } from '@terminal/uikit/components/modal';
import { UiTypography } from '@terminal/uikit/components/typography';
import { ChangePlayerDateModalEmits } from '@/components/changePlayerDateModal/index';
import { useMarketStore } from '@/stores/market';

const emit = defineEmits<ChangePlayerDateModalEmits>();

const { t } = useI18n();

const marketStore = useMarketStore();

const close = () => {
  emit('close');
};

const isLoading = ref(false);
const submit = async () => {
  isLoading.value = true;
  const { result } = await marketStore.deleteOrCloseAllExistingOrdersForCurrentPair();
  isLoading.value = false;

  if (!result) return;

  close();
};
</script>

<style lang="scss" module>
.changePlayerDateModal {
  padding: 80px;
}

.controls {
  margin-top: 40px;
  display: flex;
  gap: 20px;
  & > * {
    flex-grow: 1;
  }
}

.control {
  padding: 12px;
}
</style>
