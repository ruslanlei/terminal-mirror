<template>
  <SignUp />
</template>

<route lang="yaml">
meta:
  guestRequired: true
  layout: auth
</route>

<script setup lang="ts">
import SignUp from '@/components/signUp/SignUp.vue';
</script>
