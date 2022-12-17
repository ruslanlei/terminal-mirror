<template>
  <Form
    v-model="model"
    :validation-schema="validationSchema"
    touch-by="input"
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
          name="email"
          :placeholder="t('placeholder.email')"
        />
      </template>
      <template #submit>
        <Button
          type="submit"
          size="lg"
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
import { Form, FormInput } from '@/components/form';
import Button from '@/components/core/button/Button.vue';
import { usePasswordReset } from '@/hooks/usePasswordReset';

const { t } = useI18n();

const {
  model,
  validationSchema,
} = usePasswordReset();
</script>
