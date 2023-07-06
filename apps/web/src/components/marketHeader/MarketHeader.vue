<template>
  <Transition
    mode="out-in"
    name="skeletonTransition"
  >
    <Header v-if="!isFetchingProfile && profile" />
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
  profile,
  isFetchingProfile,
} = storeToRefs(profileStore);
</script>

<style lang="scss">
@import "@terminal/uikit/assets/styles/transitions";
</style>
