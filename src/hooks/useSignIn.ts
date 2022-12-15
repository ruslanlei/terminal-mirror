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

  const handleSubmit = async () => {
    await sessionStore.login(model.value);
  };

  return {
    model,
    remember,
    validationSchema,
    handleSubmit,
  };
};
