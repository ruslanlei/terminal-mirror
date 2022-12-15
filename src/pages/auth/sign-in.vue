<template>
  <Form
    v-model="model"
    :validation-schema="validationSchema"
  >
    <SignInContainer>
      <template #logo>
        <Logo />
      </template>
      <template #languageSelect>
        <LanguageSelect />
      </template>
      <template #description>
        {{ t('auth.signIn.description') }}
      </template>
      <template #label>
        {{ t('auth.signIn.label') }}
      </template>
      <template #greetings>
        {{ t('auth.signIn.greetings') }}
      </template>
      <template #emailField>
        <FormInput
          ref="emailInput"
          name="email"
          :placeholder="t('auth.signIn.field.email')"
        />
      </template>
      <template #passwordField>
        <FormInput
          name="password"
          :placeholder="t('auth.signIn.field.password')"
        />
      </template>
      <template #rememberCheckbox>
        <Checkbox
          v-model="remember"
          :label="t('auth.signIn.rememberMe')"
          state="default"
          size="md"
        />
      </template>
      <template #signUpLink>
        <Link
          :to="{
            name: 'auth-forgot-password',
          }"
          :label="t('auth.signIn.forgotPassword')"
          state="default"
          size="md"
          :tab-index="-1"
        />
      </template>
      <template #submit>
        <Button
          size="lg"
          type="submit"
        >
          {{ t('auth.signIn.submit') }}
        </Button>
      </template>
      <template>
        footer
      </template>
    </SignInContainer>
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
import Logo from '@/components/core/logo/Logo.vue';
import LanguageSelect from '@/components/app/languageSelect/LanguageSelect.vue';
import { Form, FormInput } from '@/components/form';
import Checkbox from '@/components/core/checkbox/Checkbox.vue';
import SignInContainer from '@/containers/signInContainer/SignInContainer.vue';
import Link from '@/components/core/link/Link.vue';
import Button from '@/components/core/button/Button.vue';
import { useSignIn } from '@/hooks/useSignIn';

const { t } = useI18n();

const emailInput = ref();

const {
  model,
  remember,
  validationSchema,
} = useSignIn();

onMounted(() => {
  emailInput.value.focus();
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
  @include h3;
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
