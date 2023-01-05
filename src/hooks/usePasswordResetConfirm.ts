import { ref } from 'vue';
import { ConfirmResetPasswordDTO } from '@/api/endpoints/auth/passwordResetConfirm';
import { useSessionStore } from '@/stores/session';
import { useRoute, useRouter } from 'vue-router';
import { useToastStore } from '@/stores/toasts';
import { useI18n } from 'vue-i18n';
import { object, ref as yupRef, string } from 'yup';
import { processServerErrors } from '@/api/common';
import { FormErrorsList } from '@/components/form';

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
    if (!route.query?.token || typeof route.query?.token !== 'string') {
      toastStore.showDanger({
        text: t('validationError.tokenInvalidOrNotProvided'),
        duration: 6000,
      });
      await router.push({
        name: 'auth-sign-in',
      });
      return;
    }

    model.value.token = route.query.token;
    model.value.uid = route.query.token;
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

    console.log(data);

    if (result) {
      await router.push({
        name: 'auth-sign-in',
      });
    } else if (data) {
      serverErrors.value = processServerErrors(data);
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
