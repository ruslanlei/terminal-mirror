<template>
  <TerminalLanding />
</template>

<script setup lang="ts">
import TerminalLanding from '~/components/pages/TerminalLanding.vue';
import { useSeoMeta, useRuntimeConfig, useHead } from '#imports';

const runtimeConfig = useRuntimeConfig();

useSeoMeta({
  title: String(runtimeConfig.public.projectName),
});

useHead(() => ({
  link: [{
    rel: 'icon',
    type: 'image/x-icon',
    href: '/favicon.ico',
  }],
}));
</script>
