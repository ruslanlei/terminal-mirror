import { ref } from 'vue';
import { object, string } from 'yup';
import { SignInModel } from '@/api/endpoints/auth/signIn';
import { useSessionStore } from '@/stores/session';

export const useSignIn = () => {
  const sessionStore = useSessionStore();

  const model = ref<SignInModel>({
    email: '',
    password: '',
  });

  const remember = ref(false);

  const validationSchema = object().shape({
    email: string().email().required(),
    password: string().required(),
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
