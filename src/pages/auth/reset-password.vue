<template>
  <Form
    v-model="model"
    :validation-schema="validationSchema"
    touch-by="input"
    @submit="handleSubmit"
  >
    <PasswordResetContainer>
      <template #label>
        {{ t('auth.forgotPassword.label') }}
      </template>
      <template #description>
        {{ t('auth.forgotPassword.description') }}
      </template>
      <template #emailInput>
        <FormInput
          ref="emailInput"
          name="email"
          :placeholder="t('placeholder.email')"
        />
      </template>
      <template #submit>
        <Button
          type="submit"
          :state="['gradientColor', 'lgSize']"
          :is-loading="isLoading"
        >
          {{ t('auth.forgotPassword.submit') }}
        </Button>
      </template>
    </PasswordResetContainer>
  </Form>
</template>

<route lang="yaml">
meta:
  guestRequired: true
  layout: auth
</route>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import PasswordResetContainer from '@/containers/passwordResetContainer/PasswordResetContainer.vue';
import { Form, FormInput } from '@/form';
import Button from '@/components/core/button/Button.vue';
import { usePasswordReset } from '@/hooks/usePasswordReset';
import { onMounted, ref } from 'vue';

const emailInput = ref();

const { t } = useI18n();

const {
  model,
  validationSchema,
  isLoading,
  handleSubmit,
} = usePasswordReset();

onMounted(() => {
  emailInput.value.focus();
});
</script>
