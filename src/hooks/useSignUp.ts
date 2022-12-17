import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { object, string } from 'yup';
import { useSessionStore } from '@/stores/session';
import { SignUpModel } from '@/api/endpoints/auth/signUp';
import { useToastStore } from '@/stores/toasts';

export const useSignUp = () => {
  const { t } = useI18n();
  const router = useRouter();

  const sessionStore = useSessionStore();
  const toastStore = useToastStore();

  const model = ref<SignUpModel>({
    username: '',
    email: '',
    password: '',
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
  });

  const isLoading = ref(false);
  const handleSubmit = async () => {
    if (!agreement.value) {
      toastStore.showDanger({
        text: t('auth.signUp.mustAcceptAgreement'),
        duration: 2000,
      });
      return;
    }

    isLoading.value = true;
    const { result, data } = await sessionStore.register(model.value);
    if (!result && data?.non_field_errors) {
      data.non_field_errors.forEach((error: string) => {
        toastStore.showDanger({
          text: error,
          duration: 6000,
        });
      });
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
    isLoading,
    handleSubmit,
  };
};
