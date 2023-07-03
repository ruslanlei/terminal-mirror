<template>
  <CourseLanding />
</template>

<script setup lang="ts">
import CourseLanding from '~/components/pages/CourseLanding.vue';
import { useSeoMeta, useRuntimeConfig } from '#imports';

const runtimeConfig = useRuntimeConfig();

useSeoMeta({
  title: String(runtimeConfig.public.courseName),
});
</script>
