import { ref } from 'vue';
import { object, string } from 'yup';

export const usePasswordReset = () => {
  const model = ref({
    email: '',
  });

  const validationSchema = object().shape({
    email: string().required().email(),
  });

  return {
    model,
    validationSchema,
  };
};
