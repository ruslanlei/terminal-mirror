import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { object, ref as yupRef, string } from 'yup';
import { ConfirmResetPasswordDTO } from '@/api/endpoints/auth/passwordResetConfirm';
import { useSessionStore } from '@/stores/session';
import { useToastStore } from '@/stores/toasts';
import { FormErrorsList } from '@/form';

export const usePasswordResetConfirm = () => {
  const sessionStore = useSessionStore();
  const toastStore = useToastStore();
  const router = useRouter();
  const route = useRoute();

  const { t } = useI18n();

  const model = ref<ConfirmResetPasswordDTO>({
    new_password1: '',
    new_password2: '',
    uid: '',
    token: '',
  });

  const validationSchema = object().shape({
    new_password1: string()
      .required(() => t('validationError.required'))
      .min(8, () => t('validationError.minLength', { chars: 8 })),
    new_password2: string()
      .required(() => t('validationError.required'))
      .oneOf([yupRef('new_password1')], () => t('validationError.passwordsMismatch')),
  });

  const setToken = async () => {
    if (!route.params?.token || typeof route.params?.token !== 'string') {
      toastStore.showDanger({
        text: t('validationError.tokenInvalidOrNotProvided'),
        duration: 6000,
      });
      await router.push({
        name: 'auth-sign-in',
      });
      return;
    }

    const [uid, token] = route.params.token.split('---');

    model.value.uid = uid;
    model.value.token = token;
  };

  const isLoading = ref(false);

  const serverErrors = ref<FormErrorsList>([]);
  const handleSubmit = async () => {
    isLoading.value = true;

    const {
      result,
      data,
    } = await sessionStore.passwordResetConfirm(model.value);

    isLoading.value = false;

    if (result) {
      await router.push({
        name: 'auth-sign-in',
      });
    } else if (data) {
      toastStore.showDanger({
        text: t('validationError.tokenInvalidOrNotProvided'),
        duration: 6000,
      });
    }
  };

  return {
    model,
    validationSchema,
    setToken,
    isLoading,
    serverErrors,
    handleSubmit,
  };
};
