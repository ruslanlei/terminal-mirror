<template>
  <ResetPassword />
</template>

<route lang="yaml">
meta:
  guestRequired: true
  layout: auth
</route>

<script setup lang="ts">
import ResetPassword from '@/components/app/resetPassword/ResetPassword.vue';
</script>
