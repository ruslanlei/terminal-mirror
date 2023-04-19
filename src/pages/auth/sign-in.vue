<template>
  <SignIn />
</template>

<route lang="yaml">
meta:
  guestRequired: true
  layout: auth
</route>

<script setup lang="ts">
import SignIn from '@/components/app/signIn/SignIn.vue';
</script>
