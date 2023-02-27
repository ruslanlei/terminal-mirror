import { ref, watch } from 'vue';
import { defineStore } from 'pinia';

import { router } from '@/router';
import { useAuthToken } from '@/hooks/useAuthToken';
import { RouteLocationRaw } from 'vue-router';
import { signIn, SignInDTO } from '@/api/endpoints/auth/signIn';
import { signUp, SignUpModel } from '@/api/endpoints/auth/signUp';
import { useToastStore } from '@/stores/toasts';
import { useI18n } from 'vue-i18n';
import { resetPassword, ResetPasswordDTO } from '@/api/endpoints/auth/resetPassword';
import { useProfileStore } from '@/stores/profile';
import { verifyEmail, VerifyEmailDTO } from '@/api/endpoints/auth/verifyEmail';
import { passwordResetConfirm } from '@/api/endpoints/auth/passwordResetConfirm';
import { processServerErrors } from '@/api/common';
import { useEmulatorStore } from '@/stores/emulator';

export const checkAuth = (
  isAuthorized: boolean,
  guestRequired: boolean | unknown,
  authRequired: boolean | unknown,
): { result: boolean; redirect?: RouteLocationRaw } => {
  if (isAuthorized && guestRequired) {
    return {
      result: false,
      redirect: {
        name: 'index',
      },
    };
  }
  if (!isAuthorized && authRequired) {
    return {
      result: false,
      redirect: {
        name: 'auth-sign-in',
      },
    };
  }
  return {
    result: true,
  };
};

export const useSessionStore = defineStore('session', () => {
  const { t } = useI18n();
  const isAuthorized = ref(false);
  const toastStore = useToastStore();
  const profileStore = useProfileStore();
  const emulatorStore = useEmulatorStore();

  const { token, setToken, removeToken } = useAuthToken();

  watch(
    token,
    async (token) => {
      isAuthorized.value = !!token;

      const { guestRequired, authRequired } = router.currentRoute.value.meta;

      const { result, redirect } = checkAuth(
        isAuthorized.value,
        guestRequired,
        authRequired,
      );

      if (!result && redirect) {
        await router.push(redirect);
      }
    },
    { deep: true, immediate: true },
  );

  const login = async (model: Omit<SignInDTO, 'username'>, remember: boolean) => {
    const { result, data } = await signIn(model);

    if (result) {
      setToken(data.key, !remember);
      await profileStore.getProfile();
      await emulatorStore.fetchBalance();
    } else {
      processServerErrors(data, t('auth.signIn.failed'));
    }
  };

  const register = async (model: SignUpModel) => {
    const response = await signUp(model);

    if (response.result) {
      toastStore.showSuccess({
        text: t('auth.signUp.emailSent'),
        duration: 5000,
      });
    } else {
      processServerErrors(response.data, t('auth.signUp.failed'));
    }

    return response;
  };

  const handleResetPassword = async (model: ResetPasswordDTO) => {
    const response = await resetPassword(model);

    if (response.result) {
      toastStore.showSuccess({
        text: t('auth.forgotPassword.emailSent'),
        duration: 5000,
      });
    } else {
      toastStore.showDanger({
        text: t('auth.forgotPassword.failed'),
        duration: 5000,
      });
    }

    return response;
  };

  const logout = () => {
    removeToken();
    localStorage.clear();
    sessionStorage.clear();
  };

  const handleVerifyEmail = async (key: VerifyEmailDTO['key']) => verifyEmail({ key });

  return {
    token,
    setToken,
    isAuthorized,
    checkAuth,
    login,
    resetPassword: handleResetPassword,
    register,
    logout,
    verifyEmail: handleVerifyEmail,
    passwordResetConfirm,
  };
});
