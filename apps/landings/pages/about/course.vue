<template>
  <CourseLanding />
</template>

<script setup lang="ts">
import CourseLanding from '~/components/pages/CourseLanding.vue';
import { useSeoMeta, useRuntimeConfig, useHead } from '#imports';

const runtimeConfig = useRuntimeConfig();

useSeoMeta({
  title: String(runtimeConfig.public.courseName),
});

useHead(() => ({
  link: [{
    rel: 'icon',
    type: 'image/x-icon',
    href: '/courseFavicon.svg',
  }],
}));
</script>
