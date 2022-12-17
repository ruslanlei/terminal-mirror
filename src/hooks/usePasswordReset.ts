import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { object, string } from 'yup';
import { useSessionStore } from '@/stores/session';
import { ResetPasswordDTO } from '@/api/endpoints/auth/resetPassword';

export const usePasswordReset = () => {
  const router = useRouter();
  const sessionStore = useSessionStore();

  const model = ref<ResetPasswordDTO>({
    email: '',
  });

  const validationSchema = object().shape({
    email: string().required().email(),
  });

  const isLoading = ref(false);
  const handleSubmit = async () => {
    isLoading.value = true;
    const { result } = await sessionStore.resetPassword(model.value);
    isLoading.value = false;

    if (result) {
      await router.push({
        name: 'auth-sign-in',
      });
    }
  };

  return {
    model,
    validationSchema,
    isLoading,
    handleSubmit,
  };
};
