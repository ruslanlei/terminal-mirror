<template>
  <UiModal
    :class="$style.root"
    :content-class="$style.content"
    @close="handleClose"
  >
    <div :class="$style.label">
      {{ label || t('label') }}
    </div>
    <div :class="$style.text">
      {{ text || t('text') }}
    </div>
    <div :class="$style.controls">
      <UiButton @click="handleClose">
        {{ cancelLabel || t('cancelLabel') }}
      </UiButton>
      <UiButton
        :class="$style.submit"
        @click="handleSubmit"
      >
        {{ confirmLabel || t('confirmLabel') }}
      </UiButton>
    </div>
  </UiModal>
</template>

<script setup lang="ts">
import { UiButton } from '@terminal/uikit/components/button';
import { UiModal } from '@terminal/uikit/components/modal';
import { ConfirmModalProps } from '@/components/confirmModal/index';
import { useI18n } from '@/hooks/useI18n';

const { t } = useI18n('common.confirm');

const props = defineProps<ConfirmModalProps>();
const emit = defineEmits<{(e: 'close'): void }>();

const handleClose = () => {
  props.onCancel?.();
  emit('close');
};

const handleSubmit = () => {
  props.onSubmit?.();
  emit('close');
};
</script>

<style lang="scss" module>
@import "@terminal/uikit/assets/styles/utils";

.root {
  max-width: 400px;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.label, .text {
  text-align: center;
}

.controls {}

.submit {}
</style>
