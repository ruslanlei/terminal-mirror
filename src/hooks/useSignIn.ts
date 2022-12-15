import { ref } from 'vue';
import { object } from 'yup';

export const useSignIn = () => {
  const model = ref({
    email: '',
    password: '',
  });

  const remember = ref(false);

  const validationSchema = object().shape({});

  return {
    model,
    remember,
    validationSchema,
  };
};
