import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { object, string, ref as yupRef } from 'yup';
import { useSessionStore } from '@/stores/session';
import { SignUpModel } from '@/api/endpoints/auth/signUp';
import { useToastStore } from '@/stores/toasts';
import { processServerErrors } from '@/api/common';
import { FormErrorsList } from '@/components/form';

export const useSignUp = () => {
  const { t } = useI18n();
  const router = useRouter();

  const sessionStore = useSessionStore();
  const toastStore = useToastStore();

  const model = ref<SignUpModel & {
    passwordConfirmation: string,
  }>({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  });

  const agreement = ref(false);

  const validationSchema = object().shape({
    username: string()
      .required(() => t('validationError.required'))
      .min(3, () => t('validationError.minLength', { chars: 3 })),
    email: string()
      .email(() => t('validationError.email'))
      .required(() => t('validationError.required')),
    password: string()
      .required(() => t('validationError.required')),
    passwordConfirmation: string()
      .required(() => t('validationError.required'))
      .oneOf([yupRef('password')], () => t('validationError.passwordsMismatch')),
  });

  const serverErrors = ref<FormErrorsList>([]);

  const isLoading = ref(false);
  const handleSubmit = async () => {
    serverErrors.value = [];

    if (!agreement.value) {
      toastStore.showDanger({
        text: t('auth.signUp.mustAcceptAgreement'),
        duration: 2000,
      });
      return;
    }

    isLoading.value = true;
    const { result, data } = await sessionStore.register(model.value);
    if (!result && data) {
      serverErrors.value = processServerErrors(data);
    }
    isLoading.value = false;

    if (result) {
      await router.push({
        name: 'auth-sign-in',
      });
    }
  };

  return {
    model,
    agreement,
    validationSchema,
    serverErrors,
    isLoading,
    handleSubmit,
  };
};
