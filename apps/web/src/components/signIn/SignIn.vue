<template>
  <Form
    v-model="model"
    :validation-schema="validationSchema"
    touch-by="blur"
    :autocomplete="true"
    @submit="handleSubmit"
  >
    <SignInContainer>
      <template #label>
        {{ t('auth.signIn.label') }}
      </template>
      <template #greetings>
        {{ t('auth.greetings') }}
      </template>
      <template #emailField>
        <FormInput
          ref="emailInput"
          name="email"
          autocomplete="email"
          :placeholder="t('placeholder.email')"
        />
      </template>
      <template #passwordField>
        <FormInput
          name="password"
          autocomplete="current-password"
          :placeholder="t('placeholder.password')"
          type="password"
        />
      </template>
      <template #rememberCheckbox>
        <UiCheckbox
          v-model="remember"
          :label="t('auth.signIn.rememberMe')"
          state="default"
          size="md"
        />
      </template>
      <template #forgotPasswordLink>
        <Link
          :to="{
            name: 'auth-reset-password',
          }"
          :label="t('auth.signIn.forgotPassword')"
          state="default"
          size="md"
          :tab-index="-1"
        />
      </template>
      <template #submit>
        <UiButton
          type="submit"
          :state="['gradientColor', 'interactive']"
          size="lg"
          :is-loading="isLoading"
        >
          {{ t('auth.submit') }}
        </UiButton>
      </template>
      <template #signUpLink>
        <SignUpLink />
      </template>
    </SignInContainer>
  </Form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { UiButton } from '@terminal/uikit/components/button';
import { UiCheckbox } from '@terminal/uikit/components/checkbox';
import { Form, FormInput } from '@/form';
import SignInContainer from '@/containers/signInContainer/SignInContainer.vue';
import Link from '@/components/link/Link.vue';
import SignUpLink from '@/components/signUpLink/SignUpLink.vue';
import { useSignIn } from '@/hooks/useSignIn';

const { t } = useI18n();

const emailInput = ref();

const {
  model,
  remember,
  validationSchema,
  handleSubmit,
  isLoading,
} = useSignIn();
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
