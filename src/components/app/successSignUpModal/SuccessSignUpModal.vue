<template>
  <Modal :class="$style.successSignUpModal">
    <Picture
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
      <Button
        type="button"
        :state="['gradientColor', 'lgSize']"
        :class="$style.loginLink"
        @click="close"
      >
        {{ t('auth.signUp.login') }}
      </Button>
    </Link>
  </Modal>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import Modal from '@/components/core/modal/Modal.vue';
import Button from '@/components/core/button/Button.vue';
import Picture from '@/components/core/picture/Picture.vue';
import Link from '@/components/core/link/Link.vue';
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
@import "src/assets/styles/utils";

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
