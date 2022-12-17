import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { object, string } from 'yup';
import { useSessionStore } from '@/stores/session';
import { SignUpModel } from '@/api/endpoints/auth/signUp';

export const useSignUp = () => {
  const { t } = useI18n();
  const router = useRouter();

  const sessionStore = useSessionStore();

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
    console.log('handleSubmit');
    if (!agreement.value) {
      console.log('Agreement must be checked');
      return;
    }

    isLoading.value = true;
    const { result } = await sessionStore.register(model.value);
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
