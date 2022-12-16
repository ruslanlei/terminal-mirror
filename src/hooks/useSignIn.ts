import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { object, string } from 'yup';
import { SignInModel } from '@/api/endpoints/auth/signIn';
import { useSessionStore } from '@/stores/session';

export const useSignIn = () => {
  const { t } = useI18n();

  const sessionStore = useSessionStore();

  const model = ref<SignInModel>({
    email: '',
    password: '',
  });

  const remember = ref(false);

  const validationSchema = object().shape({
    email: string()
      .email(() => t('validationError.email'))
      .required(() => t('validationError.required')),
    password: string()
      .required(() => t('validationError.required')),
  });

  const isLoading = ref(false);
  const handleSubmit = async () => {
    isLoading.value = true;
    await sessionStore.login(model.value, remember.value);
    isLoading.value = false;
  };

  return {
    model,
    remember,
    validationSchema,
    isLoading,
    handleSubmit,
  };
};
