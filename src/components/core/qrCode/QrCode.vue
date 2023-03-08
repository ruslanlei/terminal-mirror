<template>
  <div v-html="qrCodeSvg" />
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import QrCode from 'qrcode-svg';
import DOMPurify from 'dompurify';
import { QrCodeProps } from './index';

const props = withDefaults(
  defineProps<QrCodeProps>(),
  {
    size: 200,
  },
);

const qrCodeRaw = ref<string>();
const qrCodeSvg = computed(() => DOMPurify.sanitize(qrCodeRaw.value));

const initQrCode = () => {
  const generatedQrCode = new QrCode({
    content: props.text,
    padding: 0,
    width: props.size,
    height: props.size,
    color: '#1D1F2B',
    background: '#ffffff',
  });
  qrCodeRaw.value = generatedQrCode.svg();
};
onMounted(initQrCode);
</script>
