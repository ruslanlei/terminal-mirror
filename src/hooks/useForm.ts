import {
  ref,
  computed,
  provide,
  watch,
  Ref,
  onMounted,
  reactive,
} from 'vue';
import { isSchema } from 'yup';
import {
  createObjectWithValues,
} from '@/utils/object';
import { FormProps, touchTrigger, FormEmits } from '@/components/form';
import cloneDeep from 'lodash/cloneDeep';

export const getFormInjectKey = (key: string) => `form[${key}]`;

type FormModel = Ref<Record<any, any>>;
export interface FormProvide {
  model: FormModel,
  isValidated: Ref<boolean>,
  errorsMap: Ref<Record<string, string>>,
  touchedMap: Record<string, boolean>,
  touchBy: touchTrigger | undefined,
  permanentValidate: () => void,
}

export const useForm = (
  props: FormProps,
  emit: FormEmits,
  form: Ref<HTMLElement | null>,
) => {
  if (!isSchema(props.validationSchema)) {
    throw new Error('Form error: invalid yup schema');
  }

  const model = computed({
    get: () => props.modelValue,
    set: (modelValue) => emit('update:modelValue', modelValue),
  });
  const primaryModelState = cloneDeep(props.modelValue);
  const resetModel = () => {
    model.value = cloneDeep(primaryModelState);
  };

  // errors
  const errorsList = ref<Array<{ path: string, message: string }>>([]);
  const errorsMap = computed<{}>(() => errorsList.value.reduce((map, error) => ({
    ...map,
    [error.path]: error.message,
  }), {}));

  const computedErrorsMap = computed<{}>(() => ({
    ...errorsMap,
    ...props.externalErrors,
  }));

  const isFormValid = computed(() => !errorsList.value.length);

  // touch
  const touchedMap = reactive<Record<string, boolean>>(
    createObjectWithValues(model.value, false),
  );
  const touchMany = (value: boolean) => {
    Object.assign(
      touchedMap,
      createObjectWithValues(model.value, value),
    );
  };
  const touchAll = () => {
    touchMany(true);
  };
  const clearTouchedMap = () => {
    touchMany(false);
  };

  // validation
  const isValidated = ref(false);

  const validate = async () => {
    isValidated.value = true;
    try {
      await props.validationSchema.validate(model.value, { abortEarly: false });
      errorsList.value = [];
    } catch (err: any) {
      errorsList.value = err.inner
        .map(({ path, message }: any) => ({
          // yup return error path like menus[0].title, so
          // we need to get path like menus.0.title
          path: path.replaceAll('[', '.').replaceAll(']', ''),
          message,
        }));
    }
    return isFormValid.value;
  };
  const permanentValidate = async () => {
    if (!props.permanent) return;
    await validate();
  };

  watch([model, touchedMap], async () => {
    if (props.permanent) {
      await validate();
    }
  });

  const handleSubmit = async () => {
    touchAll();
    const isValid = await validate();
    if (isValid) {
      emit('submit');
    }
    emit('validate', isFormValid.value);
    return isValid;
  };

  const reset = () => {
    isValidated.value = false;
    resetModel();
    clearTouchedMap();
  };

  provide<FormProvide>(getFormInjectKey(props.formKey), {
    model,
    isValidated,
    errorsMap: computedErrorsMap,
    touchedMap,
    touchBy: props.touchBy,
    permanentValidate,
  });

  onMounted(() => {
    // Append hidden button type submit to form.
    // For situations when submit button is outside form
    if (props.submitOnEnter && form.value) {
      const submitButton = document.createElement('button');
      submitButton.type = 'submit';
      submitButton.style.display = 'none';
      form.value.appendChild(submitButton);
    }
  });

  return {
    model,
    validate,
    touchAll,
    clearTouchedMap,
    errorsList,
    errorsMap: computedErrorsMap,
    isFormValid,
    touchedMap,
    handleSubmit,
    reset,
  };
};
