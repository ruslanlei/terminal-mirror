<template>
  <ResetPassword />
</template>

<route lang="yaml">
meta:
  guestRequired: true
  layout: auth
</route>

<script setup lang="ts">
import ResetPassword from '@/components/resetPassword/ResetPassword.vue';
</script>
