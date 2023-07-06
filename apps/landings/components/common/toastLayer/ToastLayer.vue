<template>
  <UiToastLayer v-model:toasts="toastStore.list" />
</template>

<script setup lang="ts">
import { UiToastLayer } from '@terminal/uikit/components/toastLayer';
import { useToastStore } from '~/stores/toasts';

const toastStore = useToastStore();
</script>
