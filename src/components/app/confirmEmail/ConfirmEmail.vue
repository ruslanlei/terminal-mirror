<template>
  <div :class="$style.verifyEmail">
    <Loader v-if="isLoading" />
    <div
      v-else-if="errorText"
      :class="$style.error"
    >
      {{ errorText }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useEmailVerification } from '@/hooks/useEmailVerification';
import Loader from '@/components/core/loader/Loader.vue';

const {
  errorText,
  isLoading,
  verify,
} = useEmailVerification();

verify();
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.verifyEmail {
  padding: 20px 0;
}

.error {
  @include title3;
  color: rgb(var(--color-danger));
}
</style>
