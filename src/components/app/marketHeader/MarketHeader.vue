<template>
  <Transition
    mode="out-in"
    name="skeletonTransition"
  >
    <Header v-if="!isFetchingProfile" />
    <Skeleton v-else />
  </Transition>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { useProfileStore } from '@/stores/profile';
import Header from './Header.vue';
import Skeleton from './Skeleton.vue';

const profileStore = useProfileStore();
const {
  isFetchingProfile,
} = storeToRefs(profileStore);
</script>

<style lang="scss">
@import "@/assets/styles/transitions.scss";
</style>
