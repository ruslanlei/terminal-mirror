<template>
  <Form
    v-model="model"
    v-model:external-errors="serverErrors"
    :validation-schema="validationSchema"
    touch-by="blur"
    :autocomplete="true"
    @submit="handleSubmit"
  >
    <SignUpContainer>
      <template #label>
        {{ t('auth.signUp.label') }}
      </template>
      <template #greetings>
        {{ t('auth.greetings') }}
      </template>
      <template #userNameField>
        <FormInput
          ref="userNameField"
          name="username"
          autocomplete="username"
          :placeholder="t('placeholder.username')"
        />
      </template>
      <template #emailField>
        <FormInput
          name="email"
          autocomplete="email"
          :placeholder="t('placeholder.email')"
        />
      </template>
      <template #passwordField>
        <FormInput
          name="password"
          :placeholder="t('placeholder.newPassword')"
          type="password"
        />
      </template>
      <template #passwordConfirmField>
        <FormInput
          name="passwordConfirmation"
          :placeholder="t('placeholder.passwordConfirmation')"
          type="password"
        />
      </template>
      <template #agreement>
        <AgreementCheckbox v-model="agreement" />
      </template>
      <template #submit>
        <UiButton
          :state="['gradientColor', 'interactive']"
          size="lg"
          type="submit"
          :is-loading="isLoading"
        >
          {{ t('auth.submit') }}
        </UiButton>
      </template>
      <template #signInLink>
        <SignInLink />
      </template>
    </SignUpContainer>
  </Form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { UiButton } from '@terminal/uikit/components/button';
import { Form, FormInput } from '@/form';
import SignUpContainer from '@/containers/signUpContainer/SignUpContainer.vue';
import AgreementCheckbox from '@/components/app/agreementCheckbox/AgreementCheckbox.vue';
import SignInLink from '@/components/app/signInLink/SignInLink.vue';
import { useSignUp } from '@/hooks/useSignUp';

const { t } = useI18n();

const userNameField = ref();

const {
  model,
  agreement,
  validationSchema,
  handleSubmit,
  isLoading,
  serverErrors,
} = useSignUp();
</script>

<style lang="scss" module>
@import "@terminal/uikit/assets/styles/utils";

.signIn {
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.description {
  margin-top: 25px;
  @include text;
  font-weight: 500;
  color: rgb(var(--color-accent-1));
}

.label {
  @include h1;
  margin-top: 40px;
  color: rgb(var(--color-accent-1));
}

.field {
  margin-top: 40px;
  &:not(:first-child) {
    margin-top: 20px;
  }
}

.greetings {
  @include text;
  margin-top: 10px;
  color: rgb(var(--color-accent-2));
}

.remember {
  margin-top: 22px;
}

.footer {
  margin-top: auto;
}
</style>
