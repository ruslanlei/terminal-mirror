<template>
  <UiModal :class="$style.successSignUpModal">
    <UiPicture
      :class="$style.illustration"
      :srcset="illustrationSrcset"
    />
    <div :class="$style.label">
      {{ t('auth.signUp.successScreen.label') }}
    </div>
    <div :class="$style.description">
      {{ t('auth.signUp.successScreen.description') }}
    </div>
    <Link
      :to="{ name: 'auth-sign-in' }"
      :state="null"
    >
      <UiButton
        type="button"
        state="gradientColor"
        size="lg"
        :class="$style.loginLink"
        @click="close"
      >
        {{ t('auth.signUp.login') }}
      </UiButton>
    </Link>
  </UiModal>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { UiButton } from '@terminal/uikit/components/button';
import { UiModal } from '@terminal/uikit/components/modal';
import { UiPicture } from '@terminal/uikit/components/picture';
import Link from '@/components/app/link/Link.vue';
import IllustrationPng from './assets/illustration.png';
import IllustrationWebp from './assets/illustration.webp';
import { SuccessSignUpModalEmits } from './index';

const illustrationSrcset = computed(() => `${IllustrationPng}, ${IllustrationWebp}`);

const emit = defineEmits<SuccessSignUpModalEmits>();

const close = () => {
  emit('close');
};

const { t } = useI18n();
</script>

<style lang="scss" module>
@import "@terminal/uikit/assets/styles/utils";

.successSignUpModal {
  padding: 80px;
  background-color: rgb(var(--color-background-3));
  position: relative;
}

.illustration {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  transform: translateY(-70px) translateX(30px);
}

.label {
  @include h1;
  color: rgb(var(--color-accent-1));
  font-weight: 600;
  max-width: 300px;
}

.description {
  margin-top: 10px;
  @include text;
  color: rgb(var(--color-accent-2));
  font-weight: 500;
}

.loginLink {
  margin-top: 40px;
}
</style>
