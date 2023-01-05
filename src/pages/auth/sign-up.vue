<template>
  <Form
    v-model="model"
    v-model:external-errors="serverErrors"
    :validation-schema="validationSchema"
    touch-by="blur"
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
          :placeholder="t('placeholder.username')"
        />
      </template>
      <template #emailField>
        <FormInput
          name="email"
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
        <Button
          :state="['primaryColor', 'lgSize', 'interactive']"
          type="submit"
          :is-loading="isLoading"
        >
          {{ t('auth.submit') }}
        </Button>
      </template>
      <template #signInLink>
        <SignInLink />
      </template>
    </SignUpContainer>
  </Form>
</template>

<route lang="yaml">
meta:
  guestRequired: true
  layout: auth
</route>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { Form, FormInput } from '@/components/form';
import SignUpContainer from '@/containers/signUpContainer/SignUpContainer.vue';
import AgreementCheckbox from '@/components/app/agreementCheckbox/AgreementCheckbox.vue';
import Button from '@/components/core/button/Button.vue';
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

onMounted(() => {
  userNameField.value.focus();
});
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

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
