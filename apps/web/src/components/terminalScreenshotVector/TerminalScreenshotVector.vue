<template>
  <ComputedScreenShot />
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent, toRefs } from 'vue';
import { useI18nStore } from '@/stores/i18n';

const TerminalScreenshot = defineAsyncComponent(() => import('./assets/terminalScreenshot.svg'));
const TerminalScreenshotRu = defineAsyncComponent(() => import('./assets/terminalScreenshotRu.svg'));

const i18nStore = useI18nStore();
const {
  locale,
} = toRefs(i18nStore);

const ComputedScreenShot = computed(() => ({
  en: TerminalScreenshot,
  ru: TerminalScreenshotRu,
}[locale.value]));
</script>
