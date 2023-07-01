<template>
  <NuxtPage />
  <UiLevitatingLayer />
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { UiLevitatingLayer } from '@terminal/uikit/components/leviatingLayer';
import { watch, useI18n, onMounted } from '#imports';
import { useCommonStore } from '~/stores/common';

const { t } = useI18n();

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
