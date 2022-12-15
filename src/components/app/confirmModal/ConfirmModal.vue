<template>
  <Modal
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
      <Button
        state="outline-secondary"
        @click="handleClose"
      >
        {{ cancelLabel || t('cancelLabel') }}
      </Button>
      <Button
        :class="$style.submit"
        state="danger"
        @click="handleSubmit"
      >
        {{ confirmLabel || t('confirmLabel') }}
      </Button>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import Button from '@/components/core/button/Button.vue';
import Modal from '@/components/core/modal/Modal.vue';
import { ConfirmModalProps } from '@/components/app/confirmModal';
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
@import "src/assets/styles/utils";

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
