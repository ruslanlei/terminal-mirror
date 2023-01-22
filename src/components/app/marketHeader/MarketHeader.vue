<template>
  <Header v-if="!isFetchingProfile" />
  <Skeleton v-else />
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { storeToRefs } from 'pinia';

import { useProfileStore } from '@/stores/profile';
import Header from './Header.vue';
import Skeleton from './Skeleton.vue';

const { t } = useI18n();

const profileStore = useProfileStore();
const {
  isFetchingProfile,
} = storeToRefs(profileStore);
</script>
