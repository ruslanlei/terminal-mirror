<template>
  <Modal :class="$style.changePlayerDateModal">
    <Typography
      :size="['h1']"
      :state="['accent1', 'bold']"
    >
      {{ t('changePlayerDateModal.label') }}
    </Typography>
    <div :class="$style.controls">
      <Button
        size="md"
        :state="['successColor']"
        :class="$style.control"
        @click="close"
      >
        {{ t('common.cancel') }}
      </Button>
      <Button
        size="md"
        :state="['dangerColor']"
        :class="$style.control"
      >
        {{ t('changePlayerDateModal.submitText') }}
      </Button>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import Modal from '@/components/core/modal/Modal.vue';
import Typography from '@/components/app/typography/Typography.vue';
import Button from '@/components/core/button/Button.vue';
import { ChangePlayerDateModalEmits } from '@/components/app/changePlayerDateModal/index';

const emit = defineEmits<ChangePlayerDateModalEmits>();

const { t } = useI18n();

const close = () => {
  emit('close');
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
