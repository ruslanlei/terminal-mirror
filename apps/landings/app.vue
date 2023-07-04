<template>
  <NuxtPage />
  <UiLevitatingLayer />
  <UiIconsMap />
  <ToastLayer />
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { UiLevitatingLayer } from '@terminal/uikit/components/leviatingLayer';
import UiIconsMap from '@terminal/uikit/components/icon/IconsMap.vue';
import {
  watch, onMounted,
} from '#imports';
import { useCommonStore } from '~/stores/common';
import ToastLayer from '~/components/common/toastLayer/ToastLayer.vue';

const { theme } = storeToRefs(useCommonStore());

onMounted(() => {
  watch(theme, (value) => {
    document.body.removeAttribute('class');
    document.body.classList.add(value);
  }, { immediate: true });
});
</script>

<style lang="scss">
@use "@terminal/uikit/assets/styles";
@import "~/assets/fonts";
</style>
