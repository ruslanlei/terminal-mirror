<template>
  <CourseLanding />
</template>

<route lang="yaml">
meta:
  layout: blank
  favicon: /courseFavicon.svg
  pageName: Course
  forceLocale: ru
</route>

<script setup lang="ts">
import CourseLanding from '@/components/app/courseLanding/CourseLanding.vue';
</script>

<style lang="scss" module>
</style>
