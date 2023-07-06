<template>
  <i18n-t
    keypath="auth.signIn.signUpLink"
    tag="div"
    :class="$style.link"
  >
    <template #link>
      <Link
        :to="{ name: 'auth-sign-up' }"
        :label="t('auth.signIn.register')"
        state="primary"
      />
    </template>
  </i18n-t>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import Link from '@/components/link/Link.vue';

const { t } = useI18n();
</script>

<style lang="scss" module>
@import "@terminal/uikit/assets/styles/utils";

.link {
  color: rgb(var(--color-accent-1));
  font-weight: 600;
  @include text;
}
</style>
