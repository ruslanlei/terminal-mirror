<template>
  <Modal
    :class="$style.deleteOrderModal"
  >
    <Picture
      :class="$style.illustration"
      :srcset="illustrationSrcSet"
    />
    <Typography
      size="title1"
      :state="['accent1', 'bold']"
      :class="$style.label"
    >
      {{ t('deleteOrder.label') }}
    </Typography>
  </Modal>
</template>

<script setup lang="ts">
import Modal from '@/components/core/modal/Modal.vue';
import Picture from '@/components/core/picture/Picture.vue';
import { computed } from 'vue';
import { collectSrcSet } from '@/helpers/dom';
import Typography from '@/components/app/typography/Typography.vue';
import { useI18n } from 'vue-i18n';
import { DeleteOrderModalProps } from './index';

import IllustrationPng from './assets/illustration.png';
import IllustrationWebp from './assets/illustration.webp';

const { t } = useI18n();

const props = defineProps<DeleteOrderModalProps>();

const illustrationSrcSet = computed(() => collectSrcSet([
  IllustrationWebp,
  IllustrationPng,
]));
</script>

<style lang="scss" module>
.deleteOrderModal {
  padding: 46px;
  position: relative;
}

.illustration {
  width: 250px;
  height: 250px;
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-15%) translateX(8%);
}

.label {
  max-width: 50%;
  font-size: 24px;
}
</style>
