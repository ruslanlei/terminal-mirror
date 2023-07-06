<template>
  <ComputedScreenShot />
</template>

<script setup lang="ts">
import {
  computed,
  defineAsyncComponent,
} from 'vue';
import { useI18n } from '#imports';

const TerminalScreenshot = defineAsyncComponent(() => import('./assets/terminalScreenshot.svg'));
const TerminalScreenshotRu = defineAsyncComponent(() => import('./assets/terminalScreenshotRu.svg'));

const { locale } = useI18n();

const ComputedScreenShot = computed(() => ({
  en: TerminalScreenshot,
  ru: TerminalScreenshotRu,
}[locale.value]));
</script>
