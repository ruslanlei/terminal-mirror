import {
  computed,
  inject,
} from 'vue';
import { touchTrigger } from '@/form';
import { useChain } from '@/hooks/useChain';
import { FormProvide, getFormInjectKey } from '@/hooks/useForm';

export const useActiveField = (
  formKey: string,
  chain: string,
) => {
  const isValidated = inject('isValidated');

  const form = inject<FormProvide>(getFormInjectKey(formKey));

  if (!form) {
    throw new Error('Active field is not inside form');
  }

  const {
    model,
    touchedMap,
    permanentValidate,
    touchBy,
    errorsMap,
  } = form;

  const [getFormValue, setFormValue] = useChain(model.value, chain);
  const [getIsTouched, setIsTouched] = useChain(touchedMap, chain);

  const value = computed({
    get: getFormValue,
    set: setFormValue,
  });

  const isTouched = computed({
    get: getIsTouched,
    set: setIsTouched,
  });

  const touch = () => {
    isTouched.value = true;
  };

  const onInput = () => {
    permanentValidate?.();
    if (touchBy === touchTrigger.INPUT) {
      touch();
    }
  };

  const onFocus = () => {
    permanentValidate?.();
    if (touchBy === touchTrigger.FOCUS) {
      touch();
    }
  };

  const onBlur = () => {
    permanentValidate?.();
    if (touchBy === touchTrigger.BLUR) {
      touch();
    }
  };

  const error = computed(() => ((isTouched.value && errorsMap.value?.[chain])
    ? errorsMap.value?.[chain]
    : null));

  return {
    isValidated,
    value,
    isTouched,
    touch,
    onInput,
    onFocus,
    onBlur,
    error,
  };
};
