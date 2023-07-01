<template>
  <TerminalLanding />
</template>

<script setup lang="ts">
import TerminalLanding from '~/components/pages/terminalLanding.vue';
import { useSeoMeta, useRuntimeConfig } from '#imports';

const runtimeConfig = useRuntimeConfig();

useSeoMeta({
  title: String(runtimeConfig.public.projectName),
});
</script>
