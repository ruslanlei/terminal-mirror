<template>
  <Form
    v-model="model"
    v-model:external-errors="serverErrors"
    :validation-schema="validationSchema"
    @submit="handleSubmit"
  >
    <AuthChangePasswordContainer>
      <template #label>
        {{ t('auth.changePassword.label') }}
      </template>
      <template #description>
        {{ t('auth.changePassword.description') }}
      </template>
      <template #password>
        <FormInput
          name="new_password1"
          type="password"
          :placeholder="t('placeholder.newPassword')"
        />
      </template>
      <template #repeatPassword>
        <FormInput
          name="new_password2"
          type="password"
          :placeholder="t('placeholder.passwordConfirmation')"
        />
      </template>
      <template #submit>
        <UiButton
          :is-loading="isLoading"
          :state="['gradientColor', 'interactive']"
          size="lg"
        >
          {{ t('auth.changePassword.submit') }}
        </UiButton>
      </template>
    </AuthChangePasswordContainer>
  </Form>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { UiButton } from '@terminal/uikit/components/button';
import AuthChangePasswordContainer from '@/containers/authChangePasswordContainer/AuthChangePasswordContainer.vue';
import { Form, FormInput } from '@/form';
import { usePasswordResetConfirm } from '@/hooks/usePasswordResetConfirm';

const { t } = useI18n();

const {
  model,
  validationSchema,
  setToken,
  handleSubmit,
  serverErrors,
  isLoading,
} = usePasswordResetConfirm();

setToken();
</script>
