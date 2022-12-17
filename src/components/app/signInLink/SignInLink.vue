<template>
  <i18n-t
    keypath="auth.signUp.signInLink"
    tag="div"
    :class="$style.link"
  >
    <template #login>
      <Link
        :to="{ name: 'auth-sign-in' }"
        :label="t('auth.signUp.login')"
        state="primary"
      />
    </template>
  </i18n-t>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import Link from '@/components/core/link/Link.vue';

const { t } = useI18n();
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.link {
  color: rgb(var(--color-accent-1));
  font-weight: 600;
  @include text;
}
</style>
