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
        <UiButton
          type="submit"
          state="gradientColor"
          size="lg"
          :is-loading="isLoading"
        >
          {{ t('auth.forgotPassword.submit') }}
        </UiButton>
      </template>
    </PasswordResetContainer>
  </Form>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { UiButton } from '@terminal/uikit/components/button';
import PasswordResetContainer from '@/containers/passwordResetContainer/PasswordResetContainer.vue';
import { Form, FormInput } from '@/form';
import { usePasswordReset } from '@/hooks/usePasswordReset';

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
