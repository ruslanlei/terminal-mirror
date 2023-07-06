<template>
  <ConfirmEmail />
</template>

<route lang="yaml">
meta:
  guestRequired: true
  layout: auth
</route>

<script setup lang="ts">
import ConfirmEmail from '@/components/confirmEmail/ConfirmEmail.vue';
</script>
