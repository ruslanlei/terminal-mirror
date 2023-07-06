<template>
  <ChangePassword />
</template>

<route lang="yaml">
meta:
  guestRequired: true
  layout: auth
</route>

<script setup lang="ts">
import ChangePassword from '@/components/app/changePassword/ChangePassword.vue';
</script>
