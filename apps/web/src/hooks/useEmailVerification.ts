import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useSessionStore } from '@/stores/session';
import { modalType, useModalStore } from '@/stores/modals';

type VerifyEmailError = 'noToken' | 'badToken';

export const useEmailVerification = () => {
  const sessionStore = useSessionStore();
  const modalStore = useModalStore();

  const { t } = useI18n();

  const route = useRoute();
  const router = useRouter();

  const error = ref<VerifyEmailError | null>(null);
  const errorsMap = computed<Record<VerifyEmailError, string>>(() => ({
    noToken: t('auth.verifyEmail.error.noToken'),
    badToken: t('auth.verifyEmail.error.badToken'),
  }));
  const errorText = computed(
    () => (error.value ? errorsMap.value[error.value] : null),
  );

  const isLoading = ref(false);

  const verify = async () => {
    if (!route.params?.token || typeof route.params?.token !== 'string') {
      error.value = 'noToken';
      return;
    }

    isLoading.value = true;
    const {
      result,
    } = await sessionStore.verifyEmail(route.params.token);
    isLoading.value = false;

    if (result) {
      modalStore.showModal({
        type: modalType.SUCCESS_SIGN_UP,
      });
      await router.push({
        name: 'auth-sign-in',
      });
    } else {
      error.value = 'badToken';
    }
  };

  return {
    errorText,
    isLoading,
    verify,
  };
};
