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
        <Button
          :is-loading="isLoading"
          :state="['lgSize', 'gradientColor', 'interactive']"
        >
          {{ t('auth.changePassword.submit') }}
        </Button>
      </template>
    </AuthChangePasswordContainer>
  </Form>
</template>

<route lang="yaml">
meta:
  guestRequired: true
  layout: auth
</route>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import AuthChangePasswordContainer from '@/containers/authChangePasswordContainer/AuthChangePasswordContainer.vue';
import { Form, FormInput } from '@/form';
import Button from '@/components/core/button/Button.vue';
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
